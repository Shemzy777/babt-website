import { Link } from 'react-router-dom'

const tiles = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: '+234 818 016 8888',
    sub: 'Call us directly',
    href: 'tel:+2348180168888',
    external: true,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    label: 'Our people',
    sub: 'Find a specialist',
    to: '/ng/en/contact-us/our-people',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: 'Our office',
    sub: 'Lagos',
    to: '/ng/en/offices',
  },
  {
    icon: (   
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path string iokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'Send an enquiry',
    sub: 'Use our contact form',
    to: '/ng/en/contact-us/enquiry-form',
  },
]

export default function ContactSection() {
  return (
    <section className="section-padding bg-[var(--surface-alt)]">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="section-title pt-5">
            <h2 className="text-2xl font-bold text-[var(--text)] tracking-tight">
              Contact us
            </h2>
          </div>
          <p className="text-sm text-[var(--text-muted)] hidden md:block">We respond within one business day.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tiles.map(tile => {
            const inner = (
              <>
                <div className="w-10 h-10 rounded bg-[var(--blue-100)] flex items-center justify-center text-[var(--blue)] mb-4 group-hover:bg-[var(--blue)] group-hover:text-white transition-all duration-200 flex-shrink-0">
                  {tile.icon}
                </div>
                <p className="font-semibold text-[var(--text)] text-sm mb-0.5 group-hover:text-[var(--blue)] transition-colors">{tile.label}</p>
                <p className="text-xs text-[var(--text-muted)]">{tile.sub}</p>
              </>
            )
            const cls = "group flex flex-col p-6 bg-white border border-[var(--border-light)] rounded card-lift"

            if (tile.external) return <a key={tile.label} href={tile.href} className={cls}>{inner}</a>
            return <Link key={tile.label} to={tile.to} className={cls}>{inner}</Link>
          })}
        </div>
      </div>
    </section>
  )
}
