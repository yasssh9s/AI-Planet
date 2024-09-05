import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useHackathons } from "./utils/HackathonContext";
import levelIcon from "./assets/icons/carbon_skill-level-basic.svg";

const HackathonDetails = () => {
  const location = useLocation();
  const hackathon = location.state;
  const navigate = useNavigate();
  const { hackathons, setHackathons } = useHackathons();

  if (!hackathon) {
    return <div>Hackathon not found</div>;
  }

  const handleDelete = () => {
    const updatedHackathons = hackathons.filter((h) => h.id !== hackathon.id);
    setHackathons(updatedHackathons);
    navigate("/");
  };

  const handleEdit = () => {
    navigate(`/edit-hackathon/${hackathon.id}`, { state: hackathon });
  };
  return (
    <div>
      <div className="bg-[#003145] text-white p-20 flex flex-col items-start gap-5">
        <p className="bg-[#FFCE5C] w-fit text-black px-4 py-1">
          {`Starts on ${new Date(
            hackathon.startDate
          ).toLocaleString()} (India Standard Time)`}
        </p>
        <h1 className="text-4xl font-bold">{hackathon.name}</h1>
        <div className="bg-white text-black w-fit flex items-center gap-2 px-2 py-1 rounded-lg">
          <img src={levelIcon} alt="Level Icon" width={24} height={24} />
          {hackathon.level}
        </div>
      </div>
      <div className="flex justify-between px-20 py-5 shadow-md">
        <h1 className="text-xl font-bold border-b-4 border-[#44924C]">
          Overview
        </h1>
        <div>
          <button
            className="bg-[#44924C] text-white px-4 py-1 rounded-lg border border-[#44924C] mx-4"
            onClick={() => handleEdit()}
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="border border-red-600 text-red-600 px-4 py-1 rounded-lg"
          >
            Delete
          </button>
        </div>
      </div>
      <p className="px-20 py-10">{hackathon.description}</p>
    </div>
  );
};

export default HackathonDetails;
