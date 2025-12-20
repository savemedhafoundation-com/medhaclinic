import logo from '../assets/photos/Asset24.png'

const Header = () => {
  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Why Medha Clinic', href: '#' },
    {
      label: 'Treatment Process',
      href: '#',
      dropdown: ['Conditions We Treat', 'Case Studies & Results'],
    },
    {
      label: 'Consultation',
      href: '#',
      dropdown: ['Patient Guidelines'],
    },
    { label: 'About Us', href: '#' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-transparent">
      <div className="mx-auto max-w-full px-4 py-4">
        <div className="grid items-center gap-6 rounded-2xl border border-[#b9d7f2] bg-white px-5 py-3 shadow-[0_2px_10px_rgba(15,23,42,0.08)] md:grid-cols-[auto_1fr_auto]">
          <div className="flex items-center">
            <img src={logo} alt="Medha Clinic logo" className="lg:h-12 md:h-10 w-auto cursor-pointer" />
          </div>
          <nav
            className="flex items-center justify-center lg:gap-6 md:gap-4 lg:text-[17px] md:text-[14px] font-medium text-slate-700"
            aria-label="Primary"
          >
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <a
                  href={item.href}
                  className="inline-flex items-center gap-1 px-1 py-1 text-center leading-tight hover:text-slate-900"
                >
                  {item.label}
                  {item.dropdown ? (
                    <svg
                      className="mt-0.5 h-3 w-3 text-slate-600"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 4.5L6 7.5L9 4.5"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : null}
                </a>
                {item.dropdown ? (
                  <div className="absolute left-1/2 top-full z-50 w-41 -translate-x-1/2 pt-2 opacity-0 invisible transition group-hover:visible group-hover:opacity-100">
                    <div className="rounded-lg bg-[#1f8fe6] px-2 py-2 lg:text-[14px] md:text-[12px] text-white shadow-lg">
                      {item.dropdown.map((dropItem) => (
                        <a
                          key={dropItem}
                          href="#"
                          className="block rounded px-2 py-1 hover:bg-white/10"
                        >
                          {dropItem}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
             <div className="hidden justify-center items-center md:flex md:justify-end">
            <button
              type="button"
              className="rounded-[5px] bg-[#1f8fe6] justify-center items-center cursor-pointer px-4 py-1 lg:text-[18px] md:text-[15px] font-semibold text-white hover:bg-[#17a5fd]  shadow-bottom-md"
            >
              Contact
            </button>
          </div>
          </nav>
         
        </div>
      </div>
    </header>
  )
}

export default Header
