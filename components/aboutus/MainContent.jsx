import React from 'react'
import Image from 'next/dist/client/image'

function MainContent(props) {
    return (
        <div>
            <p className='mt-2 text-2xl uppercase underline pointer text-black font-sans font-semibold px-4'>{props.title}</p>
            <div className='w-72 h-48 mx-4 mt-2 border-4 border-red-600'>
            <Image alt='...loading' width={280} height={184} src={props.src}/>
            </div>
            <p className="overflow-clip px-4 text-justify pt-6 txt-col">
                {props.content1}
            </p>
            <p className="overflow-clip px-4 pt-6 txt-col text-justify">
                {props.content2}
            </p>
            <p className="overflow-clip px-4 pt-6 txt-col text-justify">
                {props.content3}
            </p>
            <p className="overflow-clip px-4 pt-6 txt-col text-justify">
                {props.content4}
            </p>
           
        </div>
    )
}

export default MainContent
