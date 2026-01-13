import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FiCopy } from 'react-icons/fi'
import { MdEmail } from 'react-icons/md'
import { IoClose } from 'react-icons/io5'
import Header from '../components/header'
import Footer from '../components/Footer'
import {
  addBlogComment,
  blogApiBase,
  fetchBlogById,
  fetchBlogs,
  likeBlog,
  shareBlog,
} from '../services/blogApi'

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
    weekday: 'long',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

const BlogDetail = () => {
  const { id } = useParams()
  const [blog, setBlog] = useState(null);
  console.log("blog", blog);
  const [status, setStatus] = useState({ loading: true, error: '' })
  const [commentForm, setCommentForm] = useState({
    name: '',
    phoneNumber: '',
    comment: '',
  })
  const [commentStatus, setCommentStatus] = useState({
    loading: false,
    error: '',
    success: '',
  })
  const [liked, setLiked] = useState(false)
  const [shareOpen, setShareOpen] = useState(false)
  const [shareMessage, setShareMessage] = useState('')
  const [relatedPosts, setRelatedPosts] = useState([])

  console.log("blogs",blog);
  useEffect(() => {
    const controller = new AbortController()

    const loadBlog = async () => {
      setStatus({ loading: true, error: '' })
      try {
        const response = await fetchBlogById(id, { signal: controller.signal })
        setBlog(response)
        setStatus({ loading: false, error: '' })
      } catch (err) {
        if (err.name !== 'AbortError') {
          setBlog(null)
          setStatus({ loading: false, error: 'Unable to load this blog right now.' })
        }
      }
    }

    if (id) {
      loadBlog()
    } else {
      setStatus({ loading: false, error: 'Missing blog id.' })
    }

    return () => controller.abort()
  }, [id])

  const stripHtml = (value) => (value ? value.replace(/<(.|\n)*?>/g, ' ').trim() : '')

  const truncateText = (value, maxLength) => {
    if (!value) return ''
    if (value.length <= maxLength) return value
    return `${value.slice(0, maxLength).trim()}...`
  }

  const readTime = (value) => {
    const text = stripHtml(value)
    if (!text) return ''
    const words = text.split(/\s+/).filter(Boolean).length
    const minutes = Math.max(1, Math.ceil(words / 200))
    return `${minutes} min read`
  }

  const keyPoints = useMemo(() => {
    if (Array.isArray(blog?.keyPoints)) return blog.keyPoints.filter(Boolean)
    if (Array.isArray(blog?.metadata)) return blog.metadata.filter(Boolean)
    return []
  }, [blog?.keyPoints, blog?.metadata])

  const buildYouTubeEmbed = (link) => {
    if (!link) return ''
    const match = link.match(
      /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([A-Za-z0-9_-]{6,})/
    )
    return match ? `https://www.youtube.com/embed/${match[1]}` : ''
  }

  const renderDescription = () => {
    const html = blog?.description || ''
    if (!html) return null

    const tokens = ['AdminStatement', 'youtubevideo', 'image1']
    const parts = html.split(new RegExp(`(${tokens.join('|')})`, 'g'))
    const youtubeEmbed = buildYouTubeEmbed(blog?.videoLinks?.[0])
    const blogImageUrl = blog?.blogImage?.[0]?.imageUrl

    return parts.map((part, index) => {
      if (part === 'AdminStatement') {
        if (
          blog?.adminStatement &&
          (blog.adminStatement.photoUrl ||
            blog.adminStatement.quotation ||
            blog.adminStatement.name ||
            blog.adminStatement.designation)
        ) {
          return (
            <div
              key={`admin-${index}`}
              className="relative my-8 rounded-2xl border border-slate-200 bg-white px-6 pb-6 pt-12 shadow-sm"
            >
              {blog.adminStatement.photoUrl && (
                <img
                  className="absolute left-1/2 top-0 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white object-cover shadow-lg"
                  src={resolveImageUrl(blog.adminStatement.photoUrl)}
                  alt={blog.adminStatement.name || 'Admin'}
                />
              )}
              <div className="space-y-3 text-sm text-slate-700">
                {blog.adminStatement.quotation && (
                  <p className="italic">"{blog.adminStatement.quotation}"</p>
                )}
                {(blog.adminStatement.name || blog.adminStatement.designation) && (
                  <div className="text-sm font-semibold text-slate-900">
                    {blog.adminStatement.name || 'Admin'}
                    {blog.adminStatement.designation
                      ? `, ${blog.adminStatement.designation}`
                      : ''}
                  </div>
                )}
              </div>
            </div>
          )
        }
        return null
      }

      if (part === 'youtubevideo') {
        if (!youtubeEmbed) return null
        return (
          <div key={`video-${index}`} className="my-6 overflow-hidden rounded-2xl">
            <iframe
              title="YouTube video"
              src={youtubeEmbed}
              className="h-64 w-full sm:h-80"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )
      }

      if (part === 'image1') {
        if (!blogImageUrl) return null
        return (
          <div key={`image-${index}`} className="my-6 overflow-hidden rounded-2xl">
            <img
              className="h-full w-full object-cover"
              src={resolveImageUrl(blogImageUrl)}
              alt="Blog"
            />
          </div>
        )
      }

      if (!part.trim()) return null
      return (
        <div
          key={`html-${index}`}
          className="prose prose-slate max-w-none ql-editor"
          dangerouslySetInnerHTML={{ __html: part }}
        />
      )
    })
  }

  const loadingBar = (
    <div className="mt-6 flex items-center justify-center">
      <div className="h-2 w-full max-w-[320px] overflow-hidden rounded-full bg-slate-200">
        <div className="h-full w-2/3 animate-pulse rounded-full bg-slate-400/60" />
      </div>
    </div>
  )

  const handleLike = async () => {
    if (!blog?._id || liked) return
    try {
      const response = await likeBlog(blog._id)
      setBlog((prev) => (prev ? { ...prev, likesCount: response.likesCount } : prev))
      setLiked(true)
      localStorage.setItem(`liked-blog-${blog._id}`, 'true')
    } catch (error) {
      setStatus((prev) => ({ ...prev, error: 'Unable to update likes right now.' }))
    }
  }

  const handleShare = () => {
    if (!blog?._id) return
    setShareOpen(true)
  }

  const handleCommentChange = (event) => {
    const { name, value } = event.target
    setCommentForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleCommentSubmit = async (event) => {
    event.preventDefault()
    if (!blog?._id) return

    const payload = {
      name: commentForm.name.trim(),
      phoneNumber: commentForm.phoneNumber.trim(),
      comment: commentForm.comment.trim(),
    }

    if (!payload.name || !payload.phoneNumber || !payload.comment) {
      setCommentStatus({
        loading: false,
        error: 'All comment fields are required.',
        success: '',
      })
      return
    }

    try {
      setCommentStatus({ loading: true, error: '', success: '' })
      const response = await addBlogComment(blog._id, payload)
      setBlog((prev) =>
        prev ? { ...prev, comments: [...(prev.comments || []), response] } : prev
      )
      setCommentForm({ name: '', phoneNumber: '', comment: '' })
      setCommentStatus({ loading: false, error: '', success: 'Comment added.' })
    } catch (error) {
      setCommentStatus({
        loading: false,
        error: error.message || 'Unable to add comment.',
        success: '',
      })
    }
  }

  const handleShareClick = async (platform) => {
    if (!blog?._id) return
    const shareUrl = window.location.href
    const title = blog.title || 'Blog'
    const text = `Check out this blog: ${title}`
    const links = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        shareUrl
      )}&text=${encodeURIComponent(text)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(`${text} ${shareUrl}`)}`,
      email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(
        `${text}\n${shareUrl}`
      )}`,
    }

    if (platform === 'copy') {
      try {
        await navigator.clipboard.writeText(shareUrl)
        setShareMessage('Link copied.')
      } catch (error) {
        setShareMessage('Unable to copy the link.')
      }
    } else if (links[platform]) {
      window.open(links[platform], '_blank', 'noopener,noreferrer')
    }

    try {
      const response = await shareBlog(blog._id)
      setBlog((prev) => (prev ? { ...prev, sharesCount: response.sharesCount } : prev))
    } catch (error) {
      setStatus((prev) => ({ ...prev, error: 'Unable to update shares right now.' }))
    }
  }

  useEffect(() => {
    if (!blog?._id) return
    const stored = localStorage.getItem(`liked-blog-${blog._id}`) === 'true'
    setLiked(stored)
  }, [blog?._id])

  useEffect(() => {
    if (!blog?.category || !blog?._id) {
      setRelatedPosts([])
      return
    }

    let isMounted = true

    const loadRelated = async () => {
      try {
        const response = await fetchBlogs({ limit: 12 })
        const items = Array.isArray(response?.data) ? response.data : []
        const filtered = items
          .filter((item) => item?._id && item._id !== blog._id)
          .filter(
            (item) =>
              (item?.category || '').toLowerCase() === blog.category.toLowerCase()
          )
          .slice(0, 3)
        if (isMounted) {
          setRelatedPosts(filtered)
        }
      } catch (error) {
        if (isMounted) {
          setRelatedPosts([])
        }
      }
    }

    loadRelated()

    return () => {
      isMounted = false
    }
  }, [blog?._id, blog?.category])

  return (
    <div className="min-h-screen bg-[#f3f1ec] text-slate-900">
      <Header />
      <section
        className="bg-[#f3f1ec] text-slate-900"
        style={{ fontFamily: '"Source Sans 3", sans-serif' }}
      >
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@400;500;600&display=swap');
        `}</style>
        <div className="mx-auto w-full max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500"
          >
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link className="hover:text-[#4d6b2f]" to="/">
                  Home
                </Link>
              </li>
              <li className="text-slate-400">/</li>
              <li>
                <Link className="hover:text-[#4d6b2f]" to="/blogs">
                  Blog
                </Link>
              </li>
              <li className="text-slate-400">/</li>
              <li className="text-slate-700">{blog?.category || 'Blog'}</li>
            </ol>
          </nav>

          <div className="mt-6 grid gap-8 lg:grid-cols-[2.1fr_1fr]">
            <article className="overflow-hidden rounded-[28px] bg-white shadow-[0_24px_60px_-40px_rgba(0,0,0,0.6)]">
              <div className="relative h-64 sm:h-72 lg:h-96">
                {!status.loading && (
                  <img
                    className="h-full w-full object-cover"
                    src={
                      blog?.imageUrl
                        ? resolveImageUrl(blog.imageUrl)
                        : blog?.blogImage?.[0]?.imageUrl
                        ? resolveImageUrl(blog.blogImage[0].imageUrl)
                        : ''
                    }
                    alt={blog?.title || 'Blog'}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />
                <span className="absolute left-6 top-6 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700">
                  {blog?.category || 'Blog'}
                </span>
              </div>
              <div className="p-8">
                {status.loading && loadingBar}
                {!status.loading && status.error && (
                  <p className="text-xs uppercase tracking-[0.25em] text-red-500">
                    {status.error}
                  </p>
                )}
                {!status.loading && !status.error && (
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                    {formatDate(blog?.createdAt)}
                  </p>
                )}
                <h1
                  className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  {blog?.title || 'Blog'}
                </h1>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                  <span>By {blog?.writtenBy || 'NIT'}</span>
                  <span className="text-slate-300">|</span>
                  <span>{readTime(blog?.description)}</span>
                </div>
                {!status.loading && !status.error && (
                  <>
                    <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-600">
                      <span>Likes: {blog?.likesCount ?? 0}</span>
                      <span className="text-slate-300">|</span>
                      <span>Shares: {blog?.sharesCount ?? 0}</span>
                      <span className="text-slate-300">|</span>
                      <span>Comments: {blog?.comments?.length ?? 0}</span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={handleLike}
                        disabled={liked}
                        className="rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 disabled:opacity-60"
                      >
                        {liked ? 'Liked' : 'Like'}
                      </button>
                      <button
                        type="button"
                        onClick={handleShare}
                        className="rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700"
                      >
                        Share
                      </button>
                    </div>
                  </>
                )}

                {!status.loading && blog?.description && (
                  <div className="mt-6">{renderDescription()}</div>
                )}

                {!status.loading && Array.isArray(blog?.faqs) && blog.faqs.length > 0 && (
                  <div className="mt-8 rounded-2xl bg-[#f6f2ea] p-6">
                    <h3
                      className="text-lg font-semibold text-slate-900"
                      style={{ fontFamily: '"Playfair Display", serif' }}
                    >
                      FAQs
                    </h3>
                    <div className="mt-4 space-y-4 text-sm text-slate-700">
                      {blog.faqs.map((faq) => (
                        <div key={faq._id || faq.question}>
                          <p className="font-semibold text-slate-900">{faq.question}</p>
                          <p className="mt-1">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>

            <aside className="space-y-6">
              {keyPoints.length > 0 && (
                <div className="rounded-2xl bg-[#e7e3dc] p-6 shadow-sm">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
                    Key Points
                  </h3>
                  <ul className="mt-4 space-y-3 text-sm text-slate-700">
                    {keyPoints.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[#1f8fe6]" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {!status.loading && (
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <h3
                    className="text-lg font-semibold text-slate-900"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                  >
                    Comments
                  </h3>
                  <form className="mt-4 space-y-3" onSubmit={handleCommentSubmit}>
                    <input
                      className="w-full rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700"
                      name="name"
                      placeholder="Your name"
                      value={commentForm.name}
                      onChange={handleCommentChange}
                    />
                    <input
                      className="w-full rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700"
                      name="phoneNumber"
                      placeholder="Phone number"
                      value={commentForm.phoneNumber}
                      onChange={handleCommentChange}
                    />
                    <textarea
                      className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm text-slate-700"
                      name="comment"
                      placeholder="Write a comment..."
                      rows="3"
                      value={commentForm.comment}
                      onChange={handleCommentChange}
                    />
                    {commentStatus.error && (
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-500">
                        {commentStatus.error}
                      </p>
                    )}
                    {commentStatus.success && (
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                        {commentStatus.success}
                      </p>
                    )}
                    <button
                      type="submit"
                      disabled={commentStatus.loading}
                      className="rounded-full bg-[#1f8fe6] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-md disabled:opacity-70"
                    >
                      {commentStatus.loading ? 'Posting...' : 'Post comment'}
                    </button>
                  </form>
                  {Array.isArray(blog?.comments) && blog.comments.length > 0 && (
                    <div className="mt-5 max-h-72 space-y-3 overflow-y-auto pr-2 text-sm text-slate-700">
                      {blog.comments.map((item) => (
                        <div
                          key={item._id || `${item.name}-${item.createdAt}`}
                          className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm"
                        >
                          <p className="font-semibold text-slate-900">{item.name}</p>
                          <p className="mt-2 text-sm text-slate-600">{item.comment}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3
                  className="text-lg font-semibold text-slate-900"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  Continue the journey
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  Discover more field stories and meet the people protecting biodiversity
                  on the ground.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    className="rounded-full bg-[#1f8fe6] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-md"
                    to="/blogs"
                  >
                    Back to blog
                  </Link>
                  <button
                    className="rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700"
                    type="button"
                    onClick={handleShare}
                  >
                    Share
                  </button>
                </div>
              </div>

              {relatedPosts.length > 0 && (
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <h3
                    className="text-lg font-semibold text-slate-900"
                    style={{ fontFamily: '"Playfair Display", serif' }}
                  >
                    Related blogs
                  </h3>
                  <div className="mt-4 space-y-4">
                    {relatedPosts.map((item) => (
                      <Link
                        key={item._id}
                        to={`/blogs/${item._id}`}
                        className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 transition hover:border-slate-300"
                      >
                        <img
                          className="h-16 w-16 rounded-lg object-cover"
                          src={resolveImageUrl(item.imageUrl)}
                          alt={item.title || 'Related blog'}
                        />
                        <div>
                          <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                            {readTime(item.description)}
                          </p>
                          <p className="mt-1 text-sm font-semibold text-slate-800">
                            {truncateText(item.title || 'Blog', 58)}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
        {shareOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <h3
                  className="text-lg font-semibold text-slate-900"
                  style={{ fontFamily: '"Playfair Display", serif' }}
                >
                  Share this blog
                </h3>
                <button
                  type="button"
                  onClick={() => {
                    setShareOpen(false)
                    setShareMessage('')
                  }}
                  className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700"
                >
                  <IoClose className="text-2xl" />
                </button>
              </div>
              {shareMessage ? (
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                  {shareMessage}
                </p>
              ) : null}
              <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                <button
                  type="button"
                  onClick={() => handleShareClick('facebook')}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-[#1877F2]"
                  aria-label="Share on Facebook"
                >
                  <FaFacebookF className="mx-auto h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => handleShareClick('twitter')}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-black"
                  aria-label="Share on X"
                >
                  <FaXTwitter className="mx-auto h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => handleShareClick('linkedin')}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-[#0A66C2]"
                  aria-label="Share on LinkedIn"
                >
                  <FaLinkedinIn className="mx-auto h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => handleShareClick('whatsapp')}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-[#25D366]"
                  aria-label="Share on WhatsApp"
                >
                  <FaWhatsapp className="mx-auto h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => handleShareClick('email')}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-[#EA4335]"
                  aria-label="Share via email"
                >
                  <MdEmail className="mx-auto h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => handleShareClick('copy')}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700"
                  aria-label="Copy link"
                >
                  <FiCopy className="mx-auto h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </div>
  )
}

export default BlogDetail
