import { Helmet } from 'react-helmet-async'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import PageBanner from '../../components/sections/PageBanner'
import ContactSection from '../../components/sections/ContactSection'
import teamData from '../../data/team.json'

export default function OurPeople() {
  return (
    <>
      <Helmet><title>Our People | BABT Business Support Solutions</title></Helmet>
      <PageBanner title="Our people" subtitle="Meet the professionals behind BABT Business Support Solutions." breadcrumbs={[{ label: 'Home', href: '/ng/en' }, { label: 'Contact us', href: '/ng/en/contact-us' }, { label: 'Our people' }]} />

      <section className="section-padding bg-[var(--surface-alt)]">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {teamData.map(member => (
              <div key={member.id} className="bg-white border border-[var(--border-light)] rounded overflow-hidden card-lift group flex flex-col h-full">
                <div className="aspect-4-3 overflow-hidden flex-shrink-0">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-5 border-t-2 border-transparent group-hover:border-[var(--blue)] transition-colors duration-200 flex flex-col flex-grow">
                  <h3 className="font-bold text-[var(--text)] tracking-tight">{member.name}</h3>
                  <p className="text-sm text-[var(--blue)] font-medium mb-1">{member.role}</p>
                  <p className="text-xs text-[var(--text-muted)] mb-3">{member.office}</p>
                  <p className="text-sm text-[var(--text-body)] line-clamp-2 mb-4 flex-grow">{member.bio}</p>
                  <a href={`mailto:${member.email}`} className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--blue)] transition-colors mt-auto">
                    <EnvelopeIcon className="w-3.5 h-3.5" />{member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
    </>
  )
}
