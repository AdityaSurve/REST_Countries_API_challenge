import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Countries, Home, Flag } from "./pages";
import { useState } from "react";
export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [color, setColor] = useState("bg-darkBlue");
  const [shadow, setShadow] = useState("shadow-veryDarkBlue");
  const [textColor, setTextColor] = useState("text-white");
  const [bodyColor, setBodyColor] = useState("bg-veryDarkBlue");
  return (
    <div
      className={`h-screen overflow-x-hidden w-screen ${bodyColor} ${textColor}`}
    >
      <Router>
        <div
          className={`fixed px-16 z-[10000] top-0 w-full h-[10%] flex justify-between  items-center ${color} shadow-md ${shadow}`}
        >
          <div className="text-xl font-bold">Where in the world?</div>
          <div
            onClick={() => {
              setColor(color === "bg-darkBlue" ? "bg-white" : "bg-darkBlue");
              setShadow(
                shadow === "shadow-veryDarkBlue"
                  ? "shadow-darkGray"
                  : "shadow-veryDarkBlue"
              );
              setTextColor(
                textColor === "text-white" ? "text-veryDarkBlue2" : "text-white"
              );
              setBodyColor(
                bodyColor === "bg-veryDarkBlue" ? "bg-white" : "bg-veryDarkBlue"
              );
              setDarkMode(!darkMode);
            }}
          >
            {darkMode ? (
              <div className="flex gap-2 justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-brightness-high-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                </svg>
                <div>Light Mode</div>
              </div>
            ) : (
              <div className="flex gap-2 justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-moon-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                </svg>
                <div>Dark Mode</div>
              </div>
            )}
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/countries"
            element={
              darkMode ? (
                <Countries darkMode={true} />
              ) : (
                <Countries darkMode={false} />
              )
            }
          />
          <Route path="/flag" element={<Flag />} />
        </Routes>
      </Router>
    </div>
  );
}
