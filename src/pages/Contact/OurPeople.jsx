import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import PageBanner from '../../components/sections/PageBanner'
import ContactSection from '../../components/sections/ContactSection'
import teamData from '../../data/team.json'

const departments = ['All', ...new Set(teamData.map(m => m.department))]

export default function OurPeople() {
  const [activeDept, setActiveDept] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = teamData.filter(m => {
    const matchDept = activeDept === 'All' || m.department === activeDept
    const matchSearch = !search || m.name.toLowerCase().includes(search.toLowerCase()) || m.role.toLowerCase().includes(search.toLowerCase())
    return matchDept && matchSearch
  })

  return (
    <>
      <Helmet><title>Our People | BABT Business Support Solutions</title></Helmet>
      <PageBanner title="Our people" subtitle="Meet the professionals behind BABT Business Support Solutions." breadcrumbs={[{ label: 'Home', href: '/ng/en' }, { label: 'Contact us', href: '/ng/en/contact-us' }, { label: 'Our people' }]} />

      <section className="section-padding bg-[var(--surface-alt)]">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4 mb-8 p-4 bg-white border border-[var(--border-light)] rounded">
            <div className="flex flex-wrap gap-2 flex-1">
              {departments.map(dept => (
                <button key={dept} onClick={() => setActiveDept(dept)}
                  className={`px-4 py-2 text-xs font-semibold rounded transition-colors duration-150 ${activeDept === dept ? 'bg-[var(--blue)] text-white' : 'text-[var(--text-body)] hover:text-[var(--text)] hover:bg-[var(--surface-alt)]'}`}>
                  {dept}
                </button>
              ))}
            </div>
            <input type="text" placeholder="Search by name or role..." value={search} onChange={e => setSearch(e.target.value)}
              className="px-4 py-2 text-sm border border-[var(--border)] rounded focus:outline-none focus:border-[var(--blue)] w-full md:w-60 transition-colors" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map(member => (
              <div key={member.id} className="bg-white border border-[var(--border-light)] rounded overflow-hidden card-lift group">
                <div className="aspect-4-3 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                </div>
                <div className="p-5 border-t-2 border-transparent group-hover:border-[var(--blue)] transition-colors duration-200">
                  <h3 className="font-bold text-[var(--text)] tracking-tight">{member.name}</h3>
                  <p className="text-sm text-[var(--blue)] font-medium mb-1">{member.role}</p>
                  <p className="text-xs text-[var(--text-muted)] mb-3">{member.office}</p>
                  <p className="text-sm text-[var(--text-body)] line-clamp-2 mb-4">{member.bio}</p>
                  <a href={`mailto:${member.email}`} className="inline-flex items-center gap-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--blue)] transition-colors">
                    <EnvelopeIcon className="w-3.5 h-3.5" />{member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && <div className="text-center py-16"><p className="text-[var(--text-muted)] text-sm">No team members found.</p></div>}
        </div>
      </section>
      <ContactSection />
    </>
  )
}
