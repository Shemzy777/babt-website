import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import PageBanner from '../../components/sections/PageBanner'

const legalPages = {
  'legal-and-privacy': {
    title: 'Legal and privacy',
    content: `
      <h2>Privacy Policy</h2>
      <p>BABT Business Support Solutions is committed to protecting the privacy and security of personal information. This policy explains how we collect, use, and protect your data in accordance with the Nigeria Data Protection Act (NDPA) 2023 and other applicable regulations.</p>

      <h2>Data we collect</h2>
      <p>We may collect personal information including your name, contact details, professional information, and data about your use of our website. This information is collected when you contact us, use our services, or browse our website.</p>

      <h2>How we use your data</h2>
      <p>We use personal data to provide professional services, communicate with you, improve our website, and comply with legal obligations. We will never sell your personal data to third parties.</p>

      <h2>Your rights</h2>
      <p>You have the right to access, correct, or request deletion of your personal data. To exercise these rights, please contact us at info@babt.com.</p>

      <h2>Cookies</h2>
      <p>This website uses cookies to improve your experience. Please see our Cookie Policy for more information.</p>

      <h2>Contact</h2>
      <p>For questions about this policy, contact: info@babt.com</p>
    `,
  },
  'disclaimer': {
    title: 'Disclaimer',
    content: `
      <h2>Disclaimer</h2>
      <p>The information contained in this website is for general information purposes only. BABT Business Support Solutions makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.</p>

      <p>Any reliance you place on such information is therefore strictly at your own risk. In no event will BABT Business Support Solutions be liable for any loss or damage including without limitation, indirect or consequential loss or damage arising from the use of this website.</p>
    `,
  },
  'cookies-policy': {
    title: 'Cookies Policy',
    content: `
      <h2>Cookie Policy</h2>
      <p>This website uses cookies to improve your experience. Cookies are small text files that are placed on your computer to collect standard internet log information and visitor behaviour information.</p>

      <h2>Types of cookies we use</h2>
      <p><strong>Essential cookies</strong> — These are necessary for the website to function properly and cannot be switched off.</p>
      <p><strong>Analytical cookies</strong> — These help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
      <p><strong>Marketing cookies</strong> — These are used to make advertising messages more relevant to you and your interests.</p>

      <h2>Managing cookies</h2>
      <p>You can choose to accept or decline cookies using our cookie consent banner. You can also manage cookies through your browser settings at any time.</p>
    `,
  },
  'accessibility': {
    title: 'Accessibility',
    content: `
      <h2>Accessibility Statement</h2>
      <p>BABT Business Support Solutions is committed to making its website accessible to all users, including those with disabilities. We aim to comply with WCAG 2.1 Level AA standards.</p>

      <h2>Features</h2>
      <p>This website includes keyboard navigation support, appropriate colour contrast, alternative text for images, and responsive design for all screen sizes.</p>

      <h2>Feedback</h2>
      <p>If you experience any accessibility issues, please contact us at info@babt.com and we will do our best to accommodate your needs.</p>
    `,
  },
}

export default function LegalPage() {
  const { slug } = useParams()
  const page = legalPages[slug]

  if (!page) {
    return (
      <div className="container section-padding text-center">
        <h1 className="font-display text-3xl font-bold mb-4">Page not found</h1>
        <Link to="/ng/en" className="text-brand-blue hover:underline">Go to homepage</Link>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>{page.title} | BABT Business Support Solutions</title>
      </Helmet>

      <PageBanner
        title={page.title}
        breadcrumbs={[
          { label: 'Home', href: '/ng/en' },
          { label: page.title },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="container">
          <div
            className="max-w-3xl prose prose-neutral prose-headings:font-display prose-headings:text-neutral-900 prose-p:text-neutral-600 prose-p:leading-relaxed prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4"
            dangerouslySetInnerHTML={{ __html: page.content }}
          />
        </div>
      </section>
    </>
  )
}
