import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import PageBanner from '../../components/sections/PageBanner'
import ContactSection from '../../components/sections/ContactSection'
import { NewsCard } from '../../components/ui/Card'
import servicesData from '../../data/services.json'
import newsData from '../../data/news.json'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = servicesData.find(s => s.slug === slug)
  if (!service) return <div className="container section-padding text-center"><h1 className="font-bold text-2xl mb-4 text-[var(--text)]">Service not found</h1><Link to="/ng/en/services" className="text-[var(--blue)] hover:underline">Back to Services</Link></div>

  return (
    <>
      <Helmet><title>{service.title} | BABT Business Support Solutions</title><meta name="description" content={service.shortDescription} /></Helmet>
      <PageBanner title={service.title} subtitle={service.shortDescription} breadcrumbs={[{ label: 'Home', href: '/ng/en' }, { label: 'Services', href: '/ng/en/services' }, { label: service.title }]} />

      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-3xl space-y-8">
            <div><div className="w-9 h-0.5 bg-[var(--blue)] mb-5 rounded-full" /><h2 className="font-bold text-[var(--text)] text-xl mb-4 tracking-tight">Overview</h2><p className="text-[var(--text-body)] leading-relaxed">{service.description}</p></div>
            {service.subServices?.length > 0 && (
              <div>
                <h2 className="font-bold text-[var(--text)] text-xl mb-5 tracking-tight">Our {service.title} services</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.subServices.map(sub => (
                    <div key={sub.slug} className="flex items-center gap-3 p-4 bg-[var(--surface-alt)] border border-[var(--border-light)] rounded">
                      <ArrowRightIcon className="w-4 h-4 text-[var(--blue)] flex-shrink-0" />
                      <span className="text-sm font-medium text-[var(--text-body)]">{sub.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  )
}
