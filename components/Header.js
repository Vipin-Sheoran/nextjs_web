import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import PaymentIcon from '@material-ui/icons/Payment';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link'
import React,{useState} from 'react'
import Dropdown from './homepage/dropdown'
import Image from 'next/image'

export default function Header(){
    const [active,setActive]=useState(false)
    const clickHandler=()=>{
      setActive(!active)
    }
    let hidden=''
    if(active===false){
        hidden='flex md:flex-row flex-col absolute md:ml-auto text-base mr-4 md:left-1/2 -top-2 md:top-4 lg:left-1/8 w-full left-0 transition-all duration:1000 bg-red'
    }else{
        hidden='flex md:flex-row flex-col absolute md:ml-auto text-base mr-4 md:left-1/2 top-16 md:top-4 left-0 bg-black w-full transition-all duration:1000 bg-red'
    }
    return (
        <div>
        <nav className='flex bg-black flex-col md:flex-row p-4 w-100 text-white w-full fixed z-50'>
           <div className='flex flex-row'>
           <Link href='/'><div className='px-4 text-xl hover:text-yellow-400 cursor-pointer'> 
           <Image height={30} width={108} src='/sheorancargomoverlogo.png'/></div></Link>
           <div className='md:hidden block  ml-auto' onClick={clickHandler}><MenuIcon/></div>
           </div>
           <ul className={hidden}>
           <Link href='/'><li className='px-6 md:border-0 cursor-pointer 
           border-2 border-light-blue-500 border-opacity-75 hover:text-yellow-400 md:py-1 py-4 flex flex-row uppercase'><span className='hidden md:contents'></span><span onClick={()=>setActive(!active)}>Home</span></li></Link>
           <Link href='about-us'><li className='px-6 md:border-0 cursor-pointer
           border-2 border-light-blue-500 border-opacity-75 hover:text-yellow-400 md:py-1 py-4 flex flex-row uppercase' onClick={()=>setActive(!active)}><span className='hidden md:contents'></span> About us</li></Link>
           <Link href='/'><li className='px-6 md:border-0 cursor-pointer
           border-2 border-light-blue-500 border-opacity-75 hover:text-yellow-400 md:py-1 py-4 flex flex-row uppercase'><span className='hidden md:contents'></span><Dropdown/></li></Link>
           <Link href='contact-us'><li className='px-6 md:border-0 cursor-pointer
           border-2 border-light-blue-500 border-opacity-75 hover:text-yellow-400 md:py-1 py-4 flex flex-row uppercase' onClick={()=>setActive(!active)}><span className='hidden md:contents'></span>Contact Us</li></Link>
           </ul>
       </nav>
       
       
       <div className='flex flex-col header place-content-between pt-20 px-4 md:flex-row'>
           

           <div className='text-white py-2 md:px-16 '><span><PhoneIcon/></span><a href="tel:+9870105680">+91 9870105680</a></div>
           <div className='text-white py-2 md:px-16 '><span><PhoneIcon/></span><a href="tel:+9870105680">+91 9870285680</a></div>
            <div className='text-white py-2 md:px-16'><span><MailIcon/></span>  sheorancargomover@gmail.com</div>
           
          
          <div className='text-white py-2 md:px-16'><span><PaymentIcon/></span>  Payment</div>
            {/* <div className='text-white py-2 md:px-16'><span><ForumIcon/></span>  Have a chat</div> */}

          
            
        </div>
        </div>
    )
}