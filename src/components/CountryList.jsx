/* eslint-disable react/prop-types */
import { CountryCard } from "./CountryCard";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const CountryList = ({ countries }) => {
  return (
    <section>
      <h2 className="sr-only">Countries</h2>
      <div className="container mx-auto px-3 py-5 grid grid-cols-1 gap-4 place-items-center">
        {countries.map((country) => (
          <Link key={country.cca3} to={`detail/${country.cca2}`}>
            <CountryCard
              flag={country.flags.svg}
              countryName={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};
