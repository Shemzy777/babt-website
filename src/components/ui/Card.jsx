import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { format } from 'date-fns'

export function Card({ children, className = '' }) {
  return (
    <div className={`bg-white border border-[var(--border-light)] rounded ${className}`}>
      {children}
    </div>
  )
}

/* ── News / Insight card ── */
export function NewsCard({ item, featured = false }) {
  const href = `/ng/en/insights/${item.category}/${item.slug}`
  const date = format(new Date(item.date), 'dd MMM yyyy')

  if (featured) {
    return (
      <Link to={href} className="group relative flex flex-col overflow-hidden rounded card-lift bg-[var(--navy)]" style={{ minHeight: '380px' }}>
        {item.image && (
          <>
            <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:opacity-45 transition-opacity duration-500" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)] via-[var(--navy)]/60 to-transparent" />
          </>
        )}
        <div className="relative mt-auto p-7">
          <span className="eyebrow block mb-3">{item.category.replace(/-/g, ' ')}</span>
          <h3 className="font-bold text-white text-xl leading-snug mb-3 tracking-tight group-hover:text-[var(--corp-blue-300,#90BFFF)] transition-colors line-clamp-3" style={{ letterSpacing: '-0.01em' }}>
            {item.title}
          </h3>
          <p className="text-sm text-white/55 leading-relaxed line-clamp-2 mb-5">{item.excerpt}</p>
          <div className="flex items-center gap-2 text-sm font-semibold text-[var(--blue-200,#C8DEFF)]">
            Read article <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link to={href} className="group flex gap-4 p-4 bg-white border border-[var(--border-light)] rounded card-lift">
      {item.image && (
        <div className="w-20 h-16 flex-shrink-0 rounded overflow-hidden">
          <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
        </div>
      )}
      <div className="flex flex-col justify-between min-w-0">
        <div>
          <span className="eyebrow text-[10px] block mb-1">{item.category.replace(/-/g, ' ')}</span>
          <h3 className="font-semibold text-[var(--text)] text-sm leading-snug group-hover:text-[var(--blue)] transition-colors line-clamp-2">
            {item.title}
          </h3>
        </div>
        <span className="text-xs text-[var(--text-muted)] mt-2">{date}</span>
      </div>
    </Link>
  )
}

/* ── Service card ── */
export function ServiceCard({ service }) {
  return (
    <Link
      to={`/ng/en/services/${service.slug}`}
      className="group flex flex-col p-6 bg-white border border-[var(--border-light)] rounded service-card"
    >
      <div className="w-9 h-9 rounded bg-[var(--blue-50)] flex items-center justify-center mb-5 group-hover:bg-[var(--blue-100)] transition-colors">
        <span className="font-bold text-[var(--blue)] text-sm">{service.title.charAt(0)}</span>
      </div>
      <h3 className="font-semibold text-[var(--text)] text-sm mb-2 group-hover:text-[var(--blue)] transition-colors leading-snug">
        {service.title}
      </h3>
      <p className="text-sm text-[var(--text-body)] leading-relaxed line-clamp-2 flex-1">{service.shortDescription}</p>
      <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[var(--blue)] opacity-0 group-hover:opacity-100 transition-opacity">
        Learn more <ArrowRightIcon className="w-3 h-3" />
      </div>
    </Link>
  )
}
