import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import CarsDetail from "@/components/car/CarsDetails"
import Pagination from "@/components/Pagination";
import NavBar from "@/components/NavBar";

export interface CarsPageProps {
    params: {
        id: number;
    };
}

const CarsPage: React.FC<CarsPageProps> = ({ params }) => {
    return (
        <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
            <NavBar />
            <CarsDetail page={Number(params.id)} />
            <Pagination page={params.id} />
        </section>
    )
}

export default CarsPage;