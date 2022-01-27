import React,{useEffect} from 'react';
import Carousel from './cards/Clients/Carousel';
import ContactCard from './cards/Clients/ContactCard';
import Location from './cards/Clients/Location';
import QuickLinks from './cards/Clients/QuickLinks'
import Services from './cards/Clients/Services'
import GetInContact from './cards/Clients/GetInTouch'
import Aos from "aos";
// import Location from './Location';
import 'aos/dist/aos.css';

function Clients() {
    useEffect(() => {
        Aos.init({
          duration:1000
        })
       }, [])
    return (
        <div>
            
            <Carousel/>
            <ContactCard/>
            <Location/>
            <div className='flex flex-col md:flex-row bg-black'>
             <QuickLinks/>
             <Services/>
             <GetInContact/>
            </div>
        </div>
    )
}

export default Clients
