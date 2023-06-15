import { Link } from "react-router-dom";
import bgImage from "../assets/flags.png";

function Home() {
  return (
    <div>
      <div className="h-screen font-naru w-screen flex flex-col gap-5 justify-center items-center">
        <div className="text-xl z-[1000]">WELCOME TO</div>
        <div className="text-5xl z-[1000] font-extrabold bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">
          THE COUNTRY HUB
        </div>
        <Link
          to={"/countries"}
          className="border-2 border-veryDarkBlue2 bg-[#2b394560] hover:bg-[#2b394590] hover:text-white active:ring-[0.5em] active:ring-[#56565670] px-5 py-3 z-[1000] mt-10 rounded-lg text-white"
        >
          Get Started
        </Link>
      </div>
      <img
        src={bgImage}
        alt=""
        className="h-screen w-screen object-cover fixed top-0 left-0 opacity-20"
      />
    </div>
  );
}

export default Home;
