import React,{useEffect,useState} from 'react'
import Image from 'next/dist/client/image'
import SimpleImageSlider from "react-simple-image-slider";


function Slider() {

    const images=['img/img3.jpg'
    ,'img/img2.jpg']
    const [img,setImg]=useState()
    const [count,setCount]=useState(0)
    const images2 = [
        { url: 'img/img3.jpg' },
        { url: 'img/img2.jpg' },
        { url: 'img/img3.jpg' },
        { url: 'img/img2.jpg' },
        { url: 'img/img2.jpg' },
        { url: 'img/img3.jpg' },
        { url: 'img/img2.jpg' },
      ];
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            if(count!==1){
                setCount(count+1)
               
            }else{
                setCount(0)
            }
            setImg(images[count])
         }, 3000);
         console.log(count)
       
       },[count]);
    return (
        <div className='relative w-full h-full overflow-hidden'>
            {/* <div className='img1'>
            <img src={img}></img>
            </div> */}
             <div className='w-full h-100'><SimpleImageSlider
        width={1200}
        height={504}
        images={images2}
        showBullets={true}
        showNavs={true}
      /></div>
            
            <div className='absolute inset-0 name bg-black h-2 w-0'></div>
        </div>
    )
}

export default Slider
