import Header2 from "../../components/Header"
import Footer from "../../components/Footer"
import Clients from "../../components/homepage/Clients"
import MainContent from "../../components/aboutus/MainContent"
import ServicesOffered from "../../components/ServicesOffered/ServicesOffered"
import WhyChooseUs from "../../components/WhyUs/WhyChooseUs"
import Image from "next/dist/client/image"

export default function HouseholdRelocation() {
    const title='HOUSEHOLD RELOCATION'
    const content1='Household shifting a comfortable and hassle free process by our household shifting service. The household goods shifting service includes shifing of products like furniture, glass items, paintings, Almiras, electronic equipments, television, microwave oven, soft items like glassware & dishes and sensitive electronic items. All the goods are packed with appropriate materials such as thermocol, cardboard sheets, bubble packs, cartons, gunny bags & wooden crates. We Sheoran Cargo Movers are providing our clients with excellent Packing and Unpacking Services that are required during relocation. These minimize the stress level and the chance of any kind of damage of products. Our team of experts is well versed with packing and unpacking of all types of goods as per the specifications detailed by the clients. Unlike the other packers and movers companies, we believe in carrying out the entire work in an extremely systematic manner.'
    const content2='We understand that relocation is not an easy job. Therefore, we believe in maximizing the comfort of our customers by providing door to door service. We take the goods from one place and deliver it in the specified place as mentioned by the client making us one of the most reliable service providers in Mumbai. The address is well located by us and all the initiatives are taken by us in terms of timely delivery. We ensure that our door to door service helps and provides facilitation to the client with no delays.'
    const content3='We Sheoran Cargo Movers offer fleet and adequate home relocation solution. Understanding the value of every single item of yours, we pack commodities in durable materials like wooden crates, cartons, pallets, metal or plastic drums unlike many of the already existing companies listed under the same category as ours. Office relocation involves shifting of different official things such as computers, furniture, important files and documents. Packing and unpacking of items is performed by a team of experts by making use of modern day equipments, thereby we carry out this task in a very efficient way.'
    const content4='We Packers and Movers offers authentic and efficient car carrier service that helps in speedy, swift and safe transit of cars and other vehicles at the desired terminal. We promise and ensure to offer modern technology devices such as fleet of trailers, car carrier trucks, containers and canters that would add on to maintain the safety of cars and other vehicles. Our company understands that car is the most expensive possession for anyone and special care has to be given to it while shifting it to some other place.'
    const src='/sheorancargomover6.jpeg'
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