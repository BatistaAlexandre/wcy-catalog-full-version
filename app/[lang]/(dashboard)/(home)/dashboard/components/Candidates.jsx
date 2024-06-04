import React, { useState } from 'react';
import CandidateCard from './CandidateCard';
import Filter from './Filter';

const candidates = [
  {
    name: 'Carolina',
    title: 'Social Media Manager',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non lacinia sem, vitae laoreet nisl. Phasellus laoreet feugiat nulla, ac luctus ex.',
    payRate: '$4 / per hour',
    availability: '20 or 40 hours per week',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    name: 'Alex',
    title: 'Software Engineer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non lacinia sem, vitae laoreet nisl. Phasellus laoreet feugiat nulla, ac luctus ex.',
    payRate: '$30 / per hour',
    availability: 'Full-time',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    name: 'Maria',
    title: 'Product Manager',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non lacinia sem, vitae laoreet nisl. Phasellus laoreet feugiat nulla, ac luctus ex.',
    payRate: '$50 / per hour',
    availability: 'Part-time',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    name: 'John',
    title: 'Graphic Designer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non lacinia sem, vitae laoreet nisl. Phasellus laoreet feugiat nulla, ac luctus ex.',
    payRate: '$25 / per hour',
    availability: 'Full-time',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    name: 'Carolina',
    title: 'Social Media Manager',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    payRate: '$4 / per hour',
    availability: '20 or 40 hours per week',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    name: 'Alex',
    title: 'Software Engineer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    payRate: '$30 / per hour',
    availability: 'Full-time',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    name: 'Maria',
    title: 'Product Manager',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    payRate: '$50 / per hour',
    availability: 'Part-time',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    name: 'John',
    title: 'Graphic Designer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    payRate: '$25 / per hour',
    availability: 'Full-time',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  // Additional candidates
  {
    name: 'Anna',
    title: 'Marketing Specialist',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    payRate: '$35 / per hour',
    availability: 'Full-time',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    name: 'Steve',
    title: 'Data Scientist',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    payRate: '$60 / per hour',
    availability: 'Part-time',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    name: 'Laura',
    title: 'Social Media Manager',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    payRate: '$5 / per hour',
    availability: '20 or 40 hours per week',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    name: 'Tom',
    title: 'Software Engineer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    payRate: '$32 / per hour',
    availability: 'Full-time',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    name: 'Olivia',
    title: 'Product Manager',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    payRate: '$55 / per hour',
    availability: 'Part-time',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    name: 'Henry',
    title: 'Graphic Designer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    payRate: '$27 / per hour',
    availability: 'Full-time',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    name: 'Sophia',
    title: 'Marketing Specialist',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    payRate: '$37 / per hour',
    availability: 'Full-time',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    name: 'James',
    title: 'Data Scientist',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    payRate: '$65 / per hour',
    availability: 'Part-time',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    name: 'Emma',
    title: 'Social Media Manager',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    payRate: '$6 / per hour',
    availability: '20 or 40 hours per week',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    name: 'Daniel',
    title: 'Software Engineer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    payRate: '$35 / per hour',
    availability: 'Full-time',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    name: 'Ava',
    title: 'Product Manager',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    payRate: '$60 / per hour',
    availability: 'Part-time',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    name: 'Ethan',
    title: 'Graphic Designer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    payRate: '$30 / per hour',
    availability: 'Full-time',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    name: 'Mia',
    title: 'Marketing Specialist',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    payRate: '$40 / per hour',
    availability: 'Full-time',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    name: 'Lucas',
    title: 'Data Scientist',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    payRate: '$70 / per hour',
    availability: 'Part-time',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  {
    name: 'Isabella',
    title: 'Social Media Manager',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    payRate: '$7 / per hour',
    availability: '20 or 40 hours per week',
    videoUrl: 'https://path-to-your-video.mp4',
  },

];

const Candidates = () => {
  const [filters, setFilters] = useState({ name: '', title: '' });

  const filteredCandidates = candidates.filter((candidate) => {
    return (
      candidate.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      (filters.title === '' || candidate.title === filters.title)
    );
  });

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Candidates</h1>
      <Filter filters={filters} setFilters={setFilters} />
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
        {filteredCandidates.map((candidate, index) => (
          <CandidateCard key={index} candidate={candidate} />
        ))}
      </div>
    </div>
  );
};

export default Candidates;
