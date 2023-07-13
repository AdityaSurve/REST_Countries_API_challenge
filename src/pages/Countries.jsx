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
          className={`w-[10em] md:w-[15em] lg:w-[30em] relative p-4 rounded-md flex items-center gap-5 ${
            darkMode
              ? `bg-darkBlue`
              : `bg-white border-2 border-darkGray`
          }`}
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
            className={`bg-transparent outline-none w-full h-full text-sm placeholder:text-sm ${
              darkMode
                ? `text-white placeholder-white`
                : `text-veryDarkBlue placeholder-veryDarkBlue`
            }`}
          />
        </div>

        <div
          className={`cursor-pointer w-auto md:w-[15rem] relative px-5 py-3 rounded-md flex justify-between items-center ${
            darkMode
              ? `bg-darkBlue`
              : `bg-white border-2 border-darkGray`
          }`}
          onClick={() => setShowRegions(!showRegions)}
        >
          <span className="md:block hidden">{dropdownDisplay}</span>
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
              className={`shadow-lg top-[120%] text-center absolute gap-1 w-full left-0 flex flex-col ${
                darkMode
                  ? `shadow-veryDarkBlue text-white bg-darkBlue`
                  : `shadow-darkGray text-veryDarkBlue2 bg-white`
              }`}
            >
              <option
                value=""
                onClick={() => {
                  setSelectedRegion("");
                  setShowRegions(!showRegions);
                  setDropdownDisplay("Filter by Region");
                }}
                className={`py-2 cursor-pointer ${
                  darkMode
                    ? `hover:bg-veryDarkBlue2`
                    : `hover:bg-darkGray`
                }`}
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
                className={`py-2 cursor-pointer ${
                  darkMode
                    ? `hover:bg-veryDarkBlue2`
                    : `hover:bg-darkGray`
                }`}
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
                className={`py-2 cursor-pointer ${
                  darkMode
                    ? `hover:bg-veryDarkBlue2`
                    : `hover:bg-darkGray`
                }`}
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
                className={`py-2 cursor-pointer ${
                  darkMode
                    ? `hover:bg-veryDarkBlue2`
                    : `hover:bg-darkGray`
                }`}
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
                className={`py-2 cursor-pointer ${
                  darkMode
                    ? `hover:bg-veryDarkBlue2`
                    : `hover:bg-darkGray`
                }`}
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
                className={`py-2 cursor-pointer ${
                  darkMode
                    ? `hover:bg-veryDarkBlue2`
                    : `hover:bg-darkGray`
                }`}
              >
                Oceania
              </option>
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-20 justify-center items-center">
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
