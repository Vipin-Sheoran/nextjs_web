import React,{useEffect} from 'react'
import Link from 'next/link'
import Aos from "aos";
import 'aos/dist/aos.css'

function About() {
    
        useEffect(() => {
         Aos.init({
           duration:1000
         })
        }, [])
    
    return (
             <div className='about pb-10 pt-10 md:px-60'>
             <div  className='mt-2 text-2xl uppercase underline pointer text-black font-sans font-semibold px-4' data-aos="fade-right">who we are</div>
             <p className="overflow-clip px-4 pt-2 txt-col">
             Sheoran International Packer & Mover were established in the year 2020. We are a best name in packers and movers industry. As a dedicated part of service industry we are committed to come up with the best service providers. Our members provide packing, moving of any kind of goods as well as Automobile Transportation , they extend their services in relocating , home based shifting , corporate shifting , door to door cargo shifting.
              A sincere approach is to facilitate our customers who think about relocation and shifting at any moment of time.

             </p>
             <p className="overflow-clip px-4 pt-6 txt-col">
             We realize the fact that packaging and shifting needs are going to big in today & corporate sector at a extent that a big service provider in shifting, relocating and moving packing industry is required for their customers who are willing to relocate from one place to another or in other terms who need to shift one place to some other place.
              As a committed and well-known organization in moving and ...
                 
             </p>
             <Link passHref href='/about-us'><button className='uppercase bt-color text-white px-2 mx-4 py-2 my-2'>know more</button></Link>
        </div>
    )
}

export default About
