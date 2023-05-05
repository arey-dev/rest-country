/* eslint-disable react/prop-types */
import { DetailRow } from "./DetailRow"
// import { Link } from "react-router-dom";

export const CountryCard = ({
  flag,
  countryName,
  population,
  region,
  capital,
}) => {
  return (
    <article className="max-w-xs rounded-md shadow-md bg-light-element ring-2 ring-inset cursor-pointer overflow-hidden ring-light-element text-light-text hover:bg-light-background dark:bg-dark-element dark:ring-dark-element dark:hover:bg-dark-background dark:text-dark-text">
      <img className="max-w-full" src={flag} alt={"flag of " + countryName} />
      <div className="p-7">
        <h3 className="font-bold text-lg mb-3.5">{countryName}</h3>
        <DetailRow name="Population" value={population} />
        <DetailRow name="Region" value={region} />
        <DetailRow name="Capital" value={capital} />
        <footer className="p-2"></footer>
      </div>
    </article>
  );
};
