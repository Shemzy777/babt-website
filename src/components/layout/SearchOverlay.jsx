import { useState, useEffect, useRef } from 'react'
import { XMarkIcon, MagnifyingGlassIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import newsData from '../../data/news.json'
import servicesData from '../../data/services.json'

export default function SearchOverlay({ onClose }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current?.focus()
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [onClose])

  const results = query.length > 2
    ? [
        ...newsData.filter(n =>
          n.title.toLowerCase().includes(query.toLowerCase()) ||
          n.excerpt.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 3).map(n => ({
          label: n.title,
          href: `/ng/en/insights/${n.category}/${n.slug}`,
          type: 'Insight',
        })),
        ...servicesData.filter(s =>
          s.title.toLowerCase().includes(query.toLowerCase()) ||
          s.shortDescription.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 2).map(s => ({
          label: s.title,
          href: `/ng/en/services/${s.slug}`,
          type: 'Service',
        })),
      ]
    : []

  return (
    <div className="fixed inset-0 z-[100] flex flex-col">
      <div className="absolute inset-0 bg-brand-navy/90 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 pt-24 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Search input */}
          <div className="flex items-center gap-4 border-b-2 border-white/50 focus-within:border-white pb-3 transition-colors">
            <MagnifyingGlassIcon className="w-6 h-6 text-white/70 flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search..."
              className="flex-1 bg-transparent text-white text-2xl placeholder-white/50 focus:outline-none"
            />
            <button
              onClick={onClose}
              className="p-1 text-white/70 hover:text-white transition-colors"
              aria-label="Close search"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Results */}
          {results.length > 0 && (
            <div className="mt-6 space-y-2">
              {results.map((result, i) => (
                <Link
                  key={i}
                  to={result.href}
                  onClick={onClose}
                  className="flex items-center justify-between p-4 bg-white/10 hover:bg-white/20 rounded-sm group transition-colors"
                >
                  <div>
                    <span className="text-xs text-white/50 uppercase tracking-wide">{result.type}</span>
                    <p className="text-white font-medium mt-0.5">{result.label}</p>
                  </div>
                  <ArrowRightIcon className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                </Link>
              ))}
            </div>
          )}

          {query.length > 2 && results.length === 0 && (
            <p className="mt-6 text-white/60">No results found for "{query}"</p>
          )}
        </div>
      </div>
    </div>
  )
}
