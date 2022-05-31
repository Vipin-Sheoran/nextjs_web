import React,{useEffect} from 'react'
import Link from 'next/link'
import Aos from "aos";
import 'aos/dist/aos.css'
import Image from 'next/dist/client/image';

function Testimonials() { 
    useEffect(() => {
        Aos.init({
          duration:1000
        })
       }, [])
    return (
        <div>
            <div  className='testimonials-bg bg'>
            <p data-aos="fade-right" className='text-4xl pt-8 uppercase text-black font-bold text-center'>
            what our clients say
            </p>
            <div className='md:flex md:flex-row md:px-36'>
            <div className='p-4'>
            <div data-aos="" className='bg-black bg-opacity-50 w-full p-8 mt-6 md:w-96 md:h-64'>
                <div className='w-12 h-12 mx-auto w-12 h-12 mx-auto w-12 h-12 mx-auto'>
               <Image alt='...loading' className='' src='/commas.png' width={60} height={60}/>
               </div>
               <p className='text-center text-white pt-2 font-semibold'>Thanks, Sheoran International Packer & Mover for all your support to shift
                    my household goods Delhi To Bangalore</p>
             <p className='text-xl text-yellow-500 text-center font-bold'>Rajesh Mital</p>
             <p className='text-center text-white font-semibold'>( Delhi )</p>
            </div>
            </div>

            <div className='p-4'>
            <div data-aos="" className='bg-black bg-opacity-50 w-full p-8 mt-6 md:w-96 md:h-64'>
            <div className='w-12 h-12 mx-auto w-12 h-12 mx-auto w-12 h-12 mx-auto'>
               <Image alt='...loading' className='' src='/commas.png' width={60} height={60}/>
               </div>
               <p className='text-center text-white pt-2 font-semibold'>Professional service. We transfer my household Gurgaon to Mumbai. I received my goods safely.</p>
                    <p className='text-xl text-yellow-500 text-center font-bold'>Punam</p>
             <p className='text-center text-white font-semibold'>( Gurgaon )</p>
            </div>
            </div>

            <div className='p-4'>
            <div data-aos="" className='bg-black bg-opacity-50 w-full p-8 mt-6 md:w-96 md:h-64'>
            <div className='w-12 h-12 mx-auto w-12 h-12 mx-auto w-12 h-12 mx-auto'>
               <Image alt='...loading' className='' src='/commas.png' width={60} height={60}/>
               </div>
               <p className='text-center text-white pt-2 font-semibold'>Thanks again to your team. This is my 4 time hire Sheoran International Packer & Mover. 
               Quite low price but regarding service there is no other option over here.</p>
                    <p className='text-xl text-yellow-500 text-center font-bold'>Amit Sharma</p>
             <p className='text-center text-white font-semibold'>( Noida )</p>
            </div>
            </div>
            </div>
            </div>

            {/* <div className='md:flex md:flex-row md:pl-48 md:pr-48'>
                
            <div>
            <div className='md:w-80 md:h-48 pt-8 mx-4'>
            <Image alt='...loading' layout='responsive' width={280} height={150} src='/sheorancargomover3.jpg'/>
            </div>
            <p data-aos='fade-right' className='text-bg px-4 mt-4'>SIMPLIFIED PROCESS</p>
            <p className="overflow-clip px-4 pt-2 txt-col md:w-80">
            If you are packing and moving into or out of, a second home or a vacation home - let reliable ...
            </p>
            <Link passHref href='about-us'><button className='uppercase bt-color text-white px-2 mx-4 py-2 my-2'>read more</button></Link>
            </div>



            <div>
            <div className='md:w-80 md:h-48 pt-8 mx-4'>
            <Image alt='...loading' layout='responsive' width={280} height={150} src='/sheorancargomover4.jpg'/>
            </div>
            <p data-aos='fade-right' className='text-bg px-4 mt-4'>SECURE PACKING</p>
            <p className="overflow-clip px-4 pt-2 txt-col md:w-80">
            Sheoran International Packer & Mover provides Cardboard carton to wooden crates built with shock absorbers ...
            </p>
            <Link passHref href='about-us'><button className='uppercase bt-color text-white px-2 mx-4 py-2 my-2'>read more</button></Link>
            </div>

            <div>
            <div className='md:w-80 md:h-48 pt-8 mx-4'>
            <Image alt='...loading' layout='responsive' width={280} height={150} src='/sheorancargomover5.jpg'/>
            </div>
            <p data-aos='fade-right' className='text-bg px-4 mt-4'>AFFORDABLE PRICING</p>
            <p className="overflow-clip px-4 pt-2 txt-col md:w-80 ">
            Every Packers and Movers arranges a pre-move house survey to calculate the volume of your goods ...
            </p>
            <Link passHref href='about-us'><button className='uppercase bt-color text-white px-2 mx-4 py-2 my-2'>read more</button></Link>
            </div>
            </div>           */}
        </div>
    )
}

export default Testimonials
