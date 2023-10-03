import { carsData } from '@/config/site';
import { create } from 'zustand'


export type Car = {
    id: string;
    model: {
        name: string;
        year: number;
    };
    specs: {
        capacity: number;
        engineType: 'Hybrid' | 'Gasoline' | 'EV';
        mileage: string;
        gearShiftAutomatic: boolean;
    };
    rentalDetails: {
        costPerMonth: number;
        availability: boolean;
    };
    media: {
        imageLink: string;
    };
};

type StoreState = {
    cars: Car[];
    searchQuery: string;
    setSearchQuery: (query: string) => void;
    search: (query: string) => Car[];
};

export const useCarsStore = create<StoreState>((set) => ({
    cars: carsData,
    searchQuery: '',
    setSearchQuery: (query) => set({ searchQuery: query }),
    search: (query) => {
        return carsData.filter(car => car.model.name.toLowerCase().includes(query.toLowerCase()));
    }
}));