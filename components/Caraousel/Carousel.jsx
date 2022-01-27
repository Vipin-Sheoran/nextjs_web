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
                <div className="absolute txt-black top-1/2 md:top-3/4 inset-x-1/3 text-blue-500">
                    <p className='bg-black p-2 rounded-lg md:p-4'>Legend 1</p>
                    <p className='bg-black p-2 rounded-lg md:p-4 mt-2 text-base'>Details</p>
                </div>

            </div>
            <div>
                <Image width={1600} height={800} src="/sheorancargomover20.jpg" />
                <div className="absolute txt-black top-1/2 md:top-3/4 inset-x-1/3 text-blue-500">
                    <p className='bg-black p-2 rounded-lg md:p-4'>Legend 2</p>
                    <p className='bg-black p-2 rounded-lg md:p-4 mt-2 text-base'>Details</p>
                </div>

            </div>
            <div>
                <Image width={1600} height={800} src="/sheorancargomover3.jpg" />
                <div className="absolute txt-black top-1/2 md:top-3/4 inset-x-1/3 text-blue-500">
                    <p className='bg-black p-2 rounded-lg md:p-4'>Legend 3</p>
                    <p className='bg-black p-2 rounded-lg md:p-4 mt-2 text-base'>Details</p>
                </div>

            </div>
        </Carousel>
    </div>;
}

