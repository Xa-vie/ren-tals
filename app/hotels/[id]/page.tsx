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
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-200">
                <div className="bg-white shadow-xl rounded-lg p-8">
                    <h1 className="text-xl font-semibold text-gray-800 mb-4">Oops!</h1>
                    <p className="text-gray-600">Hotel Not Found</p>
                </div>
            </div>); // or some other placeholder
    }
    hotel.imageUrl = hotel.imageUrl.split("&w=")[0];
    return (
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
            <HotelCard hotel={hotel} showHomeButton={true} />
        </section>
    )
}

export default HotelPage;