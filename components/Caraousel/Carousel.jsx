import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/dist/client/image';
import Aos from "aos";
import 'aos/dist/aos.css'

export default function Carousel1() {

    return <div>
        <Carousel autoPlay={true} infiniteLoop={true} autoFocus={true} showStatus={false} axis='horizontal' showThumbs={false} showIndicators={false}>
            <div>
                <Image width={1600} height={800} src="/sheorancargomover1.jpg" />
                <div className="absolute txt-black top-1/2 top-3.5/4 md:inset-x-1/3 text-blue-500 mx-2">
                    <p className='bg-black bg-opacity-70 border-blue-900 border-2 md:bg-opacity-80 p-2 rounded-lg md:p-4 uppercase text-base md:text-xl'>household relocation</p>
                    <p className='bg-black bg-opacity-70 border-blue-900 border-2 md:bg-opacity-80 p-2 rounded-lg md:p-4 mt-2 text-sm md:text-lg'>
                    Household shifting a comfortable and hassle free process by our household shifting service.
                    </p>
                    <button className='uppercase hover:bg-yellow-400 hover:bg-opacity-80 m-auto hidden md:block mt-2 py-2 px-6 rounded-lg border-blue-900 border-2 bg-black bg-opacity-70 md:bg-opacity-80 font-semibold text-white'>know more</button>
                </div>

            </div>
            <div>
                <Image width={1600} height={800} src="/sheorancargomover20.jpg" />
                <div className="absolute txt-black top-1/2 top-3.5/4 md:inset-x-1/3 text-blue-500 mx-2">
                    <p className='bg-black bg-opacity-70 border-blue-900 border-2 md:bg-opacity-80 p-2 rounded-lg md:p-4 uppercase text-base md:text-xl'>household relocation</p>
                    <p className='bg-black bg-opacity-70 border-blue-900 border-2 md:bg-opacity-80 p-2 rounded-lg md:p-4 mt-2 text-sm md:text-lg'>
                    Household shifting a comfortable and hassle free process by our household shifting service.
                    </p>
                    <button className='uppercase hover:bg-yellow-400 hover:bg-opacity-80 m-auto hidden md:block mt-2 py-2 px-6 rounded-lg border-blue-900 border-2 bg-black bg-opacity-70 md:bg-opacity-80 font-semibold text-white'>know more</button>
                </div>

            </div>
            <div>
                <Image width={1600} height={800} src="/sheorancargomover3.jpg" />
                <div className="absolute txt-black top-1/2 top-3.5/4 md:inset-x-1/3 text-blue-500 mx-2">
                    <p className='bg-black bg-opacity-70 border-blue-900 border-2 md:bg-opacity-80 p-2 rounded-lg md:p-4 uppercase text-base md:text-xl'>household relocation</p>
                    <p className='bg-black bg-opacity-70 border-blue-900 border-2 md:bg-opacity-80 p-2 rounded-lg md:p-4 mt-2 text-sm md:text-lg'>
                    Household shifting a comfortable and hassle free process by our household shifting service.
                    </p>
                    <button className='uppercase hover:bg-yellow-400 hover:bg-opacity-80 m-auto hidden md:block mt-2 py-2 px-6 rounded-lg border-blue-900 border-2 bg-black bg-opacity-70 md:bg-opacity-80 font-semibold text-white'>know more</button>
                </div>

            </div>
        </Carousel>
    </div>;
}

