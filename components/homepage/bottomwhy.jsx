import LocationOnIcon from '@material-ui/icons/LocationOn';
import SendIcon from '@material-ui/icons/Send';
import TimerIcon from '@material-ui/icons/Timer';
import Aos from "aos";

export default function bottomwhy(){
    return (<>
    <p className='text-center text-3xl font-extrabold mt-8'>WHY CHOOSE US?</p>
        <div className='place-content-center flex flex-col md:flex-row pt-8 p-8'>
           <div className='flex flex-col my-4 border-2 p-4 m-2'>
           <div className=' h-20 w-20 rounded-full bg-yellow-500 ring-4 ring-white mb-4 m-auto text-white pl-6 pt-4'>
           <SendIcon  style={{ fontSize: '48px' }}/>
            </div>
            <p className='uppercase text-center text-xl font-bold' data-aos="fade-right">we make it faster</p>
            <p className="overflow-clip pt-2 text-gray-400 font-semibold text-center md:px-16">
            Sheoran International Packer & Mover provides faster smoother and better relocating services. We understand that time is precious for you and helps you relocate at the earliest and start your new life at your new destination.
             We ensure you with safe and secure shifting process.
            </p>
           </div>

           <div className='flex flex-col my-4 border-2 p-4 m-2'>
           <div className=' h-20 w-20 rounded-full bg-yellow-500 ring-4 ring-white pl-4 pt-6 mb-4 m-auto text-white'>
               <LocationOnIcon  style={{ fontSize: '48px' }}/>
            </div>
            <p className='uppercase text-center text-xl font-bold' data-aos="fade-right">AVAILABLE AT YOUR LOCATION</p>
            <p className="overflow-clip pt-2 text-gray-400 font-semibold text-center md:px-16">
            We serve over 15 locations across the country and have 15 self-owned, 
            fully computerized branches. Our head office is in Mumbai. Sheoran International Packer & Mover offers 24 hours’ door to door services and it promises what it does.
            </p>
           </div>

           <div className='flex flex-col my-4 border-2 p-4 m-2'>
           <div className=' h-20 w-20 rounded-full bg-yellow-500 ring-4 ring-white mb-4 m-auto text-white pl-4 pt-6'>
           <TimerIcon  style={{ fontSize: '48px' }}/>
            </div>
            <p className='uppercase text-center text-xl font-bold' data-aos="fade-right">ON TIME DELIVERY</p>
            <p className="overflow-clip pt-2 text-gray-400 font-semibold text-center md:px-16">
            Sheoran International Packer & Mover makes sure to deliver all your goods on time. Unlike other companies,
             we Sheoran International Packer & Mover, do what we promise. We understand the value of time and so we get things done faster and on time
            </p>
           </div>           
       </div> 
       </>
    )
}