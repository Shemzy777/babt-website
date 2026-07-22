import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function MegaMenu({ item, onClose }) {
  if (!item?.children) return null

  return (
    <div className="absolute left-0 right-0 bg-white border-t border-[var(--border-light)] shadow-lg animate-slide-down">
      <div className="container py-8">
        <div className="grid grid-cols-12 gap-10">

          {/* Left: section context */}
          <div className="col-span-3 border-r border-[var(--border-light)] pr-8">
            <div className="mb-1">
              <span className="eyebrow">{item.label}</span>
            </div>
            {item.description && (
              <p className="text-sm text-[var(--text-body)] leading-relaxed mt-3 mb-5">{item.description}</p>
            )}
            <Link
              to={item.href}
              onClick={onClose}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--blue)] hover:text-[var(--blue-mid)] group transition-colors"
            >
              View all
              <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>

            {/* Featured items */}
            {item.featured?.length > 0 && (
              <div className="mt-8 pt-6 border-t border-[var(--border-light)]">
                <p className="text-[10px] font-semibold text-[var(--text-muted)] uppercase tracking-widest mb-4">Featured</p>
                <ul className="space-y-4">
                  {item.featured.map(feat => (
                    <li key={feat.href}>
                      <Link
                        to={feat.href}
                        onClick={onClose}
                        className="text-sm text-[var(--text-body)] hover:text-[var(--blue)] leading-snug block transition-colors group"
                      >
                        <span className="flex items-start gap-2">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--blue)] flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                          {feat.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right: link columns */}
          <div className="col-span-9">
            <div className="grid grid-cols-2 gap-1">
              {item.children.map(child => (
                <Link
                  key={child.href}
                  to={child.href}
                  onClick={onClose}
                  className="flex items-center gap-2 px-4 py-2.5 rounded text-sm text-[var(--text-body)] hover:bg-[var(--blue-50)] hover:text-[var(--navy)] group transition-colors"
                >
                  <span className="w-1 h-1 rounded-full bg-[var(--blue)] opacity-0 group-hover:opacity-100 flex-shrink-0 transition-opacity" />
                  {child.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
