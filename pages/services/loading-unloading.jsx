import Header2 from "../../components/Header"
import Footer from "../../components/Footer"
import Clients from "../../components/homepage/Clients"
import MainContent from "../../components/aboutus/MainContent"
import ServicesOffered from "../../components/ServicesOffered/ServicesOffered"
import WhyChooseUs from "../../components/WhyUs/WhyChooseUs"
import Image from "next/dist/client/image"
import Head from 'next/head'

export default function LoadingUnloading() {
    const title='LOADING & UNLOADING'
    const content1='Enhancing strength to our services we also offer warehousing services. We fulfill your warehousing & storage needs. We have warehouses and stores where your goods can be stored for a short or long time. We ensure you that your goods will be kept safely and without any damage. We have facilitated weather proof and airy warehouses to protect the goods from harsh weather conditions. That is we provide the best warehousing facility for you to store your goods.'
    const content2='We have an extensive and spacious warehouse to encompass amass quantity of inventories. Sheoran International Packer & Mover are renowned in Mumbai, Pune, Kolkata, Chennai, Bangalore and other major cities of India, for safe warehousing services. Our warehouses are well-kept, ventilated and humid-free. Our professionals ensure that your goods are systematically stored under optimum temperature and fire-protected environment. Apart from storage of goods, we also assure that your goods are dispatched to the near hub for distribution and sale, at the earliest. Our warehouses have huge ceiling heights, have computerized control mechanism, and are guarded with 24*7 security systems. All our services are available at highly affordable rates. Our warehousing facilities have multiple loading and unloading docks that facilitate timely arrival and departure of goods as per schedule. We understand the need for safety of our customers’ freights and take it seriously while forwarding their goods to a different destination. We also realize that any small damage to the goods can cause a significant loss to our customers and being in the business ourselves are aware of the amount of extra work that it leads to amounting to further losses.'
    const content3='We have provided warehousing facility to various offices, online-shopping businesses, retail stores, wholesalers and corporate hubs. Our warehouses have a team of professionals who handle the loading and unloading of goods at the various docks for this purpose. We also maintain an inventory for every unloading and loading purpose to ensure that there is correct number of goods and artifacts that are on paper and in case of any discrepancy get in touch with the customer immediately. Our teams of professional workers are kept up to date with the methods of handling specific goods in specific ways which enable safe and sound handling of the goods in our warehouses. Apart from that there are supervisors assigned to each loading and unloading dock to ensure that there is absolutely no compromise when it comes to proper handling of goods by the workers.'
    const content4='We also provide temperature controlled atmosphere in our warehouses for specific items whose storage demand such extensive care. All these services are offered to our customers at competitive rates with heavy discounts which enable us to stay on top in this market. Our warehousing services can be availed by corporate as well as commercial users as well as individuals for goods that are stored at the responsibility of the service provider. Goods can be stored in our warehouses for a definite period before being forwarded to other destinations as per the requests of our customers. Due to the large storage capacity of our warehouses, we can store different items at different locations and this enables us to retrieve these items at the required time easily.'
    const src='/sheorancargomover10.jpg'
    return (
        <div>
            <Head>
                <meta name="description"
                content=""/>
            </Head>
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