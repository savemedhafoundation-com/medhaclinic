import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  PRIVACY_POLICY_CONTACT,
  PRIVACY_POLICY_HIGHLIGHTS,
  PRIVACY_POLICY_LAST_UPDATED,
  PRIVACY_POLICY_META_DESCRIPTION,
  PRIVACY_POLICY_SECTIONS,
} from '../content/privacyPolicyContent'
import { usePageMetadata } from '../hooks/usePageMetadata'

const SectionBlock = ({ block }) => (
  <div className="space-y-3">
    {block.heading ? (
      <h3 className="text-lg font-semibold text-[#1f2b6c] sm:text-xl">{block.heading}</h3>
    ) : null}

    {block.paragraphs?.map((paragraph) => (
      <p key={paragraph} className="text-[15px] leading-[1.85] text-slate-700 sm:text-base">
        {paragraph}
      </p>
    ))}

    {block.bullets?.length ? (
      <ul className="space-y-3">
        {block.bullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-3 text-[15px] leading-[1.85] text-slate-700 sm:text-base">
            <span className="mt-2.5 h-2.5 w-2.5 rounded-full bg-[#1f8fe6]" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    ) : null}
  </div>
)

const PrivacyPolicy = () => {
  usePageMetadata({
    title: 'Privacy Policy | Medha Clinic',
    description: PRIVACY_POLICY_META_DESCRIPTION,
    canonical: PRIVACY_POLICY_CONTACT.canonicalUrl,
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#f7fbff] font-['Source_Sans_3'] text-slate-900">
      <main>
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(121,194,255,0.35),_transparent_38%),linear-gradient(135deg,#eaf6ff_0%,#ffffff_48%,#def1ff_100%)] px-4 pb-14 pt-8 md:px-6 md:pb-18 md:pt-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 top-10 h-48 w-48 rounded-full bg-[#79c2ff]/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/4 h-32 w-32 rounded-full bg-[#1f8fe6]/10 blur-3xl"
          />

          <div className="relative mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="rounded-[30px] border border-white/70 bg-white/80 p-6 shadow-[0_24px_50px_-34px_rgba(15,23,42,0.35)] backdrop-blur md:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#1f8fe6]">
                Legal and Trust
              </p>
              <h1
                className="mt-3 text-[34px] leading-[1.15] text-[#1f2b6c] sm:text-[46px]"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                Privacy Policy
              </h1>
              <p className="mt-4 max-w-3xl text-[15px] leading-[1.8] text-slate-700 sm:text-[17px]">
                This page explains how Medha Clinic handles information across its
                public website, blog features, and direct communications that
                reference this policy. It is written to be clear for real people and
                specific enough to support a public app-store privacy policy URL.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-[13px] text-slate-600 sm:text-sm">
                <span className="rounded-full bg-[#e8f4ff] px-4 py-2 font-semibold text-[#1f2b6c]">
                  Last updated: {PRIVACY_POLICY_LAST_UPDATED}
                </span>
                <span className="rounded-full bg-white px-4 py-2 font-semibold text-slate-700 shadow-sm">
                  Public path: /privacy-policy
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/"
                  className="inline-flex items-center rounded-full bg-[#1f8fe6] px-5 py-2.5 text-[13px] font-semibold text-white shadow-[0_10px_20px_rgba(31,143,230,0.25)] transition hover:bg-[#1697eb]"
                >
                  Back to Home
                </Link>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-full border border-[#cfe4f7] bg-white px-5 py-2.5 text-[13px] font-semibold text-[#1f2b6c] transition hover:border-[#1f8fe6] hover:text-[#1f8fe6]"
                >
                  Contact Medha Clinic
                </a>
              </div>
            </div>

            <div className="rounded-[30px] border border-[#cfe4f7] bg-[#1f2b6c] p-6 text-white shadow-[0_24px_50px_-34px_rgba(15,23,42,0.45)] md:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-white/70">
                Quick Summary
              </p>
              <div className="mt-5 space-y-4">
                {PRIVACY_POLICY_HIGHLIGHTS.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-3">
                    <span className="mt-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-white/12 text-[11px] font-semibold text-white">
                      +
                    </span>
                    <p className="text-[14px] leading-[1.7] text-white/90">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 md:px-6 md:pb-20">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[270px_1fr] lg:items-start">
            <aside className="space-y-6 lg:sticky lg:top-28">
              <div className="rounded-[28px] border border-[#d7e7f7] bg-white p-5 shadow-[0_20px_40px_-35px_rgba(15,23,42,0.4)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#1f8fe6]">
                  On This Page
                </p>
                <nav aria-label="Privacy policy table of contents" className="mt-4">
                  <ul className="space-y-2">
                    {PRIVACY_POLICY_SECTIONS.map((section, index) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className="flex items-start gap-3 rounded-2xl px-3 py-2 text-[13px] text-slate-700 transition hover:bg-[#eef7ff] hover:text-[#1f2b6c]"
                        >
                          <span className="mt-0.5 min-w-[1.8rem] rounded-full bg-[#eef7ff] px-2 py-1 text-center text-[11px] font-semibold text-[#1f8fe6]">
                            {index + 1}
                          </span>
                          <span className="leading-[1.45]">{section.title}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="rounded-[28px] border border-[#d7e7f7] bg-white p-5 shadow-[0_20px_40px_-35px_rgba(15,23,42,0.4)]">
                <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#1f8fe6]">
                  Privacy Contact
                </p>
                <div className="mt-4 space-y-3 text-[14px] leading-[1.75] text-slate-700">
                  <p className="font-semibold text-[#1f2b6c]">{PRIVACY_POLICY_CONTACT.clinicName}</p>
                  <a
                    href={`mailto:${PRIVACY_POLICY_CONTACT.email}`}
                    className="block transition hover:text-[#1f8fe6]"
                  >
                    {PRIVACY_POLICY_CONTACT.email}
                  </a>
                  <a
                    href="tel:+919800808595"
                    className="block transition hover:text-[#1f8fe6]"
                  >
                    {PRIVACY_POLICY_CONTACT.phone}
                  </a>
                  <p>{PRIVACY_POLICY_CONTACT.address}</p>
                </div>
              </div>
            </aside>

            <div className="space-y-6">
              {PRIVACY_POLICY_SECTIONS.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-32 rounded-[30px] border border-[#d7e7f7] bg-white p-6 shadow-[0_20px_40px_-35px_rgba(15,23,42,0.4)] md:p-8"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#1f8fe6]">
                        Section {index + 1}
                      </p>
                      <h2 className="mt-2 font-poppins text-[24px] font-semibold leading-[1.2] text-[#1f2b6c] sm:text-[28px]">
                        {section.title}
                      </h2>
                    </div>
                    <a
                      href={`#${section.id}`}
                      className="rounded-full border border-[#d7e7f7] px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-500 transition hover:border-[#1f8fe6] hover:text-[#1f8fe6]"
                      aria-label={`Link to ${section.title}`}
                    >
                      #{section.id}
                    </a>
                  </div>

                  <div className="mt-6 space-y-6">
                    {section.paragraphs?.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-[15px] leading-[1.85] text-slate-700 sm:text-base"
                      >
                        {paragraph}
                      </p>
                    ))}

                    {section.bullets?.length ? (
                      <ul className="space-y-3">
                        {section.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-3 text-[15px] leading-[1.85] text-slate-700 sm:text-base"
                          >
                            <span className="mt-2.5 h-2.5 w-2.5 rounded-full bg-[#1f8fe6]" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}

                    {section.blocks?.map((block) => (
                      <SectionBlock key={block.heading || block.paragraphs?.[0]} block={block} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default PrivacyPolicy
