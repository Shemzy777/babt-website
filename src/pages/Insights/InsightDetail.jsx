import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { CalendarIcon, ClockIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
import { format } from 'date-fns'
import PageBanner from '../../components/sections/PageBanner'
import { NewsCard } from '../../components/ui/Card'
import ContactSection from '../../components/sections/ContactSection'
import newsData from '../../data/news.json'

export default function InsightDetail() {
  const { slug } = useParams()
  const item = newsData.find(n => n.slug === slug)
  if (!item) return <div className="container section-padding text-center"><h1 className="font-bold text-2xl mb-4 text-[var(--text)]">Article not found</h1><Link to="/ng/en/insights" className="text-[var(--blue)] hover:underline">Back to Insights</Link></div>

  const related = newsData.filter(n => n.id !== item.id).slice(0, 2)

  return (
    <>
      <Helmet><title>{item.title} | BABT Business Support Solutions</title><meta name="description" content={item.excerpt} /></Helmet>
      <PageBanner title={item.title} image={item.image} breadcrumbs={[{ label: 'Home', href: '/ng/en' }, { label: 'Insights', href: '/ng/en/insights' }, { label: item.category.replace(/-/g, ' '), href: `/ng/en/insights/${item.category}` }, { label: item.title }]} />

      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <article className="lg:col-span-2">
              <div className="flex flex-wrap items-center gap-5 mb-8 pb-6 border-b border-[var(--border-light)]">
                <span className="flex items-center gap-1.5 text-sm text-[var(--text-muted)]"><CalendarIcon className="w-4 h-4" />{format(new Date(item.date), 'MMMM d, yyyy')}</span>
                <span className="flex items-center gap-1.5 text-sm text-[var(--text-muted)]"><ClockIcon className="w-4 h-4" />{item.readTime}</span>
                <span className="eyebrow text-xs">{item.category.replace(/-/g, ' ')}</span>
              </div>

              <div className="space-y-5">
                <p className="text-lg text-[var(--text)] font-medium leading-relaxed">{item.excerpt}</p>
                <p className="text-[var(--text-body)] leading-relaxed">In a production environment, this would be fetched from a CMS. The content would be rendered as rich text with proper heading hierarchy, images, pull quotes, and other rich media.</p>
                <p className="text-[var(--text-body)] leading-relaxed">BABT Business Support Solutions continues to monitor developments in this area and will provide updates as new information becomes available. For specific advice on how these developments may affect your business, please contact our team of specialists.</p>
                <blockquote className="my-8 pl-5 border-l-2 border-[var(--blue)]">
                  <p className="text-lg font-medium text-[var(--text)] italic leading-relaxed">"Understanding the regulatory landscape is essential for compliance and long-term business success in Nigeria."</p>
                </blockquote>
                <h2 className="font-bold text-[var(--text)] text-xl tracking-tight mt-8">Key takeaways</h2>
                <ul className="space-y-3">{['Understanding the regulatory landscape is essential for compliance', 'Proactive engagement with advisors can prevent costly mistakes', 'BABT Business Support Solutions is available to guide businesses through these changes'].map((pt, i) => <li key={i} className="flex items-start gap-3 text-[var(--text-body)] text-sm"><span className="w-1.5 h-1.5 rounded-full bg-[var(--blue)] mt-2 flex-shrink-0" />{pt}</li>)}</ul>
              </div>

              {item.tags?.length > 0 && (
                <div className="mt-10 pt-6 border-t border-[var(--border-light)]">
                  <div className="flex flex-wrap gap-2">{item.tags.map(tag => <span key={tag} className="px-3 py-1 text-xs font-medium bg-[var(--surface-alt)] border border-[var(--border-light)] text-[var(--text-body)] rounded-full">{tag}</span>)}</div>
                </div>
              )}

              <Link to="/ng/en/insights" className="inline-flex items-center gap-2 mt-10 text-sm font-semibold text-[var(--blue)] hover:text-[var(--blue-mid)] transition-colors">
                <ArrowLeftIcon className="w-4 h-4" /> Back to Insights
              </Link>
            </article>

            <aside className="space-y-5">
              <div className="bg-[var(--navy)] text-white rounded p-6">
                <p className="eyebrow text-xs mb-3" style={{ color: 'rgba(200,222,255,0.6)' }}>Expert guidance</p>
                <h3 className="font-bold text-white text-base mb-3 tracking-tight">Want to know more?</h3>
                <p className="text-sm text-white/50 mb-5">Our specialists are ready to help with this topic.</p>
                <Link to="/ng/en/contact-us/enquiry-form" className="block text-center py-2.5 bg-[var(--blue)] text-white text-sm font-semibold rounded hover:bg-[var(--blue-mid)] transition-colors">Contact us</Link>
              </div>
              <div className="bg-[var(--surface-alt)] border border-[var(--border-light)] rounded p-6">
                <h3 className="font-semibold text-[var(--text)] text-xs uppercase tracking-wider mb-4">Share this article</h3>
                <div className="flex gap-2">{['LinkedIn', 'Twitter', 'Email'].map(p => <button key={p} className="px-3 py-2 text-xs font-semibold border border-[var(--border)] rounded text-[var(--text-body)] hover:border-[var(--blue)] hover:text-[var(--blue)] transition-colors">{p}</button>)}</div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--surface-alt)]">
        <div className="container"><div className="w-9 h-0.5 bg-[var(--blue)] mb-5 rounded-full" /><h2 className="font-bold text-[var(--text)] text-xl mb-8 tracking-tight">Related insights</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-5">{related.map(item => <NewsCard key={item.id} item={item} />)}</div></div>
      </section>
      <ContactSection />
    </>
  )
}
