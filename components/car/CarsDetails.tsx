"use client"
import { useCarsStore } from "@/store/CarStore";
import CarCard from "./CarCard";

export interface CarsDetailProps {
    page: number;
}

const ITEMS_PER_PAGE = 6;

const CarsDetail: React.FC<CarsDetailProps> = ({ page }) => {

    const searchQuery = useCarsStore(state => state.searchQuery);
    const searchCars = useCarsStore(state => state.search);
    const allCars = useCarsStore(state => state.cars);
    const results = searchQuery ? searchCars(searchQuery) : allCars;
    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedResults = results.slice(startIndex, endIndex);

    if (results.length === 0) {
        return <h2>No cars available</h2>;
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {paginatedResults.map(car => (
                <CarCard key={car.id} car={car} />
            ))}
        </div>
    );
}

export default CarsDetail;