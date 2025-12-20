import logo from '../assets/photos/Asset24.png'

const Footer = () => {
  const exploreLinks = [
    'Home',
    'Why Medha Clinic',
    'Treatment Process',
    'Consultation',
    'About Us',
    'Contact',
  ]

  const legalLinks = [
    'Medical disclaimer',
    'Patient consent',
    'Privacy policy',
    'Terms of care',
  ]

  const socialLinks = ['Facebook', 'Instagram', 'LinkedIn', 'WhatsApp', 'YouTube']

  return (
    <footer className="bg-[#1396e6] text-white">
      <div className="mx-auto max-w-6xl px-6 pt-14 pb-8">
        <div className="text-center">
          <h2 className="font-['Playfair_Display'] text-2xl font-semibold sm:text-3xl">
            Connect with Medha Clinic
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base">
            Better health begins with a simple hello. Our team is ready to collaborate
            with you to reach your wellness goals by phone, email, or visit us in
            person. We look forward to seeing you.
          </p>
          <button
            type="button"
            className="mt-6 rounded-md bg-white px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-sm"
          >
            Talk to Our Team
          </button>
        </div>

        <div className="mt-8 h-px bg-white/40" />

        <div className="mt-8 grid gap-8 text-sm md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="inline-flex items-center rounded-md bg-white px-3 py-2 shadow-sm">
              <img src={logo} alt="Medha Clinic logo" className="h-10 w-auto" />
            </div>
            <p className="mt-4 text-base font-semibold leading-relaxed text-white">
              <span className="block">We listen first.</span>
              <span className="block">We explain clearly.</span>
              <span className="block">We never force decisions.</span>
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold">Explore</h3>
            <div className="mt-3 flex flex-col gap-2 text-white/90">
              {exploreLinks.map((item) => (
                <a key={item} href="#" className="hover:text-white">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold">Legal</h3>
            <div className="mt-3 flex flex-col gap-2 text-white/90">
              {legalLinks.map((item) => (
                <a key={item} href="#" className="hover:text-white">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold">Stay connected</h3>
            <div className="mt-3 space-y-2 text-white/90">
              <p>+91 98008 08595</p>
              <p>info@medhaclinic.com</p>
              <p>12 B.T. Road, Near Dunlop L-9 Bus Stop, Baranagar, Kol-56</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 text-xs text-white/90 sm:flex-row sm:items-center sm:justify-between">
          <a href="#" className="font-semibold hover:text-white">
            Privacy policy
          </a>
          <div className="flex flex-wrap items-center gap-4">
            {socialLinks.map((item) => (
              <a key={item} href="#" className="hover:text-white">
                {item}
              </a>
            ))}
          </div>
          <a href="#" className="font-semibold hover:text-white">
            Terms of care
          </a>
        </div>

        <div className="mt-6 rounded-md bg-white px-4 py-2 text-center text-xs font-medium text-slate-700">
          Copyright 2025 Medha Clinic. All rights reserved. Powered by Medha Clinic.
        </div>
      </div>
    </footer>
  )
}

export default Footer
