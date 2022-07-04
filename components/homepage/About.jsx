import React,{useEffect} from 'react'
import Link from 'next/link'
import Contact from '../contact'
import Aos from "aos";
import 'aos/dist/aos.css'

function About() {
  useEffect(() => {
    Aos.init({
      duration:1000
    })
   }, [])
  return (
      <div className='bg-gray-200'>
    <div className='flex flex-col bg-gray-800 md:flex-row'>
        <div className='flex py-auto flex-1 drop-shadow-2xl'>
            <div className='mx-8 mb-2 mt-4 md:mx-6'>
            <p data-aos="fade-right" className='mt-2 text-3xl uppercase pointer text-white font-sans font-extrabold md:px-4'>who we are</p>
            <h2 className='font-semibold md:px-4 overflow-clip mt-2 text-gray-400'>
            Sheoran International Packer & Mover were established in the year 2020. We are a best name in packers and movers industry. As a dedicated part of service industry we are committed to come up with the best service providers. Our members provide packing, moving of any kind of goods as well as Automobile Transportation , they extend their services in relocating , home based shifting , corporate shifting , door to door cargo shifting.
              A sincere approach is to facilitate our customers who think about relocation and shifting at any moment of time.
              We realize the fact that packaging and shifting needs are going to big in today & corporate sector at a extent that a big service provider in shifting, relocating and moving packing industry is required for their customers who are willing to relocate from one place to another or in...
            </h2>
              <Link passHref href='/about-us'><button className='uppercase bg-indigo-600 px-4 py-2 mt-4 font-bold text-white rounded-md hover:bg-indigo-500 md:mx-4 p-2 my-2'>know more</button></Link>
            </div>
        
        </div>
        <div className='flex-1 '>
            <Contact/>
        </div>
    </div>
    </div>
  )
}

export default About