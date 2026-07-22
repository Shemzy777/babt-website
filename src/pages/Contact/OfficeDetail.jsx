import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import PageBanner from '../../components/sections/PageBanner'
import ContactSection from '../../components/sections/ContactSection'
import officesData from '../../data/offices.json'
import teamData from '../../data/team.json'

export default function OfficeDetail() {
  const { city } = useParams()
  const office = officesData.find(o => o.slug === city)
  if (!office) return <div className="container section-padding text-center"><h1 className="font-bold text-2xl mb-4 text-[var(--text)]">Office not found</h1><Link to="/ng/en/offices" className="text-[var(--blue)] hover:underline">Back to Offices</Link></div>

  const officeTeam = teamData.filter(m => m.office === office.city)

  return (
    <>
      <Helmet><title>{office.city} Office | BABT Business Support Solutions</title></Helmet>
      <PageBanner title={`${office.city} Office`} subtitle={office.address} breadcrumbs={[{ label: 'Home', href: '/ng/en' }, { label: 'Offices', href: '/ng/en/offices' }, { label: office.city }]} />
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
            <div className="rounded overflow-hidden flex items-center justify-center" style={{ height: '300px', background: 'linear-gradient(135deg, #001840 0%, #002A5C 100%)' }}>
              <div className="text-center text-white">
                <MapPinIcon className="w-10 h-10 mx-auto mb-3 text-[var(--blue)]" />
                <p className="font-bold text-xl tracking-tight mb-4">{office.city}</p>
                <a href={office.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-2.5 bg-[var(--blue)] text-white text-sm font-semibold rounded hover:bg-[var(--blue-mid)] transition-colors">Open in Google Maps</a>
              </div>
            </div>
            <div>
              {office.isHeadquarters && <span className="inline-block text-xs font-bold text-[var(--blue)] bg-[var(--blue-50)] border border-[var(--blue-100)] px-3 py-1 rounded-full uppercase tracking-wide mb-4">Headquarters</span>}
              <div className="w-9 h-0.5 bg-[var(--blue)] mb-5 rounded-full" />
              <h2 className="font-bold text-[var(--text)] text-xl mb-6 tracking-tight">Office information</h2>
              <div className="space-y-4">
                {[{ icon: MapPinIcon, label: 'Address', value: office.address, href: null }, { icon: PhoneIcon, label: 'Phone', value: office.phone, href: `tel:${office.phone}` }, { icon: EnvelopeIcon, label: 'Email', value: office.email, href: `mailto:${office.email}` }].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4 p-4 bg-[var(--surface-alt)] border border-[var(--border-light)] rounded">
                    <Icon className="w-5 h-5 text-[var(--blue)] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-semibold text-[var(--text)] uppercase tracking-wide mb-0.5">{label}</p>
                      {href ? <a href={href} className="text-sm text-[var(--blue)] hover:text-[var(--blue-mid)] transition-colors">{value}</a> : <p className="text-sm text-[var(--text-body)]">{value}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {officeTeam.length > 0 && (
            <div>
              <div className="w-9 h-0.5 bg-[var(--blue)] mb-5 rounded-full" />
              <h2 className="font-bold text-[var(--text)] text-xl mb-6 tracking-tight">Our team in {office.city}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {officeTeam.map(member => (
                  <div key={member.id} className="flex items-start gap-4 p-5 bg-[var(--surface-alt)] border border-[var(--border-light)] rounded">
                    <img src={member.image} alt={member.name} className="w-14 h-14 rounded object-cover flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-[var(--text)] text-sm tracking-tight">{member.name}</h3>
                      <p className="text-xs text-[var(--blue)] font-medium mb-1">{member.role}</p>
                      <a href={`mailto:${member.email}`} className="text-xs text-[var(--text-muted)] hover:text-[var(--blue)] transition-colors">{member.email}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
      <ContactSection />
    </>
  )
}
