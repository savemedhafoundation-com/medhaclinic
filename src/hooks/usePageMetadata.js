import { useEffect } from 'react'

const upsertElement = (selector, tagName, attributes) => {
  let element = document.head.querySelector(selector)
  const created = !element

  if (!element) {
    element = document.createElement(tagName)
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value)
    })
    document.head.appendChild(element)
  }

  return { element, created }
}

const syncMetaTag = (selector, attributes, content, cleanups) => {
  const { element, created } = upsertElement(selector, 'meta', attributes)
  const previousContent = element.getAttribute('content')
  element.setAttribute('content', content)

  cleanups.push(() => {
    if (created) {
      element.remove()
      return
    }

    if (previousContent === null) {
      element.removeAttribute('content')
      return
    }

    element.setAttribute('content', previousContent)
  })
}

const syncLinkTag = (selector, attributes, href, cleanups) => {
  const { element, created } = upsertElement(selector, 'link', attributes)
  const previousHref = element.getAttribute('href')
  element.setAttribute('href', href)

  cleanups.push(() => {
    if (created) {
      element.remove()
      return
    }

    if (previousHref === null) {
      element.removeAttribute('href')
      return
    }

    element.setAttribute('href', previousHref)
  })
}

export const usePageMetadata = ({ title, description, canonical }) => {
  useEffect(() => {
    const previousTitle = document.title
    const cleanups = []

    if (title) {
      document.title = title
      cleanups.push(() => {
        document.title = previousTitle
      })
    }

    if (description) {
      syncMetaTag(
        'meta[name="description"]',
        { name: 'description' },
        description,
        cleanups
      )
      syncMetaTag(
        'meta[property="og:description"]',
        { property: 'og:description' },
        description,
        cleanups
      )
      syncMetaTag(
        'meta[name="twitter:description"]',
        { name: 'twitter:description' },
        description,
        cleanups
      )
    }

    if (title) {
      syncMetaTag('meta[property="og:title"]', { property: 'og:title' }, title, cleanups)
      syncMetaTag('meta[name="twitter:title"]', { name: 'twitter:title' }, title, cleanups)
    }

    syncMetaTag('meta[property="og:type"]', { property: 'og:type' }, 'website', cleanups)
    syncMetaTag(
      'meta[name="twitter:card"]',
      { name: 'twitter:card' },
      'summary_large_image',
      cleanups
    )

    if (canonical) {
      syncLinkTag('link[rel="canonical"]', { rel: 'canonical' }, canonical, cleanups)
      syncMetaTag('meta[property="og:url"]', { property: 'og:url' }, canonical, cleanups)
    }

    return () => {
      while (cleanups.length) {
        const cleanup = cleanups.pop()
        cleanup()
      }
    }
  }, [canonical, description, title])
}
