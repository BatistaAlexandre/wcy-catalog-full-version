import React from 'react';
import { Input } from "@/components/ui/input";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Filter = ({ filters, setFilters }) => {
  const handleNameChange = (event) => {
    setFilters({ ...filters, name: event.target.value });
  };

  const handleAreaChange = (area) => {
    setFilters({ ...filters, area });
  };

  return (
    <div className="mb-4 flex flex-col md:flex-row items-center">
      <Input
        type="text"
        placeholder="Filter by name"
        value={filters.name}
        onChange={handleNameChange}
        className="mb-2 md:mb-0 md:mr-2"
      />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="soft" className="w-full md:w-auto">
            {filters.area || "Select Area"}
            <Icon icon="heroicons:chevron-down" className="h-5 w-5 ml-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[196px]" align="start">
          <DropdownMenuLabel>Filter by Area</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => handleAreaChange("")}>All</DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleAreaChange("Social Media Manager")}>
            Social Media Manager
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleAreaChange("Software Engineer")}>
            Software Engineer
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleAreaChange("Product Manager")}>
            Product Manager
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleAreaChange("Graphic Designer")}>
            Graphic Designer
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleAreaChange("Marketing Specialist")}>
            Marketing Specialist
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleAreaChange("Data Scientist")}>
            Data Scientist
          </DropdownMenuItem>
          {/* Add more options as needed */}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Filter;
