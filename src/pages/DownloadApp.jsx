import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MdAndroid, MdDownload, MdVerifiedUser } from 'react-icons/md'
import { usePageMetadata } from '../hooks/usePageMetadata'

const APP_DOWNLOAD_URL =
  'https://nktapycq643gtcku.public.blob.vercel-storage.com/medhaclinic/app-release.apk'
const APK_FILE_NAME = 'MedhaClinic.apk'
const APK_FILE_SIZE = '129 MB'

const DownloadApp = () => {
  usePageMetadata({
    title: 'Download MedhaClinic App | Medha Clinic',
    description:
      'Download the MedhaClinic Android app APK directly from the official Medha Clinic website.',
    canonical: 'https://medhaclinic.com/download-app',
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-[#f7fbff] font-['Source_Sans_3'] text-slate-900">
      <main>
        <section className="bg-[linear-gradient(135deg,#eaf6ff_0%,#ffffff_52%,#def1ff_100%)] px-4 pb-14 pt-8 md:px-6 md:pb-20 md:pt-12">
          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.75fr] lg:items-stretch">
            <div className="rounded-[28px] border border-white/70 bg-white/85 p-6 shadow-[0_24px_50px_-34px_rgba(15,23,42,0.35)] md:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#1f8fe6]">
                Official Android App
              </p>
              <h1
                className="mt-3 text-[34px] leading-[1.15] text-[#1f2b6c] sm:text-[46px]"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                Download MedhaClinic App
              </h1>
              <p className="mt-4 max-w-3xl text-[15px] leading-[1.8] text-slate-700 sm:text-[17px]">
                Get the MedhaClinic Android app directly from the official website.
                Use it to access Medha Clinic services from your phone.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={APP_DOWNLOAD_URL}
                  download={APK_FILE_NAME}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1f8fe6] px-6 py-3 text-[15px] font-semibold text-white shadow-[0_10px_20px_rgba(31,143,230,0.25)] transition hover:bg-[#1697eb] sm:text-base"
                >
                  <MdDownload className="h-5 w-5" />
                  Download APK
                </a>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center rounded-full border border-[#cfe4f7] bg-white px-6 py-3 text-[15px] font-semibold text-[#1f2b6c] transition hover:border-[#1f8fe6] hover:text-[#1f8fe6]"
                >
                  Back to Home
                </Link>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-[13px] text-slate-600 sm:text-sm">
                <span className="rounded-full bg-[#e8f4ff] px-4 py-2 font-semibold text-[#1f2b6c]">
                  Android APK
                </span>
                <span className="rounded-full bg-white px-4 py-2 font-semibold text-slate-700 shadow-sm">
                  File size: {APK_FILE_SIZE}
                </span>
              </div>
            </div>

            <aside className="rounded-[28px] border border-[#cfe4f7] bg-[#1f2b6c] p-6 text-white shadow-[0_24px_50px_-34px_rgba(15,23,42,0.45)] md:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/12">
                <MdAndroid className="h-8 w-8" />
              </div>
              <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70">
                Before Installing
              </p>
              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-3">
                  <MdVerifiedUser className="mt-1 h-5 w-5 shrink-0 text-[#79c2ff]" />
                  <p className="text-[14px] leading-[1.7] text-white/90">
                    Download only from this official Medha Clinic page.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <MdVerifiedUser className="mt-1 h-5 w-5 shrink-0 text-[#79c2ff]" />
                  <p className="text-[14px] leading-[1.7] text-white/90">
                    Your Android phone may ask permission to install apps from the
                    browser.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <MdVerifiedUser className="mt-1 h-5 w-5 shrink-0 text-[#79c2ff]" />
                  <p className="text-[14px] leading-[1.7] text-white/90">
                    For help, contact Medha Clinic support after downloading.
                  </p>
                </div>
              </div>
              <a
                href="mailto:info@medhaclinic.com"
                className="mt-6 inline-flex rounded-full border border-white/25 px-5 py-2.5 text-[13px] font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                Contact Support
              </a>
            </aside>
          </div>
        </section>
      </main>
    </div>
  )
}

export default DownloadApp
