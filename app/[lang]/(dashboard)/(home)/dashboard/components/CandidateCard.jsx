// CandidateCard.js
import React from 'react';

const CandidateCard = ({ candidate }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row w-full">
      <div className="relative w-full md:w-1/2 h-auto bg-black rounded-lg overflow-hidden mb-4 md:mb-0">
        <video
          className="w-full h-full object-cover"
          controls
        >
          <source src={candidate.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex flex-col w-full md:w-1/2 pl-0 md:pl-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold">{candidate.name}</h2>
            <span className="text-gray-500 font-medium">
              {candidate.area}
            </span>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-gray-500 font-medium">
              {candidate.payRate}
            </span>
            <span className="text-gray-500 font-medium">
              {candidate.availability}
            </span>
          </div>
        </div>
        <p className="text-gray-600 mb-4">
          {candidate.description}
        </p>
        <div className="flex justify-between items-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Schedule Now
          </button>
          <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;
