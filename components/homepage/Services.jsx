import React,{useEffect} from 'react'
import Link from 'next/link'
import Aos from "aos";
import 'aos/dist/aos.css'
import ServiceProvided from './cards/Service/serviceprovided';
import Servicecard2 from './cards/Service/servicecard2';

function Services() {
    useEffect(() => {
        Aos.init({
          duration:1000
        })
       }, [])
    return (
        <div className='font-sans'>
            <ServiceProvided/>
            <div className='px-4 py-8 services-bg md:px-40 flex flex-col md:flex-row'>
               
                <Servicecard2/>
                    
            </div>

        </div>
    )
}

export default Services
