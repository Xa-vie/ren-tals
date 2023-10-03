import Link from 'next/link';
import { CarsDetailProps } from './CarsDetails';
import { ArrowLeft, ArrowRight } from 'lucide-react';

function Pagination({ page, totalPages = 10 }: CarsDetailProps) {
    const currentPage = Number(page) || 1;

    return (
        <div className="border bg-backgroundcard p-4 flex justify-between items-center rounded-[20px]">
            {/* Current Page Display */}
            <span>{currentPage} of {totalPages}</span>

            {/* Pagination Buttons */}
            <div className="flex space-x-4">
                <Link href={`${currentPage - 1}`} passHref>
                    <div className={`px-1 bg-white py-1 rounded-[10px] shadow-md  ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}>
                        <ArrowLeft className="h-4 w-4 m-1" />
                    </div>
                </Link>

                {Array.from({ length: 10 }).map((_, index) => {
                    const pageNumber = index + 1;
                    return (
                        <Link key={pageNumber} href={`${pageNumber}`} passHref>
                            <div className={`px-2 w-8 text-center bg-white py-1 rounded-[10px] shadow-md ${pageNumber === currentPage ? 'text-blue-500 bg-gray-50' : ''}`}>
                                {pageNumber}
                            </div>
                        </Link>
                    );
                })}

                <Link href={`${currentPage + 1}`} passHref>
                    <div className={`px-1 bg-white rounded-[10px] shadow-md py-1 ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}>
                        <ArrowRight className="h-4 w-4 m-1" />
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Pagination;
