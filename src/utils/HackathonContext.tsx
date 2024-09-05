import React, { createContext, useState, useContext, ReactNode } from "react";

interface Hackathon {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  description: string;
  image: string;
  level: "easy" | "medium" | "hard";
  status: "active" | "upcoming" | "past";
}

interface HackathonContextType {
  hackathons: Hackathon[];
  setHackathons: React.Dispatch<React.SetStateAction<Hackathon[]>>;
  addHackathon: (newHackathon: Hackathon) => void;
}

export const HackathonContext = createContext<HackathonContextType | undefined>(
  undefined
);

export const useHackathons = () => {
  const context = useContext(HackathonContext);
  if (!context) {
    throw new Error("useHackathons must be used within a HackathonProvider");
  }
  return context;
};

export const HackathonProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [hackathons, setHackathons] = useState<Hackathon[]>([]);

  const addHackathon = (hackathon: Hackathon) => {
    setHackathons([...hackathons, hackathon]);
  };

  return (
    <HackathonContext.Provider
      value={{ hackathons, setHackathons, addHackathon }}
    >
      {children}
    </HackathonContext.Provider>
  );
};
