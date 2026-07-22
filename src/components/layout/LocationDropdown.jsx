import { useState, useRef, useEffect } from 'react'
import { ChevronDownIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

const locations = [
  { label: 'Global Network', href: '#' },
  { label: 'United States', href: '#' },
  { label: 'Nigeria', href: '/ng/en', current: true },
  { label: 'Ghana', href: '#' },
  { label: 'Kenya', href: '#' },
  { label: 'South Africa', href: '#' },
]

export default function LocationDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const ref = useRef(null)

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const filtered = locations.filter(l =>
    l.label.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-neutral-700 hover:text-brand-blue border border-neutral-300 hover:border-brand-blue rounded-sm transition-colors"
        aria-expanded={isOpen}
      >
        <GlobeAltIcon className="w-4 h-4" />
        Nigeria
        <ChevronDownIcon className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-neutral-200 rounded-sm shadow-lg z-50 animate-slide-down">
          <div className="p-2 border-b border-neutral-200">
            <input
              type="text"
              placeholder="Search locations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-3 py-1.5 text-sm border border-neutral-200 rounded-sm focus:outline-none focus:border-brand-blue"
              autoFocus
            />
          </div>
          <ul className="max-h-48 overflow-y-auto py-1">
            {filtered.map((loc) => (
              <li key={loc.href}>
                <a
                  href={loc.href}
                  className={`block px-4 py-2 text-sm transition-colors ${
                    loc.current
                      ? 'text-brand-blue font-semibold bg-brand-blue-light'
                      : 'text-neutral-700 hover:text-brand-blue hover:bg-neutral-50'
                  }`}
                >
                  {loc.label}
                </a>
              </li>
            ))}
            {filtered.length === 0 && (
              <li className="px-4 py-3 text-sm text-neutral-400">No location found</li>
            )}
          </ul>
          <div className="border-t border-neutral-200 p-2">
            <a
              href="https://www.forvismazars.com/group"
              className="block text-center text-xs font-medium text-brand-blue hover:text-brand-navy py-1"
            >
              See all locations
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
