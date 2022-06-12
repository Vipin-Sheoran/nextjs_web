import Header2 from "../../components/Header"
import Footer from "../../components/Footer"
import Clients from "../../components/homepage/Clients"
import MainContent from "../../components/aboutus/MainContent"
import ServicesOffered from "../../components/ServicesOffered/ServicesOffered"
import WhyChooseUs from "../../components/WhyUs/WhyChooseUs"
import Image from "next/dist/client/image"
import Head from 'next/head'

export default function CorporateRelocation() {
    const title='Corporate Relocation'
    const content1='Office shifting requires lots of planning as you have to ensure minimum loss in productivity and service offerings. There are specialist office shifting and relocation companies who can help you in office shifting and relocation. Office shifting is a little more complicated than home shifting. In an office you have lots of goods and lots of people working in different departments. Even if you hire packers and Movers for your office shifting, your team has to work with the movers and packers to ensure that everything that is supposed to be packed has been packed and moved. We move your employees and their families conveniently and systematically to places…'
    const content2='In this age of rapid business expansion which is a result of globalisation, mobility of workforce becomes inevitable. Many organizations have a requirement of shifting their staff members to places which provide more profitable conditions for operation. We at Sheoran International Packer & Mover Ltd. understand this demand of business expansion and thus, offer our proficient services in the sector of Employer Assisted Moving. We believe that it is very important to provide home ownership to the employees closer to their workplace as it helps in reaping more quality and quantity of their services. Therefore, we provide you matchless services for the relocation of your employees and their households so that your business can escalate towards new horizons. With an advanced packing and moving USPs, an up-to-date know how and efficient staff, Sheoran International Packer & Mover Ltd. emerges as one of the reputed relocation management companies that have been offering time-sensitive and smooth job-related moves.'
    const content3='Our services have been recognized as the most accomplished ones, and leave your employees without any iota of disturbance or troubling thought, so that they could focus on their job particularly while we handle all their moving stress and worries. We not only relocate employees, but deal with the movement of their families and the entire household too. If it’s a regional transition, a national one or an international moving, we have been rendering our top-line services to move your employees anywhere on the globe.'
    const content4='Our time cautious and hassle free services in job related moving has often been appreciated by the industry. We provide the most effective relocation management services thereby making sure that the workforce is relocated smoothly. This enables us to minimize the downtime which in turn leads to a seamless continuity of your business. Just like our services in other domains, we work to the best of our capabilities to ensure zero damage of your goods so as to avoid any loss in your business or in the belongings of your employees. We use international standard packing materials and advanced transportation for the shifting of your goods. This minimizes the risk of damage and enables us to function smoothly while we relocate your staff. We provide uncompromised services so our customer can be tension free and focus on his/her business while we set up new dwelling for his or her employees close to work. So, you just plan your move and rest leave on us. Feel free to contact us anytime.'
    const src='/sheorancargomover6.jpeg'
    return (
        <div>
            <Head>
                <meta name="description"
                content="Our time cautious and hassle free services in job related moving has often been appreciated by the industry"/>
            </Head>
            <Header2 />
            <Image width={1600} height={500} className='px-0' src='/sheorancargomover13.jpg' alt="corporate-relocation"/>
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