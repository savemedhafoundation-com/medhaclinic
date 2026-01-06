import Header from '../components/header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Specialties from '../components/specialties'
import Appointment from '../components/appointment'
import talkBanner from '../assets/photos/homepageImage/Rectangle 463.png'
import talkBannerMobile from '../assets/photos/mobile/homepage/Rectangle 627.png'
import talkButtonMobile from '../assets/photos/mobile/homepage/Rectangle 472.png'
import welcomeImage from '../assets/photos/homepageImage/Group 9365.png'
import whoImageTop from '../assets/photos/homepageImage/Rectangle 518.png'
import whoImageBottom from '../assets/photos/homepageImage/Rectangle 517.png'
import approachImage from '../assets/photos/homepageImage/people.png'
import approachImage2 from '../assets/photos/homepageImage/Rectangle 13.png'
import appointmentImage from '../assets/photos/homepageImage/Rectangle 539.png'

const Home = () => {
  return (
    <div className="min-h-screen bg-white font-['Source_Sans_3'] text-slate-900">
      <Header />
      <main>
        <Hero />
        <section className="relative z-10  -mt-10 justify-items-center px-4 pb-8 bottom-0 md:-mt-15 md:px-6 md:pb-10 md:bottom-[30px]">
          <img
            src={talkBannerMobile}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover sm:hidden"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 bg-black/10 sm:hidden"
          />
          <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-3 md:absolute md:gap-4 md:grid-cols-3">
            <button
              type="button"
              className="flex w-full items-center cursor-pointer gap-3 translate-y-0 sm:translate-y-0 rounded-2xl bg-[#1f2b6c] px-4 py-6 text-left text-white shadow-[0_12px_26px_rgba(15,23,42,0.22)] sm:gap-4 sm:px-6 sm:py-4"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 sm:h-12 sm:w-12">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 sm:h-6 sm:w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 3l2 4-2 2a13 13 0 0 0 7 7l2-2 4 2-2 4c-6 1-12-5-13-11z" />
                </svg>
              </span>
              <div className="">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/70 sm:text-xs">
                  Emergency
                </p>
                <p className="text-sm font-semibold sm:text-base">(237) 681-812-255</p>
              </div>
            </button>

            <button
              type="button"
              className="flex w-full cursor-pointer items-center gap-3 rounded-2xl bg-[#d7ecff] translate-y-2 sm:translate-y-0 px-4 py-3 pb-8 text-left text-slate-800 shadow-[0_12px_26px_rgba(15,23,42,0.12)] sm:gap-4 sm:px-6 sm:py-4"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white sm:h-12 sm:w-12">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-[#1f8fe6] sm:h-6 sm:w-6"
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
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-slate-500 sm:text-xs">
                  Work Hour
                </p>
                <p className="text-sm font-semibold sm:text-base">09:00 - 20:00 Everyday</p>
              </div>
            </button>

            <button
              type="button"
              className="flex w-full items-center cursor-pointer gap-3 rounded-2xl bg-[#1f8fe6] translate-y-4 sm:translate-y-0 px-4 py-3 pb-8 text-left text-white shadow-[0_12px_26px_rgba(15,23,42,0.2)] sm:gap-4 sm:px-6 sm:py-4"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 sm:h-12 sm:w-12">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 sm:h-6 sm:w-6"
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
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/70 sm:text-xs">
                  Location
                </p>
                <p className="text-sm font-semibold sm:text-base">0123 Some Place</p>
              </div>
            </button>
          </div>
          <div className="relative z-10 mt-6 flex justify-center translate-y-15 sm:hidden">
            <div className="relative w-[290px]">
              <img
                src={talkButtonMobile}
                alt="Talk to Our Team"
                useMap="#talk-team-map"
                className="h-auto w-full drop-shadow-[0_6px_10px_rgba(15,23,42,0.25)]"
              />
              <map name="talk-team-map">
                <area
                  shape="rect"
                  coords="0,0,1236,423"
                  href="#"
                  alt="Talk to Our Team"
                />
              </map>
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-lg font-semibold text-white">
                Talk to Our Team
              </span>
            </div>
          </div>
        </section>
        <section className="hidden sm:block">
          <div className="relative h-auto md:h-70">
            <div className="relative overflow-hidden bottom-0 md:bottom-20">
              
              <img
                src={talkBanner}
                alt="Clinician and patient handshake"
                className="h-full w-full object-cover sm:h-full"
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  type="button"
                  className="rounded-md bg-[#1996e6] border-4 border-[#fdfdfd]  px-7 py-2 text-[18px] cursor-pointer font-semibold text-white shadow-md hover:bg-[#17a5fd] sm:px-6 sm:py-2.5 sm:text-[35px]"
                >
                  Talk to Our Team
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="relative overflow-hidden bg-white px-4 pt-10 pb-16 md:px-6 md:pt-16 md:pb-24">
          <div className="relative z-10">
            <div className="mx-auto max-w-6xl text-center">
              <p className="text-[20px] sm:text-lg font-bold uppercase tracking-[0.2em] text-[#1f8fe6]">
                <span className="block sm:inline">Welcome to</span>
                <span className="block sm:inline"> Medha Clinic</span>
              </p>
              <h2 className="mt-3 font-poppins text-[25px] font-bold leading-[1.3] text-[#1F2B6C] sm:text-3xl">
                A Great Place to Receive Clinical Care with Ethical Integrity
              </h2>
              <p className="mt-4 text-[20px] leading-[1.6] text-slate-900 sm:text-base">
                At Medha Clinic, care begins with honesty. We believe patients deserve clarity, <br className="hidden md:block" />
                safety, and respect - not fear or rushed decisions.
              </p>
              <button
                type="button"
                className="mt-5 inline-flex items-center cursor-pointer gap-2 text-[12px] font-semibold text-[#1f8fe6] hover:text-[#17a5fd] sm:text-sm"
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

            <div className="mt-6 max-w-full scale-x-110 sm:scale-x-100 overflow-hidden rounded-b-[5px] bg-white  md:mt-10 sm:mx-auto sm:max-w-6xl">
              <img
                src={welcomeImage}
                alt="Medha Clinic care team"
                className="h-full w-full object-cover "
              />
              <div className="bg-gradient-to-r from-[#cfe9ff] via-white to-[#f0f7ff] px-6 py-4 text-center">
                <p className="font-poppins text-[16px] font-semibold text-[#1f2b6c] sm:text-2xl">
                  Care Built on Trust, Not by Pressure
                </p>
              </div>
            </div>

            <div className="mx-auto mt-6 flex max-w-2xl flex-wrap justify-center gap-3 text-[12px] text-slate-600 sm:mt-8 sm:gap-4 sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#1f8fe6] text-white sm:h-5 sm:w-5">
                  <svg
                    viewBox="0 0 16 16"
                    className="h-2.5 w-2.5 sm:h-3 sm:w-3"
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
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#1f8fe6] text-white sm:h-5 sm:w-5">
                  <svg
                    viewBox="0 0 16 16"
                    className="h-2.5 w-2.5 sm:h-3 sm:w-3"
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
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#1f8fe6] text-white sm:h-5 sm:w-5">
                  <svg
                    viewBox="0 0 16 16"
                    className="h-2.5 w-2.5 sm:h-3 sm:w-3"
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
            className="pointer-events-none absolute bottom-0 left-0 h-15 w-full scale-y-105 bg-gradient-to-b from-[#ffffff] via-[#d3ebfa] to-[#a7ddff] " 
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

        <section className="relative h-auto overflow-hidden bg-gradient-to-b from-[#f0f8fe] via-white to-[#089EF9] px-4 py-12 md:h-230 md:px-6 md:py-16">  
          <svg
            className="absolute bottom-0 left-0 h-15 w-full"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,120 C240,40 480,0 720,0 C960,0 1200,40 1440,120 L1440,120 L0,120 Z"
              fill="#ffffff"
            />
          </svg>
          <div className="mx-auto mt-2 max-w-6xl md:mt-5">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#1f8fe6]">
                Who Medha Clinic Is For
              </p>
              <h2 className="mt-2 font-poppins text-[20px] font-semibold leading-[1.25] text-[#1f2b6c] sm:text-4xl">
                Who Usually Comes to Medha Clinic
              </h2>
            </div>

            <div className="mt-6 grid gap-6 md:mt-10 md:gap-8 lg:grid-cols-[220px_1fr_320px] lg:items-start">
              <div className="overflow-hidden rounded-2xl border border-[#cfe6fb] bg-white shadow-[0_14px_32px_rgba(15,23,42,0.12)]">
                <div className="divide-y divide-[#e6f2ff]">
                  <button
                    type="button"
                    className="flex w-full items-center gap-3 px-4 py-3 text-left text-[12px] font-semibold text-slate-700 hover:bg-[#f1f7ff] md:py-4 md:text-sm"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eaf4ff] text-[#1f8fe6] md:h-9 md:w-9">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5 md:h-4 md:w-4"
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
                    className="flex w-full items-center gap-3 bg-[#1f2b6c] px-4 py-3 text-left text-[12px] font-semibold text-white md:py-4 md:text-sm"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white md:h-9 md:w-9">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5 md:h-4 md:w-4"
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
                    className="flex w-full items-center gap-3 px-4 py-3 text-left text-[12px] font-semibold text-slate-700 hover:bg-[#f1f7ff] md:py-4 md:text-sm"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eaf4ff] text-[#1f8fe6] md:h-9 md:w-9">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5 md:h-4 md:w-4"
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
                    className="flex w-full items-center gap-3 px-4 py-3 text-left text-[12px] font-semibold text-slate-700 hover:bg-[#f1f7ff] md:py-4 md:text-sm"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eaf4ff] text-[#1f8fe6] md:h-9 md:w-9">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5 md:h-4 md:w-4"
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
                  className="w-full bg-[#1f8fe6] px-4 py-2.5 text-[12px] font-semibold text-white hover:bg-[#17a5fd] md:py-3 md:text-sm"
                >
                  View All
                </button>
              </div>

              <div className="w-full h-auto p-5 md:w-140 md:h-130 md:p-7">
                <p className="text-[15px] font-semibold leading-[1.6] text-slate-900 sm:text-2xl">
                  People come to Medha Clinic when they feel confused, exhausted, or unheard in
                  conventional healthcare settings.
                </p>
                <div className="mt-4 grid gap-x-6 gap-y-3 text-[12px] font-semibold text-slate-600 sm:mt-6 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-4 sm:text-[18px]">
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-4 rounded-full bg-[#1f8fe6] sm:mt-2 sm:h-3 sm:w-6.5" />
                    <span className="leading-relaxed">
                      Patients seeking clarity before major medical decisions
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-4 rounded-full bg-[#1f8fe6] sm:mt-2 sm:h-3 sm:w-5.5" />
                    <span className="leading-relaxed">
                      Families looking for calm, ethical guidance
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-4 rounded-full bg-[#1f8fe6] sm:mt-2 sm:h-3 sm:w-6.5" />
                    <span className="leading-relaxed">
                      People with chronic or long-standing health conditions
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1.5 h-2.5 w-4 rounded-full bg-[#1f8fe6] sm:mt-2 sm:h-3 sm:w-6.5" />
                    <span className="leading-relaxed">
                      Those tired of repeated treatments without clear progress
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-[13px] font-semibold italic leading-[1.5] text-[#1f2b6c] sm:mt-6 sm:text-[25px]">
                  You do not come here to stop medical care. <br className="hidden md:block" /> You come here to understand your body better.
                </p>
              </div>

              <div className="space-y-4">
                <div className="overflow-hidden ">
                  <img
                    src={whoImageTop}
                    alt="Doctor consultation at Medha Clinic"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden ">
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

        <section className="relative  overflow-hidden h-auto bg-white px-4 pt-10 pb-16 md:h-245 md:px-6 md:pb-28">
          <div className="relative  z-10 mx-auto grid gap-6 h-auto max-w-6xl md:gap-10">
            <div className="text-center">
              <p className="text-[12px] font-semibold uppercase tracking-[0.4em] text-[#1f8fe6] md:text-lg">
                Always Caring
              </p>
              <h2 className="mt-2 font-poppins text-[20px] font-semibold leading-[1.3] text-[#1f2b6c] sm:text-4xl">
                Our Specialties
              </h2>
            </div>

            <Specialties />
          </div>

          <svg
            className="pointer-events-none absolute bottom-0 left-0 h-15 w-full"
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

        <section className="bg-[#1f2b6c] px-4 py-8 h-auto text-white md:px-6 md:py-10 md:h-40">
          <div className="mx-auto max-w-6xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/70 md:text-lg md:tracking-[0.35em]">
              Who Medha Clinic Is Not For (Safety Boundary)
            </p>
            <h2 className="mt-3 font-poppins text-[20px] font-semibold leading-[1.25] sm:text-4xl">
              Important Safety Notice
            </h2>
          </div>
        </section>

        <section className="relative overflow-hidden h-auto bg-[#1f8fe6] px-4 pt-10 pb-12 text-white md:h-160 md:px-6 md:pt-16 md:pb-20">
          <div className="relative z-10 mx-auto max-w-6xl text-center">
            <h2 className="font-poppins text-[20px] font-semibold leading-[1.3] sm:text-4xl">
              For ethical and medical reasons, Medha Clinic does not replace emergency or critical
              hospital care.
            </h2>
            <p className="mt-4 text-[14px] text-white/90 sm:text-[20px] ">
              Please seek immediate hospital care if there is:
            </p>
          </div>

          <div className="relative z-10 mx-auto mt-6 max-w-6xl max-h-6xl bg-[linear-gradient(90deg,transparent_0%,transparent_0%,#ffffff_20%,#ffffff_50%,#ffffff_70%,transparent_100%,transparent_10%)] p-4 text-left justify-center items-center md:mt-8 md:p-6"
          style={{
                clipPath:
                  "polygon(0 18%, 50% 0, 100% 18%, 100% 85%, 50% 100%, 0 85%)",
              }} >
            <div className="items-center justify-center px-4 py-3 md:px-60 md:py-4">
            <ul className="space-y-4 text-[13px] text-[#FF0022] font-semibold sm:text-xl">
              {[
                'Severe chest pain, stroke symptoms, or heavy bleeding',
                'ICU requirement or surgical emergency',
                'Acute trauma or life-threatening infection',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#ef4444] text-white sm:h-5 sm:w-5">
                    <svg
                      viewBox="0 0 16 16"
                      className="h-2.5 w-2.5 sm:h-3 sm:w-3"
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
                  <span className="leading-relaxed ">{item}</span>
                </li>
              ))}
            </ul>
            </div>
          </div>

          <p className="relative z-10 mx-auto mt-4 max-w-3xl text-center text-[16px] font-semibold italic leading-[1.5] text-white/90 sm:mt-6 sm:text-[30px]">
            Our role is supportive and complementary <br className="hidden md:block" /> — not emergency-substitutive.
          </p>

          <svg
            className="pointer-events-none absolute bottom-0 left-0 w-full h-15 scale-y-105 bg-[#1f8fe6] " 
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

        <section className="bg-white px-4 py-12 md:px-6 md:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#159EEC] md:text-[15px]">
                How Medha Clinic Is Different
              </p>
              <h2 className="mt-2 font-poppins text-[20px] font-semibold leading-[1.25] text-[#1f2b6c] sm:text-4xl">
                How Our Approach Is Different
              </h2>
            </div>

            <div className="mt-6 grid items-center gap-6 md:mt-10 md:gap-8 lg:grid-cols-[1fr_1.2fr]">
              <div className="overflow-hidden ">
                <img
                  src={approachImage2}
                  alt="Clinician discussing care approach"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="rounded-[18px] bg-[#ffffff] p-4 md:rounded-2xl md:p-6">
                <p className="text-[14px] font-semibold leading-[1.6] text-slate-900 sm:text-lg">
                  We respect modern medicine. We work where chronic problems need deeper
                  understanding, time, and listening.
                </p>
                <div className="mt-4 space-y-3 text-[12px] leading-[1.6] text-slate-600 sm:mt-5 sm:text-base">
                  {[
                    'We give time, not rushed consultations',
                    'We focus on underlying imbalances, not just symptoms',
                    'We individualise care, not one-size protocols',
                    'We encourage calm decisions, not fear-based urgency',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#1f8fe6] sm:h-2.5 sm:w-2.5" />
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-gradient-to-b from-[#1f8fe6] via-[#1b5fb8] to-[#1f2b6c] px-4 pt-12 pb-12 text-white md:px-6 md:pt-20 md:pb-16">
          
          <div className="relative z-10 mx-auto grid max-w-6xl h-auto items-center pb-10 gap-6 md:h-100 md:pb-30 md:gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
            <div className="relative h-[400px]">
  <img
    src={approachImage}
    alt="Clinician supporting patient care"
    className="absolute -top-24 left-0 w-full h-full object-cover z-20"
  />
</div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70 sm:text-xs">
                Treatment Philosophy (High-Level)
              </p>
              <h2 className="mt-2 font-poppins text-[20px] font-semibold leading-[1.3] sm:text-4xl">
                Our Treatment Philosophy
              </h2>
              <p className="mt-4 text-[13px] leading-[1.6] text-white/90 sm:text-base">
                At Medha Clinic, treatment begins with understanding - not assumptions.
              </p>
              <p className="mt-4 text-[13px] font-semibold text-white/90 sm:text-base">
                Our approach involves:
              </p>
              <ul className="mt-4 space-y-2 text-[12px] leading-[1.6] text-white/90 sm:text-base">
                {[
                  'Listening carefully to patient history',
                  'Reviewing medical reports in plain language',
                  'Identifying internal imbalances affecting recovery',
                  'Supporting the body through Natural Immunotherapy principles',
                  'Monitoring progress gradually and ethically',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-white/80" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[15px] font-semibold italic leading-[1.5] text-white/90 sm:mt-6 sm:text-xl">
                We do not promise instant cures. <br className="hidden md:block" /> We focus on steady, measurable improvement.
              </p>
            </div>
            
          </div>
          
        </section>

        <section className="relative h-auto px-4 py-12 md:h-180 md:px-6 md:py-16">
          <div className="absolute inset-0">
            <img
              src={appointmentImage}
              alt="Appointment consultation"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-white/75" />
          </div>
          <svg
            className="pointer-events-none absolute top-0 left-0 z-[1] h-15 w-full"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0,120 C240,40 480,0 720,0 C960,0 1200,40 1440,120 L1440,0 L0,0 Z"
              fill="#1f2b6c"
            />
          </svg>
          <div className="relative z-10 mx-auto grid max-w-6xl h-auto items-start pt-10 gap-6 md:h-100 md:pt-20 md:gap-12 lg:grid-cols-[1fr_1.05fr]">
            <div className="max-w-full text-[#1f2b6c] md:max-w-md">
              <h2 className="font-poppins text-[20px] font-semibold leading-[1.2] text-[#1f8fe6] sm:text-3xl">
                Book an Appointment
              </h2>
              <ol className="mt-3 space-y-1.5 text-[12px] leading-[1.6] text-slate-700 sm:text-base">
                <li>1. You share your reports and health history</li>
                <li>2. We listen without judgment or pressure</li>
                <li>3. Medha Clinic explains findings clearly</li>
                <li>4. Safe next steps are discussed</li>
                <li>5. You decide - without obligation</li>
              </ol>
            </div>
            <div className="flex w-full justify-center lg:justify-end">
              <div className="w-full max-w-lg">
                <Appointment />
              </div>
            </div>
          </div>
          <svg
            className="pointer-events-none absolute bottom-0 left-0 w-full h-15 scale-y-105 bg-transparent " 
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            aria-hidden="true" 
          >
            <path
              d="M0,0 C240,80 480,120 720,120 C960,120 1200,80 1440,0 L1440,120 L0,120 Z"
              fill="#1f8fe6"
            />
          </svg>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home
