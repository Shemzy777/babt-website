import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRightIcon, HomeIcon } from '@heroicons/react/24/outline'

export default function NotFound() {
  return (
    <>
      <Helmet><title>Page not found | BABT Business Support Solutions</title></Helmet>
      <div className="min-h-[calc(100vh-var(--header-height))] flex items-center bg-[var(--surface-alt)] pt-[var(--header-height)]">
        <div className="container py-20">
          <div className="max-w-lg">
            <div className="w-9 h-0.5 bg-[var(--blue)] mb-5 rounded-full" />
            <p className="font-extrabold text-[var(--blue)] mb-3 leading-none" style={{ fontSize: 'clamp(5rem, 15vw, 8rem)', letterSpacing: '-0.04em' }}>404</p>
            <h1 className="font-bold text-[var(--text)] text-2xl mb-4 tracking-tight">Page not found</h1>
            <p className="text-[var(--text-body)] leading-relaxed mb-8">The page you're looking for doesn't exist or has been moved. Use the navigation or one of the links below to find what you need.</p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link to="/ng/en" className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--blue)] text-white font-semibold text-sm rounded hover:bg-[var(--blue-mid)] transition-colors"><HomeIcon className="w-4 h-4" />Back to homepage</Link>
              <Link to="/ng/en/contact-us" className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border)] text-[var(--text-body)] font-semibold text-sm rounded hover:border-[var(--blue)] hover:text-[var(--blue)] transition-colors">Contact us</Link>
            </div>
            <div>
              <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-4">Quick links</p>
              <ul className="space-y-2">
                {[['Our Services', '/ng/en/services'], ['About us', '/ng/en/who-we-are'], ['Contact us', '/ng/en/contact-us']].map(([label, href]) => (
                  <li key={href}><Link to={href} className="inline-flex items-center gap-2 text-sm font-medium text-[var(--text-body)] hover:text-[var(--blue)] group transition-colors"><ArrowRightIcon className="w-3.5 h-3.5 text-[var(--blue)] group-hover:translate-x-1 transition-transform" />{label}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
