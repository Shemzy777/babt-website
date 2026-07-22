import { useEffect, useRef } from 'react'

/**
 * Animates elements into view when they enter the viewport.
 * Adds 'in-view' class to elements with 'animate-on-scroll'.
 */
export default function useScrollAnimation() {
  const ref = useRef(null)

  useEffect(() => {
    const elements = ref.current
      ? ref.current.querySelectorAll('.animate-on-scroll')
      : document.querySelectorAll('.animate-on-scroll')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return ref
}
