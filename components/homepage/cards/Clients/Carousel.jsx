import React from 'react'
// import OwlCarousel from 'react-owl-carousel3';
import Image from 'next/dist/client/image';

function Carousel() {
    return (
        <div>
            <p data-aos="fade-right" className='text-3xl pt-8 uppercase text-black font-bold text-center'>
                our valuable clients
            </p>

            <div className='ml-6 md:ml-32 pt-10 pb-10 pb-4 relative flex flex-row z-0'>
                {/* <OwlCarousel className='owl-theme' loop={true} dots={true} autoplay> */}
                    <div className='item px-2 md:px-8'>
                        <Image alt='...loading' className='' width={100} height={100} src='/companylogo1.jpg' />
                    </div>
                    <div className='item px-2 md:px-16'>
                        <Image alt='...loading' className='w-32 h-28 md:h-32 md:w-24' width={100} height={100} src='/companylogo2.jpg' />
                    </div>
                    <div className='item px-2 md:px-16'>
                        <Image alt='...loading' className='w-32 h-28 md:h-32 md:w-24' width={100} height={100} src='/companylogo3.jpg' />
                    </div>
                    <div className='item px-2 md:px-16'>
                        <Image alt='...loading' className='w-32 h-28 md:h-32 md:w-24' width={100} height={100} src='/companylogo4.jpg' />
                    </div>
                    <div className='item px-2 md:px-16'>
                        <Image alt='...loading' className='w-32 h-28 md:h-32 md:w-24' width={100} height={100} src='/companylogo5.jpg' />
                    </div>

                {/* </OwlCarousel> */}
            </div>
        </div>
    )
}

export default Carousel
