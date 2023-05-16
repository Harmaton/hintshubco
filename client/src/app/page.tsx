import Image from 'next/image';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Testimonials from '../components/Reviews'
import Statistics from '../components/Statistics'
import Contact from '../components/Contact'
import Carousel from '../components/Carousel'
import Newsletter from '../components/Newsletter'
import Whatsapp from '../components/Whatsapp'
import FAQAccordion from '../components/FAQAccordion'
import ProductList from '../components/ProductList'
import About from '../components/About'

export default function Home() {
  return (
    <>
    <Nav />
    <Hero />
    <ProductList />
    <Carousel />
    <About />
    <Statistics />
    <FAQAccordion />
    <Testimonials />
    <Contact />
    <Newsletter />
    <Whatsapp />
    <Footer />
    </>
  )
}
