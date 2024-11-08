// components/ClientReviewsCard.tsx
import { FC } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Link from "next/link";

const ClientReviews: FC = () => {
    return (
        <div className="flex items-center justify-center  mb-16 mt-24 bg-gradient-to-br from-black via-[#FF6F61] to-lightCoral">
            <div className="bg-black border-2 border-x-pink-400  text-center p-5 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 w-80 sm:w-96 mx-2">
                <div className="flex flex-col items-center">
                    {/* Icon */}
                    <FaQuoteLeft className="text-lightCoral text-4xl mb-2" />
                    
                    {/* Title */}
                    <h2 className="text-2xl font-bold text-white mb-2 underline tracking-wide">
                        Client Reviews
                    </h2>
                    
                    {/* Link */}
                    <Link href="/clients"
                         className="text-lightCoral font-medium mt-2 hover:underline hover:text-white transition duration-200">
                            Read More
                        
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ClientReviews;
