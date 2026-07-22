import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function HeroSection() {
  const contentRef = useRef(null)

  useEffect(() => {
    if (!contentRef.current) return
    const items = contentRef.current.querySelectorAll('[data-reveal]')
    items.forEach((el, i) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(22px)'
      setTimeout(() => {
        el.style.transition = 'opacity 0.75s cubic-bezier(0.16,1,0.3,1), transform 0.75s cubic-bezier(0.16,1,0.3,1)'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 80 + i * 110)
    })
  }, [])

  return (
    <section
      className="relative overflow-hidden bg-[var(--navy-dark)]"
      style={{ minHeight: 'calc(100vh - var(--header-height))', display: 'flex', flexDirection: 'column' }}
    >
      {/* Photography background */}
      <img
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&q=85"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Corporate blue-navy gradient overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(100deg, rgba(0,24,64,0.92) 0%, rgba(0,42,92,0.80) 45%, rgba(0,42,92,0.35) 100%)' }}
      />

      {/* Main content */}
      <div ref={contentRef} className="relative flex-1 flex items-center">
        <div className="container py-20 md:py-28">
          <div className="max-w-2xl">
            <p data-reveal className="eyebrow mb-5">BABT Business Support Solutions</p>

            <h1
              data-reveal
              className="text-white font-extrabold leading-none mb-6"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', letterSpacing: '-0.03em', lineHeight: '1.07' }}
            >
              Delivering value beyond the transaction.
            </h1>

            <p data-reveal className="text-white/65 text-base md:text-lg leading-relaxed max-w-xl mb-9">
              We are a dynamic business consulting and professional services firm committed to helping organizations achieve sustainable growth, operational excellence, and financial success. We partner with businesses across various industries to deliver practical, innovative, and value-driven solutions.
            </p>

            <div data-reveal className="flex flex-wrap gap-4">
              <Link
                to="/ng/en/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--blue)] text-white font-semibold text-sm rounded hover:bg-[var(--blue-mid)] transition-colors group"
              >
                Explore our services
                <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/ng/en/contact-us"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/40 text-white font-semibold text-sm rounded hover:border-white/70 hover:bg-white/10 transition-colors"
              >
                Contact our team
              </Link>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
