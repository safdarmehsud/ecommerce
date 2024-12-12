import React from "react";

const TestimonialCard = ({ name, image, rating, review }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 mx-auto">
      {/* User Avatar */}
      <div className="flex items-center justify-center">
        <img
          src={image}
          alt={`${name}'s avatar`}
          className="w-16 h-16 rounded-full object-cover border-2 border-orange-500"
        />
      </div>

      {/* User Details */}
      <div className="text-center mt-4">
        <h5 className="text-lg font-bold text-gray-900">{name}</h5>
        <div className="mt-1 flex justify-center">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <svg
                key={index}
                className="w-5 h-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956a1 1 0 00.95.69h4.177c.969 0 1.371 1.24.588 1.81l-3.391 2.46a1 1 0 00-.364 1.118l1.286 3.956c.3.921-.755 1.688-1.539 1.118L10 13.187l-3.391 2.46c-.784.57-1.838-.197-1.539-1.118l1.286-3.956a1 1 0 00-.364-1.118L2.6 9.383c-.784-.57-.381-1.81.588-1.81h4.177a1 1 0 00.95-.69l1.286-3.956z" />
              </svg>
            ))}
        </div>
      </div>

      {/* User Review */}
      <p className="mt-4 text-sm text-gray-600 text-center">{review}</p>
    </div>
  );
};

export default TestimonialCard;
