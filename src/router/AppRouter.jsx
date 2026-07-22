import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from '../components/layout/Layout'

// Pages
import Home from '../pages/Home'
import IndustriesIndex from '../pages/Industries/index'
import IndustryDetail from '../pages/Industries/IndustryDetail'
import ServicesIndex from '../pages/Services/index'
import ServiceDetail from '../pages/Services/ServiceDetail'
import InsightsIndex from '../pages/Insights/index'
import InsightDetail from '../pages/Insights/InsightDetail'
import WhoWeAreIndex from '../pages/WhoWeAre/index'
import WhoWeAreDetail from '../pages/WhoWeAre/WhoWeAreDetail'
import ContactIndex from '../pages/Contact/index'
import EnquiryForm from '../pages/Contact/EnquiryForm'
import OurPeople from '../pages/Contact/OurPeople'
import Offices from '../pages/Contact/Offices'
import OfficeDetail from '../pages/Contact/OfficeDetail'
import LegalPage from '../pages/Legals/LegalPage'
import Sitemap from '../pages/Legals/Sitemap'
import Careers from '../pages/Careers/index'
import NotFound from '../pages/NotFound'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/ng/en" replace />} />
      <Route path="/ng/en" element={<Layout />}>
        <Route index element={<Home />} />

        {/* Industries */}
        <Route path="industries" element={<IndustriesIndex />} />
        <Route path="industries/:slug" element={<IndustryDetail />} />

        {/* Services */}
        <Route path="services" element={<ServicesIndex />} />
        <Route path="services/:slug" element={<ServiceDetail />} />
        <Route path="services/:slug/:subslug" element={<ServiceDetail />} />

        {/* Insights */}
        <Route path="insights" element={<InsightsIndex />} />
        <Route path="insights/:category" element={<InsightsIndex />} />
        <Route path="insights/:category/:slug" element={<InsightDetail />} />

        {/* Who We Are */}
        <Route path="who-we-are" element={<WhoWeAreIndex />} />
        <Route path="who-we-are/:slug" element={<WhoWeAreDetail />} />
        <Route path="who-we-are/:slug/:subslug" element={<WhoWeAreDetail />} />

        {/* Contact */}
        <Route path="contact-us" element={<ContactIndex />} />
        <Route path="contact-us/enquiry-form" element={<EnquiryForm />} />
        <Route path="contact-us/our-people" element={<OurPeople />} />
        <Route path="offices" element={<Offices />} />
        <Route path="offices/:city" element={<OfficeDetail />} />

        {/* Careers */}
        <Route path="careers" element={<Careers />} />

        {/* Legals */}
        <Route path="legals/:slug" element={<LegalPage />} />
        <Route path="sitemap" element={<Sitemap />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="*" element={<Navigate to="/ng/en" replace />} />
    </Routes>
  )
}
