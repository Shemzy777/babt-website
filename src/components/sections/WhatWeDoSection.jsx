import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { ServiceCard } from '../ui/Card'
import servicesData from '../../data/services.json'

export default function WhatWeDoSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="section-title pt-5">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--text)] tracking-tight">
              Our Services
            </h2>
            <p className="mt-3 text-[var(--text-body)] text-sm max-w-md">
              Comprehensive business support services to help your business succeed.
            </p>
          </div>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {servicesData.map(s => <ServiceCard key={s.id} service={s} />)}
        </div>

        {/* View all link */}
        <div className="mt-8 flex justify-end">
          <Link
            to="/ng/en/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--blue)] hover:text-[var(--blue-mid)] group transition-colors"
          >
            View all services
            <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
