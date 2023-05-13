/* eslint-disable react/prop-types */
import { DetailRow } from "./DetailRow";
import { formatNumber } from "../Utilities";
import { Link } from "react-router-dom";

export const CountryCard = ({
  flag,
  countryName,
  population,
  region,
  capital,
  linkCode,
}) => {
  return (
    <article className="card max-sm:w-10/12">
      <Link to={`detail/${linkCode}`}>
        <img
          className="flag aspect-video hover:opacity-50"
          src={flag}
          alt={"flag of " + countryName}
        />
      </Link>
      <div className="p-7">
        <h3
          className="font-bold text-lg lg:text-xl mb-3.5 line-clamp-1"
          title={countryName}
        >
          {countryName}
        </h3>
        <DetailRow name="Population" value={formatNumber(population)} />
        <DetailRow name="Region" value={region} />
        <DetailRow name="Capital" value={capital} />
        <footer className="p-1.5"></footer>
      </div>
    </article>
  );
};
