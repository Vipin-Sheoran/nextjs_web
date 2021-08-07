import React,{useState} from 'react'
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import PaymentIcon from '@material-ui/icons/Payment';
import HomeIcon from '@material-ui/icons/Home';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import InfoIcon from '@material-ui/icons/Info';
import BusinessIcon from '@material-ui/icons/Business';
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
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
        <nav className='flex bg-black flex-col md:flex-row p-4 w-100 text-white w-full fixed z-500'>
           <div className='flex flex-row'>
           <div className='px-4 text-2xl hover:text-yellow-400 cursor-pointer'> Vipin</div>
           <div className='md:hidden block  ml-auto' onClick={clickHandler}><MenuIcon/></div>
           </div>
           <ul className={hidden}>
           <a href='#about' onClick={clickHandler}><li className='px-6 md:border-0 cursor-pointer 
           border-2 border-light-blue-500 border-opacity-75 hover:text-yellow-400 md:py-1 py-4 flex flex-row'><span className='hidden md:contents'><HomeIcon/></span><span>Home</span></li></a>
           <li className='px-6 md:border-0 cursor-pointer
           border-2 border-light-blue-500 border-opacity-75 hover:text-yellow-400 md:py-1 py-4 flex flex-row'><span className='hidden md:contents'><InfoIcon/></span> About me</li>
           <li className='px-6 md:border-0 cursor-pointer
           border-2 border-light-blue-500 border-opacity-75 hover:text-yellow-400 md:py-1 py-4 flex flex-row'><span className='hidden md:contents'><AccountTreeIcon/></span> Projects</li>
           <li className='px-6 md:border-0 cursor-pointer
           border-2 border-light-blue-500 border-opacity-75 hover:text-yellow-400 md:py-1 py-4 flex flex-row'><span className='hidden md:contents'><PermContactCalendarIcon/></span> Contact</li>
           </ul>
       </nav>
       <div className='flex flex-col header pt-16 px-4'>
            <div className='text-white py-2'><span><PhoneIcon/></span>  +91 7378018941</div>
            <div className='text-white py-2'><span><MailIcon/></span>  sheoranvipin2910@gmail.com</div>
            <div className='text-white py-2'><span><PaymentIcon/></span>  Payment</div>
        </div>
        </div>
        
    )
}

export default Header
