import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function ListingSection({ items = [], basePath = '', columns = 3 }) {
  const colClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  }[columns] || 'md:grid-cols-3'

  return (
    <div className={`grid grid-cols-1 ${colClass} gap-6`}>
      {items.map((item) => (
        <Link
          key={item.slug}
          to={`${basePath}/${item.slug}`}
          className="group flex flex-col bg-white border border-neutral-200 rounded-sm overflow-hidden card-hover"
        >
          {item.image && (
            <div className="aspect-video overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          )}
          <div className="p-6 flex flex-col flex-1">
            <h3 className="font-display font-semibold text-neutral-900 mb-2 group-hover:text-brand-blue transition-colors">
              {item.title}
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed flex-1">
              {item.shortDescription || item.description?.substring(0, 120) + '...'}
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-brand-blue">
              Learn more
              <ArrowRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
