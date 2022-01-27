import Header2 from "../components/Header"
import Footer from "../components/Footer"
import Clients from "../components/homepage/Clients"
import Contact from '../components/contact'
import ServicesOffered from "../components/ServicesOffered/ServicesOffered"
import WhyChooseUs from "../components/WhyUs/WhyChooseUs"
import Image from "next/dist/client/image"

export default function contactus(){
    return (
        <div>
        <Header2 />
            <Image width={1600} height={500} className='px-0' src='/sheorancargomover13.jpg' />
            <div className='px-4 md:px-32'>
                <div className='flex flex-col md:flex-row'>
                    <div className="flex flex-col md:pr-16 flex_1 pt-8">
                    <Contact/>
                    </div>
                    <div className='2nd mt-16'>
                        
                            
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