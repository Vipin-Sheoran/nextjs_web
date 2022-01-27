import Header2 from "../../components/Header"
import Footer from "../../components/Footer"
import Clients from "../../components/homepage/Clients"
import MainContent from "../../components/aboutus/MainContent"
import ServicesOffered from "../../components/ServicesOffered/ServicesOffered"
import WhyChooseUs from "../../components/WhyUs/WhyChooseUs"
import Image from "next/dist/client/image"

export default function VehicleTransportation() {
    const title='VEHICLE TRANSPORTATION'
    const content1='We have invested a great volume to create a state of art infrastructure, we can accommodate you with any type of carrier wither small or big. Our country wide network has helped us to provide door to door service to our clients. We offer expedited, swift and safe car carrier services to every corner of the country. The vehicle is picked up right from the door step of the clients and delivered at the given address. Sheoran International Packer & Mover Car Carriers service is one of the most reliable car transportation services in India that not only ships your car conveniently and timely to the desired location, but is also believed to elevate your experience by relieving you from worries related to safe transportation of your car. A car is not just a car to you; it is a vehicle that you cosset, a vehicle to which your innumerable memories are attached, a vehicle that has always come to your aid whenever you wanted to move to different places. We at Sheoran International Packer & Mover take utmost care of your precious vehicle, and transport it smoothly and safely to your desired destination.'
    const content2='Our major concern has always been to deliver your car in its PRISTINE CONDITION, come what may! To ensure this, we have designed our car carriers with all the safety measures, which are embedded in it in the form of safety chains and locks, wheel stoppers and safety belts. Your car is Placed at a position on these carriers with the help of safety locks, chains and high-quality wheel stopper. Afterwards using specially-designed, quality-proven safety belts, position of car is held as it is on carrier. In addition, our carriers are attached with hydraulic ramp which is movable, and ensures that your car does not move inside the carrier, once accommodated. As far as the seats of your car are concerned, we cover the seats with our special seat cover and ensure that it does not get spoiled.'
    const content3='Moreover, we conquer car transportation with a ready fleet of more than 70 self-owned, customized Car Carriers. All these carriers have been designed specially keeping in mind a fact that it has to install your precious car in a way that the particular car could lounge in it during its transit stage. We are a reputed firm that deals in thousand of car movements. With our efficient services, compatible prices and unmatched logistics solutions, we have been serving a huge clientele including some of the large organizations like Volvo, Nissan, Renault, Ford, Toyota, Mahindra, Maruti and Hyundai to name just a few.'
    const content4='In addition, to gain a competitive edge over other companies, we have devised a systematic way to pick up your car from your doorstep with the help of our Local Car Pick-Up Carriers, and transport it to the desired destination without having to drive the particular vehicle at any stage, once it is being installed on our trailers. And we seal pack the keys of your car in a key pouch, which is like testimony to our commitments that we would not drive your car in any case. We have been making use of two different types of carriers, deploying it as the need may be; if it is a region-wide transportation, we utilize open trailers to serve the purpose, and if it is a nationwide transportation, we make use of enclosed car carriers to execute such movement. Our high-end enclosed carriers protect your vehicle from debris and weather. Special carriers for Cars and Two Wheelers ensure that your vehicle in transit remains scratch less till the end of trip.'
    const src='/sheorancargomover9.jpg'
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