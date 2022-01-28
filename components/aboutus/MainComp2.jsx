import SecurityIcon from '@material-ui/icons/Security';
import HomeIcon from '@material-ui/icons/Home'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'

export default function MainComp2(){
    return <div className="mt-16">
        <div className='flex flex-row'>
                            <div className='text-red-600 pt-4'><HomeIcon style={{ fontSize: '48px' }} /></div>
                            <div>
                                <p className='text-bg px-4 mt-4 uppercase'>Simplified process</p>
                                <p className="overflow-clip px-4 pt-2 txt-col ">
                                    If you are packing and moving into or out of, a second home or a vacation home - let reliable packers and movers provide the services to ease your packing and moving. Your time is valuable and precious; let us manage your move! We are reliable packers and movers who will manage all your moving processes very carefully and smartly.
                                    We just simplify your move by handling all the packing and moving process from source to destination
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-row'>
                            <div className='text-red-600 pt-4'><AttachMoneyIcon style={{ fontSize: '48px' }} /></div>
                            <div>
                                <p className='text-bg px-4 mt-4 uppercase'>affordable pricing</p>
                                <p className="overflow-clip px-4 pt-2 txt-col ">
                                Every Packers and Movers arranges a pre-move house survey to calculate the volume of your goods, allowing them to provide you with quote for your move. You have to keep in mind that professional movers and packers charge by the weight and volume of your belongings, so it can be difficult to determine if you are already going overboard with your allotted budget. 
                                Call reliable packers and movers like Alliance logistics for moving at affordable price.
                                </p>
                            </div>
                        </div>
                        <div className='flex flex-row'>
                            <div className='text-red-600 pt-4'><SecurityIcon style={{ fontSize: '48px' }} /></div>
                            <div>
                                <p className='text-bg px-4 mt-4 uppercase'>Secure packing</p>
                                <p className="overflow-clip px-4 pt-2 txt-col ">
                                Sheoran International Packer & Mover provides Cardboard carton to wooden crates built with shock absorbers and integral ramps to pack all your valuable items. Our experienced professional team handles all types of packing so that your valuable goods reach destination without any damage. We pack your goods on site or have it packed at our warehouses. We pay strict attention while packing and moving your fragile item from source to destination. 
                                All Packing materials used are recyclable, so no need to worry about wastage.
                                </p>
                            </div>
                        </div>
                    </div>
    
}