/* global Buffer, process */

import { appendFile, mkdir } from 'node:fs/promises'
import { dirname, join } from 'node:path'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const requestFilePath =
  process.env.DELETE_ACCOUNT_REQUESTS_FILE ||
  join('/tmp', 'medhaclinic-delete-account-requests.jsonl')

const getPhoneDigits = (phone) => String(phone || '').replace(/\D/g, '')

const readBody = async (request) => {
  if (request.body && typeof request.body === 'object') {
    return request.body
  }

  const chunks = []

  for await (const chunk of request) {
    chunks.push(chunk)
  }

  if (!chunks.length) {
    return {}
  }

  return JSON.parse(Buffer.concat(chunks).toString('utf8'))
}

const validatePayload = (payload) => {
  const fullName = String(payload.fullName || '').trim()
  const phone = String(payload.phone || '').trim()
  const email = String(payload.email || '').trim().toLowerCase()
  const reason = String(payload.reason || '').trim()
  const phoneDigits = getPhoneDigits(phone)

  if (!fullName || !phone || !email || !reason) {
    return { error: 'Required fields are missing.' }
  }

  if (phoneDigits.length < 7 || phoneDigits.length > 15) {
    return { error: 'Invalid mobile number.' }
  }

  if (!emailPattern.test(email)) {
    return { error: 'Invalid email address.' }
  }

  return {
    data: {
      fullName,
      phone,
      email,
      reason,
    },
  }
}

const saveRequest = async (requestData) => {
  await mkdir(dirname(requestFilePath), { recursive: true })
  await appendFile(requestFilePath, `${JSON.stringify(requestData)}\n`, 'utf8')
}

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return response.status(405).json({ success: false, message: 'Method not allowed.' })
  }

  try {
    const payload = await readBody(request)
    const validation = validatePayload(payload)

    if (validation.error) {
      return response.status(400).json({ success: false, message: validation.error })
    }

    const deletionRequest = {
      ...validation.data,
      status: 'pending',
      createdAt: new Date().toISOString(),
    }

    // Public Google Play account deletion URL: https://medhaclinic.com/delete-account
    await saveRequest(deletionRequest)

    return response.status(200).json({
      success: true,
      message:
        'Your account deletion request has been submitted successfully. Your account will be reviewed and deleted within 1–6 hours.',
    })
  } catch (error) {
    console.error('Delete account request failed:', error)
    return response.status(500).json({
      success: false,
      message: 'Unable to submit the request right now.',
    })
  }
}
