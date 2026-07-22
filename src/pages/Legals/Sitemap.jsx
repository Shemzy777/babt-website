import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageBanner from '../../components/sections/PageBanner'
import navData from '../../data/navigation.json'

export default function Sitemap() {
  return (
    <>
      <Helmet>
        <title>Sitemap | BABT Business Support Solutions</title>
      </Helmet>

      <PageBanner
        title="Sitemap"
        breadcrumbs={[
          { label: 'Home', href: '/ng/en' },
          { label: 'Sitemap' },
        ]}
        dark={false}
      />

      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div>
              <Link to="/ng/en" className="font-display font-bold text-neutral-900 hover:text-brand-blue block mb-4">
                Home
              </Link>
            </div>
            {navData.footerNav.columns.map(col => (
              <div key={col.title}>
                <Link
                  to={col.href}
                  className="font-display font-bold text-neutral-900 hover:text-brand-blue block mb-4"
                >
                  {col.title}
                </Link>
                <ul className="space-y-2">
                  {col.links.map(link => (
                    <li key={link.href}>
                      <Link
                        to={link.href}
                        className="text-sm text-neutral-600 hover:text-brand-blue transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-neutral-200">
            <h2 className="font-display font-bold text-neutral-900 mb-4">Legal pages</h2>
            <ul className="flex flex-wrap gap-x-8 gap-y-2">
              {navData.footerNav.legal.map(link => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-neutral-600 hover:text-brand-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
