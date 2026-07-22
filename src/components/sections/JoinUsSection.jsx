import { ArrowRightIcon } from '@heroicons/react/24/outline'

const benefits = [
  { title: 'Professionalism', desc: 'Maintaining the highest standards in every engagement.' },
  { title: 'Integrity', desc: 'Acting with honesty and transparency at all times.' },
  { title: 'Excellence', desc: 'Delivering exceptional results for every client.' },
  { title: 'Client-focused', desc: 'Prioritizing your business needs and success.' },
]

export default function JoinUsSection() {
  return (
    <section className="bg-[var(--navy)] section-padding">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Content */}
          <div>
            <div className="mb-5">
              <span className="eyebrow" style={{ color: 'rgba(200,222,255,0.7)' }}>Why choose us</span>
            </div>
            <div className="w-9 h-0.5 bg-[var(--blue)] mb-6 rounded-full" />
            <h2 className="text-white font-bold mb-5 tracking-tight"
              style={{ fontSize: 'clamp(1.625rem, 3.5vw, 2.5rem)', letterSpacing: '-0.02em', lineHeight: '1.15' }}>
              Partner with BABT Business Support Solutions
            </h2>
            <p className="text-white/55 leading-relaxed mb-10">
              We're committed to delivering exceptional service and helping your business achieve its goals. Discover the benefits of working with our team.
            </p>

            <div className="space-y-6 mb-10">
              {benefits.map((b, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-5 h-5 rounded-full border border-[var(--blue)]/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--blue)]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white mb-0.5">{b.title}</p>
                    <p className="text-sm text-white/45">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="/ng/en/contact-us/enquiry-form"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--blue)] text-white font-semibold text-sm rounded hover:bg-[var(--blue-mid)] transition-colors group"
              >
                Get in touch
                <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/ng/en/who-we-are"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/25 text-white/80 font-semibold text-sm rounded hover:border-white/50 hover:text-white transition-colors"
              >
                About us
              </a>
            </div>
          </div>

          {/* Photo */}
          <div className="relative hidden lg:block">
            <div className="rounded overflow-hidden shadow-navy" style={{ height: '440px' }}>
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=85"
                alt="BABT team"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
