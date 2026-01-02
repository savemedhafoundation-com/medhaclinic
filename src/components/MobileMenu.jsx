import { useEffect } from 'react'
import { MdClose } from 'react-icons/md'

const MobileMenu = ({ isOpen, onClose, items = [] }) => {
  useEffect(() => {
    if (!isOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose?.()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className={`fixed inset-0 z-[60] bg-black/50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />
      <aside
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        className={`fixed left-0 top-0 z-[70] h-full w-[80%] max-w-[320px] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.18)] transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4">
          <span className="text-[16px] font-semibold text-slate-900">Menu</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 active:bg-slate-200"
          >
            <MdClose className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-col">
          {items.map((item) => (
            <div key={item.label} className="border-b border-slate-100">
              <a
                href={item.href}
                onClick={onClose}
                className="block px-5 py-4 text-[15px] font-semibold text-slate-800 active:bg-slate-100"
              >
                {item.label}
              </a>
              {item.dropdown ? (
                <div className="flex flex-col gap-1 pb-3">
                  {item.dropdown.map((subItem) => (
                    <a
                      key={subItem}
                      href="#"
                      onClick={onClose}
                      className="px-8 py-2 text-[13px] font-medium text-slate-600 active:bg-slate-100"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
      </aside>
    </div>
  )
}

export default MobileMenu
