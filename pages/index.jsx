import Header2 from '../components/Header'
import Contact from '../components/contact'
import About from '../components/homepage/aboutus'
import Whyus from '../components/homepage/whyus'
import Bottomwhy from '../components/homepage/bottomwhy'
import Services from '../components/homepage/Services'
import Testimonials from '../components/homepage/Testimonials'
import Clients from '../components/homepage/Clients'
import Footer from '../components/Footer'
import Carousel from '../components/Caraousel/Carousel'
import Head from 'next/head'
export default function Home() {

  return (
    <div>
      <Head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
      </Head>
    <a
        href="https://wa.me/+919870285680"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>
     <Header2/>
     <Carousel/>
     <Contact/>
     <About/>
     <Whyus/>
     <Bottomwhy/>
     <Services/>
     <Testimonials/>
     <Clients/>
     <Footer/>
    </div>

  )
}
