import HotelCard from "@/components/hotel/HotelCard";
import { hotelsData } from "@/config/site";

export interface HotelPageProps {
    params: {
        id: number;
    };
}

const HotelPage: React.FC<HotelPageProps> = ({ params }) => {

    const { id } = params
    const hotel = hotelsData.find(h => h.id == id);

    if (!hotel) {
        return <div>Loading...</div>; // or some other placeholder
    }

    return (
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
            <HotelCard hotel={hotel} />
        </section>
    )
}

export default HotelPage;