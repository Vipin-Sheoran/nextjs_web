import React,{useEffect} from 'react'
import HomeIcon from '@material-ui/icons/Home';
import SecurityIcon from '@material-ui/icons/Security';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import LockIcon from '@material-ui/icons/Lock';
import Header from '../components/Header'
import Image from 'next/dist/client/image';
import ServicesOffered from '../components/ServicesOffered/ServicesOffered';
import Footer from '../components/Footer';
import Clients from '../components/homepage/Clients';
import Aos from "aos";
import 'aos/dist/aos.css'
import Head from 'next/head'
function Aboutus() {
    useEffect(() => {
        Aos.init({
          duration:1000
        })
       }, [])
    return (
        <div>
             <Head>
        <title>About Us</title>
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

        <Header/>
        <Image className='px-0' width={1600} height={500} src='/sheorancargomover13.jpg' alt='about-us'/>
        <div className='px-4 md:px-32'>
            <div className='flex flex-col md:flex-row'>
                <div className='flex flex-col md:pr-16 flex_1 pt-8'>
                    <div className='main'>
                        <p data-aos="fade-right" className='mt-2 text-2xl uppercase underline pointer text-black font-sans font-semibold px-4'>About us</p>
                        <p className="overflow-clip px-4 text-justify pt-6 txt-col">
                            Sheoran International Packer and Mover were established in the year 2020 by Praveen Sheoran.
                            We are a leading name in packers and movers industry. As a dedicated part of service industry we are committed to come up with the best service providers. Our members provide packing, moving of any kind of goods as well as Automobile Transportation , they extend their services in relocating , home based shifting , corporate shifting , door to door cargo shifting.
                            A sincere approach is to facilitate our customers who think about relocation and shifting at any moment of time.

                        </p>
                        <p className="overflow-clip px-4 pt-6 txt-col text-justify">
                            We realize the fact that packaging and shifting needs are going to big in today's corporate sector at a extent that a big service provider in shifting, relocating and moving packing industry is required for their customers who are willing to relocate from one place to another or in other terms who need to shift one place to some other place. As a committed and well-known organization in moving and shifting services we are equipped with a broad and updated directory that contains all the
                            information about the managed and state of art service providers of shifting and moving service providers in Mumbai.

                        </p>
                        <p className="overflow-clip px-4 pt-6 txt-col text-justify">
                            Sheoran International Packer and Mover is a leading domestic and international moving company with its branches in all over India. We have existence in every corner of India. Sheoran International Packer and Mover deals into Households, Corporate, Commercial Packaging and Moving. We also deal into Car moving. With our experience, expertise and market understanding, we offer fast, reliable and professional packing and movers in India. Our staffs consist of the experienced work that is trained to handle all the valuables, commercial or personal, with highest proper care. We deal with all the moving details. We ensure that all the products are completely loaded so that they don't stand any chances of damage during transport. The shifting is done without any difficulty and in a stress free manner. Also, packing is done under the guidance of our experts who make sure that
                            all the products are completely loaded so that they don't get broken while moving from one place to another.

                        </p>
                        <p className="overflow-clip px-4 pt-6 txt-col text-justify">
                            Our Company has a broad network across the country and it becomes a tough to hire one of the relocation needs for movers and packaging So thats why Our Company insure that we Packers and Movers provide you the best services at a very affordable rates.
                            We make use of some the latest technology when it comes to moving and packaging.

                        </p>
                    </div>
                    <div className='2nd mt-16'>
                        <div className='flex flex-row'>
                            <div className='text-red-600 pt-4'><HomeIcon style={{ fontSize: '48px' }} /></div>
                            <div>
                                <p data-aos="fade-right" className='text-bg px-4 mt-4 uppercase'>Simplified process</p>
                                <p className="overflow-clip px-4 pt-2 txt-col ">
                                    If you are packing and moving into or out of, a second home or a vacation home - let reliable packers and movers provide the services to ease your packing and moving. Your time is valuable and precious; let us manage your move! We are reliable packers and movers who will manage all your moving processes very carefully and smartly.
                                    We just simplify your move by handling all the packing and moving process from source to destination
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-row'>
                            <div className='text-red-600 pt-4'><AttachMoneyIcon style={{ fontSize: '48px' }} /></div>
                            <div>
                                <p data-aos="fade-right" className='text-bg px-4 mt-4 uppercase'>affordable pricing</p>
                                <p className="overflow-clip px-4 pt-2 txt-col ">
                                Every Packers and Movers arranges a pre-move house survey to calculate the volume of your goods, allowing them to provide you with quote for your move. You have to keep in mind that professional movers and packers charge by the weight and volume of your belongings, so it can be difficult to determine if you are already going overboard with your allotted budget. 
                                Call reliable packers and movers like Alliance logistics for moving at affordable price.
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-row'>
                            <div className='text-red-600 pt-4'><SecurityIcon style={{ fontSize: '48px' }} /></div>
                            <div>
                                <p data-aos="fade-right" className='text-bg px-4 mt-4 uppercase'>Secure packing</p>
                                <p className="overflow-clip px-4 pt-2 txt-col ">
                                Sheoran International Packer and Mover provides Cardboard carton to wooden crates built with shock absorbers and integral ramps to pack all your valuable items. Our experienced professional team handles all types of packing so that your valuable goods reach destination without any damage. We pack your goods on site or have it packed at our warehouses. We pay strict attention while packing and moving your fragile item from source to destination. 
                                All Packing materials used are recyclable, so no need to worry about wastage.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='flex flex-col flex_2 pt-8'>
                    <div className='3rd'>
                       <ServicesOffered/>
                        </div>
                    <div className='4th'>
                    <p data-aos="fade-right" className='uppercase text-center text-bg bg-black p-4 text-justify text-white'>why choose us?</p>
                    <div className='flex flex-row'>
                            <div className='text-red-600 pt-4'><TimelapseIcon style={{ fontSize: '48px' }} /></div>
                            <div>
                                <p data-aos="fade-right" className='text-bg px-4 mt-4 uppercase'>24/7 support</p>
                                <p className="overflow-clip px-4 pt-2 txt-col ">
                                Our moving and customer care services are open for you all the time.
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-row'>
                            <div className='text-red-600 pt-4'><LocationOnIcon style={{ fontSize: '48px' }} /></div>
                            <div>
                                <p data-aos="fade-right" className='text-bg px-4 mt-4 uppercase'>AVAILABLE AT YOUR LOCATION</p>
                                <p className="overflow-clip px-4 pt-2 txt-col ">
                                We serve over 15 locations across the country and have 15 self-owned, fully computerized branches.
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-row'>
                            <div className='text-red-600 pt-4'><AllInboxIcon style={{ fontSize: '48px' }} /></div>
                            <div>
                                <p data-aos="fade-right" className='text-bg px-4 mt-4 uppercase'>WORLD CLASS PACKING</p>
                                <p className="overflow-clip px-4 pt-2 txt-col ">
                                We are expert in handling, Sheoran International Packer and Mover and packing and shifting of household 
                                goods, office goods, commercial equipment and car, logistics and transportation.
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-row'>
                            <div className='text-red-600 pt-4'><LocalShippingIcon style={{ fontSize: '48px' }} /></div>
                            <div>
                                <p data-aos="fade-right" className='text-bg px-4 mt-4 uppercase'>QUICK AND FAST DILIVERY</p>
                                <p className="overflow-clip px-4 pt-2 txt-col ">
                                We understand that time is precious for you and helps you relocate at the 
                                earliest and start your new life at your new destination.
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-row'>
                            <div className='text-red-600 pt-4'><LockIcon style={{ fontSize: '48px' }} /></div>
                            <div>
                                <p data-aos="fade-right" className='text-bg px-4 mt-4 uppercase'>100% safety</p>
                                <p className="overflow-clip px-4 pt-2 txt-col ">
                                Put your own lock on the cubes/containers and unlock at your end for 100% safety assurance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Clients/>
        <Footer/>
        </div>
    )
}

export default Aboutus
