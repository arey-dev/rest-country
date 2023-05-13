/* eslint-disable react/prop-types */
import { CountryCard } from "./CountryCard";

// eslint-disable-next-line react/prop-types
export const CountryList = ({ countries }) => {
  return (
    <section>
      <h2 className="sr-only">Countries</h2>
      <div className="container mx-auto px-3 py-5 grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-16">
        {countries.map((country) => (
          <CountryCard
            key={country.cca3}
            linkCode={country.cca3}
            flag={country.flags.svg}
            countryName={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))}
      </div>
    </section>
  );
};
