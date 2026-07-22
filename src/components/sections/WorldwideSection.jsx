import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const regions = [
  { name: 'Africa',       offices: '18+', highlight: true  },
  { name: 'Europe',       offices: '42+', highlight: false },
  { name: 'Americas',     offices: '24+', highlight: false },
  { name: 'Asia-Pacific', offices: '22+', highlight: false },
]

export default function WorldwideSection() {
  return (
    <section className="section-padding bg-[var(--surface-alt)]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: content */}
          <div>
            <div className="section-title pt-5 mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] tracking-tight">
                A global network at your service
              </h2>
            </div>

            <p className="text-[var(--text-body)] leading-relaxed mb-8">
              Our firm operates as one integrated global network — not a loose affiliation of firms. Our professionals share common methodologies, quality standards, and values, ensuring seamless service wherever your business operates.
            </p>

            {/* Regional breakdown */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {regions.map(r => (
                <div
                  key={r.name}
                  className={`p-4 rounded border ${
                    r.highlight
                      ? 'bg-[var(--blue-100)] border-[var(--blue-200,#C8DEFF)]'
                      : 'bg-white border-[var(--border-light)]'
                  }`}
                >
                  <p className={`font-extrabold tracking-tight leading-none mb-1 ${r.highlight ? 'text-[var(--blue)]' : 'text-[var(--text)]'}`}
                    style={{ fontSize: '1.625rem', letterSpacing: '-0.02em' }}>
                    {r.offices}
                  </p>
                  <p className="text-sm text-[var(--text-body)] font-medium">{r.name}</p>
                </div>
              ))}
            </div>

            <Link
              to="/ng/en/who-we-are/geographic-footprint"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--blue)] hover:text-[var(--blue-mid)] group transition-colors"
            >
              Our geographic footprint
              <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right: image */}
          <div className="relative">
            <div className="rounded overflow-hidden shadow-lg aspect-4-3">
              <img
                src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=900&q=85"
                alt="Global presence"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--navy)]/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
