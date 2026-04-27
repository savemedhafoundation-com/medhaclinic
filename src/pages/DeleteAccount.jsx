import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { usePageMetadata } from '../hooks/usePageMetadata'

const CONTACT_EMAIL = 'info@medhaclinic.com'
const CONTACT_PHONE = '+91 98008 08595'
const SUCCESS_MESSAGE =
  'Your account deletion request has been submitted successfully. Your account will be reviewed and deleted within 1–6 hours.'

const initialFormValues = {
  fullName: '',
  phone: '',
  email: '',
  reason: '',
  confirmed: false,
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const getPhoneDigits = (phone) => phone.replace(/\D/g, '')

const validateForm = (values) => {
  const errors = {}
  const phoneDigits = getPhoneDigits(values.phone)

  if (!values.fullName.trim()) {
    errors.fullName = 'Full name is required.'
  }

  if (!values.phone.trim()) {
    errors.phone = 'Registered mobile number is required.'
  } else if (phoneDigits.length < 7 || phoneDigits.length > 15) {
    errors.phone = 'Enter a valid mobile number.'
  }

  if (!values.email.trim()) {
    errors.email = 'Registered email address is required.'
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }

  if (!values.reason.trim()) {
    errors.reason = 'Reason for account deletion is required.'
  }

  if (!values.confirmed) {
    errors.confirmed = 'Please confirm before submitting.'
  }

  return errors
}

const DeleteAccount = () => {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [touched, setTouched] = useState({})
  const [submitStatus, setSubmitStatus] = useState('idle')
  const [serverMessage, setServerMessage] = useState('')

  const validationErrors = useMemo(() => validateForm(formValues), [formValues])
  const hasErrors = Object.keys(validationErrors).length > 0
  const isSubmitting = submitStatus === 'submitting'

  usePageMetadata({
    title: 'Delete Account Request | MedhaClinic',
    description:
      'Submit a MedhaClinic app account deletion request. Requests are reviewed and processed within 1–6 hours.',
    canonical: 'https://medhaclinic.com/delete-account',
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const updateField = (event) => {
    const { name, value, type, checked } = event.target
    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: type === 'checkbox' ? checked : value,
    }))
    setServerMessage('')
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle')
    }
  }

  const markTouched = (event) => {
    setTouched((currentTouched) => ({
      ...currentTouched,
      [event.target.name]: true,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setTouched({
      fullName: true,
      phone: true,
      email: true,
      reason: true,
      confirmed: true,
    })

    if (hasErrors) {
      return
    }

    setSubmitStatus('submitting')
    setServerMessage('')

    try {
      const response = await fetch('/api/delete-account-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formValues.fullName.trim(),
          phone: formValues.phone.trim(),
          email: formValues.email.trim(),
          reason: formValues.reason.trim(),
        }),
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      setSubmitStatus('success')
      setServerMessage(SUCCESS_MESSAGE)
      setFormValues(initialFormValues)
      setTouched({})
    } catch {
      setSubmitStatus('error')
      setServerMessage(
        'We could not submit your request right now. Please try again or contact MedhaClinic support.'
      )
    }
  }

  const getFieldError = (fieldName) =>
    touched[fieldName] && validationErrors[fieldName] ? validationErrors[fieldName] : ''

  return (
    <div className="min-h-screen bg-[#f7fbff] font-['Source_Sans_3'] text-slate-900">
      <main>
        <section className="bg-[linear-gradient(135deg,#eaf6ff_0%,#ffffff_52%,#def1ff_100%)] px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-12">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-stretch">
              <div className="rounded-[28px] border border-white/70 bg-white/85 p-6 shadow-[0_24px_50px_-34px_rgba(15,23,42,0.35)] md:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1f8fe6]">
                  MedhaClinic App Support
                </p>
                <h1
                  className="mt-3 text-[34px] leading-[1.15] text-[#1f2b6c] sm:text-[46px]"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  Delete Account Request
                </h1>
                <p className="mt-4 max-w-3xl text-[15px] leading-[1.8] text-slate-700 sm:text-[17px]">
                  This page is for MedhaClinic app users who want to request deletion of
                  their account. After submitting the form, the user account and
                  associated app data will be reviewed and deleted within 1–6 hours.
                </p>
                <p className="mt-4 max-w-3xl text-[15px] leading-[1.8] text-slate-700 sm:text-[17px]">
                  Some records may be retained only if required by law, security, fraud
                  prevention, or transaction history.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3 text-[13px] text-slate-600 sm:text-sm">
                  <span className="rounded-full bg-[#e8f4ff] px-4 py-2 font-semibold text-[#1f2b6c]">
                    Public path: /delete-account
                  </span>
                  <span className="rounded-full bg-white px-4 py-2 font-semibold text-slate-700 shadow-sm">
                    Review time: 1–6 hours
                  </span>
                </div>
              </div>

              <aside className="rounded-[28px] border border-[#cfe4f7] bg-[#1f2b6c] p-6 text-white shadow-[0_24px_50px_-34px_rgba(15,23,42,0.45)] md:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
                  Need Help?
                </p>
                <p className="mt-4 text-[15px] leading-[1.8] text-white/88 sm:text-base">
                  Users can also contact support at the official MedhaClinic contact
                  email or phone if needed.
                </p>
                <div className="mt-5 space-y-3 text-[15px] font-semibold">
                  <a href={`mailto:${CONTACT_EMAIL}`} className="block text-white hover:text-[#79c2ff]">
                    {CONTACT_EMAIL}
                  </a>
                  <a href="tel:+919800808595" className="block text-white hover:text-[#79c2ff]">
                    {CONTACT_PHONE}
                  </a>
                </div>
                <Link
                  to="/privacy-policy"
                  className="mt-6 inline-flex rounded-full border border-white/25 px-5 py-2.5 text-[13px] font-semibold text-white transition hover:border-white hover:bg-white/10"
                >
                  View Privacy Policy
                </Link>
              </aside>
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 md:px-6 md:pb-20">
          <div className="mx-auto max-w-4xl">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-[28px] border border-[#d7e7f7] bg-white p-5 shadow-[0_20px_40px_-35px_rgba(15,23,42,0.4)] md:p-8"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className="text-[14px] font-semibold text-[#1f2b6c]">Full Name</span>
                  <input
                    type="text"
                    name="fullName"
                    value={formValues.fullName}
                    onChange={updateField}
                    onBlur={markTouched}
                    autoComplete="name"
                    className="mt-2 w-full rounded-2xl border border-[#cfe4f7] bg-white px-4 py-3 text-[15px] text-slate-900 outline-none transition focus:border-[#1f8fe6] focus:ring-4 focus:ring-[#1f8fe6]/12"
                    aria-invalid={Boolean(getFieldError('fullName'))}
                    aria-describedby="fullName-error"
                  />
                  <span id="fullName-error" className="mt-1 block min-h-5 text-[13px] text-red-600">
                    {getFieldError('fullName')}
                  </span>
                </label>

                <label className="block">
                  <span className="text-[14px] font-semibold text-[#1f2b6c]">
                    Registered Mobile Number
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formValues.phone}
                    onChange={updateField}
                    onBlur={markTouched}
                    autoComplete="tel"
                    className="mt-2 w-full rounded-2xl border border-[#cfe4f7] bg-white px-4 py-3 text-[15px] text-slate-900 outline-none transition focus:border-[#1f8fe6] focus:ring-4 focus:ring-[#1f8fe6]/12"
                    aria-invalid={Boolean(getFieldError('phone'))}
                    aria-describedby="phone-error"
                  />
                  <span id="phone-error" className="mt-1 block min-h-5 text-[13px] text-red-600">
                    {getFieldError('phone')}
                  </span>
                </label>
              </div>

              <label className="mt-1 block">
                <span className="text-[14px] font-semibold text-[#1f2b6c]">
                  Registered Email Address
                </span>
                <input
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={updateField}
                  onBlur={markTouched}
                  autoComplete="email"
                  className="mt-2 w-full rounded-2xl border border-[#cfe4f7] bg-white px-4 py-3 text-[15px] text-slate-900 outline-none transition focus:border-[#1f8fe6] focus:ring-4 focus:ring-[#1f8fe6]/12"
                  aria-invalid={Boolean(getFieldError('email'))}
                  aria-describedby="email-error"
                />
                <span id="email-error" className="mt-1 block min-h-5 text-[13px] text-red-600">
                  {getFieldError('email')}
                </span>
              </label>

              <label className="mt-1 block">
                <span className="text-[14px] font-semibold text-[#1f2b6c]">
                  Reason for Account Deletion
                </span>
                <textarea
                  name="reason"
                  value={formValues.reason}
                  onChange={updateField}
                  onBlur={markTouched}
                  rows={5}
                  className="mt-2 w-full resize-y rounded-2xl border border-[#cfe4f7] bg-white px-4 py-3 text-[15px] text-slate-900 outline-none transition focus:border-[#1f8fe6] focus:ring-4 focus:ring-[#1f8fe6]/12"
                  aria-invalid={Boolean(getFieldError('reason'))}
                  aria-describedby="reason-error"
                />
                <span id="reason-error" className="mt-1 block min-h-5 text-[13px] text-red-600">
                  {getFieldError('reason')}
                </span>
              </label>

              <label className="mt-3 flex items-start gap-3 rounded-2xl border border-[#d7e7f7] bg-[#f7fbff] p-4">
                <input
                  type="checkbox"
                  name="confirmed"
                  checked={formValues.confirmed}
                  onChange={updateField}
                  onBlur={markTouched}
                  className="mt-1 h-5 w-5 rounded border-[#1f8fe6] text-[#1f8fe6] focus:ring-[#1f8fe6]"
                />
                <span className="text-[14px] leading-[1.65] text-slate-700 sm:text-[15px]">
                  I confirm that I want to delete my MedhaClinic account and understand
                  this action may be permanent.
                  <span className="mt-1 block text-[13px] text-red-600">
                    {getFieldError('confirmed')}
                  </span>
                </span>
              </label>

              {serverMessage ? (
                <div
                  className={`mt-5 rounded-2xl px-4 py-3 text-[14px] font-semibold leading-[1.6] ${
                    submitStatus === 'success'
                      ? 'border border-emerald-200 bg-emerald-50 text-emerald-800'
                      : 'border border-red-200 bg-red-50 text-red-700'
                  }`}
                  role="status"
                >
                  {serverMessage}
                </div>
              ) : null}

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-[13px] leading-[1.6] text-slate-600">
                  Requests are reviewed by the MedhaClinic team before processing.
                </p>
                <button
                  type="submit"
                  disabled={!formValues.confirmed || isSubmitting}
                  className="inline-flex justify-center rounded-full bg-[#1f8fe6] px-6 py-3 text-[15px] font-semibold text-white shadow-[0_10px_20px_rgba(31,143,230,0.25)] transition hover:bg-[#1697eb] disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Request'}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

export default DeleteAccount
