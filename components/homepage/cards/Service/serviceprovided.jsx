import Link from 'next/link'
import Image from 'next/dist/client/image'

export default function ServiceProvided(){
    return (
        <div className='mb-6'>
        <div>
            <p className='text-2xl text-center mt-4' data-aos="fade-right">We Provide Services</p>
            
            <div className='md:flex md:flex-row md:pl-24 md:pr-24'>
            <div>
            <div className='pt-4 mx-4 '>
            <Image alt='...loading' width={260} height={150} layout='responsive' src='/sheorancargomover2.jpg'/>
            </div>
            <p data-aos='fade-right' className='text-bg px-4 mt-4'>CORPORATE RELOCATION</p>
            <p className="overflow-clip px-4 pt-2 txt-col md:w-80">
            Office shifting requires lots of planning as you have to 
            ensure minimum loss in productivity and service offerings. There are specialist office shifting and relocation...
            </p>
            <Link passHref href='/services/corporate-relocation'><button className='uppercase bt-color text-white px-2 mx-4 py-2 my-2'>read more</button></Link>
            </div>



            <div>
            <div className='pt-4 mx-4'>
            <Image alt='...loading' width={260} height={150} layout='responsive' src='/sheorancargomover19.jpg'/>
            </div>
            <p data-aos='fade-right' className='text-bg px-4 mt-4'>HOUSE RELOCATION</p>
            <p className="overflow-clip px-4 pt-2 txt-col md:w-80">
            Household shifting a comfortable and hassle free process by our household shifting service. 
            The household goods shifting service includes shifing of products like furniture...
            </p>
            <Link passHref href='/services/household-relocation'><button className='uppercase bt-color text-white px-2 mx-4 py-2 my-2'>read more</button></Link>
            </div>

            <div>
            <div className='pt-4 mx-4'>
            <Image alt='...loading' width={260} height={150} layout='responsive' src='/sheorancargomover20.jpg'/>
            </div>
            <p data-aos='fade-right' className='text-bg px-4 mt-4'>WAREHOUSE/STORAGE</p>
            <p className="overflow-clip px-4 pt-2 txt-col md:w-80 ">
            Enhancing strength to our services we also offer warehousing services. We fulfill 
            your warehousing & storage needs. We have warehouses and stores where your goods can...
            </p>
            <Link passHref href='/services/warehouse'><button className='uppercase bt-color text-white px-2 mx-4 py-2 my-2'>read more</button></Link>
            </div>

            <div>
            <div className='pt-4 mx-4'>
            <Image alt='...loading' width={260} height={150} layout='responsive' src='/sheorancargomover21.jpg'/>
            </div>
            <p data-aos='fade-right' className='text-bg px-4 mt-4 uppercase'>VEHICLE Transportation</p>
            <p className="overflow-clip px-4 pt-2 txt-col md:w-80">
            We have invested a great volume to create a state of art infrastructure, 
            we can accommodate you with any type of carrier wither small or big. Our country wide network has...
            </p>
            <Link passHref href='/services/vehicle-transportation'><button className='uppercase bt-color text-white px-2 mx-4 py-2 my-2'>read more</button></Link>
            </div>
            
            </div>
            
            </div>
            <div className='md:flex md:flex-row md:pl-24 md:pr-24 md:mx-24'>
            <div>
            <div className='pt-8 mx-4'>
            <Image alt='...loading' width={260} height={150} layout='responsive' src='/sheorancargomover14.jpg'/>
            </div>
            <p data-aos='fade-right' className='text-bg px-4 mt-4'>INTERNATIONAL SHIFTING</p>
            <p className="overflow-clip px-4 pt-2 txt-col md:w-80">
            We Sheoran International Packers and Movers Ltd, render prompt and expert overseas moving services ...
            </p>
            <Link passHref href='/services/international-shifting'><button className='uppercase bt-color text-white px-2 mx-4 py-2 my-2'>read more</button></Link>
            </div>



            <div>
            <div className='pt-8 mx-4'>
            <Image alt='...loading' width={260} height={150} layout='responsive' src='/sheorancargomover10.jpg'/>
            </div>
            <p data-aos='fade-right' className='text-bg px-4 mt-4'>LOADING UNLOADING</p>
            <p className="overflow-clip px-4 pt-2 txt-col md:w-80">
            Enhancing strength to our services we also offer warehousing services. We fulfill your warehousing & storage ...
            </p>
            <Link passHref href='/services/loading-unloading'><button className='uppercase bt-color text-white px-2 mx-4 py-2 my-2'>read more</button></Link>
            </div>

            <div>
            <div className='pt-8 mx-4'>
            <Image alt='...loading' width={260} height={150} layout='responsive' src='/sheorancargomover11.png'/>
            </div>
            <p data-aos='fade-right' className='text-bg px-4 mt-4'>COMMERCIAL SHIFTING</p>
            <p className="overflow-clip px-4 pt-2 txt-col md:w-80 ">
            Our commercial goods moving services, alike our household services, is inspired by the motto to provide utmost ...
            </p>
            <Link passHref href='/services/commercial'><button className='uppercase bt-color text-white px-2 mx-4 py-2 my-2'>read more</button></Link>
            </div>
            </div>
            </div>
    )
}