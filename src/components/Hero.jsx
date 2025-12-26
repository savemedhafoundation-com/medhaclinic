import heroImage from '../assets/photos/Group 9318.png'

const Hero = () => {
  return (
    <section className="-mt-6 bg-[#e5e5e5] md:-mt-30">
      <div className="mx-auto max-w-full ">
        <div
          className="relative h-200 overflow-hidden  bg-cover bg-center bg-no-repeat px-6 py-10 shadow-[0_6px_16px_rgba(15,23,42,0.12)]  sm:px-50 sm:py-12"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="max-w-6xl text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              Doctor-guided natural immunotherapy
            </p>
            <h1 className="mt-30 font-poppins text-3xl font-semibold leading-tight drop-shadow-sm sm:text-6xl">
              <span className="block">When Hospital Feels</span>
              <span className="block">Overwhelming, We Help You</span>
              <span className="block">Heal - Naturally & Carefully.</span>
            </h1>
            <p className="mt-4 max-w-xl text-[5px] font-inter leading-relaxed text-white sm:text-base">
              Doctor-guided natural immunotherapy for chronic & complex cases.
            </p>
            <button
              type="button"
              className="mt-6 rounded-md cursor-pointer font-inter bg-white px-6 py-2.5 text-[24px] font-semibold text-slate-900 shadow-sm hover:bg-slate-100"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
