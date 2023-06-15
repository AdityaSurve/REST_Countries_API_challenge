import { useState, useEffect } from "react";
import Card from "../components/Card";
import countriesData from "../data.json";
import PropTypes from "prop-types";

function Countries({ darkMode }) {
  const [countries, setCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [showRegions, setShowRegions] = useState(false);
  const [dropdownDisplay, setDropdownDisplay] = useState("Filter by Region");
  useEffect(() => {
    setCountries(countriesData);
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const regionFilteredCountries = selectedRegion
    ? filteredCountries.filter((country) => country.region === selectedRegion)
    : filteredCountries;

  return (
    <div className="min-h-screen h-auto overflow-x-hidden font-naru w-full py-32 flex flex-col items-center bg-transparent">
      <div className="flex justify-between px-[12%] items-center w-full ">
        <div
          className={
            darkMode
              ? `bg-darkBlue  w-[30em] relative p-4 rounded-md flex items-center gap-5`
              : `bg-white border-2 border-darkGray  w-[30em] relative p-4 rounded-md flex items-center gap-5 `
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className={
              darkMode
                ? `bi bi-search ms-4 text-white`
                : `bi bi-search ms-4 text-veryDarkBlue`
            }
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search by country name..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className={
              darkMode
                ? `bg-transparent outline-none text-white placeholder-white w-full h-full text-sm placeholder:text-sm`
                : `bg-transparent outline-none text-veryDarkBlue placeholder-veryDarkBlue w-full h-full text-sm placeholder:text-sm`
            }
          />
        </div>

        <div
          className={
            darkMode
              ? `bg-darkBlue cursor-pointer w-[15rem] relative px-5 py-3 rounded-md flex justify-between items-center`
              : `bg-white cursor-pointer w-[15rem] border-2 border-darkGray relative px-5 py-3 rounded-md flex justify-between items-center`
          }
          onClick={() => setShowRegions(!showRegions)}
        >
          {dropdownDisplay}
          {!showRegions ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-chevron-up"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
              />
            </svg>
          )}
          {showRegions && (
            <div
              className={
                darkMode
                  ? `absolute shadow-veryDarkBlue text-white shadow-lg top-[120%] text-center gap-1 w-full left-0 bg-darkBlue flex flex-col`
                  : `absolute shadow-darkGray shadow-lg top-[120%] text-center text-veryDarkBlue2 gap-1 w-full left-0 bg-white flex flex-col`
              }
            >
              <option
                value=""
                onClick={() => {
                  setSelectedRegion("");
                  setShowRegions(!showRegions);
                  setDropdownDisplay("Filter by Region");
                }}
                className={
                  darkMode
                    ? `hover:bg-veryDarkBlue2 py-2 cursor-pointer`
                    : `hover:bg-darkGray py-2 cursor-pointer`
                }
              >
                All Regions
              </option>
              <option
                value="Africa"
                onClick={() => {
                  setSelectedRegion("Africa");
                  setShowRegions(!showRegions);
                  setDropdownDisplay("Africa");
                }}
                className={
                  darkMode
                    ? `hover:bg-veryDarkBlue2 py-2 cursor-pointer`
                    : `hover:bg-darkGray py-2 cursor-pointer`
                }
              >
                Africa
              </option>
              <option
                value="Americas"
                onClick={() => {
                  setSelectedRegion("Americas");
                  setShowRegions(!showRegions);
                  setDropdownDisplay("Americas");
                }}
                className={
                  darkMode
                    ? `hover:bg-veryDarkBlue2 py-2 cursor-pointer`
                    : `hover:bg-darkGray py-2 cursor-pointer`
                }
              >
                Americas
              </option>
              <option
                value="Asia"
                onClick={() => {
                  setSelectedRegion("Asia");
                  setShowRegions(!showRegions);
                  setDropdownDisplay("Asia");
                }}
                className={
                  darkMode
                    ? `hover:bg-veryDarkBlue2 py-2 cursor-pointer`
                    : `hover:bg-darkGray py-2 cursor-pointer`
                }
              >
                Asia
              </option>
              <option
                value="Europe"
                onClick={() => {
                  setSelectedRegion("Europe");
                  setShowRegions(!showRegions);
                  setDropdownDisplay("Europe");
                }}
                className={
                  darkMode
                    ? `hover:bg-veryDarkBlue2 py-2 cursor-pointer`
                    : `hover:bg-darkGray py-2 cursor-pointer`
                }
              >
                Europe
              </option>
              <option
                value="Oceania"
                onClick={() => {
                  setSelectedRegion("Oceania");
                  setShowRegions(!showRegions);
                  setDropdownDisplay("Oceania");
                }}
                className={
                  darkMode
                    ? `hover:bg-veryDarkBlue2 py-2 cursor-pointer`
                    : `hover:bg-darkGray py-2 cursor-pointer`
                }
              >
                Oceania
              </option>
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-10 mt-20 justify-center items-center">
        {regionFilteredCountries.map((country) => (
          <div key={country.alpha3Code}>
            {darkMode ? (
              <Card
                name={country.name}
                image={country.flags.png}
                population={country.population}
                region={country.region}
                capital={country.capital}
                nativeName={country.nativeName}
                subRegion={country.subregion}
                topLevelDomain={country.topLevelDomain}
                currencies={country.currencies}
                languages={country.languages}
                borders={country.borders}
                darkMode={true}
              />
            ) : (
              <Card
                name={country.name}
                image={country.flags.png}
                population={country.population}
                region={country.region}
                capital={country.capital}
                nativeName={country.nativeName}
                subRegion={country.subregion}
                topLevelDomain={country.topLevelDomain}
                currencies={country.currencies}
                languages={country.languages}
                borders={country.borders}
                darkMode={false}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

Countries.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default Countries;
