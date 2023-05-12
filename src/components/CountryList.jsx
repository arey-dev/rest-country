/* eslint-disable react/prop-types */
import { CountryCard } from "./CountryCard";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const CountryList = ({ countries }) => {
  return (
    <section>
      <h2 className="sr-only">Countries</h2>
      <div className="container mx-auto px-3 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-16 place-items-center">
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
