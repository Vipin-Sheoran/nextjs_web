import Link from 'next/link'
import Image from 'next/dist/client/image'

export default function ServiceProvided(){
    return (
        <div className='py-6'>
        <div>
            <p className='text-3xl text-center mt-4 font-extrabold mb-4 uppercase' data-aos="fade-right">We Provide Services</p>
            
            <div className='grid grid-cols-1 md:grid-cols-4 mx-2 md:mx-14'>

            <div className='px-4 border-2 border-black mx-4 my-4'>
            <div className='pt-4'>
            <Image alt='...loading' width={260} height={150} layout='responsive' src='/sheorancargomover2.jpg'/>
            </div>
            <h1 data-aos='fade-right' className='text-bg mt-4 font-bold '>CORPORATE RELOCATION</h1>
            <p className="pt-2 txt-col font-medium">
            Office shifting requires lots of planning as you have to 
            ensure minimum loss in productivity and service offerings. There...
            </p>
            <Link passHref href='/services/corporate-relocation'><button className='uppercase bg-indigo-600 rounded-md font-bold hover:bg-indigo-500 text-white px-2 py-2 my-4 w-full'>read more</button></Link>
            </div>



            <div className='px-4 border-2 border-black mx-4 my-4'>
            <div className='pt-4'>
            <Image alt='...loading' width={260} height={150} layout='responsive' src='/sheorancargomover19.jpg'/>
            </div>
            <h1 data-aos='fade-right' className='text-bg mt-4 font-bold '>HOUSE RELOCATION</h1>
            <p className="pt-2 txt-col font-medium">
            Household shifting a comfortable and hassle free process by our household shifting service. 
            The household goods shifting service includes ...
            </p>
            <Link passHref href='/services/household-relocation'><button className='uppercase bg-indigo-600 rounded-md font-bold hover:bg-indigo-500 text-white px-2 py-2 my-4 w-full'>read more</button></Link>
            </div>

            <div className='px-4 border-2 border-black mx-4 my-4'>
            <div className='pt-4'>
            <Image alt='...loading' width={260} height={150} layout='responsive' src='/sheorancargomover20.jpg'/>
            </div>
            <h1 data-aos='fade-right' className='text-bg mt-4 font-bold '>WAREHOUSE/STORAGE</h1>
            <p className="pt-2 txt-col font-medium ">
            Enhancing strength to our services we also offer warehousing services. We fulfill 
            your warehousing & storage needs. We have warehouses...
            </p>
            <Link passHref href='/services/warehouse'><button className='uppercase bg-indigo-600 rounded-md font-bold hover:bg-indigo-500 text-white px-2 py-2 my-4 w-full'>read more</button></Link>
            </div>

            <div className='px-4 border-2 border-black mx-4 my-4'>
            <div className='pt-4'>
            <Image alt='...loading' width={260} height={150} layout='responsive' src='/sheorancargomover21.jpg'/>
            </div>
            <h1 data-aos='fade-right' className='text-bg mt-4 font-bold '>VEHICLE TRANSPORTATION</h1>
            <p className="pt-2 txt-col font-medium">
            We have invested a great volume to create a state of art infrastructure, 
            we can accommodate you with any type of carrier wither small...
            </p>
            <Link passHref href='/services/vehicle-transportation'><button className='uppercase bg-indigo-600 rounded-md font-bold hover:bg-indigo-500 text-white px-2 py-2 my-4 w-full'>read more</button></Link>
            </div>
            
            </div>
            
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 mx-2 md:mx-48'>
            {/* <div className='px-4 border-2 border-black mx-4 my-4'>
            <div className='pt-8'>
            <Image alt='...loading' width={260} height={150} layout='responsive' src='/sheorancargomover14.jpg'/>
            </div>
            <p data-aos='fade-right' className='text-bg px-4 mt-4'>INTERNATIONAL SHIFTING</p>
            <p className="pt-2 txt-col font-medium">
            We Sheoran International Packers and Movers Ltd, render prompt and expert overseas moving services ...
            </p>
            <Link passHref href='/services/international-shifting'><button className='uppercase bt-color text-white px-2 mx-4 py-2 my-2'>read more</button></Link>
            </div> */}
            <div className='px-4 border-2 border-black mx-4 my-4'>
            <div className='pt-4'>
            <Image alt='...loading' width={260} height={150} layout='responsive' src='/sheorancargomover14.jpg'/>
            </div>
            <h1 data-aos='fade-right' className='text-bg mt-4 font-bold '>INTERNATIONAL SHIFTING</h1>
            <p className="pt-2 txt-col font-medium">
            We Sheoran International Packers and Movers Ltd, render prompt and expert overseas moving services over...
            </p>
            <Link passHref href='/services/household-relocation'><button className='uppercase bg-indigo-600 rounded-md font-bold hover:bg-indigo-500 text-white px-2 py-2 my-4 w-full'>read more</button></Link>
            </div>



            {/* <div className='px-4 border-2 border-black mx-4 my-4'>
            <div className='pt-8 mx-4'>
            <Image alt='...loading' width={260} height={150} layout='responsive' src='/sheorancargomover10.jpg'/>
            </div>
            <p data-aos='fade-right' className='text-bg px-4 mt-4'>LOADING UNLOADING</p>
            <p className="pt-2 txt-col">
            Enhancing strength to our services we also offer warehousing services. We fulfill your warehousing & storage ...
            </p>
            <Link passHref href='/services/loading-unloading'><button className='uppercase bt-color text-white px-2 mx-4 py-2 my-2'>read more</button></Link>
            </div> */}
            <div className='px-4 border-2 border-black mx-4 my-4'>
            <div className='pt-4'>
            <Image alt='...loading' width={260} height={150} layout='responsive' src='/sheorancargomover10.jpg'/>
            </div>
            <h1 data-aos='fade-right' className='text-bg mt-4 font-bold '>LOADING UNLOADING</h1>
            <p className="pt-2 txt-col font-medium">
            Enhancing strength to our services we also offer warehousing services. We fulfill your warehousing & storage ...
            </p>
            <Link passHref href='/services/household-relocation'><button className='uppercase bg-indigo-600 rounded-md font-bold hover:bg-indigo-500 text-white px-2 py-2 my-4 w-full'>read more</button></Link>
            </div>
            

            {/* <div className='px-4 border-2 border-black mx-4 my-4'>
            <div className='pt-8 mx-4'>
            <Image alt='...loading' width={260} height={150} layout='responsive' src='/sheorancargomover11.png'/>
            </div>
            <p data-aos='fade-right' className='text-bg px-4 mt-4'>COMMERCIAL SHIFTING</p>
            <p className="px-4 pt-2 txt-col ">
            Our commercial goods moving services, alike our household services, is inspired by the motto to provide utmost ...
            </p>
            <Link passHref href='/services/commercial'><button className='uppercase bt-color text-white px-2 mx-4 py-2 my-2'>read more</button></Link>
            </div> */}
            <div className='px-4 border-2 border-black mx-4 my-4'>
            <div className='pt-4'>
            <Image alt='...loading' width={260} height={150} layout='responsive' src='/sheorancargomover11.png'/>
            </div>
            <h1 data-aos='fade-right' className='text-bg mt-4 font-bold '>COMMERCIAL SHIFTING</h1>
            <p className="pt-2 txt-col font-medium">
            Our commercial goods moving services, alike our household services, is inspired by the motto to provide utmost ...
            </p>
            <Link passHref href='/services/household-relocation'><button className='uppercase bg-indigo-600 rounded-md font-bold hover:bg-indigo-500 text-white px-2 py-2 my-4 w-full'>read more</button></Link>
            </div>
            </div>
            </div>
    )
}