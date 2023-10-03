"use client"

import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useCarsStore } from "@/store/CarStore";

export function SearchBar() {
    const setSearchQuery = useCarsStore(state => state.setSearchQuery);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuery = e.target.value;
        setSearchQuery(newQuery);
    };
    return (
        <div className="relative md:w-[150px] lg:w-[350px] text-[#657085]">
            <Input
                type="search"
                placeholder="Search..."
                onChange={handleChange}
                className="pl-4 pr-10 w-full rounded-[15px]" // Adjusted padding-right to give space for the icon
            />
            <Search className="text-[#657085] h-9 w-5 absolute right-5 top-1/2 transform -translate-y-1/2" />
            {/* Positioned the icon to the right and vertically centered */}
        </div>
    )
}