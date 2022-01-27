import Image from "next/dist/client/image"
import ServiceCard from './servicecard';

export default function Servicecard2(){
    return(
        <div>
                    <p data-aos='fade-right' className='text-2xl ml-4 mt-4 mb-4'>Why We Are The Best From Others</p>
                    
                    <div className="flex flex-col md:flex-row">
                    <div className="flex-1">
                    <ServiceCard/>
                    </div>
                    <div className="flex-1 mx-2 md:mx-8">
                    <p className="overflow-clip px-0 md:px-8 pt-4 txt-col">
                    Sheoran International Packer & Mover always remains committed and dedicated towards clients in order to 
                    deliver the satisfactory results. We always take special measures to keep all kinds of hassles away. Best usage of 
                    time is the foremost feature of our efficacy that always helps to remain away of wastage of time. We also own a large fleet of specialized vehicles to ensure optimum results. This characteristic allures the imagination 
                    of keen entrepreneurs even more as they find it easier to execute the strategic business plans at the right time.
                    </p>
                    </div>

                    <div className="flex-1">
                    <div className="contentwrapper1 flex flex-row">
                    <div className="mt-4 imgwrapper">
                    <Image alt='...loading' className='' width={80} height={80} src='/icon1.jpg'/>
                    </div>
                    <div>
                    <p data-aos='fade-right' className='text-bg px-4 mt-4 uppercase font-medium'>24x7 service</p>
                    <p className="overflow-clip px-4 pt-2 txt-col">
                    Our moving & customer care services are open for you all the time.
                    </p>
                    </div>
                    </div>

                    <div className="contentwrapper2 flex flex-row">
                    <div className="mt-4 imgwrapper">
                    <Image alt='...loading' className='' width={60} height={60} src='/icon2.jpg'/>
                    </div>
                    <div>
                    <p data-aos='fade-right' className='text-bg px-4 mt-4 uppercase font-medium'>ONE DECADES OF EXPERIENCE</p>
                    <p className="overflow-clip px-4 pt-2 txt-col">
                    Possesses enough experience to relocate you safely.
                    </p>
                    </div>
                    </div>

                    <div className="contentwrapper3 flex flex-row">
                    <div className="mt-8 ml-2 imgwrapper">
                    <Image alt='...loading' className='' width={80} height={80} src='/icon3.png'/>
                    </div>
                    <div>
                    <p data-aos='fade-right' className='text-bg px-4 mt-4 uppercase font-medium'>COMPLETE SECURITY</p>
                    <p className="overflow-clip px-4 pt-2 txt-col">
                    Put your own lock on the cubes/containers and unlock at your end for 100% safety assurance.
                    </p>
                    </div>
                    </div>

                    
                    </div>
                    </div>
                    </div>
    )
}