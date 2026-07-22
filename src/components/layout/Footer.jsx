import { Link } from 'react-router-dom'
import navData from '../../data/navigation.json'

const SocialIcon = ({ platform }) => {
  const paths = {
    linkedin: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
    twitter:  'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
    facebook: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
    youtube:  'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  }
  return paths[platform] ? (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={paths[platform]} /></svg>
  ) : null
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      {/* Top blue accent line */}
      <div className="h-0.5 bg-[var(--blue)]" />

      {/* Main footer body */}
      <div className="bg-[var(--navy-dark)]">
        <div className="container pt-14 pb-10">

          {/* Logo + tagline row */}
          <div className="flex items-start justify-between gap-8 mb-12 pb-10 border-b border-white/10">
            <Link to="/ng/en" className="flex items-center gap-3">
              <img 
                src="/images/babtbusinesssupportsolutions_logo.jpg" 
                alt="BABT Logo" 
                className="h-12 w-auto object-contain flex-shrink-0"
              />
            </Link>
            <p className="text-sm text-white/40 max-w-xs leading-relaxed text-right hidden md:block">
              A dynamic business consulting and professional services firm committed to helping organizations achieve sustainable growth and financial success.
            </p>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
            {navData.footerNav.columns.map(col => (
              <div key={col.title}>
                <h3 className="text-xs font-semibold text-white tracking-wider uppercase mb-5">
                  <Link to={col.href} className="hover:text-[var(--corp-blue-300,#90BFFF)] transition-colors">
                    {col.title}
                  </Link>
                </h3>
                <ul className="space-y-3">
                  {col.links.map(link => (
                    <li key={link.href}>
                      <Link to={link.href} className="text-sm text-white/45 hover:text-white/75 transition-colors leading-snug block">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {navData.social.map(s => (
                <a
                  key={s.platform}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.platform}
                  className="w-8 h-8 flex items-center justify-center rounded border border-white/15 text-white/40 hover:text-white hover:border-white/35 transition-colors"
                >
                  <SocialIcon platform={s.icon} />
                </a>
              ))}
            </div>

            {/* Legal */}
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {navData.footerNav.legal.map(link => (
                <Link key={link.href} to={link.href} className="text-xs text-white/30 hover:text-white/55 transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>

            <p className="text-xs text-white/25 flex-shrink-0">© {year} BABT Business Support Solutions</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
