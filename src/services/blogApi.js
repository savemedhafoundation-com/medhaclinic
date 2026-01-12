const API_BASE = (import.meta.env.VITE_API_BASE_URL || 'https://medha-backnd.vercel.app/api')
  .trim()
  .replace(/\/$/, '')

const BLOGS_BASE = `${API_BASE}/blogs`

const requestJson = async (url, options = {}) => {
  const response = await fetch(url, {
    ...options,
    headers: {
      Accept: 'application/json',
      ...options.headers,
    },
  })

  let data = null
  try {
    data = await response.json()
  } catch (error) {
    data = null
  }

  if (!response.ok) {
    const message = data?.message || `Request failed (${response.status})`
    throw new Error(message)
  }

  return data
}

const buildQuery = (params = {}) => {
  const search = new URLSearchParams()

  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null || value === '') {
      return
    }
    search.set(key, String(value))
  })

  const query = search.toString()
  return query ? `?${query}` : ''
}

export const fetchBlogs = (params = {}, options = {}) =>
  requestJson(`${BLOGS_BASE}${buildQuery(params)}`, options)

export const fetchBlogById = (id, options = {}) =>
  requestJson(`${BLOGS_BASE}/${id}`, options)

export const searchBlogs = (query, options = {}) =>
  requestJson(`${BLOGS_BASE}/search${buildQuery({ q: query })}`, options)

export const fetchBlogCategories = (options = {}) =>
  requestJson(`${BLOGS_BASE}/categories`, options)

export const fetchBlogSubcategories = (categoryId, options = {}) =>
  requestJson(`${BLOGS_BASE}/categories/${categoryId}/subcategories`, options)

export const likeBlog = (id, options = {}) =>
  requestJson(`${BLOGS_BASE}/${id}/like`, { method: 'POST', ...options })

export const shareBlog = (id, options = {}) =>
  requestJson(`${BLOGS_BASE}/${id}/share`, { method: 'POST', ...options })

export const addBlogComment = (id, payload, options = {}) =>
  requestJson(`${BLOGS_BASE}/${id}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    body: JSON.stringify(payload),
    ...options,
  })

export const blogApiBase = API_BASE
