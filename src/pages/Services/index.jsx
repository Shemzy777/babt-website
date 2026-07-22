import { Helmet } from 'react-helmet-async'
import PageBanner from '../../components/sections/PageBanner'
import ContactSection from '../../components/sections/ContactSection'
import { ServiceCard } from '../../components/ui/Card'
import servicesData from '../../data/services.json'

export default function ServicesIndex() {
  const featured = servicesData.filter(s => s.featured)
  const others   = servicesData.filter(s => !s.featured)

  return (
    <>
      <Helmet><title>Services | BABT Business Support Solutions</title><meta name="description" content="BABT Business Support Solutions offers comprehensive business support services." /></Helmet>
      <PageBanner title="Our Services" subtitle="Comprehensive business support services to help your business succeed." breadcrumbs={[{ label: 'Home', href: '/ng/en' }, { label: 'Services' }]} />

      <section className="section-padding bg-white">
        <div className="container space-y-14">
          <div>
            <div className="w-9 h-0.5 bg-[var(--blue)] mb-4 rounded-full" />
            <h2 className="font-bold text-[var(--text)] text-xl mb-8 tracking-tight">Core services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">{featured.map(s => <ServiceCard key={s.id} service={s} />)}</div>
          </div>
          <div>
            <div className="w-9 h-0.5 bg-[var(--blue)] mb-4 rounded-full" />
            <h2 className="font-bold text-[var(--text)] text-xl mb-8 tracking-tight">More services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">{others.map(s => <ServiceCard key={s.id} service={s} />)}</div>
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  )
}
