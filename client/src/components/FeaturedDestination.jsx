import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './title'
import { useNavigate } from 'react-router-dom'

function FeaturedDestination() {

    const navigate = useNavigate();
return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>

        <Title
            title="Featured Destinations"
            subTitle="Discover our handpicked selection of top destinations and hotels for your next unforgettable stay."
            
        />

        <div className='flex items-center justify-between px-4 py-2 gap-6 mt-20'>
            {roomsDummyData.slice(0,4).map((room, index) => (
                <HotelCard room={room} index={index} key={room._id} />
            ))}
        </div>

        <button onClick={() => {navigate('/rooms') ; scrollTo(0,0)}} className='px-6 py-2 mt-8 text-sm font-medium text-gray-800 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-all cursor-pointer'>
            View All Destinations
        </button>
    </div>
)
}
export default FeaturedDestination
