import React from 'react'
import Link from 'next/dist/client/link'
import Image from 'next/dist/client/image'

function ServicesOffered() {
    return (
        <div className=''>
            <h1 className='uppercase text-center text-bg bg-black p-4 text-justify text-white'>services offered</h1>
                            <div className='flex flex-row about cursor-pointer'>
                                <div className='px-4 py-2 h-32 w-32'><Image width={90} height={60} src='/sheorancargomover2.jpg' alt='CORPORATE-RELOCATION' /></div>
                                <Link passHref href='/services/corporate-relocation'><div className='px-4 py-2'>CORPORATE RELOCATION</div></Link>
                            </div>
                            <div className='flex flex-row about cursor-pointer'>
                                <div className='px-4 py-2 h-32 w-32'><Image width={90} height={60} src='/sheorancargomover15.jpg' alt='INTERNATIONAL-SHIFTING' /></div>
                                <Link passHref href='/services/international-shifting'><div className='px-4 py-2'>INTERNATIONAL SHIFTING</div></Link>
                            </div>
                            <div className='flex flex-row about cursor-pointer'>
                                <div className='px-4 py-2 h-32 w-32'><Image width={90} height={60} src='/sheorancargomover19.jpg' alt='HOUSE-RELOCATION' /></div>
                                <Link passHref href='/services/household-relocation'><div className='px-4 py-2'>HOUSE RELOCATION</div></Link>
                            </div>
                            <div className='flex flex-row about cursor-pointer'>
                                <div className='px-4 py-2 h-32 w-32'><Image width={90} height={60} src='/sheorancargomover20.jpg' alt='WAREHOUSE/STORAGE' /></div>
                                <Link passHref href='/services/warehouse'><div className='px-4 py-2'>WAREHOUSE/STORAGE</div></Link>
                            </div>
                            <div className='flex flex-row about cursor-pointer'>
                                <div className='px-4 py-2 h-32 w-32'><Image width={90} height={60} src='/sheorancargomover21.jpg' alt='VEHICLE-TRANSPORTATION' /></div>
                                <Link passHref href='/services/vehicle-transportation'><div className='px-4 py-2'>VEHICLE TRANSPORTATION</div></Link>
                            </div>
                            <div className='flex flex-row about cursor-pointer'>
                                <div className='px-4 py-2 h-32 w-32'><Image width={90} height={60} src='/sheorancargomover10.jpg' alt='LOADING/UNLOADING' /></div>
                                <Link passHref href='/services/loading-unloading'><div className='px-4 py-2'>LOADING & UNLOADING</div></Link>
                            </div>
                            <div className='flex flex-row about cursor-pointer'>
                                <div className='px-4 py-2 h-32 w-32'><Image width={90} height={60} src='/sheorancargomover11.png' alt='COMMERCIAL-GOODS' /></div>
                                <Link passHref href='/services/commercial'><div className='px-4 py-2'>COMMERCIAL GOODS</div></Link>
                            </div>
                            
        </div>
    )
}

export default ServicesOffered
