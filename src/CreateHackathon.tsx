import React, { useState } from "react";
import { useHackathons } from "./utils/HackathonContext";
import { useNavigate } from "react-router-dom";

interface FormState {
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  image: string;
  level: "easy" | "medium" | "hard";
}

const CreateHackathon = () => {
  const { addHackathon } = useHackathons();
  const [formData, setFormData] = useState<FormState>({
    name: "",
    startDate: "",
    endDate: "",
    description: "",
    image: "",
    level: "easy",
  });

  const navigate = useNavigate();

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const { name, startDate, endDate, description, image, level } = formData;

    const newHackathon = {
      id: Date.now().toString(),
      name,
      startDate,
      endDate,
      description,
      image,
      level,
      status: determineStatus(startDate, endDate),
    };

    addHackathon(newHackathon);
    setFormData({
      name: "",
      startDate: "",
      endDate: "",
      description: "",
      image: "",
      level: "easy",
    });
    navigate(`/`);
  };

  const determineStatus = (
    start: string,
    end: string
  ): "active" | "upcoming" | "past" => {
    const now = new Date().getTime();
    const startDate = new Date(start).getTime();
    const endDate = new Date(end).getTime();

    if (now < startDate) return "upcoming";
    if (now > endDate) return "past";
    return "active";
  };

  return (
    <div>
      <div className="bg-[#F8F9FD] p-10">
        <h1 className="text-2xl font-bold ml-16">Challenge Details</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="rounded-lg shadow-lg px-20 py-10"
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
            className="w-1/2 p-2 border rounded"
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
            className="w-1/2 p-2 border rounded"
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
            className="w-1/2 p-2 border rounded"
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
            className="w-1/2 p-2 border rounded"
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
            className="w-1/6 p-2 border rounded"
          />
        </div>

        <div className="mb-10">
          <label htmlFor="level" className="block text-gray-700 mb-4">
            Level
          </label>
          <select
            id="level"
            name="level"
            value={formData.level}
            onChange={handleChange}
            className="w-1/6 p-2 border rounded"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <button
          type="submit"
          className="px-5 py-2 bg-[#44924C] text-white rounded-lg text-xl"
        >
          Create Challenge
        </button>
      </form>
    </div>
  );
};

export default CreateHackathon;
