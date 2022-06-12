import Header2 from "../../components/Header"
import Footer from "../../components/Footer"
import Clients from "../../components/homepage/Clients"
import MainContent from "../../components/aboutus/MainContent"
import ServicesOffered from "../../components/ServicesOffered/ServicesOffered"
import WhyChooseUs from "../../components/WhyUs/WhyChooseUs"
import Image from "next/dist/client/image"
import Head from 'next/head'

export default function OfficeRelocation() {
    const title='COMMERCIAL GOODS'
    const content1='Our commercial goods moving services, alike our household services, is inspired by the motto to provide utmost customer satisfaction. Apart from weekdays, we offer evening and weekend services so that your office need not be closed in weekdays. This benefits the customer, that is, you as well as us, the service providers. Besides, our service counsellor will assist you in arranging your furniture in your new office.'
    const content2='We offer efficient and reliable professional packing & moving services that covers efficient packing and safe transportation of your household as well as office. The entire packing is done under supervision of our experts who know the art of packing enough to check any damage during transportation. On time delivery is the hallmark of our service.'
    const content3='Our commercial goods moving services, alike our household services, is inspired by the motto to provide utmost customer satisfaction. Apart from weekdays, we offer evening and weekend services so that your office need not be closed in weekdays. This benefits both the customer, that is, you as well as us, the service providers. Besides, our service counselor will assist you in arranging your furniture in your new office.'
    const content4='Packers and Movers India is a leading Indian organization well known for its efficiency and network all over India. They operate on principles of care and perfection and ensure that safety of products remains intact during the process. Packers and Movers India assist clients to arrange for Insurance documentation saving their time and cost; also by offering comprehensive range of services for exporting and importing freight by sea. Packers and Movers India provide door to door service for personal or commercial goods anywhere in the country & abroad.'
    const src='/sheorancargomover11.png'
    return (
        <div>
            <Head>
                <meta name="description"
                content="Our commercial goods moving services, alike our household services, 
                is inspired by the motto to provide utmost customer satisfaction"></meta>
                <meta name="keywords"
                content="commercial shifting,best shifting,commercial gurgaon"/>
            </Head>
            <Header2 />
            <Image width={1600} height={500} className='px-0' src='/sheorancargomover13.jpg' alt="commercial"/>
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