import Header2 from "../components/Header"
import Footer from "../components/Footer"
import Clients from "../components/homepage/Clients"
import MainContent from "../components/aboutus/MainContent"
import ServicesOffered from "../components/ServicesOffered/ServicesOffered"
import WhyChooseUs from "../components/WhyUs/WhyChooseUs"
import Image from "next/dist/client/image"

export default function about() {
    const title=''
    const content1=''
    const content2=''
    const content3=''
    const content4=''
    const src=''
    return (
        <div>
            <Header2 />
            <Image width={1600} height={500} className='px-0' src='/sheorancargomover13.jpg' />
            <div className='px-4 md:px-32'>
                <div className='flex flex-col md:flex-row'>
                    <div className="flex flex-col md:pr-16 flex_1 pt-8">
                    <MainContent 
                    title={title}
                    content1={content1}
                    content2={content2}
                    content3={content3}
                    content4={content4}
                    src={src}/>
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