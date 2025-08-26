import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CookieConsent } from '@/components/CookieConsent'
import Analytics from '@/components/Analytics'
import ModerationModal from './moderation-modal'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <div className="container mt-8"><ModerationModal /></div>
      <Footer />
      <CookieConsent />
      <Analytics />
    </>
  )
}