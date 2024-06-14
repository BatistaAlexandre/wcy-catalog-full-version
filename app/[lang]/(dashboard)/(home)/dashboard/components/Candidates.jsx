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

  const getPaginationItems = () => {
    const paginationItems = [];
    const startPage = Math.max(1, currentPage - 4);
    const endPage = Math.min(totalPages, currentPage + 4);

    if (startPage > 1) {
      paginationItems.push(
        <PaginationItem key={1}>
          <PaginationLink href="#" onClick={() => setCurrentPage(1)}>
            1
          </PaginationLink>
        </PaginationItem>
      );
      if (startPage > 2) {
        paginationItems.push(
          <PaginationItem key="startEllipsis">
            <PaginationLink href="#" disabled>
              ...
            </PaginationLink>
          </PaginationItem>
        );
      }
    }

    for (let page = startPage; page <= endPage; page++) {
      paginationItems.push(
        <PaginationItem key={page}>
          <PaginationLink
            href="#"
            onClick={() => setCurrentPage(page)}
            isActive={currentPage === page}
          >
            {page}
          </PaginationLink>
        </PaginationItem>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        paginationItems.push(
          <PaginationItem key="endEllipsis">
            <PaginationLink href="#" disabled>
              ...
            </PaginationLink>
          </PaginationItem>
        );
      }
      paginationItems.push(
        <PaginationItem key={totalPages}>
          <PaginationLink href="#" onClick={() => setCurrentPage(totalPages)}>
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return paginationItems;
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
            {getPaginationItems()}
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
