import heroImage from '../assets/photos/homepageImage/Group 9318.png'
import heroImageMobile from '../assets/photos/mobile/homepage/mobileRectangle 640.png'

const Hero = () => {
  return (
    <section className=" bg-[#e5e5e5] -mt-25 sm:mt-0 md:-mt-50 lg:-mt-50 xl:-mt-45">
      <div className="mx-auto max-w-full ">
        <div
          className="relative h-[520px] overflow-hidden bg-cover bg-center bg-no-repeat px-5 py-8 shadow-[0_6px_16px_rgba(15,23,42,0.12)] sm:h-200 sm:px-50 sm:py-12"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <img
            src={heroImageMobile}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover sm:hidden "
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#117BBD_0%,#2BAEFF_40%,#2BAEFF_70%,#FFFFFF_100%)] opacity-80 sm:hidden"
          />
          <div className="relative z-10 max-w-[320px] top-12 text-white sm:max-w-6xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80 hidden sm:!hidden ">
              Doctor-guided natural immunotherapy
            </p>
            <h1 className="mt-6 font-poppins text-[31px] font-semibold leading-[1.2] drop-shadow-sm sm:mt-30 sm:text-6xl sm:leading-tight">
              <span className="block">When Hospital Feels</span>
              <span className="block">Overwhelming, We Help You</span>
              <span className="block">Heal - Naturally & Carefully.</span>
            </h1>
            <p className="mt-3 max-w-[260px] text-[18px] font-inter leading-[1.5] text-white sm:mt-4 sm:max-w-xl sm:text-base sm:leading-relaxed">
              Doctor-guided natural immunotherapy for chronic & complex cases.
            </p>
            <button
              type="button"
              className="mt-5 rounded-md cursor-pointer font-inter bg-white px-5 py-3 text-[18px] font-semibold text-slate-900 shadow-sm hover:bg-slate-100 sm:mt-6 sm:px-6 sm:py-2.5 sm:text-[24px]"
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
