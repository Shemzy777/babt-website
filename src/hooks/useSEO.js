/**
 * Helper to build consistent page titles and meta descriptions.
 * Usage: const { title, description } = useSEO({ title: 'Tax', description: '...' })
 */
export default function useSEO({ title, description, image } = {}) {
  const siteName = 'BABT Business Support Solutions'
  const defaultDescription = 'BABT Business Support Solutions provides comprehensive business support services including accounting, payroll, IT, tax, and risk management.'
  const defaultImage = ''

  return {
    title: title ? `${title} | ${siteName}` : siteName,
    description: description || defaultDescription,
    image: image || defaultImage,
    siteName,
  }
}
