import React, { useState } from "react";

interface FilterProps {
  onFilterChange: (filters: { status: string[]; level: string[] }) => void;
}

const FilterDropdown: React.FC<FilterProps> = ({ onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<string[]>([]);
  const [selectedLevel, setSelectedLevel] = useState<string[]>([]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedStatus((prev) =>
      prev.includes(value)
        ? prev.filter((status) => status !== value)
        : [...prev, value]
    );
  };

  const handleLevelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedLevel((prev) =>
      prev.includes(value)
        ? prev.filter((level) => level !== value)
        : [...prev, value]
    );
  };

  // Call onFilterChange whenever the filters change
  React.useEffect(() => {
    onFilterChange({ status: selectedStatus, level: selectedLevel });
  }, [selectedStatus, selectedLevel]);

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="bg-white p-2 rounded-lg shadow flex items-center justify-evenly text-lg w-48"
      >
        <span>Filter</span>
        <svg
          className={`ml-2 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 9l6 6 6-6H6z" fill="currentColor" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 bg-white border rounded-lg shadow-lg p-4 w-48 z-10">
          <div className="mb-4">
            <h3 className="text-gray-700 font-semibold mb-2">Status</h3>
            {["All", "Active", "Upcoming", "Past"].map((status) => (
              <div key={status} className="flex items-center">
                <input
                  type="checkbox"
                  id={status}
                  value={status.toLowerCase()}
                  onChange={handleStatusChange}
                  checked={selectedStatus.includes(status.toLowerCase())}
                  className="mr-2"
                />
                <label htmlFor={status} className="text-gray-600">
                  {status}
                </label>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-gray-700 font-semibold mb-2">Level</h3>
            {["Easy", "Medium", "Hard"].map((level) => (
              <div key={level} className="flex items-center">
                <input
                  type="checkbox"
                  id={level}
                  value={level.toLowerCase()}
                  onChange={handleLevelChange}
                  checked={selectedLevel.includes(level.toLowerCase())}
                  className="mr-2"
                />
                <label htmlFor={level} className="text-gray-600">
                  {level}
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterDropdown;
