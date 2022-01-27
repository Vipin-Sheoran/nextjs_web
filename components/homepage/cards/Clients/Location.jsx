import React,{useEffect} from 'react';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Aos from "aos";
import 'aos/dist/aos.css'

function Location() {
    useEffect(() => {
        Aos.init({
          duration:1000
        })
       }, [])
    return (
        <div className='bg-black'>
            <div data-aos='fade-right' className='uppercase text-white text-xl font-semibold mx-4 pt-4 pb-2'>our locations</div>
        <div className='flex flex-col md:flex-row place-content-between '>
            <div className='flex flex-col ml-2 mr-2 my-2'>
                <div>
                <div className='text-yellow-500 pl-4 flex flex-row'>
                <div><FiberManualRecordIcon style={{ fontSize: '14px' }}/></div>
                <div className='text-white pl-2 text-gray-400'>Packers & Movers Delhi</div>
                </div>
                </div>
                <div>
                <div className='text-yellow-500 pl-4 flex flex-row'>
                <div><FiberManualRecordIcon style={{ fontSize: '14px' }} /></div>
                <div className='text-white pl-2 text-gray-400'>Packers & Movers Gurgaon</div>
                </div>
                </div>
                <div>
                <div className='text-yellow-500 pl-4 flex flex-row'>
                <div><FiberManualRecordIcon style={{ fontSize: '14px' }}/></div>
                <div className='text-white pl-2 text-gray-400'>Packers & Movers Noida</div>
                </div>
                </div>
                <div>
                <div className='text-yellow-500 pl-4 flex flex-row'>
                <div><FiberManualRecordIcon style={{ fontSize: '14px' }}/></div>
                <div className='text-white pl-2 text-gray-400'>Packers & Movers Chandigarh</div>
                </div>
                </div>
                
            </div>
            <div className='flex flex-col ml-2 mr-2 my-2'>
                <div>
                <div className='text-yellow-500 pl-4 flex flex-row'>
                <div><FiberManualRecordIcon style={{ fontSize: '14px' }}/></div>
                <div className='text-white pl-2 text-gray-400'>Packers & Movers Kolkata</div>
                </div>
                </div>
                <div>
                <div className='text-yellow-500 pl-4 flex flex-row'>
                <div><FiberManualRecordIcon style={{ fontSize: '14px' }} /></div>
                <div className='text-white pl-2 text-gray-400'>Packers & Movers Ranchi</div>
                </div>
                </div>
                <div>
                <div className='text-yellow-500 pl-4 flex flex-row'>
                <div><FiberManualRecordIcon style={{ fontSize: '14px' }}/></div>
                <div className='text-white pl-2 text-gray-400'>Packers & Movers Patna</div>
                </div>
                </div>
                <div>
                <div className='text-yellow-500 pl-4 flex flex-row'>
                <div><FiberManualRecordIcon style={{ fontSize: '14px' }}/></div>
                <div className='text-white pl-2 text-gray-400'>Packers & Movers Indore</div>
                </div>
                </div>
                
            </div>
            <div className='flex flex-col ml-2 mr-2 my-2'>
                <div>
                <div className='text-yellow-500 pl-4 flex flex-row'>
                <div><FiberManualRecordIcon style={{ fontSize: '14px' }}/></div>
                <div className='text-white pl-2 text-gray-400'>Packers & Movers Mumbai</div>
                </div>
                </div>
                <div>
                <div className='text-yellow-500 pl-4 flex flex-row'>
                <div><FiberManualRecordIcon style={{ fontSize: '14px' }} /></div>
                <div className='text-white pl-2 text-gray-400'>Packers & Movers Pune</div>
                </div>
                </div>
                <div>
                <div className='text-yellow-500 pl-4 flex flex-row'>
                <div><FiberManualRecordIcon style={{ fontSize: '14px' }}/></div>
                <div className='text-white pl-2 text-gray-400'>Packers & Movers Ahmedabad</div>
                </div>
                </div>
                <div>
                <div className='text-yellow-500 pl-4 flex flex-row'>
                <div><FiberManualRecordIcon style={{ fontSize: '14px' }}/></div>
                <div className='text-white pl-2 text-gray-400'>Packers & Movers Goa</div>
                </div>
                </div>
            </div>
            <div className='flex flex-col ml-2 mr-2 my-2'>
                <div>
                <div className='text-yellow-500 pl-4 flex flex-row'>
                <div><FiberManualRecordIcon style={{ fontSize: '14px' }}/></div>
                <div className='text-white pl-2 text-gray-400'>Packers & Movers Chennai</div>
                </div>
                </div>
                <div>
                <div className='text-yellow-500 pl-4 flex flex-row'>
                <div><FiberManualRecordIcon style={{ fontSize: '14px' }} /></div>
                <div className='text-white pl-2 text-gray-400'>Packers & Movers Banglore</div>
                </div>
                </div>
                <div>
                <div className='text-yellow-500 pl-4 flex flex-row'>
                <div><FiberManualRecordIcon style={{ fontSize: '14px' }}/></div>
                <div className='text-white pl-2 text-gray-400'>Packers & Movers Hyderabad</div>
                </div>
                </div>
                <div>
                <div className='text-yellow-500 pl-4 flex flex-row'>
                <div><FiberManualRecordIcon style={{ fontSize: '14px' }}/></div>
                <div className='text-white pl-2 text-gray-400'>Packers & Movers Coimbatore</div>
                </div>
                </div>
                
            </div>
        </div>
        <hr className='mt-4'/>
        </div>
    )
}

export default Location
