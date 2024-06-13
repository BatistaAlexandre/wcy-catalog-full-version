"use client";

import React from 'react';
import Candidates from './components/Candidates';  // Make sure the path is correct based on your project structure

const DashboardPageView = ({ trans }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center flex-wrap justify-between gap-4">
        {/* <div className="text-2xl font-medium text-default-800">
          Analytics {trans?.dashboard}
        </div> */}
        {/* <DatePickerWithRange /> */}
      </div>
      <Candidates />  {/* Add the Candidates component here */}
    </div>
  );
};

export default DashboardPageView;
