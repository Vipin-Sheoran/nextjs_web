import React from 'react'
import TimelapseIcon from '@material-ui/icons/Timelapse';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import LockIcon from '@material-ui/icons/Lock';

function WhyChooseUs() {
    return (
        <div>
            <p className='uppercase text-center text-bg bg-black p-4 text-justify text-white'>why choose us?</p>
            <div className='flex flex-row'>
                <div className='text-red-600 pt-4'><TimelapseIcon style={{ fontSize: '48px' }} /></div>
                <div>
                    <p className='text-bg px-4 mt-4 uppercase'>24/7 support</p>
                    <p className="overflow-clip px-4 pt-2 txt-col ">
                        Our moving & customer care services are open for you all the time.
                    </p>
                </div>
            </div>
            <div className='flex flex-row'>
                <div className='text-red-600 pt-4'><LocationOnIcon style={{ fontSize: '48px' }} /></div>
                <div>
                    <p className='text-bg px-4 mt-4 uppercase'>AVAILABLE AT YOUR LOCATION</p>
                    <p className="overflow-clip px-4 pt-2 txt-col ">
                        We serve over 15 locations across the country and have 15 self-owned, fully computerized branches.
                    </p>
                </div>
            </div>
            <div className='flex flex-row'>
                <div className='text-red-600 pt-4'><AllInboxIcon style={{ fontSize: '48px' }} /></div>
                <div>
                    <p className='text-bg px-4 mt-4 uppercase'>WORLD CLASS PACKING</p>
                    <p className="overflow-clip px-4 pt-2 txt-col ">
                        We are expert in handling, Sheoran Cargo Movers and packing & shifting of household
                        goods, office goods, commercial equipment and car, logistics and transportation.
                    </p>
                </div>
            </div>
            <div className='flex flex-row'>
                <div className='text-red-600 pt-4'><LocalShippingIcon style={{ fontSize: '48px' }} /></div>
                <div>
                    <p className='text-bg px-4 mt-4 uppercase'>QUICK AND FAST DILIVERY</p>
                    <p className="overflow-clip px-4 pt-2 txt-col ">
                        We understand that time is precious for you and helps you relocate at the
                        earliest and start your new life at your new destination.
                    </p>
                </div>
            </div>
            <div className='flex flex-row'>
                <div className='text-red-600 pt-4'><LockIcon style={{ fontSize: '48px' }} /></div>
                <div>
                    <p className='text-bg px-4 mt-4 uppercase'>100% safety</p>
                    <p className="overflow-clip px-4 pt-2 txt-col ">
                        Put your own lock on the cubes/containers and unlock at your end for 100% safety assurance.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs
