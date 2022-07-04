import React,{useEffect,useState,useRef} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/dist/client/image';
import Aos from "aos";
import 'aos/dist/aos.css'
import Link from 'next/link';

export default function Carousel1() {
    useEffect(() => {
        Aos.init({
          duration:1000
        })
       }, [])

    return <div className='topbar pt-32 pb-20 '>
        {/* <Carousel autoPlay={true} infiniteLoop={true} autoFocus={true} showStatus={false} axis='horizontal' showThumbs={false} showIndicators={false}>
            
            <div> */}
            {/* <div className='opacity-80 hidden md:block'>
            <Image layout="responsive" objectFit="cover" width={1600} height={620} src="/sheorancargomover3.jpg" />
            </div>
            <div className='opacity-80 block md:hidden'>
            <Image layout="responsive" objectFit="cover" width={1600} height={1100} src="/sheorancargomover3.jpg" />
            </div>
                 */}
                {/* <div className="absolute txt-black top-1/2 top-3.5/4 md:inset-x-1/3 text-blue-500 mx-6 md:mx-0">
                    <p className='bg-black bg-opacity-70 border-blue-900 border-2 md:bg-opacity-80 p-0.5 rounded-lg md:p-4 uppercase text-base md:text-6xl md:font-extrabold'>We make moving {words[index]}</p>
                    <p className='bg-black bg-opacity-70 border-blue-900 border-2 md:bg-opacity-80 p-0.5 rounded-lg md:p-4 mt-2 text-sm md:text-3xl'>
                    Household shifting a comfortable and hassle free process by our household shifting service.
                    </p>
                    <button className='uppercase hover:bg-yellow-400 hover:bg-opacity-80 m-auto hidden md:block mt-2 py-2 px-6 rounded-lg border-blue-900 border-2 bg-black bg-opacity-70 md:bg-opacity-80 font-semibold text-white'>know more</button>
                </div> */}
                <div className='mx-2 md:space-y-2 text-center md:text-left bg-white bg-opacity-50 p-8'>
                  <h1 className='text-[#182937] text-lg md:text-2xl font-bold'>PROVIDE BEST MOVING SERVICE</h1>
                  <p data-aos="fade-right" className='text-indigo-700 text-2xl md:text-6xl font-extrabold'>Sheoran International Packers</p>
                  <p data-aos="fade-right" className='text-indigo-700 text-2xl md:text-6xl font-extrabold truncate ease-linear text-clip'>And Movers</p>
                  <p className='md:font-bold md:text-xl text-md font-medium'>We make shifting a comfortable and hassle free process by our overall shifting services.</p>
                  {/* <p className='md:font-bold md:text-xl text-md font-medium'>free process by our overall shifting services.</p> */}
                  <Link href={`/contact-us`} passHref><button className='bg-yellow-400 p-2 mt-2 font-bold text-white rounded-md hover:bg-yellow-300'>GET STARTED</button></Link>
                </div>

            </div>
            {/* <div>
                <Image width={1600} height={800} src="/sheorancargomover20.jpg" />
                <div className="absolute txt-black top-1/2 top-3.5/4 md:inset-x-1/3 text-blue-500 mx-6 md:mx-0">
                    <p className='bg-black bg-opacity-70 border-blue-900 border-2 md:bg-opacity-80 p-0.5 rounded-lg md:p-4 uppercase text-base md:text-6xl md:font-extrabold'>household relocation</p>
                    <p className='bg-black bg-opacity-70 border-blue-900 border-2 md:bg-opacity-80 p-0.5 rounded-lg md:p-4 mt-2 text-sm md:text-3xl'>
                    Household shifting a comfortable and hassle free process by our household shifting service.
                    </p>
                    <button className='uppercase hover:bg-yellow-400 hover:bg-opacity-80 m-auto hidden md:block mt-2 py-2 px-6 rounded-lg border-blue-900 border-2 bg-black bg-opacity-70 md:bg-opacity-80 font-semibold text-white'>know more</button>
                </div>

            </div>
            <div>
                <Image width={1600} height={800} src="/sheorancargomover3.jpg" />
                <div className="absolute txt-black top-1/2 top-3.5/4 md:inset-x-1/3 text-blue-500 mx-6 md:mx-0">
                    <p className='bg-black bg-opacity-70 border-blue-900 border-2 md:bg-opacity-80 p-0.5 rounded-lg md:p-4 uppercase text-base md:text-6xl md:font-extrabold'>household relocation</p>
                    <p className='bg-black bg-opacity-70 border-blue-900 border-2 md:bg-opacity-80 p-0.5 rounded-lg md:p-4 mt-2 text-sm md:text-3xl'>
                    Household shifting a comfortable and hassle free process by our household shifting service.
                    </p>
                    <button className='uppercase hover:bg-yellow-400 hover:bg-opacity-80 m-auto hidden md:block mt-2 py-2 px-6 rounded-lg border-blue-900 border-2 bg-black bg-opacity-70 md:bg-opacity-80 font-semibold text-white'>know more</button>
                </div>

            </div> */}
    //     </Carousel>
    // </div>;
}

