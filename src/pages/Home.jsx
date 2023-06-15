import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Globe from "../assets/globe.png";

function Home({ darkMode }) {
  return (
    <div className="flex flex-row h-screen w-screen justify-center items-center gap-10">
      <div className="font-naru flex flex-col gap-5 justify-center items-start">
        <div className="text-xl z-[1000]">WELCOME TO</div>
        <div className="text-5xl z-[1000] font-extrabold bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">
          THE COUNTRY HUB
        </div>
        <Link
          to={"/countries"}
          className={
            darkMode
              ? `bg-white mt-10 rounded-none text-veryDarkBlue px-10 py-5 hover:bg-[#e9e9e9] hover:text-black active:ring-[0.5em] active:ring-[#56565670] z-[1000]`
              : `bg-veryDarkBlue mt-10 rounded-none text-white px-10 py-5 hover:bg-veryDarkBlue2 hover:text-white active:ring-[0.5em] active:ring-[#56565670] z-[1000]`
          }
        >
          GET STARTED
        </Link>
      </div>
      <img src={Globe} alt="" className="object-contain h-[50%]" />
    </div>
  );
}

Home.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default Home;
