import React, { useEffect, useRef } from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SendIcon from '@material-ui/icons/Send';
import TimerIcon from '@material-ui/icons/Timer';
import Aos from "aos";
import 'aos/dist/aos.css'
import Image from 'next/image'


function WhyUs() {
    useEffect(() => {
        Aos.init({
          duration:1000
        })
       }, [])
    
    return (
        <div className='mt-4'>
            
            <div data-aos="fade-right" className='text-center text-2xl uppercase underline pointer text-black font-semibold px-4'>why choose us?</div>

        
        <p className="overflow-clip pt-2 txt-col text-center">
        We are Sheoran International Packer & Mover providing India’s most preferable moving services. We carry your Emotions, not just Goods
        </p>
    <p className='flex flex-row justify-center'>
    <div className='text-yellow-400 pl-4 text-8xl mt-24' data-aos="fade-right">10</div>
    <div className=''> 
    {/* <img src='/sheorancargomover18.jpg'/> */}
    <Image height={400} width={500} alt='image' src='/sheorancargomover18.jpg'/>
    </div>
    {/* https://media.istockphoto.com/photos/empty-shopping-cart-isolated-on-white-background-picture-id114308468?k=6&m=114308468&s=170667a&w=0&h=J3o0vf3jgFHOlo9JqHVZoA9VH8pzFkLLR8lkNTkb3nY= */}
       </p>
       <p className='text-2xl text-center' data-aos="fade-right">Years of Experiance</p>
       <p className="overflow-clip pt-2 text-bg txt-col text-center md:px-60">
       We have established ourselves as a leading company in the field of Packing & Moving offering exclusive and unique USPs. We serve over 15 locations across the country and have 15 self-owned, fully computerized branches. These branches are completely
        inter-connected in order to keep a track of the status of your valuable goods from the time of loading till delivery.
       </p>
       <p className="overflow-clip pt-6 txt-col text-center pb-8 md:px-60">
       We have special potted plants carriers to carry your plants safely and separately along with other household goods without any breakage. They are designed in such a manner that the plants get fixed at a place where it is open to air as well as sun. Special cages for
        pets are designed keeping in mind the absolute level of comfort and safety of your pets.
       </p>     
    </div>
    )
}

export default WhyUs
