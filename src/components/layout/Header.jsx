import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import navData from '../../data/navigation.json'
import MegaMenu from './MegaMenu'

export default function Header() {
  const [scrolled, setScrolled]       = useState(false)
  const [activeMenu, setActiveMenu]   = useState(null)
  const [mobileOpen, setMobileOpen]   = useState(false)
  const [mobileExp, setMobileExp]     = useState(null)
  const headerRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setActiveMenu(null); setMobileOpen(false) }, [pathname])

  useEffect(() => {
    const handler = e => { if (headerRef.current && !headerRef.current.contains(e.target)) setActiveMenu(null) }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => { document.body.style.overflow = mobileOpen ? 'hidden' : '' }, [mobileOpen])

  return (
    <>
      <header
        ref={headerRef}
        style={{ height: 'var(--header-height)' }}
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled || activeMenu ? 'shadow-md' : 'border-b border-[var(--border-light)]'
        }`}
      >
        <div className="container h-full flex items-center justify-between">

          {/* ── Logo ── */}
          <Link to="/ng/en" className="flex items-center gap-2.5 flex-shrink-0 group">
            <img 
              src="/images/babtbusinesssupportsolutions_logo.jpg" 
              alt="BABT Logo" 
              className="h-10 w-auto object-contain flex-shrink-0"
            />
          </Link>

          {/* ── Desktop nav ── */}
          <nav className="hidden lg:flex items-center gap-2" aria-label="Main navigation">
            {navData.mainNav.map(item => (
              <div key={item.label} className="relative">
                {item.children && item.children.length > 0 ? (
                  <button
                    onMouseEnter={() => setActiveMenu(item.label)}
                    onClick={() => setActiveMenu(activeMenu === item.label ? null : item.label)}
                    aria-expanded={activeMenu === item.label}
                    className={`nav-item flex items-center gap-1 px-3 py-2 text-sm font-medium rounded transition-colors duration-150 ${
                      activeMenu === item.label ? 'text-[var(--blue)]' : 'text-[var(--text-body)] hover:text-[var(--text)]'
                    }`}
                  >
                    {item.label}
                    <ChevronDownIcon className={`w-3.5 h-3.5 transition-transform duration-200 ${activeMenu === item.label ? 'rotate-180 text-[var(--blue)]' : ''}`} />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="nav-item block px-3 py-2 text-sm font-medium text-[var(--text-body)] hover:text-[var(--text)] transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* ── Right actions ── */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Corporate blue CTA button */}
            <Link
              to="/ng/en/contact-us/enquiry-form"
              className="hidden lg:inline-flex items-center px-4 py-2 bg-[var(--blue)] text-white text-sm font-semibold rounded hover:bg-[var(--blue-mid)] transition-colors duration-150"
            >
              Contact Us
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-[var(--text-body)] hover:text-[var(--text)] transition-colors"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mega menu */}
        {activeMenu && (
          <div onMouseLeave={() => setActiveMenu(null)}>
            <MegaMenu
              item={navData.mainNav.find(n => n.label === activeMenu)}
              onClose={() => setActiveMenu(null)}
            />
          </div>
        )}
      </header>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <nav className="absolute top-[var(--header-height)] left-0 right-0 bottom-0 bg-white overflow-y-auto">
            <div className="py-2 px-5">
              {navData.mainNav.map(item => (
                <div key={item.label} className="border-b border-[var(--border-light)] last:border-none">
                  {item.children && item.children.length > 0 ? (
                    <>
                      <button
                        onClick={() => setMobileExp(mobileExp === item.label ? null : item.label)}
                        className="w-full flex items-center justify-between py-4 text-sm font-semibold text-[var(--text)] hover:text-[var(--blue)] transition-colors"
                      >
                        {item.label}
                        <ChevronDownIcon className={`w-4 h-4 transition-transform ${mobileExp === item.label ? 'rotate-180 text-[var(--blue)]' : 'text-[var(--text-muted)]'}`} />
                      </button>
                      {mobileExp === item.label && (
                        <div className="pb-3 pl-3">
                          <Link to={item.href} className="block py-2 text-xs font-semibold text-[var(--blue)] uppercase tracking-wide">View all {item.label}</Link>
                          {item.children.map(child => (
                            <Link key={child.href} to={child.href} className="block py-2 text-sm text-[var(--text-body)] hover:text-[var(--blue)] transition-colors">
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className="block py-4 text-sm font-semibold text-[var(--text)] hover:text-[var(--blue)] transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-5 pb-8">
                <Link
                  to="/ng/en/contact-us/enquiry-form"
                  className="block w-full text-center py-3 bg-[var(--blue)] text-white font-semibold text-sm rounded hover:bg-[var(--blue-mid)] transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
