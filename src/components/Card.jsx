import PropTypes from "prop-types";

function Card(props) {
  const { name, image, population, region, capital, darkMode } = props;
  return (
    <div
      className={
        darkMode
          ? `h-[24rem] w-[16rem] font-naru text-white rounded-lg overflow-hidden bg-darkBlue shadow-md shadow-veryDarkBlue`
          : `h-[24rem] w-[16rem] font-naru rounded-lg overflow-hidden text-veryDarkBlue2 bg-white shadow-md shadow-darkGray`
      }
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
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.string,
  darkMode: PropTypes.bool,
};

export default Card;
