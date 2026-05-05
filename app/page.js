import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ProductSlider from '@/components/ProductSlider'
import About from '@/components/About'
import Products from '@/components/products'
import Testimonials from '@/components/clients'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Flames from '@/components/Flames'


export default function Home() {
  return (
    <>
    <Flames />
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProductSlider />
        <Products />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}