import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import PageBanner from '../../components/sections/PageBanner'
import ContactSection from '../../components/sections/ContactSection'
import industriesData from '../../data/industries.json'

export default function IndustriesIndex() {
  return (
    <>
      <Helmet>
        <title>Industries | BABT Business Support Solutions</title>
        <meta name="description" content="BABT Business Support Solutions provides specialist services across a wide range of industries." />
      </Helmet>

      <PageBanner
        title="Industries"
        subtitle="Deep sector expertise combined with global reach and local knowledge."
        breadcrumbs={[{ label: 'Home', href: '/ng/en' }, { label: 'Industries' }]}
      />

      <section className="section-padding bg-[var(--surface-alt)]">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industriesData.map(industry => (
              <Link
                key={industry.slug}
                to={`/ng/en/industries/${industry.slug}`}
                className="group flex flex-col bg-white border border-[var(--border-light)] rounded overflow-hidden card-lift"
              >
                {industry.image && (
                  <div className="aspect-video overflow-hidden">
                    <img src={industry.image} alt={industry.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1 border-t-2 border-transparent group-hover:border-[var(--blue)] transition-colors duration-200">
                  <h3 className="font-semibold text-[var(--text)] mb-2 group-hover:text-[var(--blue)] transition-colors tracking-tight">{industry.title}</h3>
                  <p className="text-sm text-[var(--text-body)] leading-relaxed line-clamp-2 flex-1">{industry.shortDescription}</p>
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[var(--blue)] opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRightIcon className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
