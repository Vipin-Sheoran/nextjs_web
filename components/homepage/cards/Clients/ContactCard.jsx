import React from 'react'
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';

function ContactCard() {
    return (
        <div>
            <div className='clients-bg p-4'>
               <p className='text-white text-xl md:text-center'>If You Have Any Moveing Need, Simply Call Us 24 Hour Available</p>
               <p className='text-2xl semibold text-white pt-2 pb-8 md:text-center'>Shifting-Domestic & International</p>

               <div className=''>
               <div className=' h-20 w-20 rounded-full bg-white ring-4 ring-yellow-500 pl-4 pt-6 mb-4 m-auto text-red-500'>
               <PhoneInTalkIcon  style={{ fontSize: '48px' }}/>
            </div>
            <div data-aos='fade-right' className='text-2xl semibold text-white pt-2 pb-8 text-center'>+91 9870285680</div></div>
            </div>
        </div>
    )
}

export default ContactCard
