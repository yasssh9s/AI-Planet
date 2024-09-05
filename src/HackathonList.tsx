import React, { useState, useContext } from "react";
import HackathonCard from "./HackathonCard";
import SearchIcon from "./assets/icons/carbon_search.svg";
import Filter from "./Filter"; // Import the FilterDropdown
import { HackathonContext } from "./utils/HackathonContext";

const HackathonList = () => {
  const context = useContext(HackathonContext);

  if (!context) {
    throw new Error("HackathonList must be used within a HackathonProvider");
  }

  const { hackathons } = context;
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filters, setFilters] = useState<{ status: string[]; level: string[] }>(
    {
      status: [],
      level: [],
    }
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (newFilters: {
    status: string[];
    level: string[];
  }) => {
    setFilters(newFilters);
  };

  const filteredHackathons = hackathons
    .filter((hackathon) =>
      hackathon.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(
      (hackathon) =>
        filters.status.length === 0 ||
        filters.status.includes("all") ||
        filters.status.includes(hackathon.status)
    )
    .filter(
      (hackathon) =>
        filters.level.length === 0 ||
        filters.level.includes(hackathon.level.toLowerCase())
    );

  return (
    <div className="bg-[#002A3B] p-20 flex flex-col gap-10 w-full h-full">
      <h1 className="text-white text-3xl font-semibold text-center">
        Explore Challenges
      </h1>
      <div className="flex items-center justify-center gap-10">
        <div className="flex items-center bg-white w-3/5 py-2 px-5 gap-4 rounded-lg">
          <img src={SearchIcon} alt="search" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
            className="outline-none w-full"
          />
        </div>
        <Filter onFilterChange={handleFilterChange} />
      </div>
      {hackathons.length === 0 && (
        <div className="text-white text-3xl font-semibold text-center">
          You have not created any Hackathons
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20">
        {filteredHackathons.map((hackathon) => (
          <HackathonCard key={hackathon.id} {...hackathon} />
        ))}
      </div>
    </div>
  );
};

export default HackathonList;
