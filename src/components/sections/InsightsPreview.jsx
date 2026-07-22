import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { NewsCard } from '../ui/Card'
import newsData from '../../data/news.json'

export default function InsightsPreview() {
  const [featured, ...rest] = newsData.slice(0, 4)
  const sideCards = rest.slice(0, 3)

  return (
    <section className="section-padding bg-white">
      <div className="container">

        {/* Header */}
        <div className="flex items-end justify-between mb-8 pb-6 border-b border-[var(--border-light)]">
          <div className="section-title pt-5">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] tracking-tight">
              Insights &amp; news
            </h2>
          </div>
          <Link
            to="/ng/en/insights"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-[var(--blue)] hover:text-[var(--blue-mid)] group transition-colors"
          >
            View all insights
            <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Editorial grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

          {/* Large featured card — 7 cols */}
          <div className="lg:col-span-7">
            <NewsCard item={featured} featured />
          </div>

          {/* Stacked side cards — 5 cols */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {sideCards.map(item => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center md:hidden">
          <Link
            to="/ng/en/insights"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--blue)]"
          >
            View all insights <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
