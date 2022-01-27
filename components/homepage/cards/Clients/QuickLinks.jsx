import React from 'react'
import FastForwardIcon from '@material-ui/icons/FastForward';
import Link from 'next/dist/client/link';

function QuickLinks() {
    return (
        <div className='flex-0.5'>
            <p data-aos='fade-right' className='uppercase text-white text-xl font-semibold pl-4 pt-8'>quick links</p>
                <div className='pt-4 '>
                <div className='text-yellow-500 mb-0 md:mb-2 pl-4 flex flex-row'>
                <div><FastForwardIcon/></div>
                <Link href='/'><div className='text-white pl-2 text-gray-400 '>Home Page</div></Link>
                </div>

                <div className='text-yellow-500 mb-0 md:mb-2 pl-4 flex flex-row'>
                <div><FastForwardIcon/></div>
                <Link href='about-us'><div className='text-white pl-2 text-gray-400'>About Us</div></Link>
                </div>

                <div className='text-yellow-500 mb-0 md:mb-2 pl-4 flex flex-row'>
                <div><FastForwardIcon/></div>
                <Link href=''><div className='text-white pl-2 text-gray-400'>Why Choose Us?</div></Link>
                </div>

                <div className='text-yellow-500 mb-0 md:mb-2 pl-4 flex flex-row'>
                <div><FastForwardIcon/></div>
                <div className='text-white pl-2 text-gray-400'>Clients</div>
                </div>

                <div className='text-yellow-500 mb-0 md:mb-2 pl-4 flex flex-row'>
                <div><FastForwardIcon/></div>
                <Link href='get-a-qoute'><div className='text-white pl-2 text-gray-400'>Get A Quote</div></Link>
                </div>

                <div className='text-yellow-500 mb-0 md:mb-2 pl-4 flex flex-row'>
                <div><FastForwardIcon/></div>
                <div className='text-white pl-2 text-gray-400'>Contact Us</div>
                </div></div>
        </div>
    )
}

export default QuickLinks
