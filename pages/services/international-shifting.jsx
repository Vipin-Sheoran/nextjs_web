import Header2 from "../../components/Header"
import Footer from "../../components/Footer"
import Clients from "../../components/homepage/Clients"
import MainContent from "../../components/aboutus/MainContent"
import ServicesOffered from "../../components/ServicesOffered/ServicesOffered"
import WhyChooseUs from "../../components/WhyUs/WhyChooseUs"
import Image from "next/dist/client/image"
import Head from 'next/head'

export default function InternationalShifting() {

    const content3=''
    const content4=''
    const src=''
    return (
        <div>
            <Head>
                <meta name="description"
                content="We Sheoran International Packers and Movers Ltd, render prompt and expert overseas moving services with a tinge of uniqueness..."/>
            </Head>
            <Header2 />
            <Image width={1600} height={500} className='px-0' src='/sheorancargomover13.jpg' alt="international-shifting"/>
            <div className='px-4 md:px-32'>
                <div className='flex flex-col md:flex-row'>
                    <div className="flex flex-col md:pr-16 flex_1 pt-8">
                    <MainContent 
                    title={'INTERNATIONAL MOVING BY AIR'}
                    content1={'We Sheoran International Packers and Movers Ltd, render prompt and expert overseas moving services with a tinge of uniqueness. We have made ourselves acquainted with enough knowledge, competency and resources that helped us to hatch out and fledge, and also enabled us to assist you for moving across the globe in a convenient and hassle-free way'}
                    content2={'We have worked out all the hurdles in this area; and in the light of this, our team of professionals works day and night to create an easy move and provides information to you in comprehending the law of the land, and assumes all the responsibilities that form the core of International Packing and Moving process.'}
                    content3={'We strive on subduing the complexities and challenges that are brought upon when the arena becomes as large as it compels to inculcate international frontiers. Moreover, we are a proud associate member of the International Association of Movers (IAM), USA.'}
                    content4={'We are in ongoing relationship with customers with our worldwide presence in more than 182 countries by consistently offering premium International Relocations with personal commitment. Owing to highly skilled professional, well-equipped infrastructure, in-house shipping & freight forwarding solutions that enforces us to be the most reliable moving company in India'}
                    src={'/sheorancargomover14.jpg'}/>
                     <MainContent 
                    title={'INTERNATIONAL MOVING BY SEA'}
                    content1={'Doing business with international clients requires more than just financial acumen. A lack of knowledge about a customers culture can lead to misunderstanding, frustration and potential embarrassment. For ensuring smooth international move, we conduct relevant research on import and export etiquettes of country where goods are to be moved and thus, accordingly prepare requisite overseas shipments.'}
                    content2={'We have now evolved as the trusted International Moving Company in India. We have our patent/TM registered in a number of countries including USA, Canada, Europe, Australia, etc., which bolsters our worldwide network in over 182 countries. We are here to tackle each stage of international movement, be it from custom clearance to safe storage of goods in transit.'}
                    content3={content3}
                    content4={content4}
                    src={'/sheorancargomover15.jpg'}/>
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