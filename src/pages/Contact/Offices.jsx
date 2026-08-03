import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import PageBanner from '../../components/sections/PageBanner'
import officesData from '../../data/offices.json'

export default function Offices() {
  return (
    <>
      <Helmet><title>Our Offices | BABT Business Support Solutions</title></Helmet>
      <PageBanner title="Our offices" subtitle="We have our office in Lagos, Nigeria and we're ready to serve you wherever you are." breadcrumbs={[{ label: 'Home', href: '/ng/en' }, { label: 'Contact us', href: '/ng/en/contact-us' }, { label: 'Our offices' }]} />
      <section className="section-padding bg-[var(--surface-alt)]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {officesData.map(office => (
              <div key={office.id} className="bg-white border border-[var(--border-light)] rounded overflow-hidden card-lift">
                <div className="h-40 flex items-center justify-center relative" style={{ background: 'linear-gradient(135deg, #001840 0%, #002A5C 100%)' }}>
                  <div className="text-center text-white">
                    <MapPinIcon className="w-7 h-7 mx-auto mb-2 text-[var(--blue)]" />
                    <p className="font-bold text-lg tracking-tight">{office.city}</p>
                  </div>
                  {office.isHeadquarters && (
                    <span className="absolute top-4 right-4 text-[10px] font-bold text-[var(--blue)] bg-white/10 border border-white/20 px-2 py-0.5 rounded-full uppercase tracking-wide">HQ</span>
                  )}
                </div>
                <div className="p-6">
                  <h2 className="font-bold text-[var(--text)] text-lg mb-4 tracking-tight">{office.city}</h2>
                  <div className="space-y-3 mb-5">
                    <div className="flex items-start gap-3"><MapPinIcon className="w-4 h-4 text-[var(--blue)] mt-0.5 flex-shrink-0" /><p className="text-sm text-[var(--text-body)]">{office.address}</p></div>
                    <div className="flex items-center gap-3"><PhoneIcon className="w-4 h-4 text-[var(--blue)] flex-shrink-0" /><a href={`tel:${office.phone}`} className="text-sm text-[var(--text-body)] hover:text-[var(--blue)] transition-colors">{office.phone}</a></div>
                    <div className="flex items-center gap-3"><EnvelopeIcon className="w-4 h-4 text-[var(--blue)] flex-shrink-0" /><a href={`mailto:${office.email}`} className="text-sm text-[var(--text-body)] hover:text-[var(--blue)] transition-colors">{office.email}</a></div>
                  </div>
                  <div className="flex items-center gap-5 pt-4 border-t border-[var(--border-light)]">
                    <a href={office.mapUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--blue)] hover:text-[var(--blue-mid)] transition-colors group">View on map <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" /></a>
                    <Link to={`/ng/en/offices/${office.slug}`} className="text-xs font-medium text-[var(--text-muted)] hover:text-[var(--blue)] transition-colors">Office details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
