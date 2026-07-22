import { Link } from 'react-router-dom'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

export default function PageBanner({
  title,
  subtitle,
  breadcrumbs = [],
  image,
  dark = true,
}) {
  if (!dark) {
    return (
      <div className="bg-[var(--surface-blue)] border-b border-[var(--border-light)]">
        <div className="container py-12 md:py-16">
          {breadcrumbs.length > 0 && (
            <nav className="flex items-center flex-wrap gap-1.5 mb-5" aria-label="Breadcrumb">
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRightIcon className="w-3.5 h-3.5 text-[var(--text-muted)]" />}
                  {crumb.href
                    ? <Link to={crumb.href} className="text-xs text-[var(--text-body)] hover:text-[var(--blue)] transition-colors">{crumb.label}</Link>
                    : <span className="text-xs text-[var(--text-muted)]">{crumb.label}</span>}
                </span>
              ))}
            </nav>
          )}
          <div className="w-9 h-0.5 bg-[var(--blue)] mb-4 rounded-full" />
          <h1 className="text-3xl md:text-4xl font-bold text-[var(--text)] tracking-tight mb-3" style={{ letterSpacing: '-0.02em' }}>{title}</h1>
          {subtitle && <p className="text-[var(--text-body)] max-w-2xl leading-relaxed">{subtitle}</p>}
        </div>
      </div>
    )
  }

  return (
    <div className="relative bg-[var(--navy)] overflow-hidden">
      {/* Thin blue top accent */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-[var(--blue)]" />

      {/* Optional background image — very subtle */}
      {image && (
        <>
          <img src={image} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-[var(--navy)]/80" />
        </>
      )}

      {/* Subtle right-side blue glow */}
      <div
        className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at right center, var(--blue) 0%, transparent 70%)' }}
      />

      <div className="relative container py-14 md:py-20">
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center flex-wrap gap-1.5 mb-6" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRightIcon className="w-3.5 h-3.5 text-white/25" />}
                {crumb.href
                  ? <Link to={crumb.href} className="text-xs text-white/50 hover:text-white/80 transition-colors">{crumb.label}</Link>
                  : <span className="text-xs text-white/25">{crumb.label}</span>}
              </span>
            ))}
          </nav>
        )}

        <div className="w-9 h-0.5 bg-[var(--blue)] mb-5 rounded-full" />

        <h1
          className="text-white font-bold tracking-tight mb-4"
          style={{ fontSize: 'clamp(1.875rem, 5vw, 3.25rem)', letterSpacing: '-0.025em', lineHeight: '1.12' }}
        >
          {title}
        </h1>

        {subtitle && (
          <p className="text-white/55 text-base md:text-lg max-w-2xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </div>
  )
}
