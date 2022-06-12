import Header2 from "../components/Header"
import Footer from "../components/Footer"
import Clients from "../components/homepage/Clients"
import Contact from '../components/contact'
import ServicesOffered from "../components/ServicesOffered/ServicesOffered"
import WhyChooseUs from "../components/WhyUs/WhyChooseUs"
import HomeIcon from '@material-ui/icons/Home';
import SecurityIcon from '@material-ui/icons/Security';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import LockIcon from '@material-ui/icons/Lock';
import Image from "next/dist/client/image"
import Head from 'next/head'

export default function contactus(){
    return (
        <div>
            <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Sheoran International Packer and Mover were established in the year 2020 by Praveen Sheoran.
           We are a leading name in packers and movers industry. 
          As a dedicated part of service industry we are committed to come up with the best service providers."
        />
        <meta name='Keywords'
        content='movers,packers,praveen sheoran,gurugram,banglore,delhi,Sheoran Cargo Movers & Packers,house shifting ,office relocation
        ,movers packers near me,best packers and movers gurgaon,best packers and movers from gurgaon to bangalore,best packers and movers gurgaon gurugram haryana,top 5 packers and movers gurgaon,best packers and movers gurugram haryana,top 5 packers and movers in gurgaon,best packers and movers from gurgaon to mumbai'/>
      </Head>
        <Header2 />
            <Image width={1600} height={500} className='px-0' src='/sheorancargomover13.jpg' alt="contact-us"/>
            <div className='px-4 md:px-32'>
                <div className='flex flex-col md:flex-row'>
                    <div className="flex flex-col md:pr-16 flex_1 pt-8">
                    <Contact/>
                    <div className='2nd mt-16'>
                    <div className='flex flex-row'>
                            <div className='text-red-600 pt-4'><HomeIcon style={{ fontSize: '48px' }} /></div>
                            <div>
                                <p className='text-bg px-4 mt-4 uppercase'>Simplified process</p>
                                <p className="overflow-clip px-4 pt-2 txt-col ">
                                    If you are packing and moving into or out of, a second home or a vacation home - let reliable packers and movers provide the services to ease your packing and moving. Your time is valuable and precious; let us manage your move! We are reliable packers and movers who will manage all your moving processes very carefully and smartly.
                                    We just simplify your move by handling all the packing and moving process from source to destination
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-row'>
                            <div className='text-red-600 pt-4'><AttachMoneyIcon style={{ fontSize: '48px' }} /></div>
                            <div>
                                <p className='text-bg px-4 mt-4 uppercase'>affordable pricing</p>
                                <p className="overflow-clip px-4 pt-2 txt-col ">
                                Every Packers and Movers arranges a pre-move house survey to calculate the volume of your goods, allowing them to provide you with quote for your move. You have to keep in mind that professional movers and packers charge by the weight and volume of your belongings, so it can be difficult to determine if you are already going overboard with your allotted budget. 
                                Call reliable packers and movers like Alliance logistics for moving at affordable price.
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-row'>
                            <div className='text-red-600 pt-4'><SecurityIcon style={{ fontSize: '48px' }} /></div>
                            <div>
                                <p className='text-bg px-4 mt-4 uppercase'>Secure packing</p>
                                <p className="overflow-clip px-4 pt-2 txt-col ">
                                Sheoran International Packer & Mover provides Cardboard carton to wooden crates built with shock absorbers and integral ramps to pack all your valuable items. Our experienced professional team handles all types of packing so that your valuable goods reach destination without any damage. We pack your goods on site or have it packed at our warehouses. We pay strict attention while packing and moving your fragile item from source to destination. 
                                All Packing materials used are recyclable, so no need to worry about wastage.
                                </p>
                            </div>
                        </div>
                            
                        </div>
                    </div>
                   
                    <div className="flex flex-col flex_2 pt-8">
                    <ServicesOffered/>
                    <WhyChooseUs/>
                    </div>
                </div>
            </div>
            <Clients />
            <Footer />
        </div>
    )
}