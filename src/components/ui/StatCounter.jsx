import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'

const stats = [
  { value: 40000, suffix: '+', label: 'Professionals worldwide' },
  { value: 100,   suffix: '+', label: 'Countries & territories' },
  { value: 4,     suffix: '',  label: 'Offices in Nigeria' },
  { value: 40,    suffix: '+', label: 'Years of expertise' },
]

export default function StatCounter() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.25 })

  return (
    <section ref={ref} className="bg-[var(--blue-100)] border-y border-[var(--blue-200,#C8DEFF)]">
      <div className="container py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--blue-200,#C8DEFF)]">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="px-8 first:pl-0 last:pr-0 py-4"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(12px)',
                transition: `opacity 0.6s ease ${i * 90}ms, transform 0.6s var(--ease-out-expo) ${i * 90}ms`,
              }}
            >
              <p className="stat-num mb-1">
                {inView ? (
                  <CountUp start={0} end={stat.value} duration={2.2} separator="," suffix={stat.suffix} useEasing />
                ) : '0'}
              </p>
              <p className="text-sm text-[var(--text-body)] font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
