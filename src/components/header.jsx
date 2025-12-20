import logo from '../assets/photos/Asset24.png'

const Header = () => {
  const navItems = [
    { label: 'Home' },
    { label: 'Why Medha Clinic' },
    { label: 'Treatment Process' },
    { label: 'Conditions We Treat' },
    { label: ['Case Studies &', 'Results'] },
    { label: 'Consultation' },
    { label: ['Patient', 'Guidelines'] },
    { label: 'About Us' },
    { label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-transparent">
      <div className="mx-auto max-w-full px-4 py-4">
        <div className="grid items-center gap-6 rounded-2xl border border-[#b9d7f2] bg-white px-6 py-3 shadow-[0_2px_10px_rgba(15,23,42,0.08)] md:grid-cols-[auto_1fr_auto]">
          <div className="flex items-center">
            <img src={logo} alt="Medha Clinic logo" className="h-12 w-auto cursor-pointer" />
          </div>
          <nav
            className="flex items-center font-inter justify-center gap-6 text-[17px] font-400px text-slate-700"
            aria-label="Primary"
          >
            {navItems.map((item) => (
              <a
                key={Array.isArray(item.label) ? item.label.join(' ') : item.label}
                href="#"
                className="px-1 py-1 text-center leading-tight hover:text-slate-900"
              >
                {Array.isArray(item.label)
                  ? item.label.map((text) => (
                      <span key={text} className="block">
                        {text}
                      </span>
                    ))
                  : item.label}
              </a>
            ))}
          </nav>
          <div className="hidden h-10 w-24 md:block" aria-hidden="true" />
        </div>
      </div>
    </header>
  )
}

export default Header
