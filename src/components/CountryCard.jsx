/* eslint-disable react/prop-types */
import { DetailRow } from "./DetailRow";
import { formatNumber } from "../Utilities";

export const CountryCard = ({
  flag,
  countryName,
  population,
  region,
  capital,
}) => {
  return (
    <article className="card max-sm:w-[20rem]">
      <img className="flag" src={flag} alt={"flag of " + countryName} />
      <div className="p-7">
        <h3
          className="font-bold text-lg mb-3.5 line-clamp-1"
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
