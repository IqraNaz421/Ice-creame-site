
import { FC } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Link from "next/link";

const reviews = [
  {
    name: "John Doe",
    text: "This service was absolutely amazing I could not be happier with the results",
  },
  {
    name: "Jane Smith",
    text: "The team was professional and the end product exceeded my expectations Highly recommend",
  },
  {
    name: "Michael Johnson",
    text: "Fantastic experience from start to finish The attention to detail was exceptional",
  },
  {
    name: "Sarah Lee",
    text: "Great work The process was smooth and the communication was top-notch",
  },
  {
    name: "Chris Brown",
    text: "Highly satisfied with the service provided Will definitely be coming back for more",
  },
  {
    name: "Emma Wilson",
    text: "The best in the industry Truly professionals who know what they are doing",
  },
];

const ClientReviewsPage: FC = () => {
  return (
    <div className="bg-gradient-to-br from-black via-[#FF6F61] to-lightCoral min-h-screen py-10">
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-center text-4xl font-bold text-white mb-8 tracking-wide">
          What Our Clients Say
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-black text-center p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center">
                {/* Icon */}
                <FaQuoteLeft className="text-white text-5xl mb-4" />
                
                {/* Review Text */}
                <p className="text-white text-lg mb-4">{review.text}</p>
                
                {/* Author */}
                <p className="text-white font-semibold">{review.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link href="clients"
            className="bg-lightCoral text-white py-3 px-8 rounded-lg hover:bg-white hover:text-black transition duration-300">
              See All Reviews
            
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ClientReviewsPage;
