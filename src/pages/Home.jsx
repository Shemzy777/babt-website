import { Helmet } from 'react-helmet-async'
import HeroSection        from '../components/ui/HeroSection'
import WhatWeDoSection    from '../components/sections/WhatWeDoSection'
import AboutNigeriaSection from '../components/sections/AboutNigeriaSection'
import VisionMissionSection from '../components/sections/VisionMissionSection'
import WorldwideSection   from '../components/sections/WorldwideSection'
import InsightsPreview    from '../components/sections/InsightsPreview'
import JoinUsSection      from '../components/sections/JoinUsSection'
import ContactSection     from '../components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>BABT Business Support Solutions | Comprehensive Business Services</title>
        <meta
          name="description"
          content="BABT Business Support Solutions provides comprehensive services including accounting, payroll, IT, tax, and risk management to help your business succeed."
        />
      </Helmet>

      {/* 1 — Photography hero, blue-navy overlay, stat strip */}
      <HeroSection />

      {/* 2 — Services / Industries card grid */}
      <WhatWeDoSection />

      {/* 3 — Nigeria presence split (photo + content) */}
      <AboutNigeriaSection />

      {/* 4 — Vision & Mission */}
      <VisionMissionSection />

      {/* 7 — Why choose us (navy band) */}
      <JoinUsSection />

      {/* 8 — Contact tiles */}
      <ContactSection />
    </>
  )
}
