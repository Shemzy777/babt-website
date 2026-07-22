import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import PageBanner from '../../components/sections/PageBanner'
import { NewsCard } from '../../components/ui/Card'
import ContactSection from '../../components/sections/ContactSection'
import newsData from '../../data/news.json'

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Latest News', value: 'latest-news' },
  { label: 'International Reports', value: 'international-reports' },
  { label: 'Publications', value: 'publications' },
  { label: 'Webinars & Events', value: 'webinars-and-events' },
]

export default function InsightsIndex() {
  const { category } = useParams()
  const [activeCategory, setActiveCategory] = useState(category || 'all')
  const [search, setSearch] = useState('')

  const filtered = newsData.filter(item => {
    const matchCat = activeCategory === 'all' || item.category === activeCategory
    const matchSearch = !search || item.title.toLowerCase().includes(search.toLowerCase()) || item.excerpt.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <>
      <Helmet><title>Insights & News | BABT Business Support Solutions</title><meta name="description" content="Stay up to date with the latest insights, news, reports and events from BABT Business Support Solutions." /></Helmet>
      <PageBanner title="Insights & News" subtitle="Perspectives and expertise from our professionals across Nigeria and the globe." breadcrumbs={[{ label: 'Home', href: '/ng/en' }, { label: 'Insights' }]} />

      <section className="section-padding bg-[var(--surface-alt)]">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 p-4 bg-white border border-[var(--border-light)] rounded">
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button key={cat.value} onClick={() => setActiveCategory(cat.value)}
                  className={`px-4 py-2 text-xs font-semibold rounded transition-colors duration-150 ${activeCategory === cat.value ? 'bg-[var(--blue)] text-white' : 'text-[var(--text-body)] hover:text-[var(--text)] hover:bg-[var(--surface-alt)]'}`}>
                  {cat.label}
                </button>
              ))}
            </div>
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-muted)]" />
              <input type="text" placeholder="Search insights..." value={search} onChange={e => setSearch(e.target.value)}
                className="pl-9 pr-4 py-2 text-sm border border-[var(--border)] rounded focus:outline-none focus:border-[var(--blue)] w-full md:w-60 transition-colors" />
            </div>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map(item => <NewsCard key={item.id} item={item} />)}
            </div>
          ) : (
            <div className="text-center py-20"><p className="text-[var(--text-muted)] text-sm">No insights found matching your search.</p></div>
          )}
        </div>
      </section>
      <ContactSection />
    </>
  )
}
