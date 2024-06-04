import React from 'react';
import CandidateCard from './CandidateCard';

const Candidates = () => {
    return (
      <div className="">
        <h1 className="text-2xl font-bold mb-4">sssss</h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4">
          {candidates.map((candidate, index) => (
            <CandidateCard key={index} candidate={candidate} />
          ))}
        </div>
      </div>
    );
  };

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
    name: 'Carolina',
    title: 'Social Media Manager',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non lacinia sem, vitae laoreet nisl. Phasellus laoreet feugiat nulla, ac luctus ex.',
    payRate: '$4 / per hour',
    availability: '20 or 40 hours per week',
    videoUrl: 'https://path-to-your-video.mp4',
  },
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
    name: 'Carolina',
    title: 'Social Media Manager',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque non lacinia sem, vitae laoreet nisl. Phasellus laoreet feugiat nulla, ac luctus ex.',
    payRate: '$4 / per hour',
    availability: '20 or 40 hours per week',
    videoUrl: 'https://path-to-your-video.mp4',
  },
  // ... more candidates
];



export default Candidates;
