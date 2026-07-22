import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import PageBanner from '../../components/sections/PageBanner'
import officesData from '../../data/offices.json'

export default function ContactIndex() {
  return (
    <>
      <Helmet><title>Contact Us | BABT Business Support Solutions</title></Helmet>
      <PageBanner title="Contact us" subtitle="We're here to help. Reach out to our team." breadcrumbs={[{ label: 'Home', href: '/ng/en' }, { label: 'Contact us' }]} />
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
            {[
              { icon: PhoneIcon, title: 'Call us', body: '+234 818 016 8888', href: 'tel:+2348180168888', ext: true },
              { icon: EnvelopeIcon, title: 'Send an enquiry', body: 'Use our contact form', to: '/ng/en/contact-us/enquiry-form' },
            ].map(tile => {
              const Icon = tile.icon
              const inner = <><div className="w-12 h-12 rounded bg-[var(--blue-50)] flex items-center justify-center text-[var(--blue)] mb-5 group-hover:bg-[var(--blue)] group-hover:text-white transition-all duration-200"><Icon className="w-5 h-5" /></div><p className="font-semibold text-[var(--text)] text-sm mb-1 group-hover:text-[var(--blue)] transition-colors">{tile.title}</p><p className="text-xs text-[var(--text-muted)]">{tile.body}</p></>
              const cls = "group flex flex-col items-center text-center p-8 bg-[var(--surface-alt)] border border-[var(--border-light)] rounded card-lift"
              if (tile.ext) return <a key={tile.title} href={tile.href} className={cls}>{inner}</a>
              return <Link key={tile.title} to={tile.to} className={cls}>{inner}</Link>
            })}
          </div>

          <div className="w-9 h-0.5 bg-[var(--blue)] mb-5 rounded-full" />
          <h2 className="font-bold text-[var(--text)] text-xl mb-8 tracking-tight">Our offices</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {officesData.map(office => (
              <div key={office.id} className="p-6 bg-[var(--surface-alt)] border border-[var(--border-light)] rounded">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-[var(--text)] tracking-tight">{office.city}</h3>
                  {office.isHeadquarters && <span className="text-[10px] font-bold text-[var(--blue)] bg-[var(--blue-50)] border border-[var(--blue-200,#C8DEFF)] px-2 py-0.5 rounded-full uppercase tracking-wide">HQ</span>}
                </div>
                <p className="text-sm text-[var(--text-body)] leading-relaxed mb-4">{office.address}</p>
                <a href={`tel:${office.phone}`} className="text-sm text-[var(--blue)] hover:text-[var(--blue-mid)] block mb-1 font-medium transition-colors">{office.phone}</a>
                <a href={`mailto:${office.email}`} className="text-xs text-[var(--text-muted)] hover:text-[var(--blue)] block transition-colors">{office.email}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
