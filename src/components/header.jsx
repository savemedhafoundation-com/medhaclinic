import logo from '../assets/photos/homepageImage/Asset24.png'
import mobileLogo from '../assets/photos/mobile/homepage/mobileheaderlogo.png'
import { useEffect, useState } from "react";
import { MdMenu, MdSearch } from "react-icons/md";
import MobileMenu from './MobileMenu'

const Header = () => {
  const navItems = [
    { label: 'Home', href: '/' },
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
    { label: 'Blogs', href: '/blogs' },
  ]

const [isScrolled, setIsScrolled] = useState(false);
const [isMenuOpen, setIsMenuOpen] = useState(false);

useEffect(() => {
  const onScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };

  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, []);


  return (
    <>
      <header className="sticky top-0 z-50 bg-transparent ">
        <div className="mx-auto max-w-full px-4 py-3 md:py-4">
          <div className="md:hidden">
            <div
              className={`flex items-center justify-between rounded-[22px] border border-white/70 bg-white px-4 py-3 shadow-[0_10px_28px_rgba(15,23,42,0.25)] ${
                isScrolled ? "backdrop-blur-lg bg-white/80" : "bg-white"
              }`}
            >
              <button
                type="button"
                aria-label="Open menu"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                onClick={() => setIsMenuOpen(true)}
                className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-[#1f8fe6] text-white shadow-[0_6px_16px_rgba(31,143,230,0.35)] active:bg-[#178ad2]"
              >
                <MdMenu className="h-6 w-6" />
              </button>

              <div className="flex flex-1 items-center justify-center gap-2 px-2 text-center">
                <img src={mobileLogo} alt="Medha Clinic logo" className="h-10 w-30" />
                
              </div>

              <button
                type="button"
                aria-label="Search"
                className="flex h-11 w-11 items-center justify-center rounded-full text-[#1f8fe6]  active:bg-[#e8f4ff]"
              >
                <MdSearch className="h-10 w-10" />
              </button>
            </div>
          </div>
          <div className={`hidden md:grid grid-cols-[auto_auto] items-center gap-3 rounded-[14px] border border-[#b9d7f2] px-3 py-2 shadow-[0_2px_10px_rgba(15,23,42,0.08)] md:grid-cols-[auto_1fr_auto] md:gap-6 md:rounded-2xl md:px-0 md:py-3 md:pl-10 lg:pl-45 ${isScrolled ? "backdrop-blur-lg bg-white/70" : " bg-white"}`}>
            <div className="flex items-center">
              <img src={logo} alt="Medha Clinic logo" className="h-8 w-auto cursor-pointer md:h-10 lg:h-12" />
            </div>
            <nav
              className="hidden items-center justify-center font-medium text-slate-700 md:flex md:gap-4 md:text-[14px] lg:gap-15 lg:text-[17px]"
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
            </nav>
            <div className="flex items-center justify-end md:hidden">
              <button
                type="button"
                aria-label="Open menu"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                onClick={() => setIsMenuOpen(true)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1f8fe6] text-white shadow-[0_4px_12px_rgba(31,143,230,0.35)] active:bg-[#178ad2]"
              >
                <MdMenu className="h-5 w-5" />
              </button>
            </div>
           <div className="hidden justify-center items-center md:flex md:justify-end lg:pr-50 md:pr-10">
              <button
                type="button"
                className="rounded-[5px] bg-[#1f8fe6] justify-center items-center cursor-pointer px-4 py-1 lg:text-[18px] md:text-[15px] font-semibold text-white hover:bg-[#17a5fd]  shadow-bottom-md"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        items={navItems}
      />
    </>
  )
}

export default Header
