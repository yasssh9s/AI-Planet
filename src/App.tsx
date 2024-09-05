import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import CreateHackathon from "./CreateHackathon";
import HackathonDetails from "./HackathonDetails";
import EditHackathon from "./EditHackathon";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/AI-Planet/" element={<Home />} />
        <Route path="/create-hackathon" element={<CreateHackathon />} />
        <Route path="/hackathon/:id" element={<HackathonDetails />} />
        <Route path="/edit-hackathon/:id" element={<EditHackathon />} />
      </Routes>
    </>
  );
};

export default App;
