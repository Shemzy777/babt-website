import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import PageBanner from '../../components/sections/PageBanner'
import ContactSection from '../../components/sections/ContactSection'

const sections = [
  { slug: 'our-company', title: 'Our Company', description: 'Learn about BABT Business Support Solutions and our story.', image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&q=80' },
  { slug: 'our-team', title: 'Our Team', description: 'Meet the professionals behind BABT Business Support Solutions.', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80' },
  { slug: 'vision-mission', title: 'Vision & Mission', description: 'Our vision, mission, and core values.', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80' },
]

export default function WhoWeAreIndex() {
  return (
    <>
      <Helmet><title>Who We Are | BABT Business Support Solutions</title></Helmet>
      <PageBanner title="Who we are" subtitle="Comprehensive business support solutions for your success." breadcrumbs={[{ label: 'Home', href: '/ng/en' }, { label: 'Who we are' }]} />
      <section className="section-padding bg-[var(--surface-alt)]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {sections.map(section => (
              <Link key={section.slug} to={`/ng/en/who-we-are/${section.slug}`} className="group flex flex-col bg-white border border-[var(--border-light)] rounded overflow-hidden card-lift">
                <div className="aspect-video overflow-hidden"><img src={section.image} alt={section.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" /></div>
                <div className="p-6 flex flex-col flex-1 border-t-2 border-transparent group-hover:border-[var(--blue)] transition-colors duration-200">
                  <h2 className="font-semibold text-[var(--text)] mb-2 group-hover:text-[var(--blue)] transition-colors tracking-tight">{section.title}</h2>
                  <p className="text-sm text-[var(--text-body)] leading-relaxed flex-1">{section.description}</p>
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[var(--blue)] opacity-0 group-hover:opacity-100 transition-opacity">Learn more <ArrowRightIcon className="w-3.5 h-3.5" /></div>
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
