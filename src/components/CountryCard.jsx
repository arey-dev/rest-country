/* eslint-disable react/prop-types */

export const CountryCard = ({
  flag,
  countryName,
  population,
  region,
  capital,
}) => {
  return (
    <article className="max-w-xs rounded-md shadow-md bg-light-element font-semibold ring-2 ring-inset cursor-pointer overflow-hidden ring-light-element text-light-text hover:bg-light-background dark:bg-dark-element dark:ring-dark-element dark:hover:bg-dark-background dark:text-dark-text">
      <img className="max-w-full" src={flag} alt={"flag of " + countryName} />
      <div className="p-7">
        <h3 className="font-bold text-lg mb-3.5">
          {countryName}
        </h3>
        <p className="mb-0.5">
          <span>Population: </span>
          <span>{population}</span>
        </p>
        <p className="mb-0.5">
          <span>Region: </span>
          <span>{region}</span>
        </p>
        <p>
          <span>Capital: </span>
          <span>{capital}</span>
        </p>
        <footer className="p-2"></footer>
      </div>
    </article>
  );
};
