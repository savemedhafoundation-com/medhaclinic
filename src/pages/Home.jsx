import Header from '../components/header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Specialties from '../components/specialties'
import talkBanner from '../assets/photos/Rectangle 463.png'
import welcomeImage from '../assets/photos/Group 9365.png'
import whoImageTop from '../assets/photos/Rectangle 518.png'
import whoImageBottom from '../assets/photos/Rectangle 517.png'
import approachImage from '../assets/photos/Rectangle 13.png'

const Home = () => {
  return (
    <div className="min-h-screen bg-white font-['Source_Sans_3'] text-slate-900">
      <Header />
      <main>
        <Hero />
        <section className="relative z-10 -mt-15 justify-items-center px-6 pb-10 bottom-[30px]">
          <div className="mx-auto absolute grid max-w-6xl gap-4 md:grid-cols-3">
            <button
              type="button"
              className="flex w-full items-center cursor-pointer gap-4 rounded-2xl bg-[#1f2b6c] px-6 py-4 text-left text-white shadow-[0_12px_26px_rgba(15,23,42,0.22)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 3l2 4-2 2a13 13 0 0 0 7 7l2-2 4 2-2 4c-6 1-12-5-13-11z" />
                </svg>
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                  Emergency
                </p>
                <p className="text-base font-semibold">(237) 681-812-255</p>
              </div>
            </button>

            <button
              type="button"
              className="flex w-full cursor-pointer items-center gap-4 rounded-2xl bg-[#d7ecff] px-6 py-4 text-left text-slate-800 shadow-[0_12px_26px_rgba(15,23,42,0.12)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 text-[#1f8fe6]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v6l4 2" />
                </svg>
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Work Hour
                </p>
                <p className="text-base font-semibold">09:00 - 20:00 Everyday</p>
              </div>
            </button>

            <button
              type="button"
              className="flex w-full items-center cursor-pointer gap-4 rounded-2xl bg-[#1f8fe6] px-6 py-4 text-left text-white shadow-[0_12px_26px_rgba(15,23,42,0.2)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                  Location
                </p>
                <p className="text-base font-semibold">0123 Some Place</p>
              </div>
            </button>
          </div>
        </section>
        <section>
          <div className="relative h-70">
            <div className="relative overflow-hidden bottom-20">
              <img
                src={talkBanner}
                alt="Clinician and patient handshake"
                className="h-full w-full object-cover sm:h-full"
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  className="rounded-md bg-[#1996e6] px-6 py-2.5 text-[30px] cursor-pointer hover:bg-[#17a5fd] font-semibold text-white shadow-md"
                >
                  Talk to Our Team
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="relative overflow-hidden bg-white px-6 pt-16 pb-24">
          <div className="relative z-10">
            <div className="mx-auto max-w-6xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#1f8fe6]">
                Welcome to Medha Clinic
              </p>
              <h2 className="mt-3 font-poppins text-2xl font-semibold text-[#1f2b6c] sm:text-3xl">
                A Great Place to Receive Clinical Care with Ethical Integrity
              </h2>
              <p className="mt-4 text-sm text-slate-600 sm:text-base">
                At Medha Clinic, care begins with honesty. We believe patients deserve clarity, <br />
                safety, and respect - not fear or rushed decisions.
              </p>
              <button
                type="button"
                className="mt-5 inline-flex items-center cursor-pointer gap-2 text-sm font-semibold text-[#1f8fe6] hover:text-[#17a5fd]"
              >
                Learn More
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M13 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-2xl bg-white shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
              <img
                src={welcomeImage}
                alt="Medha Clinic care team"
                className="h-full w-full object-cover"
              />
              <div className="bg-gradient-to-r from-[#cfe9ff] via-white to-[#f0f7ff] px-6 py-4 text-center">
                <p className="font-poppins text-lg font-semibold text-[#1f2b6c] sm:text-2xl">
                  Care Built on Trust, Not by Pressure
                </p>
              </div>
            </div>

            <div className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1f8fe6] text-white">
                  <svg
                    viewBox="0 0 16 16"
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3.5 8l3 3 6-6" />
                  </svg>
                </span>
                <span>Clear communication</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1f8fe6] text-white">
                  <svg
                    viewBox="0 0 16 16"
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3.5 8l3 3 6-6" />
                  </svg>
                </span>
                <span>We care with Natural Immunotherapy</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#1f8fe6] text-white">
                  <svg
                    viewBox="0 0 16 16"
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3.5 8l3 3 6-6" />
                  </svg>
                </span>
                <span>Human-first, properly guided care</span>
              </div>
            </div>
          </div>
          <svg
            className="pointer-events-none absolute bottom-0 left-0 w-full scale-y-105 bg-gradient-to-b from-[#ffffff] via-[#d3ebfa] to-[#B7E4FF] " 
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            aria-hidden="true" 
          >
            <path
              d="M0,0 C240,80 480,120 720,120 C960,120 1200,80 1440,0 L1440,120 L0,120 Z"
              className=" "
              fill="#f0f8fe"
            />
          </svg>
        </section>

        <section className="relative h-230 overflow-hidden bg-gradient-to-b from-[#f0f8fe] via-white to-[#089EF9] px-6 py-16">  
          <svg
            className="absolute bottom-0 left-0 h-35 w-full"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,120 C240,40 480,0 720,0 C960,0 1200,40 1440,120 L1440,120 L0,120 Z"
              fill="#ffffff"
            />
          </svg>
          <div className="mx-auto max-w-6xl mt-5">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#1f8fe6]">
                Who Medha Clinic Is For
              </p>
              <h2 className="mt-2 font-poppins text-2xl font-semibold text-[#1f2b6c] sm:text-4xl">
                Who Usually Comes to Medha Clinic
              </h2>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[220px_1fr_320px] lg:items-start">
              <div className="overflow-hidden rounded-2xl border border-[#cfe6fb] bg-white shadow-[0_14px_32px_rgba(15,23,42,0.12)]">
                <div className="divide-y divide-[#e6f2ff]">
                  <button
                    type="button"
                    className="flex w-full items-center gap-3 px-4 py-4 text-left text-sm font-semibold text-slate-700 hover:bg-[#f1f7ff]"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eaf4ff] text-[#1f8fe6]">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 5v14" />
                        <path d="M5 12h14" />
                      </svg>
                    </span>
                    Free Checkup
                  </button>
                  <button
                    type="button"
                    className="flex w-full items-center gap-3 bg-[#1f2b6c] px-4 py-4 text-left text-sm font-semibold text-white"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 13h4l2 6 4-16 2 10h4" />
                      </svg>
                    </span>
                    NIT Diagnosis
                  </button>
                  <button
                    type="button"
                    className="flex w-full items-center gap-3 px-4 py-4 text-left text-sm font-semibold text-slate-700 hover:bg-[#f1f7ff]"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eaf4ff] text-[#1f8fe6]">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="5" y="4" width="14" height="16" rx="3" />
                        <path d="M9 9h6" />
                        <path d="M9 13h6" />
                      </svg>
                    </span>
                    Full Body Analysis
                  </button>
                  <button
                    type="button"
                    className="flex w-full items-center gap-3 px-4 py-4 text-left text-sm font-semibold text-slate-700 hover:bg-[#f1f7ff]"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eaf4ff] text-[#1f8fe6]">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M8 7h8" />
                        <path d="M10 3h4" />
                        <path d="M6 7h12l-2 12H8L6 7z" />
                      </svg>
                    </span>
                    Blood Bank
                  </button>
                </div>
                <button
                  type="button"
                  className="w-full bg-[#1f8fe6] px-4 py-3 text-sm font-semibold text-white hover:bg-[#17a5fd]"
                >
                  View All
                </button>
              </div>

              <div className="rounded-3xl border w-140 h-130 border-[#d6eaff] bg-white/90 p-7 shadow-[0_18px_36px_rgba(15,23,42,0.12)]">
                <p className="text-base font-semibold leading-relaxed text-slate-900 sm:text-2xl">
                  People come to Medha Clinic when they feel confused, exhausted, or unheard in
                  conventional healthcare settings.
                </p>
                <div className="mt-6 grid gap-x-10 gap-y-4 text-[13px] text-slate-600 font-semibold sm:grid-cols-2 sm:text-[18px]">
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-3 w-6.5 rounded-full bg-[#1f8fe6]" />
                    <span className="leading-relaxed">
                      Patients seeking clarity before major medical decisions
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-3 w-5.5 rounded-full bg-[#1f8fe6]" />
                    <span className="leading-relaxed">
                      Families looking for calm, ethical guidance
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-3 w-6.5 rounded-full bg-[#1f8fe6]" />
                    <span className="leading-relaxed">
                      People with chronic or long-standing health conditions
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-3 w-6.5 rounded-full bg-[#1f8fe6]" />
                    <span className="leading-relaxed">
                      Those tired of repeated treatments without clear progress
                    </span>
                  </div>
                </div>
                <p className="mt-6 text-sm font-semibold italic text-[#1f2b6c] sm:text-[25px]">
                  You do not come here to stop medical care. <br /> You come here to understand your body better.
                </p>
              </div>

              <div className="space-y-4">
                <div className="overflow-hidden rounded-2xl shadow-[0_16px_34px_rgba(15,23,42,0.15)]">
                  <img
                    src={whoImageTop}
                    alt="Doctor consultation at Medha Clinic"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-[0_16px_34px_rgba(15,23,42,0.15)]">
                  <img
                    src={whoImageBottom}
                    alt="Medha Clinic care team"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section >

        <section className="relative overflow-hidden h-245 bg-white px-6  pb-28">
          <div className="relative z-10 mx-auto grid gap-10 h-auto max-w-6xl">
            <div className="text-center">
              <p className="text-lg font-semibold uppercase tracking-[0.4em] text-[#1f8fe6]">
                Always Caring
              </p>
              <h2 className="mt-2 font-poppins text-2xl font-semibold text-[#1f2b6c] sm:text-4xl">
                Our Specialties
              </h2>
            </div>

            <Specialties />
          </div>

          <svg
            className="pointer-events-none absolute bottom-0 left-0 h-25 w-full"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,120 C240,40 480,0 720,0 C960,0 1200,40 1440,120 L1440,120 L0,120 Z"
              fill="#1f8fe6"
            />
          </svg>
        </section>

        <section className="bg-[#1f2b6c] px-6 py-12 text-white">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-lg font-semibold uppercase tracking-[0.35em] text-white/70">
              Who Medha Clinic Is Not For (Safety Boundary)
            </p>
            <h2 className="mt-3 font-poppins text-2xl font-semibold sm:text-4xl">
              Important Safety Notice
            </h2>
          </div>
        </section>

        <section className="relative overflow-hidden h-160 bg-[#1f8fe6] px-6 pt-16 pb-20 text-white">
          <div className="relative z-10 mx-auto max-w-6xl text-center">
            <h2 className="font-poppins text-2xl font-semibold sm:text-4xl">
              For ethical and medical reasons, Medha Clinic does not replace emergency or critical
              hospital care.
            </h2>
            <p className="mt-4 text-sm text-white/90 sm:text-base">
              Please seek immediate hospital care if there is:
            </p>
          </div>

          <div className="relative z-10 mx-auto mt-8 max-w-4xl rounded-2xl bg-white/15 p-6 text-left shadow-[0_18px_40px_rgba(15,23,42,0.25)]">
            <ul className="space-y-4 text-sm sm:text-base">
              {[
                'Severe chest pain, stroke symptoms, or heavy bleeding',
                'ICU requirement or surgical emergency',
                'Acute trauma or life-threatening infection',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#ef4444] text-white">
                    <svg
                      viewBox="0 0 16 16"
                      className="h-3 w-3"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4l8 8" />
                      <path d="M12 4l-8 8" />
                    </svg>
                  </span>
                  <span className="leading-relaxed text-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="relative z-10 mx-auto mt-6 max-w-3xl text-center text-sm font-semibold italic text-white/90 sm:text-base">
            Our role is supportive and complementary - not emergency-substitutive.
          </p>

          <svg
            className="pointer-events-none absolute bottom-0 left-0 w-full scale-y-105 bg-[#1f8fe6] " 
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            aria-hidden="true" 
          >
            <path
              d="M0,0 C240,80 480,120 720,120 C960,120 1200,80 1440,0 L1440,120 L0,120 Z"
              className=" "
              fill="#ffffff"
            />
          </svg>
        </section>

        <section className="bg-white px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#1f8fe6]">
                How Medha Clinic Is Different
              </p>
              <h2 className="mt-2 font-poppins text-2xl font-semibold text-[#1f2b6c] sm:text-4xl">
                How Our Approach Is Different
              </h2>
            </div>

            <div className="mt-10 grid items-center gap-8 lg:grid-cols-[1fr_1.2fr]">
              <div className="overflow-hidden rounded-2xl shadow-[0_18px_40px_rgba(15,23,42,0.15)]">
                <img
                  src={approachImage}
                  alt="Clinician discussing care approach"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="rounded-2xl bg-[#f3f8ff] p-6 shadow-[0_16px_34px_rgba(15,23,42,0.12)]">
                <p className="text-base font-semibold text-slate-900 sm:text-lg">
                  We respect modern medicine. We work where chronic problems need deeper
                  understanding, time, and listening.
                </p>
                <div className="mt-5 space-y-3 text-sm text-slate-600 sm:text-base">
                  {[
                    'We give time, not rushed consultations',
                    'We focus on underlying imbalances, not just symptoms',
                    'We individualise care, not one-size protocols',
                    'We encourage calm decisions, not fear-based urgency',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#1f8fe6]" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home
