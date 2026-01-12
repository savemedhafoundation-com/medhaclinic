import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/header'
import Footer from '../components/Footer'
import {
  blogApiBase,
  fetchBlogCategories,
  fetchBlogs,
  searchBlogs,
} from '../services/blogApi'

const PAGE_SIZE = 6

const formatCategoryName = (value) =>
  String(value || '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase())

const resolveImageUrl = (url) => {
  if (!url) return ''
  if (url.startsWith('http')) return url
  const base = blogApiBase.replace(/\/api\/?$/, '')
  const normalized = url.startsWith('/') ? url : `/${url}`
  return `${base}${normalized}`
}

const formatDate = (value) => {
  if (!value) return ''
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return ''
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

const stripHtml = (value) => (value ? value.replace(/<(.|\n)*?>/g, ' ').trim() : '')

const truncateText = (value, maxLength) => {
  if (!value) return ''
  if (value.length <= maxLength) return value
  return `${value.slice(0, maxLength).trim()}...`
}

const Blogs = () => {
  const [blogs, setBlogs] = useState([])
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [pagination, setPagination] = useState({ page: 1, pages: 1 })
  const [trendingBlogs, setTrendingBlogs] = useState([])
  const [latestBlogs, setLatestBlogs] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const hasSearch = useMemo(() => searchTerm.trim().length > 0, [searchTerm])

  useEffect(() => {
    const controller = new AbortController()

    const loadCategories = async () => {
      try {
        const response = await fetchBlogCategories({ signal: controller.signal })
        setCategories(response?.data || [])
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message || 'Unable to load categories.')
        }
      }
    }

    loadCategories()

    return () => controller.abort()
  }, [])

  useEffect(() => {
    if (hasSearch) {
      return undefined
    }

    const controller = new AbortController()

    const loadBlogs = async () => {
      setIsLoading(true)
      setError('')
      try {
        const response = await fetchBlogs(
          {
            page: 1,
            limit: PAGE_SIZE,
            category: selectedCategory || undefined,
          },
          { signal: controller.signal }
        )
        setBlogs(response?.data || [])
        setPagination(response?.pagination || { page: 1, pages: 1 })
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message || 'Unable to load blogs.')
        }
      } finally {
        setIsLoading(false)
      }
    }

    loadBlogs()

    return () => controller.abort()
  }, [selectedCategory, hasSearch])

  useEffect(() => {
    if (hasSearch) {
      setTrendingBlogs([])
      setLatestBlogs([])
      return undefined
    }

    const controller = new AbortController()

    const loadHighlights = async () => {
      try {
        const response = await fetchBlogs(
          { page: 1, limit: 24 },
          { signal: controller.signal }
        )
        const items = response?.data || []
        const trending = items.filter((item) => item?.spotlight).slice(0, 4)
        const latest = items
          .filter((item) => item?._id)
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .slice(0, 4)
        setTrendingBlogs(trending)
        setLatestBlogs(latest)
      } catch (err) {
        if (err.name !== 'AbortError') {
          setTrendingBlogs([])
          setLatestBlogs([])
        }
      }
    }

    loadHighlights()

    return () => controller.abort()
  }, [hasSearch])

  useEffect(() => {
    const trimmed = searchTerm.trim()
    if (!trimmed) {
      return undefined
    }

    const controller = new AbortController()
    const handle = setTimeout(async () => {
      setIsLoading(true)
      setError('')
      try {
        const response = await searchBlogs(trimmed, {
          signal: controller.signal,
        })
        setBlogs(response?.data || [])
        setPagination({ page: 1, pages: 1 })
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message || 'Unable to search blogs.')
        }
      } finally {
        setIsLoading(false)
      }
    }, 350)

    return () => {
      clearTimeout(handle)
      controller.abort()
    }
  }, [searchTerm])

  const handleLoadMore = async () => {
    if (isLoading || hasSearch || pagination.page >= pagination.pages) return
    const nextPage = pagination.page + 1
    setIsLoading(true)
    setError('')
    try {
      const response = await fetchBlogs({
        page: nextPage,
        limit: PAGE_SIZE,
        category: selectedCategory || undefined,
      })
      setBlogs((prev) => [...prev, ...(response?.data || [])])
      setPagination(response?.pagination || { page: nextPage, pages: nextPage })
    } catch (err) {
      setError(err.message || 'Unable to load more blogs.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white font-['Source_Sans_3'] text-slate-900">
      <Header />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-[#e6f2ff] via-white to-[#f9fbff] px-4 pt-16 pb-14 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-[12px] font-semibold uppercase tracking-[0.35em] text-[#1f8fe6]">
                Patient Education
              </p>
              <h1 className="mt-3 font-poppins text-[28px] font-semibold leading-[1.2] text-[#1f2b6c] sm:text-4xl">
                Medha Clinic Insights &amp; Research
              </h1>
              <p className="mt-4 text-[14px] leading-[1.7] text-slate-700 sm:text-base">
                Read trusted articles from the Medha Clinic team to understand
                chronic health conditions, integrative care, and ethical medical
                decision-making.
              </p>
            </div>
            <div className="mt-8 grid gap-4 rounded-2xl border border-[#d6e9fb] bg-white/80 p-4 shadow-[0_12px_28px_rgba(15,23,42,0.08)] backdrop-blur sm:grid-cols-[1fr_220px] sm:items-center">
              <div className="flex items-center gap-3 rounded-xl border border-[#d7e7f7] bg-white px-3 py-2">
                <span className="text-[#1f8fe6]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                </span>
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search articles or conditions"
                  className="w-full border-none bg-transparent text-[14px] text-slate-800 outline-none placeholder:text-slate-400"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(event) => setSelectedCategory(event.target.value)}
                disabled={hasSearch}
                className="w-full rounded-xl border border-[#d7e7f7] bg-white px-3 py-2 text-[14px] text-slate-800 outline-none disabled:cursor-not-allowed disabled:bg-slate-100"
              >
                <option value="">All categories</option>
                {categories.map((category) => (
                  <option key={category._id} value={category.name}>
                    {formatCategoryName(category.name)}
                  </option>
                ))}
              </select>
            </div>
            {error ? (
              <div className="mt-6 rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-[13px] text-red-600">
                {error}
              </div>
            ) : null}
          </div>
        </section>

        {trendingBlogs.length > 0 ? (
          <section className="bg-white px-4 pb-6 pt-10 md:px-6">
            <div className="mx-auto max-w-6xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#1f8fe6]">
                    Spotlight
                  </p>
                  <h2 className="mt-2 font-poppins text-[22px] font-semibold text-[#1f2b6c] sm:text-3xl">
                    Trending blogs
                  </h2>
                </div>
              </div>
              <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {trendingBlogs.map((blog) => (
                  <article
                    key={blog._id}
                    className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#e6f2ff] bg-white shadow-[0_12px_24px_rgba(15,23,42,0.08)]"
                  >
                    <Link
                      to={`/blogs/${blog._id}`}
                      className="relative h-40 w-full overflow-hidden bg-[#e6f2ff]"
                    >
                      {blog.imageUrl ? (
                        <img
                          src={resolveImageUrl(blog.imageUrl)}
                          alt={blog.title || 'Blog'}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-[11px] font-semibold uppercase tracking-[0.3em] text-[#1f8fe6]">
                          Medha Clinic
                        </div>
                      )}
                      <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1f2b6c]">
                        Trending
                      </span>
                    </Link>
                    <div className="flex flex-1 flex-col p-4">
                      <p className="text-[11px] text-slate-500">
                        {formatDate(blog.createdAt)}
                      </p>
                      <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-slate-400">
                        Title
                      </p>
                      <Link to={`/blogs/${blog._id}`}>
                        <h3 className="mt-1 font-poppins text-[16px] font-semibold leading-[1.4] text-[#1f2b6c]">
                          {blog.title}
                        </h3>
                      </Link>
                      <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-slate-400">
                        Written by
                      </p>
                      <p className="mt-2 text-[12px] text-slate-600">
                        {blog.writtenBy || 'Medha Clinic'}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {latestBlogs.length > 0 ? (
          <section className="bg-white px-4 pb-6 pt-6 md:px-6">
            <div className="mx-auto max-w-6xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#1f8fe6]">
                    Fresh uploads
                  </p>
                  <h2 className="mt-2 font-poppins text-[22px] font-semibold text-[#1f2b6c] sm:text-3xl">
                    Latest blogs
                  </h2>
                </div>
              </div>
              <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {latestBlogs.map((blog) => (
                  <article
                    key={blog._id}
                    className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#e6f2ff] bg-white shadow-[0_12px_24px_rgba(15,23,42,0.08)]"
                  >
                    <Link
                      to={`/blogs/${blog._id}`}
                      className="relative h-40 w-full overflow-hidden bg-[#e6f2ff]"
                    >
                      {blog.imageUrl ? (
                        <img
                          src={resolveImageUrl(blog.imageUrl)}
                          alt={blog.title || 'Blog'}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-[11px] font-semibold uppercase tracking-[0.3em] text-[#1f8fe6]">
                          Medha Clinic
                        </div>
                      )}
                    </Link>
                    <div className="flex flex-1 flex-col p-4">
                      <p className="text-[11px] text-slate-500">
                        {formatDate(blog.createdAt)}
                      </p>
                      <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-slate-400">
                        Title
                      </p>
                      <Link to={`/blogs/${blog._id}`}>
                        <h3 className="mt-1 font-poppins text-[16px] font-semibold leading-[1.4] text-[#1f2b6c]">
                          {blog.title}
                        </h3>
                      </Link>
                      <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-slate-400">
                        Written by
                      </p>
                      <p className="mt-2 text-[12px] text-slate-600">
                        {blog.writtenBy || 'Medha Clinic'}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="bg-white px-4 pb-16 pt-10 md:px-6">
          <div className="mx-auto max-w-6xl">
            {isLoading && blogs.length === 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="animate-pulse overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_12px_28px_rgba(15,23,42,0.06)]"
                  >
                    <div className="h-48 w-full bg-slate-100" />
                    <div className="space-y-3 p-4">
                      <div className="h-4 w-24 rounded bg-slate-100" />
                      <div className="h-5 w-full rounded bg-slate-100" />
                      <div className="h-4 w-2/3 rounded bg-slate-100" />
                    </div>
                  </div>
                ))}
              </div>
            ) : blogs.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog) => (
                  <article
                    key={blog._id}
                    className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#e6f2ff] bg-white shadow-[0_14px_28px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1"
                  >
                    <Link
                      to={`/blogs/${blog._id}`}
                      className="relative h-48 w-full overflow-hidden bg-[#e6f2ff]"
                    >
                      {blog.imageUrl ? (
                        <img
                          src={resolveImageUrl(blog.imageUrl)}
                          alt={blog.title || 'Blog'}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-[12px] font-semibold uppercase tracking-[0.3em] text-[#1f8fe6]">
                          Medha Clinic
                        </div>
                      )}
                      {blog.category ? (
                        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#1f2b6c]">
                          {formatCategoryName(blog.category)}
                        </span>
                      ) : null}
                    </Link>
                    <div className="flex flex-1 flex-col p-4">
                      <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
                        Written by
                      </p>
                      <p className="text-[12px] text-slate-500">
                        {blog.writtenBy || 'Medha Clinic'}
                      </p>
                      <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-slate-400">
                        Title
                      </p>
                      <Link to={`/blogs/${blog._id}`}>
                        <h3 className="mt-1 font-poppins text-[20px] font-bold leading-[1.35] text-[#1f2b6c]">
                          {blog.title}
                        </h3>
                      </Link>
                      <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-slate-400">
                        Description
                      </p>
                      <p className="mt-1 max-h-[4.5rem] overflow-hidden text-[13px] leading-[1.7] text-slate-600">
                        {truncateText(stripHtml(blog.description), 120)}
                      </p>
                      <div className="mt-4 flex items-center justify-between text-[12px] font-semibold text-[#1f8fe6]">
                        <Link to={`/blogs/${blog._id}`}>Read full article</Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-[#e6f2ff] bg-[#f5faff] px-6 py-10 text-center">
                <p className="text-[16px] font-semibold text-[#1f2b6c]">
                  {hasSearch ? 'No matches found.' : 'No blogs published yet.'}
                </p>
                <p className="mt-2 text-[13px] text-slate-600">
                  {hasSearch
                    ? 'Try a different keyword or clear the search.'
                    : 'Check back soon for new research updates.'}
                </p>
              </div>
            )}

            {!hasSearch && pagination.page < pagination.pages ? (
              <div className="mt-10 flex justify-center">
                <button
                  type="button"
                  onClick={handleLoadMore}
                  className="rounded-[6px] border border-[#1f8fe6] px-5 py-2 text-[13px] font-semibold text-[#1f8fe6] transition hover:bg-[#1f8fe6] hover:text-white"
                >
                  {isLoading ? 'Loading...' : 'Load more'}
                </button>
              </div>
            ) : null}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Blogs
