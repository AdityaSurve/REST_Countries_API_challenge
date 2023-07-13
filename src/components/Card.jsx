import React, { useState } from "react";
import PropTypes from "prop-types";

function Card({
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
}) {
  const [showCountry, setShowCountry] = useState(false);

  const renderField = (label, value) => {
    if (!value) return null;
    return (
      <div>
        <span className="font-semibold">{label}:</span> {value}
      </div>
    );
  };

  const renderCurrencies = () => {
    if (!currencies || currencies.length === 0) return null;
    return (
      <div>
        <span className="font-semibold">Currencies:</span>{" "}
        {currencies.map((currency) => currency.name).join(", ")}
      </div>
    );
  };

  const renderLanguages = () => {
    if (!languages || languages.length === 0) return null;
    return (
      <div>
        <span className="font-semibold">Languages:</span>{" "}
        {languages.map((language) => language.name).join(", ")}
      </div>
    );
  };

  const renderBorders = () => {
    if (!borders || borders.length === 0) return null;
    return (
      <div>
        <span className="font-semibold">Border Countries:</span>{" "}
        <div className="md:flex text-xs md:text-base grid grid-cols-2 gap-2">
          {borders.map((border) => (
            <div
              key={border}
              className={` px-2 py-0 md:px-3 md:py-2 rounded-xl text-xs ${
                darkMode
                  ? `bg-darkBlue text-white`
                  : `bg-white text-darkGray`
              }`}
            >
              {border}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div
      className={`h-[24rem] cursor-pointer active:ring-[0.5em] w-[16rem] font-naru rounded-lg overflow-hidden shadow-md ${
        darkMode
          ? `active:ring-[#69696920] text-white bg-darkBlue shadow-veryDarkBlue`
          : `active:ring-[#69696920] text-veryDarkBlue2 bg-white shadow-md shadow-darkGray`
      }`}
      onClick={() => setShowCountry(!showCountry)}
    >
      <img
        src={image}
        alt={name}
        className={`w-full h-[50%] shadow-md  ${
          darkMode
            ? `shadow-veryDarkBlue`
            : `shadow-darkGray`
        }`}
      />
      <div className="h-full w-full p-5">
        <div className="text-xl font-bold">{name}</div>
        <div className="mt-4 text-sm flex flex-col gap-2">
          {renderField("Population", population)}
          {renderField("Region", region)}
          {renderField("Capital", capital)}
        </div>
      </div>
      {showCountry && (
        <div
          className={`h-screen w-screen fixed z-[100] flex flex-col justify-start items-center top-0 left-0 p-24 md:p-32 ${
            darkMode
              ? `bg-veryDarkBlue text-white`
              : `bg-white text-veryDarkBlue2`
          }`}
        >
          <div className="w-full h-32 flex items-start mx-32">
            <div
              className={` w-auto flex rounded-md gap-5 px-8 py-2 justify-center items-center h-[2em] md:h-[3rem] ${
                darkMode
                  ? `bg-darkBlue shadow-md shadow-veryDarkBlue2 text-white`
                  : `bg-white shadow-md shadow-darkGray text-veryDarkBlue2`
              }`}
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
          <div className="flex flex-col mt-10 md:mt-5 lg:flex-row gap-2 md:gap-10 lg:gap-[10em] h-[25rem] w-[60em] items-center">
            <div className="h-full w-[15%] md:w-[25rem] lg:w-[35rem]">
              <img src={image} alt="" className="w-full h-full object-fill" />
            </div>
            <div className="h-full w-[35em] flex items-center md:items-start flex-col justify-center gap-2 md:gap-10">
              <div className="text-3xl font-bold">{name}</div>
              <div className="flex flex-col lg:flex-row gap-2 md:gap-10 text-left my-4">
                <div className="text-sm flex flex-col gap-2">
                  {renderField("Native Name", nativeName)}
                  {renderField("Population", population)}
                  {renderField("Region", region)}
                  {renderField("Sub Region", subRegion)}
                  {renderField("Capital", capital)}
                </div>
                <div className="text-sm flex flex-col gap-2">
                  {renderField("Top Level Domain", topLevelDomain)}
                  {renderCurrencies()}
                  {renderLanguages()}
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex justify-center items-start md:items-center gap-5">
                  {renderBorders()}
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
  population: PropTypes.number,
  region: PropTypes.string,
  capital: PropTypes.string,
  nativeName: PropTypes.string,
  subRegion: PropTypes.string,
  topLevelDomain: PropTypes.arrayOf(PropTypes.string),
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ),
  borders: PropTypes.arrayOf(PropTypes.string),
  darkMode: PropTypes.bool,
};

export default Card;
