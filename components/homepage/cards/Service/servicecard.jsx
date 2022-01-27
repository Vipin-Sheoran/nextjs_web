import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import HouseIcon from '@material-ui/icons/House';
import PeopleIcon from '@material-ui/icons/People';

export default function ServiceCard(){
    return (
        <div>
                <div className=' text-white font-sans px-4 py-8 text-center vehicles flex flex-row pl-16'>
                    <div>
                    <LocalShippingIcon style={{ fontSize: '48px' }}/>
                    </div>
                    <div>
                    <p data-aos='fade-right' className='pl-6 text-4xl'>100+ </p><p className='text-bg pl-6'>VEHICLES</p>
                    </div>
                    </div>

                    <div className='w-full text-white font-sans px-2 py-8 text-center branches flex flex-row pl-16'>
                    <div>
                    <HouseIcon style={{ fontSize: '48px' }}/>
                    </div>
                    <div>
                    <p data-aos='fade-right' className='pl-6 text-4xl'>15+  </p> <p className='text-bg pl-12'>BRANCHES</p>
                    </div>
                    </div>

                    <div className='w-full text-white font-sans px-2 py-8 text-center clients flex flex-row pl-16'>
                    <div>
                    <PeopleIcon style={{ fontSize: '48px' }}/>
                    </div>
                    <div>
                    <p data-aos='fade-right' className='pl-6 text-4xl'>1000+ </p><p className='text-bg pl-10'>HAPPY CLIENTS</p>
                    </div>
                    </div>
                    </div>
    )
}