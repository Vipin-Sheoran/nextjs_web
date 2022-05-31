import Header2 from '../components/Header'
import Contact from '../components/contact'
// import About from '../components/homepage/aboutus'
import About from '../components/homepage/About'
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
      <title>Sheoran International Packers and Movers</title>
        <meta
          name="description"
          content="Sheoran International Packers and Movers have established ourselves as a leading company in the field of Packing & Moving offering exclusive and unique USPs. We serve over 15 locations across the country and have 15 self-owned, fully computerized branches. These branches are completely inter-connected in order to keep a track of the status of your valuable goods from the time of loading till delivery"
        />
        <meta name='keywords'
        content='best packers and movers gurgaon
        best packers and movers from gurgaon to bangalore
        best packers and movers gurgaon gurugram haryana
        top 5 packers and movers gurgaon
        best packers and movers gurugram haryana
        top 5 packers and movers in gurgaon
        best packers and movers from gurgaon to mumbai'/>
        <meta name='keywords'
        content='Dlf phase V Gurgaon , dlf phase I Gurgaon , sohna road gurgaon , Sector 56 gurgaon , 
        Sector 49 gurgaon , Sector 65 gurgaon , dlf phase IV gurgaon , cyber city gurgaon , signature tower gurgaon , Sector 55 gurgaon , Sector 52 gurgaon ,  sector 31 gurgaon, Sector 46 gurgaon, sector 42 gurgaon, dlf phase 3 gurgaon, dlf phase 2 gurgaon, golf course road gurgaon,  Nirvana Country gurgaon, South City 1 gurgaon , 
        South City 2 gurgaon, dlf City gurgaon, Sushant lock gurgaon,  suncity gurgaon,  Central park sohna road gurgaon'/>
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
     {/* <Contact/> */}
     <About/>
     <hr/>
     {/* <Whyus/> */}
     <Bottomwhy/>
     <hr/>
     <Services/>
     <Testimonials/>
     <Clients/>
     <Footer/>
    </div>

  )
}
