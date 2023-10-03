import { hotelsData } from '@/config/site';
import { create } from 'zustand';

export type Hotel = {
    id: string;
    listingType: 'rent' | 'sale';
    city: 'New York' | 'Mumbai' | 'Paris' | 'London';
    location: {
        streetAddress: string;
        detailedAddress: string;
    };
    features: {
        totalRooms: number;
        bedroomCount: number;
        bathroomCount: number;
        sizeInSqFt: number;
    };
    monthlyRent: number;
    isHighlighted: boolean;
    imageUrl: string;
}


type StoreState = {
    hotels: Hotel[];
    cityQuery: string;
    setCityQuery: (city: string) => void;
    getFilteredHotels: () => Hotel[];
};

export const useHotelsStore = create<StoreState>((set, get) => ({
    hotels: hotelsData,
    cityQuery: 'New York',
    setCityQuery: (city) => set({ cityQuery: city }),
    getFilteredHotels: () => {
        const currentCity = get().cityQuery;
        return currentCity ? get().hotels.filter(hotel => hotel.city === currentCity) : get().hotels;
    },
}));