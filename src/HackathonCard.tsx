import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonIcon from "./assets/icons/Group.png";

interface HackathonCardProps {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  image: string;
  level: string;
  status: "active" | "upcoming" | "past";
}

const HackathonCard: React.FC<HackathonCardProps> = ({
  id,
  name,
  startDate,
  endDate,
  description,
  image,
  level,
  status,
}) => {
  const [timer, setTimer] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date().getTime();
      let targetDate: number;

      if (status === "active") {
        targetDate = new Date(endDate).getTime();
      } else if (status === "upcoming") {
        targetDate = new Date(startDate).getTime();
      } else {
        setTimer("");
        return;
      }

      const distance = targetDate - now;

      if (distance < 0) {
        setTimer("");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      setTimer(`${days} : ${hours} :  ${minutes}`);
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [startDate, endDate, status]);

  const handleNavigate = () => {
    navigate(`/hackathon/${id}`, {
      state: { id, name, startDate, image, level, description },
    });
  };

  return (
    <div className="border rounded-lg shadow-lg bg-white flex flex-col items-center justify-center gap-4 h-full w-80 max-md:w-full">
      {image && (
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-cover mb-4 rounded"
        />
      )}

      {status === "active" && (
        <p className="bg-green-200 text-[#44924C] px-2 rounded-lg">
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </p>
      )}
      {status === "upcoming" && (
        <p className="bg-[#F2C94C40] px-2 rounded-lg">
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </p>
      )}
      {status === "past" && (
        <p className="bg-red-300 px-2 rounded-lg">
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </p>
      )}
      <h3 className="text-xl font-bold">{name}</h3>
      {status === "active" && (
        <div className="flex flex-col items-center">
          <p>Ends in</p>
          <h4 className="font-bold text-xl">{timer}</h4>
          <p className="text-xs">{`Days : Hours : Minutes`}</p>
        </div>
      )}
      {status === "upcoming" && (
        <div className="flex flex-col items-center">
          <p>Starts in</p>
          <h4 className="font-bold text-3xl">{timer}</h4>
          <p className="text-xs">{`Days : Hours : Minutes`}</p>
        </div>
      )}
      {status === "past" && (
        <div className="flex flex-col items-center">
          <p>Ended on</p>
          <h4 className="font-bold text-xl">
            {new Date(endDate).toLocaleDateString()}
          </h4>
        </div>
      )}
      <button
        onClick={handleNavigate}
        className="m-4 bg-[#44924C] text-white px-5 py-2 flex items-center gap-4 rounded-lg"
      >
        <img src={ButtonIcon} alt="" height={20} width={20} />
        Participate Now
      </button>
    </div>
  );
};

export default HackathonCard;
