import PropTypes from "prop-types";
import { useState } from "react";

function Card(props) {
  const [showCountry, setShowCountry] = useState(false);
  const {
    name,
    image,
    population,
    region,
    capital,
    nativeName,
    subRegion,
    topLevelDomain,
    currencies,
    languages,
    borders,
    darkMode,
  } = props;
  return (
    <div
      className={
        darkMode
          ? `h-[24rem] cursor-pointer active:ring-[0.5em] active:ring-[#69696920] w-[16rem] font-naru text-white rounded-lg overflow-hidden bg-darkBlue shadow-md shadow-veryDarkBlue`
          : `h-[24rem] cursor-pointer active:ring-[0.5em] active:ring-[#69696920] w-[16rem] font-naru rounded-lg overflow-hidden text-veryDarkBlue2 bg-white shadow-md shadow-darkGray`
      }
      onClick={() => setShowCountry(!showCountry)}
    >
      <img
        src={image}
        alt={name}
        className={
          darkMode
            ? `w-full h-[50%] shadow-md shadow-veryDarkBlue`
            : `w-full h-[50%] shadow-md shadow-darkGray`
        }
      />
      <div className="h-full w-full p-5">
        <div className="text-xl font-bold">{name}</div>
        <div className="mt-4 text-sm flex flex-col gap-2">
          <div>
            <span className="font-semibold">Population:</span> {population}
          </div>
          <div>
            <span className="font-semibold">Region:</span> {region}
          </div>
          <div>
            <span className="font-semibold">Capital:</span> {capital}
          </div>
        </div>
      </div>
      {showCountry && (
        <div
          className={
            darkMode
              ? `fixed z-[100] px-32 bg-veryDarkBlue text-white h-screen w-screen flex flex-col justify-start items-center top-0 left-0 py-32`
              : `fixed z-[100] px-32 h-screen bg-white text-veryDarkBlue2 w-screen flex flex-col justify-start items-center top-0 left-0 py-32`
          }
        >
          <div className="w-full h-32 flex items-start mx-32">
            <div
              className={
                darkMode
                  ? `w-auto flex rounded-md gap-5 px-8 py-2 justify-center items-center h-[3rem] bg-darkBlue shadow-md shadow-veryDarkBlue2 text-white`
                  : `w-auto flex rounded-md gap-5 px-8 py-2 justify-center items-center h-[3rem] bg-white shadow-md shadow-darkGray text-veryDarkBlue2`
              }
              onClick={() => setShowCountry(!showCountry)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <div>Back</div>
            </div>
          </div>
          <div className="flex gap-[10em] h-[25rem] w-[80em] items-center">
            <div className="h-full w-[35rem]">
              <img src={image} alt="" className="w-full h-full object-fill" />
            </div>
            <div className="h-full w-[35em] flex flex-col justify-center gap-10">
              <div className="text-3xl font-bold">{name}</div>
              <div className="flex gap-10 text-left my-4">
                <div className="text-sm flex flex-col gap-2">
                  <div>
                    <span className="font-semibold">Native Name:</span>{" "}
                    {nativeName}
                  </div>
                  <div>
                    <span className="font-semibold">Population:</span>{" "}
                    {population}
                  </div>
                  <div>
                    <span className="font-semibold">Region:</span> {region}
                  </div>
                  <div>
                    <span className="font-semibold">Sub Region:</span>{" "}
                    {subRegion}
                  </div>
                  <div>
                    <span className="font-semibold">Capital:</span> {capital}
                  </div>
                </div>
                <div className="text-sm flex flex-col gap-2">
                  <div>
                    <span className="font-semibold">Top Level Domain:</span>{" "}
                    {topLevelDomain}
                  </div>
                  <div>
                    <span className="font-semibold">Currencies:</span>{" "}
                    {currencies.map((currency) => currency.name)}
                  </div>
                  <div>
                    <span className="font-semibold">Languages:</span>{" "}
                    {languages.map((language) => language.name + ", ")}
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex justify-center items-center gap-5">
                  <span className="font-semibold">Border Countries:</span>{" "}
                  <div className="flex gap-2">
                    {borders.map((border) => (
                      <div
                        key={border}
                        className={
                          darkMode
                            ? `bg-darkBlue border-2 border-veryDarkBlue2 text-white px-3 py-2 rounded-sm`
                            : `bg-white border-2 border-darkGray text-darkGray px-3 py-2 rounded-sm `
                        }
                      >
                        {border}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.string,
  nativeName: PropTypes.string,
  subRegion: PropTypes.string,
  topLevelDomain: PropTypes.arrayOf(PropTypes.string),
  currencies: PropTypes.arrayOf(PropTypes.object),
  languages: PropTypes.arrayOf(PropTypes.object),
  borders: PropTypes.arrayOf(PropTypes.string),
  darkMode: PropTypes.bool,
};

export default Card;
