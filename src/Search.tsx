// import React from "react";
// import SearchIcon from "./assets/icons/carbon_search.svg";
// import HackathonCard from "./HackathonCard";
// import HackathonList from "./HackathonList";

// const Search = () => {
//   return (
//     <div className="bg-[#002A3B] p-20 flex flex-col gap-10">
//       <h1 className="text-white text-3xl font-semibold text-center">
//         Explore Challenges
//       </h1>
//       <div className="flex items-center bg-white w-3/5 mx-auto py-2 px-5 gap-4 rounded-lg">
//         <img src={SearchIcon} alt="" />
//         <input type="text" placeholder="Search" />
//       </div>
//       <HackathonCard />
//       <HackathonList />
//     </div>
//   );
// };

// export default Search;
// import React, { useState } from "react";
// import HackathonList from "./HackathonList";
// import HackathonForm from "./CreateHackathon";

// interface Hackathon {
//   id: string;
//   name: string;
//   startDate: string;
//   endDate: string;
//   description: string;
//   image: string;
//   level: "easy" | "medium" | "hard";
//   status: "active" | "upcoming" | "past";
// }

// const App: React.FC = () => {
//   const [hackathons, setHackathons] = useState<Hackathon[]>([]);

//   const handleCreateHackathon = (newHackathon: Hackathon) => {
//     setHackathons((prevHackathons) => [...prevHackathons, newHackathon]);
//   };

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Hackathon Manager</h1>
//       <HackathonForm onCreate={handleCreateHackathon} />
//       <HackathonList hackathons={hackathons} />
//     </div>
//   );
// };

// export default App;
