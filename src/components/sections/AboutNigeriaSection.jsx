import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const points = [
  'Expert multidisciplinary team in finance, accounting, and technology',
  'Delivering value beyond the transaction',
  'Committed to professionalism, integrity, and excellence',
  'Practical, innovative, and value-driven solutions'
]

export default function AboutNigeriaSection() {
  return (
    <section className="bg-white section-padding">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded overflow-hidden border border-[var(--border-light)] shadow-md">

          {/* Photography */}
          <div className="relative min-h-72 lg:min-h-0">
            <img
              src="/images/aboutus_homepage.jpg"
              alt="Business support"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            {/* Subtle navy gradient from right */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--navy)]/20" />
          </div>

          {/* Content */}
          <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
            <div className="section-title pt-5 mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] tracking-tight">
                About BABT
              </h2>
            </div>

            <p className="text-[var(--text-body)] leading-relaxed mb-6">
              BABT Business Support Solutions provides comprehensive services to help businesses optimize operations, mitigate risks, and achieve sustainable growth.
            </p>

            <ul className="space-y-3 mb-8">
              {points.map((pt, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-body)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--blue)] mt-2 flex-shrink-0" />
                  {pt}
                </li>
              ))}
            </ul>

            <Link
              to="/ng/en/who-we-are"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--blue)] hover:text-[var(--blue-mid)] group transition-colors"
            >
              Learn more about us
              <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
