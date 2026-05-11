import Navbar from '@/components/Navbar'
import HeroBanner from '@/components/HeroBanner'
import TrendingPlants from '@/components/TrendingPlants'
import TopSelling from '@/components/TopSelling'
import CustomerReviews from '@/components/CustomerReviews'
import O2Plants from '@/components/O2Plants'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a2318]">
      <Navbar />
      <HeroBanner />
      <TrendingPlants />
      <TopSelling />
      <CustomerReviews />
      <O2Plants />
      <Footer />
    </main>
  )
}
