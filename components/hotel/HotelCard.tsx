import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Hotel } from "@/store/HotelStore";
import { Bath, BedDouble, Building2, Heart, MapPin, Move } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

type HotelProps = {
    hotel: Hotel;
    showHomeButton?: boolean
};

const HotelCard: React.FC<HotelProps> = ({ hotel, showHomeButton = false }) => (
    <Card className="rounded-[20px]  bg-[#fefffe] text-[#33324d] ">
        <CardHeader className="p-3 ">
            <div className="relative ">
                <div className="absolute top-4 left-5 font-semibold text-lg text-[#4d4fe6] bg-white rounded-full px-4 py-2">
                    For {hotel.listingType}
                </div>

                <div className="absolute top-4 right-5 text-black bg-white rounded-full p-3">
                    <Heart className="w-5 h-5 text-[#4d4fe6]" />
                </div>
                {hotel.imageUrl && <Image layout="responsive"
                    width={500}
                    height={200}
                    className="w-full rounded-[20px] mb-4 p-1"
                    src={hotel.imageUrl}
                    alt={`hotel image`} />}

                {
                    hotel.isHighlighted && <div className="absolute bottom-1 -left-5  text-sm bg-[#3639e4] text-white rounded px-8 py-2">Popular</div>
                }
            </div>

            <CardTitle className="flex flex-col justify-between px-4 font-medium ">
                <div className="flex items-center mb-2">
                    <MapPin className="h-4 w-4 mr-2 text-[#bca981]" />
                    <span className="text-sm">{hotel.location.streetAddress}</span>
                </div>
                <div className="text-xl my-2 font-semibold ">
                    {hotel.location.detailedAddress}
                </div>
            </CardTitle>

        </CardHeader>

        <CardContent >
            <div className="grid grid-cols-4 gap-3 text-sm ">
                <div className="flex flex-col items-center col-span-1 border-r-2 border-dotted border-gray-300 pr-2 font-medium">
                    <Building2 className="h-6 w-6 text=[#828a9c] mr-1 p-1 " />

                    <div>{hotel.features.totalRooms} Room</div>
                </div>
                <div className="flex flex-col items-center col-span-1 border-r-2 border-dotted border-gray-300 pr-2 font-medium">
                    <BedDouble className="h-6 w-6 text=[#828a9c] mr-1 p-1 " />

                    <div>{hotel.features.bedroomCount} Bed</div>
                </div>
                <div className="flex flex-col items-center col-span-1 border-r-2 border-dotted border-gray-300 pr-2 font-medium">
                    <Bath className="h-6 w-6 text=[#828a9c] mr-1 p-1  transform scale-x-[-1]" />
                    <div>{hotel.features.bathroomCount} Bath</div>
                </div>
                <div className="flex flex-col items-center col-span-1  font-medium">
                    <Move className="h-6 w-6 text=[#828a9c] mr-1 p-1 " />
                    <div>{hotel.features.sizeInSqFt} sft</div>
                </div>
            </div>
            <hr className="border-dotted my-4" />
            <div className="flex justify-between items-center">
                <span className="text-2xl text-[#3739e3] font-semibold ">${hotel.monthlyRent}
                    <span className="text-sm font-bold  text-gray-800"> /month</span>
                </span>
                {showHomeButton ? (
                    <Link href="/hotels" className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition">
                        Home
                    </Link>
                ) : (
                    <Link href={`hotels/${hotel.id}`} className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition">
                        Read More
                    </Link>
                )}

            </div>
        </CardContent>
    </Card>

);

export default HotelCard