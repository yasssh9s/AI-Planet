import Rocket from "./assets/icons/PicsArt_04-14-04.42 1.svg";
import logo1 from "./assets/icons/Group 1000002515.svg";
import logo2 from "./assets/icons/Group 1000002516.svg";
import logo3 from "./assets/icons/Group 1000002518.svg";
import { Link } from "react-router-dom";
import Section2 from "./Section2";
import HackathonList from "./HackathonList";

const Home = () => {
  return (
    <div>
      <div className="w-full h-full bg-[#003145] flex justify-center gap-20 p-28 text-white tracking-widest max-md:flex-col max-md:p-5">
        <div className="w-3/5 flex flex-col gap-10 max-md:w-full">
          <h1 className="text-5xl font-bold border-l-[10px] border-[#FFCE5C] px-10 max-md:text-3xl max-md:text-center">
            Accelerate Innovation <br /> with Global AI Challenges
          </h1>
          <div className="ml-10">
            <p className="w-[80%] text-lg font-light mb-10 max-md:text-center max-md:w-full">
              AI Challenges at DPhi simulate real-worlds problems. It is a great
              place to put you AI / Data Science skills to test on diverse
              datasets allowing you to faster learnig through competitions.
            </p>
            <Link
              to="/create-hackathon"
              className="text-lg bg-white text-[#333] rounded-lg px-4 py-3 font-bold"
            >
              Create Challenge
            </Link>
          </div>
        </div>
        <img src={Rocket} alt="" />
      </div>
      <div className="bg-[#002A3B] text-white flex items-center justify-center gap-20 px-10 py-14 max-md:flex-col max-md:p-0 max-md:py-5">
        <div className="flex items-center gap-4 px-20">
          <img src={logo1} alt="" />
          <div>
            <h1 className="text-2xl font-bold">100k+</h1>
            <p>AI model submissions</p>
          </div>
        </div>
        <div className="flex items-center gap-4 border-l border-r border-white px-20">
          <img src={logo2} alt="" />
          <div>
            <h1 className="text-2xl font-bold">50k+</h1>
            <p>Data Scientists</p>
          </div>
        </div>
        <div className="flex items-center gap-4 px-20">
          <img src={logo3} alt="" />
          <div>
            <h1 className="text-2xl font-bold">100+</h1>
            <p>AI Challenges hosted</p>
          </div>
        </div>
      </div>
      <Section2 />
      <HackathonList />
    </div>
  );
};

export default Home;
