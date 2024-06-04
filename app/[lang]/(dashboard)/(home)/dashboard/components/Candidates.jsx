// Candidates.js
import React, { useState } from 'react';
import CandidateCard from './CandidateCard';
import Filter from './Filter';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import { area } from 'd3-shape';

const candidates = [
  {
    name: 'Carolina',
    area: 'Social Media Manager',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    payRate: '$4 / per hour',
    availability: '20 or 40 hours per week',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    name: 'Alex',
    area: 'Software Engineer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    payRate: '$30 / per hour',
    availability: 'Full-time',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    name: 'Maria',
    area: 'Product Manager',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    payRate: '$50 / per hour',
    availability: 'Part-time',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    name: 'John',
    area: 'Graphic Designer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    payRate: '$25 / per hour',
    availability: 'Full-time',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    name: 'Anna',
    area: 'Marketing Specialist',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    payRate: '$35 / per hour',
    availability: 'Full-time',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    name: 'Steve',
    area: 'Data Scientist',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    payRate: '$60 / per hour',
    availability: 'Part-time',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    name: 'Laura',
    area: 'Social Media Manager',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    payRate: '$5 / per hour',
    availability: '20 or 40 hours per week',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    name: 'Tom',
    area: 'Software Engineer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    payRate: '$32 / per hour',
    availability: 'Full-time',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    name: 'Olivia',
    area: 'Product Manager',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    payRate: '$55 / per hour',
    availability: 'Part-time',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    name: 'Henry',
    area: 'Graphic Designer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    payRate: '$27 / per hour',
    availability: 'Full-time',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    name: 'Sophia',
    area: 'Marketing Specialist',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    payRate: '$37 / per hour',
    availability: 'Full-time',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    name: 'James',
    area: 'Data Scientist',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    payRate: '$65 / per hour',
    availability: 'Part-time',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    name: 'Emma',
    area: 'Social Media Manager',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    payRate: '$6 / per hour',
    availability: '20 or 40 hours per week',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    name: 'Daniel',
    area: 'Software Engineer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    payRate: '$35 / per hour',
    availability: 'Full-time',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    name: 'Ava',
    area: 'Product Manager',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    payRate: '$60 / per hour',
    availability: 'Part-time',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    name: 'Ethan',
    area: 'Graphic Designer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    payRate: '$30 / per hour',
    availability: 'Full-time',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    name: 'Mia',
    area: 'Marketing Specialist',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    payRate: '$40 / per hour',
    availability: 'Full-time',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    name: 'Lucas',
    area: 'Data Scientist',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    payRate: '$70 / per hour',
    availability: 'Part-time',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    name: 'Isabella',
    area: 'Social Media Manager',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    payRate: '$7 / per hour',
    availability: '20 or 40 hours per week',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    name: 'Jack',
    area: 'Software Engineer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    payRate: '$40 / per hour',
    availability: 'Full-time',
    videoUrl: 'https://path-to-your-video.mp4',
  },
];

const Candidates = () => {
  const [filters, setFilters] = useState({ name: '', area: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredCandidates = candidates.filter((candidate) => {
    return (
      candidate.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      (filters.area === '' || candidate.area === filters.area)
    );
  });

  const totalPages = Math.ceil(filteredCandidates.length / itemsPerPage);

  const currentCandidates = filteredCandidates.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Candidates</h1>
      <Filter filters={filters} setFilters={setFilters} />
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
        {currentCandidates.map((candidate, index) => (
          <CandidateCard key={index} candidate={candidate} />
        ))}
      </div>

      <div className="mt-4"> 
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" onClick={handlePreviousPage} disabled={currentPage === 1} />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  onClick={() => setCurrentPage(index + 1)}
                  isActive={currentPage === index + 1}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext href="#" onClick={handleNextPage} disabled={currentPage === totalPages} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default Candidates;
