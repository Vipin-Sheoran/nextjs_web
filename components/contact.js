import React,{useState,useEffect} from 'react'
import emailjs from 'emailjs-com'
import validateEmail from 'js-email-validator'
import validatePhoneNumber from 'validate-phone-number-node-js'
import Aos from "aos";
import 'aos/dist/aos.css'

export default function Contact(){

    useEffect(() => {
    Aos.init({
      duration:1000
    })
   }, [])
  const [number,setNumber]=useState()
  const [email,setEmail]=useState()
  const sendEmail=(e)=>{
    e.preventDefault()
    const result=validateEmail(email)
     const result2 = validatePhoneNumber.validate(number)
     console.log(result,result2)
     if(result===true&&result2===true){
      emailjs.sendForm('service_mdalbj7', 'template_b2wxs1l', e.target,"user_mewmQVyqtzhHJ8TVgSqGk")
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
         console.log('FAILED...', error);
      });
      e.target.reset()
     }else{
      if(result!==true){
        alert('Please enter a valid email id')
       }
       if(result2!==true){
        alert('Please enter a valid mobile No.')
       }
     }
  }

    return(

        <div className='pt-8 contact pb-4 justify-center'>
       <div className='md:ml-60 md:mr-60'>
       
        
        <div data-aos="fade-right" className='text-2xl uppercase underline pointer text-white font-sans font-semibold px-4'>Get a quote</div>
        <form className='px-4' onSubmit={sendEmail}>
        <div className='flex flex-col'>
                <div className='flex flex-col  mr-0'>
                  <input
                    
                      type="text"
                       className="my-4 py-2 px-2 "
                      placeholder="Name"
                      required="required"
                      name='name'
                    />
                    <input
                    onChange={(e)=>setNumber(e.target.value)}
                    // onChange={(e)=>phoneHandler(e)}
                      type="text"
                      id="phone"
                       className="my-4 py-2 px-2"
                      placeholder="Phone No."
                      required="required"
                      name='phone'
                    />

                    </div>
                    <div className='flex flex-col'>
                     <input
                    // onChange={(e)=>phoneHandler(e)}
                      type="text"
                      id="phone"
                       className="my-4 py-2 px-2"
                      placeholder="Address"
                      required="required"
                      name='address'
                    />
                    
                     <input
                    onChange={(e)=>setEmail(e.target.value)}
                      type="email"
                      id="email"
                       className="my-4 py-2 px-2"
                      placeholder="Email"
                      required="required"
                      name='email'
                      
                    />
                      
                    <textarea
                //  onChange={(e)=>messageHandler(e)}
                  name="message"
                  id="message"
                   className="my-4 pb-8 px-2"
                //   rows="4"
                  placeholder="Message"
                  required
                ></textarea>
                <br/>
                <button className='text-white border-2 border-black rounded-lg py-2 hover:bg-yellow-800'>Send Request</button>
              
                </div>
                      </div>
        </form>
      </div>
    </div>

    )
}