import React from 'react'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SendIcon from '@material-ui/icons/Send';
import TimerIcon from '@material-ui/icons/Timer';

function Why() {
    return (
        <div className='mt-4 '>
            <div  class='text-center text-2xl uppercase underline pointer text-black font-sans font-semibold px-4'>why choose us?</div>
            <p class="overflow-clip px-4 pt-2 txt-col text-center">
            We are Max International Packers and Movers providing India’s most preferable moving services. We carry your Emotions, not just Goods
            </p>
        <p className='flex flex-row justify-center'>
        <span className='text-yellow-400 pl-4 text-6xl mt-44'>10</span>
        <span className='text-3xl'> 
        <img src='https://media.istockphoto.com/photos/empty-shopping-cart-isolated-on-white-background-picture-id114308468?k=6&m=114308468&s=170667a&w=0&h=J3o0vf3jgFHOlo9JqHVZoA9VH8pzFkLLR8lkNTkb3nY='/>
        </span>
           </p>
           <p className='text-2xl text-center underline'>Years of Experiance</p>
           <p class="overflow-clip px-4 pt-2 txt-col text-center">
           We have established ourselves as a leading company in the field of "Packing & Moving" offering exclusive and unique USPs. We serve over 15 locations across the country and have 15 self-owned, fully computerized branches. These branches are completely
            inter-connected in order to keep a track of the status of your valuable goods from the time of loading till delivery.
           </p>
           <p class="overflow-clip px-4 pt-6 txt-col text-center pb-8">
           We have special potted plants carriers to carry your plants safely and separately along with other household goods without any breakage. They are designed in such a manner that the plants get fixed at a place where it is open to air as well as sun. Special cages for
            pets are designed keeping in mind the absolute level of comfort and safety of your pets.
           </p>


           <div className='why-us-ring place-content-center flex flex-col md:flex-row p-8'>
               <div className='flex flex-col my-4'>
               <div className=' h-20 w-20 rounded-full bg-yellow-500 ring-4 ring-white mb-4 m-auto text-white pl-6 pt-4'>
               <SendIcon  style={{ fontSize: '48px' }}/>
                </div>
                <p className='uppercase text-center text-xl text-white'>we make it faster</p>
                <p class="overflow-clip px-4 pt-2 txt-col text-white text-center">
                Max International Packers and Movers provides faster smoother and better relocating services. We understand that time is precious for you and helps you relocate at the earliest and start your new life at your new destination.
                 We ensure you with safe and secure shifting process.
                </p>
               </div>

               <div className='flex flex-col my-4'>
               <div className=' h-20 w-20 rounded-full bg-yellow-500 ring-4 ring-white pl-4 pt-6 mb-4 m-auto text-white'>
                   <LocationOnIcon  style={{ fontSize: '48px' }}/>
                </div>
                <p className='uppercase text-center text-xl text-white'>AVAILABLE AT YOUR LOCATION</p>
                <p class="overflow-clip px-4 pt-2 txt-col text-white text-center">
                We serve over 15 locations across the country and have 15 self-owned, 
                fully computerized branches. Our head office is in Mumbai. Max International Packers and Movers offers 24 hours’ door to door services and it promises what it does.
                </p>
               </div>

               <div className='flex flex-col my-4'>
               <div className=' h-20 w-20 rounded-full bg-yellow-500 ring-4 ring-white mb-4 m-auto text-white pl-4 pt-6'>
               <TimerIcon  style={{ fontSize: '48px' }}/>
                </div>
                <p className='uppercase text-center text-xl text-white'>ON TIME DELIVERY</p>
                <p class="overflow-clip px-4 pt-2 txt-col text-white text-center">
                Max International Packers and Movers makes sure to deliver all your goods on time. Unlike other companies,
                 we Max International Packers and Movers, do what we promise. We understand the value of time and so we get things done faster and on time
                </p>
               </div>
                
           </div>
           
        </div>
    )
}

export default Why