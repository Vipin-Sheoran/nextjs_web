import React,{useState,useEffect} from 'react'
import emailjs from 'emailjs-com'
import validateEmail from 'js-email-validator'
import validatePhoneNumber from 'validate-phone-number-node-js'
import Aos from "aos";
import 'aos/dist/aos.css'
import swal from 'sweetalert'

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
         swal("", "Thanks for the submission.We will get back to you soon!", "success")
      }, function(error) {
         console.log('FAILED...', error);
         swal("", `${error}`, "error")
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

        <div className='bg-gray-300 pt-6 pb-8 rounded-r-md drop-shadow-2xl'>
       {/* <div className='p-4'> */}
       
        
        <div data-aos="fade-right" className='text-3xl uppercase pointer font-sans font-extrabold px-8 '>Get a quote</div>
        <form className='md:px-4 px-2' onSubmit={sendEmail} autocomplete="off">
          <div className='flex flex-col'>
            <div className='flex flex-col md:flex-row w-full'>
            <input
                    
                    type="text"
                     className="p-2 flex-1 m-4 border-2 text-indigo-600 font-bold"
                    placeholder="Name"
                    required
                    name='name'
                    autocomplete="false"
                  />
                  <input
                    onChange={(e)=>setNumber(e.target.value)}
                    // onChange={(e)=>phoneHandler(e)}
                      type="text"
                      id="phone"
                       className="p-2 flex-1 m-4 border-2 text-indigo-600 font-bold"
                      placeholder="Phone No."
                      required
                      name='phone'
                    />
            </div>
            <div className='flex flex-col md:flex-row'>
            <input
                    // onChange={(e)=>phoneHandler(e)}
                      type="text"
                      id="phone"
                       className="p-2 flex-1 m-4 border-2 text-indigo-600 font-bold"
                      placeholder="Address"
                      required
                      name='address'
                    />
                    <input
                    onChange={(e)=>setEmail(e.target.value)}
                      type="email"
                      id="email"
                       className="p-2 flex-1 m-4 border-2 text-indigo-600 font-bold"
                      placeholder="Email"
                      required
                      name='email'
                      
                    />
            </div>
            <div className='flex flex-col md:flex-row'>
            
                    <input
                      type="from"
                      id="email"
                       className="p-2 flex-1 m-4 border-2 text-indigo-600 font-bold"
                      placeholder="Service From"
                      required
                      name='from'         
                    />
                    <input
                      type="text"
                      id="to"
                       className="p-2 flex-1 m-4 border-2 text-indigo-600 font-bold"
                      placeholder="Service To"
                      required
                      name='to'
                    />
            </div>
            <div className='m-4'>
            <textarea
                //  onChange={(e)=>messageHandler(e)}
                  name="message"
                  id="message"
                   className="w-full p-4 border-2 text-indigo-600 font-bold"
                //   rows="4"
                  placeholder="Message"
                ></textarea>
                
            </div>
            <button className='border-2 bg-indigo-600 p-2 mx-4 rounded-md hover:bg-gray-800 font-bold text-white transition-all duration-300'>SEND</button>
          </div>
          
        {/* <div className='flex flex-col'>
                <div className='flex flex-col  mr-0'>
                  <input
                    
                      type="text"
                       className="my-4 py-2 px-2 "
                      placeholder="Name"
                      required
                      name='name'
                    />
                    <input
                    onChange={(e)=>setNumber(e.target.value)}
                    // onChange={(e)=>phoneHandler(e)}
                      type="text"
                      id="phone"
                       className="my-4 py-2 px-2"
                      placeholder="Phone No."
                      required
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
                      required
                      name='address'
                    />
                    
                     <input
                    onChange={(e)=>setEmail(e.target.value)}
                      type="email"
                      id="email"
                       className="my-4 py-2 px-2"
                      placeholder="Email"
                      required
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
                      </div> */}
        </form>
      {/* </div> */}
    </div>

    )
}