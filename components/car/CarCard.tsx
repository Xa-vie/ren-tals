import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Car } from "@/store/CarStore";
import { Cog, Fuel, Gauge, Heart, User2, Users2 } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";


interface CarCardProps {
    car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
    return (
        <Card className="rounded-[20px] bg-backgroundcard text-[#33324d]">
            <CardHeader className="p-3">
                {car.media.imageLink && <Image layout="responsive"
                    width={500}
                    height={200}
                    className="w-full rounded-[20px] mb-4 p-1"
                    src={car.media.imageLink}
                    alt={`${car.model.name} image`} />}
                <CardTitle className="flex justify-between items-center font-medium ">
                    {car.model.name}
                    <div className="inline-block  text-sm px-4 py-1 bg-blue-100 border-2 border-dotted border-blue-200 rounded-full">
                        {car.model.year}
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent >
                <div className="grid grid-cols-4 gap-3 text-sm ">
                    <div className="flex items-center col-span-2">
                        <Users2 className="h-6 w-6 text-blue-500 mr-2" /> {car.specs.capacity} People
                    </div>
                    <div className="flex items-center col-span-2">
                        <Fuel className="h-6 w-6 text-blue-500 mr-2" /> {car.specs.engineType}
                    </div>
                    <div className="flex items-center col-span-2">
                        <Gauge className="h-6 w-6 text-blue-500 mr-2" /> {car.specs.mileage}km / 1-litre
                    </div>
                    <div className="flex items-center col-span-2">
                        <Cog className="h-6 w-6 text-blue-500 mr-2" /> {car.specs.gearShiftAutomatic ? 'Automatic' : 'Manual'}
                    </div>
                </div>
                <hr className="my-6" />
                <div className="flex items-center justify-between space-x-4">

                    <div className="flex items-baseline space-x-2">
                        <span className="text-2xl font-medium">$400</span>
                        <span className="text-sm font-medium">/month</span>
                    </div>

                    <div className="flex gap-4">
                        <div className="bg-[#daeafa] p-2 rounded-[12px] transform transition-transform hover:scale-105 hover:shadow-md hover:bg-[#c2e0f7] border-2 border-transparent hover:border-[#7cbbf2]">
                            <Heart className="h-6 w-6 text-[#7cbbf2] transform transition-transform hover:rotate-6 hover:text-[#5ca7e0]" />
                        </div>
                        {car.rentalDetails.availability ?
                            <Button className="bg-[#4899ec] text-white px-4 py-2 rounded-[12px]">
                                Rent Now
                            </Button>
                            :
                            <Button disabled={true} className="bg-[#4899ec] text-white px-4 py-2 rounded-[12px]">
                                Rent Now
                            </Button>}
                    </div>

                </div>
            </CardContent>
        </Card>
    );
}

export default CarCard;