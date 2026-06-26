import SiteHeader from '../components/layout/SiteHeader'
import SiteFooter from '../components/layout/SiteFooter'
import HeroSection from '../components/features/HeroSection'
import ManifestStrip from '../components/features/ManifestStrip'
import DestinationsGrid from '../components/features/DestinationsGrid'
import AboutSection from '../components/features/AboutSection'
import ParentAccessPanel from '../components/features/ParentAccessPanel'

export default function MarketingSite() {
  return (
    <div className="min-h-screen bg-paper">
      <SiteHeader />
      <main>
        <HeroSection />
        <div className="border-t border-line">
          <ManifestStrip />
        </div>
        <div className="border-t border-line">
          <DestinationsGrid />
        </div>
        <div className="border-t border-line">
          <AboutSection />
        </div>
        <ParentAccessPanel />
      </main>
      <SiteFooter />
    </div>
  )
}
