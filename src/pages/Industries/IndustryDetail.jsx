import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import PageBanner from '../../components/sections/PageBanner'
import ContactSection from '../../components/sections/ContactSection'
import { NewsCard } from '../../components/ui/Card'
import industriesData from '../../data/industries.json'
import newsData from '../../data/news.json'
import servicesData from '../../data/services.json'

export default function IndustryDetail() {
  const { slug } = useParams()
  const industry = industriesData.find(i => i.slug === slug)
  if (!industry) return <div className="container section-padding text-center"><h1 className="font-bold text-2xl mb-4 text-[var(--text)]">Industry not found</h1><Link to="/ng/en/industries" className="text-[var(--blue)] hover:underline">Back to Industries</Link></div>

  return (
    <>
      <Helmet><title>{industry.title} | BABT Business Support Solutions</title><meta name="description" content={industry.shortDescription} /></Helmet>
      <PageBanner title={industry.title} subtitle={industry.shortDescription} image={industry.image} breadcrumbs={[{ label: 'Home', href: '/ng/en' }, { label: 'Industries', href: '/ng/en/industries' }, { label: industry.title }]} />

      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div><div className="w-9 h-0.5 bg-[var(--blue)] mb-5 rounded-full" /><h2 className="font-bold text-[var(--text)] text-xl mb-4 tracking-tight">Overview</h2><p className="text-[var(--text-body)] leading-relaxed">{industry.description}</p></div>
              <div><h2 className="font-bold text-[var(--text)] text-xl mb-4 tracking-tight">How we can help</h2><p className="text-[var(--text-body)] leading-relaxed">Our dedicated {industry.title.toLowerCase()} team combines deep sector expertise with broad professional skills across audit, tax, advisory and consulting. We work closely with clients to understand their specific needs and deliver tailored solutions.</p></div>
            </div>
            <div className="space-y-5">
              <div className="bg-[var(--surface-alt)] border border-[var(--border-light)] rounded p-6">
                <h3 className="font-semibold text-[var(--text)] text-xs uppercase tracking-wider mb-4">Our services</h3>
                <ul className="space-y-2">{servicesData.map(s => (<li key={s.id}><Link to={`/ng/en/services/${s.slug}`} className="flex items-center gap-2 text-sm text-[var(--text-body)] hover:text-[var(--blue)] group transition-colors py-1"><ArrowRightIcon className="w-3.5 h-3.5 text-[var(--blue)] transition-transform group-hover:translate-x-1 flex-shrink-0" />{s.title}</Link></li>))}</ul>
              </div>
              <div className="bg-[var(--navy)] rounded p-6 text-white">
                <h3 className="font-semibold text-white text-sm mb-2">Talk to our experts</h3>
                <p className="text-sm text-white/50 mb-4">Get in touch with our {industry.title.toLowerCase()} specialists.</p>
                <Link to="/ng/en/contact-us/enquiry-form" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--blue-200,#C8DEFF)] hover:text-white transition-colors">Contact us <ArrowRightIcon className="w-3.5 h-3.5" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--surface-alt)]">
        <div className="container"><div className="w-9 h-0.5 bg-[var(--blue)] mb-5 rounded-full" /><h2 className="font-bold text-[var(--text)] text-xl mb-8 tracking-tight">Related insights</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-5">{newsData.slice(0, 2).map(item => <NewsCard key={item.id} item={item} />)}</div></div>
      </section>
      <ContactSection />
    </>
  )
}
