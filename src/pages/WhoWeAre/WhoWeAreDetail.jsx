import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageBanner from '../../components/sections/PageBanner'
import ContactSection from '../../components/sections/ContactSection'
import teamData from '../../data/team.json'

const pages = {
  'our-company': {
    title: 'Our Company',
    subtitle: 'Learn about BABT Business Support Solutions and our story.',
    image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1200&q=80',
    content: [
      'BABT is a dynamic business consulting and professional services firm committed to helping organizations achieve sustainable growth, operational excellence, and financial success. We partner with businesses across various industries to deliver practical, innovative, and value-driven solutions.',
      'Our multidisciplinary team combines expertise in finance, accounting, business advisory, technology, and compliance to provide tailored solutions that address the unique challenges and opportunities faced by our clients. We are dedicated to delivering high-quality services that improve efficiency, ensure regulatory compliance, optimize resources, and drive long-term business value.',
      'At our core, we are more than service providers—we are trusted business partners committed to supporting our clients\' growth journey and creating lasting value through practical solutions and measurable results.'
    ]
  },
  'vision-mission': {
    title: 'Vision & Mission',
    subtitle: 'Our vision, mission, and core values.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80',
    content: [
      'Our Vision: To be a leading business consulting and professional services firm recognized for delivering innovative solutions that empower organizations to achieve excellence and sustainable growth.',
      'Our Mission: To provide exceptional consulting, advisory, technology, and capacity development services that enhance business performance, strengthen compliance, optimize resources, and create long-term value for our clients.',
      'Our Core Values: Professionalism, Integrity, Excellence, and Client-focused.'
    ],
    isVisionMission: true
  },
  'our-team': {
    title: 'Our Team',
    subtitle: 'Meet the professionals behind BABT Business Support Solutions.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&q=80',
    content: null,
    showTeam: true
  },
}

export default function WhoWeAreDetail() {
  const { slug } = useParams()
  const page = pages[slug]
  if (!page) return <div className="container section-padding text-center"><h1 className="font-bold text-2xl mb-4 text-[var(--text)]">Page not found</h1><Link to="/ng/en/who-we-are" className="text-[var(--blue)] hover:underline">Back to Who We Are</Link></div>

  return (
    <>
      <Helmet><title>{page.title} | BABT Business Support Solutions</title><meta name="description" content={page.subtitle} /></Helmet>
      <PageBanner title={page.title} subtitle={page.subtitle} image={page.image} breadcrumbs={[{ label: 'Home', href: '/ng/en' }, { label: 'Who we are', href: '/ng/en/who-we-are' }, { label: page.title }]} />
      <section className="section-padding bg-white">
        <div className="container">
          {page.isVisionMission && page.content && (
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Vision */}
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4 tracking-tight">Vision</h3>
                <div className="w-12 h-1 bg-[var(--blue)] rounded-full mb-6" />
                <p className="text-[var(--text-body)] text-lg leading-relaxed">{page.content[0].replace('Our Vision: ', '')}</p>
              </div>
              
              {/* Mission */}
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-[var(--text)] mb-4 tracking-tight">Mission</h3>
                <div className="w-12 h-1 bg-[var(--blue)] rounded-full mb-6" />
                <p className="text-[var(--text-body)] text-lg leading-relaxed">{page.content[1].replace('Our Mission: ', '')}</p>
              </div>
              
              {/* Core Values */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--text)] mb-4 tracking-tight">Core Values</h3>
                <div className="w-12 h-1 bg-[var(--blue)] rounded-full mb-6" />
                <p className="text-[var(--text-body)] text-lg leading-relaxed">{page.content[2].replace('Our Core Values: ', '')}</p>
              </div>
            </div>
          )}
          {page.content && !page.isVisionMission && <div className="max-w-3xl space-y-5 mb-12"><div className="w-9 h-0.5 bg-[var(--blue)] mb-6 rounded-full" />{page.content.map((para, i) => <p key={i} className="text-[var(--text-body)] leading-relaxed">{para}</p>)}</div>}
          {page.showTeam && (
            <div>
              <div className="w-9 h-0.5 bg-[var(--blue)] mb-6 rounded-full" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {teamData.map(member => (
                  <div key={member.id} className="bg-[var(--surface-alt)] border border-[var(--border-light)] rounded overflow-hidden card-lift flex flex-col h-full">
                    <div className="aspect-4-3 overflow-hidden flex-shrink-0"><img src={member.image} alt={member.name} className="w-full h-full object-cover" loading="lazy" /></div>
                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="font-bold text-[var(--text)] tracking-tight">{member.name}</h3>
                      <p className="text-sm text-[var(--blue)] font-medium mb-2">{member.role}</p>
                      <p className="text-sm text-[var(--text-body)] line-clamp-2 flex-grow">{member.bio}</p>
                      <a href={`mailto:${member.email}`} className="mt-3 block text-xs text-[var(--text-muted)] hover:text-[var(--blue)] transition-colors">{member.email}</a>
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
