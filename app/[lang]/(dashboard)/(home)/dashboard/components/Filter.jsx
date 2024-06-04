import React from 'react';

const Filter = ({ filters, setFilters }) => {
  const handleNameChange = (event) => {
    setFilters({ ...filters, name: event.target.value });
  };

  const handleTitleChange = (event) => {
    setFilters({ ...filters, title: event.target.value });
  };

  return (
    <div className="mb-4 flex flex-col md:flex-row items-center">
      <input
        type="text"
        placeholder="Filter by name"
        value={filters.name}
        onChange={handleNameChange}
        className="mb-4 md:mb-0 md:mr-4 p-2 border border-gray-300 rounded"
      />
      <select
        value={filters.title}
        onChange={handleTitleChange}
        className="p-2 border border-gray-300 rounded"
      >
        <option value="">Filter by title</option>
        <option value="Social Media Manager">Social Media Manager</option>
        <option value="Software Engineer">Software Engineer</option>
        <option value="Product Manager">Product Manager</option>
        <option value="Graphic Designer">Graphic Designer</option>
        <option value="Marketing Specialist">Marketing Specialist</option>
        <option value="Data Scientist">Data Scientist</option>
        {/* Add more options as needed */}
      </select>
    </div>
  );
};

export default Filter;
