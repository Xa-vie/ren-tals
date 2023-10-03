import HotelDetails from "@/components/hotel/HotelDetails";

export interface HotelsPageProps {
    params: {
        id: number;
    };
}

const HotelsPage: React.FC<HotelsPageProps> = ({ params }) => {
    return (
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10 ">
            <HotelDetails />
        </section>
    )
}

export default HotelsPage;