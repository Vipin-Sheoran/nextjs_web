import React from 'react'
import Link from 'next/dist/client/link'
import Image from 'next/dist/client/image'

function Services() {
    return (
        <div className='flex-1 ml-4 mr-4 md:ml-32'>
            <p data-aos='fade-right' className='uppercase text-white text-xl font-semibold pt-8'>services</p>
        <div className='flex flex-col md:flex-row'>
            
            <div className='divide-y-4 divide-yellow-600 divide-dashed py-4 mr-0 md:mr-6'>
            <div className='flex flex-row pt-4'>
                <div>
                 <Image alt='...loading' width={50} height={50} src='/sheorancargomover7.png'/>
                </div>
                <div>
                <Link href='/household-relocation'><p className='text-white pl-2 text-gray-400'>Household Relocation</p></Link>
                </div>
                </div>

                <div className='flex flex-row pt-4'>
                <div>
                 <Image alt='...loading' width={50} height={50} src='/sheorancargomover17.jpg'/>
                </div>
                <div>
                <Link href='international-shifting'><p className='text-white pl-2 text-gray-400'>International Shifting</p></Link>
                </div>
                </div>
                <div className='flex flex-row pt-4'>
                <div>
                 <Image alt='...loading' width={50} height={50} src='/sheorancargomover8.jpg'/>
                </div>
                <div>
                <Link href='/warehouse'><p className='text-white pl-2 text-gray-400'>Ware Housing/Storage</p></Link>
                </div>
                </div>
                
                
            </div>
            
                <div className='divide-y-4 divide-yellow-600 divide-dashed py-4'>

                <div className='flex flex-row pt-4'>
                <div>
                 <Image alt='...loading' width={50} height={50} src='/sheorancargomover9.jpg'/>
                </div>
                <div>
                <Link href='/vehicle-transportation'><p className='text-white pl-2 text-gray-400'>Vehicles Transportations</p></Link>
                </div>
                </div>

                
                <div className='flex flex-row pt-4'>
                <div>
                 <Image alt='...loading' width={50} height={50} src='/sheorancargomover10.jpg'/>
                </div>
                <div>
                <Link href='/loading-unloading'><p className='text-white pl-2 text-gray-400'>Loading & Unloading</p></Link>
                </div>
                </div>

                <div className='flex flex-row pt-4'>
                <div>
                 <Image alt='...loading' width={50} height={50} src='/sheorancargomover11.png'/>
                </div>
                <div>
                <Link href='/commercial'><p className='text-white pl-2 text-gray-400'>Commercial Goods</p></Link>
                </div>
                </div>
                
            </div>
            </div>
                
                

        </div>
    )
}

export default Services
