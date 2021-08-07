import Head from 'next/head'
import Header from './components/Header'
import Contact from './components/Contact'
import About from './components/About'
import Slider from './components/Slider'
import Why from './components/Why'
export default function Home() {
  return (
    <div>
     <Header/>
     {/* <Slider/> */}
     <Contact/>   
     <About/> 
     <Why/>
    </div>

  )
}
