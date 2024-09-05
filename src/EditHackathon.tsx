import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useHackathons } from "./utils/HackathonContext";

const EditHackathon = () => {
  const location = useLocation();
  const hackathon = location.state;
  const navigate = useNavigate();
  const { hackathons, setHackathons } = useHackathons();

  const [formData, setFormData] = useState({
    name: hackathon.name,
    description: hackathon.description,
    startDate: hackathon.startDate,
    endDate: hackathon.endDate,
    level: hackathon.level,
    image: hackathon.image,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    const updatedHackathon = {
      ...hackathon,
      ...formData,
    };

    const updatedHackathons = hackathons.map((h) =>
      h.id === updatedHackathon.id ? updatedHackathon : h
    );
    setHackathons(updatedHackathons);

    navigate(`/AI-Planet/`);
  };

  return (
    <div className="edit-hackathon-page">
      <div className="bg-[#F8F9FD] p-10">
        <h1 className="text-2xl font-bold ml-16">Challenge Details</h1>
      </div>
      <form
        onSubmit={handleSave}
        className="rounded-lg shadow-lg px-20 py-10 max-md:p-10"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-4">
            Challenge Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-1/2 p-2 border rounded max-md:w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="startDate" className="block text-gray-700 mb-4">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-1/2 p-2 border rounded max-md:w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="endDate" className="block text-gray-700 mb-4">
            End Date
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-1/2 p-2 border rounded max-md:w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 mb-4">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-1/2 p-2 border rounded max-md:w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 mb-4">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-1/6 p-2 border rounded max-md:w-full"
          />
        </div>
        {formData.image && (
          <div>
            <img
              src={formData.image}
              alt="uploaded image"
              height={300}
              width={300}
              className="object-cover"
            />
            <button
              onClick={() => setFormData({ ...formData, image: "" })}
              className="text-green-600 px-4 py-1 rounded-lg max-md:my-4 max-md:w-full"
            >
              Change Image
            </button>
          </div>
        )}

        <div className="mb-10">
          <label htmlFor="level" className="block text-gray-700 mb-4">
            Level
          </label>
          <select
            id="level"
            name="level"
            value={formData.level}
            onChange={handleChange}
            className="w-1/6 p-2 border rounded max-md:w-full"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <button
          type="submit"
          className="px-5 py-2 bg-[#44924C] text-white rounded-lg text-xl max-md:w-full"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditHackathon;
