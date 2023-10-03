"use client"
import { useState } from 'react';
import { useHotelsStore } from "@/store/HotelStore";
import HotelCard from "./HotelCard";
import { Button } from '../ui/button';
import { Hourglass } from 'lucide-react';

const HotelDetails: React.FC = () => {
    const [showAll, setShowAll] = useState(false);

    const setCityQuery = useHotelsStore((state) => state.setCityQuery);
    const cityQuery = useHotelsStore((state) => state.cityQuery);
    const allHotels = useHotelsStore((state) => state.hotels);

    const filteredHotels = allHotels.filter(hotel => hotel.city === cityQuery);

    const handleCityChange = (city: string) => {
        setCityQuery(city);
        setShowAll(false);
    };

    return (
        <div>
            <div className="flex space-x-4 mb-6">
                {['New York', 'Mumbai', 'Paris', 'London'].map((city) => (
                    <Button
                        // variant='ghost'
                        key={city}
                        onClick={() => handleCityChange(city)}
                        className={`rounded-full hover:text-white py-3 px-6 font-semibold  transition duration-300 ease-in-out ${cityQuery === city ? 'bg-[#3639e4] text-white' : 'bg-[#ebebfb]  text-[#525152]'}`}
                    >
                        {city}
                    </Button>
                ))}
            </div>

            <div key={cityQuery} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {(showAll ? filteredHotels : filteredHotels.slice(0, 6)).map((hotel) => (
                    <HotelCard key={hotel.id} hotel={hotel} />
                ))}
            </div>
            <center>
                <Button
                    className="w-38 mt-8 py-3 px-6 font-semibold bg-[#3639e4] text-white rounded-full"
                    onClick={() => setShowAll(!showAll)}
                >
                    <div className="flex justify-center items-center space-x-2">
                        <Hourglass className='h-4 w-4' />
                        <span>Show {showAll ? "Less" : "More"}</span>
                    </div>
                </Button>
            </center>

        </div>
    );
};


export default HotelDetails