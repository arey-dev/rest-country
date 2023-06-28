/* eslint-disable react/prop-types */
import { useState, useMemo } from "react";
import { CountryCard } from "./CountryCard";
import { useNavigation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const CountryList = ({ countries }) => {
  const [limit, setLimit] = useState(30);
  const navigation = useNavigation();

  // limit countries to show
  const countriesToShow = useMemo(
    () => countries.slice(0, limit),
    [countries, limit]
  );

  const handleLoadCountries = () => {
    setLimit(limit + 50);
  };

  return (
    <section className={navigation.state === "loading" ? "loading" : ""}>
      <h2 className="sr-only">Countries</h2>
      <div className="container mx-auto px-3 py-5 grid grid-cols-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-16 min-h-full">
        {countriesToShow.map((country) => (
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
      <div className="container mx-auto flex justify-center p-10">
        <button hidden={limit >= countries.length}
          onClick={handleLoadCountries}
          className="text-light-text bg-light-element shadow-md w-full sm:w-56 py-2 rounded-md ring-2 ring-inset hover:bg-light-background ring-light-element dark:ring-dark-element font-semibold dark:hover:bg-dark-background dark:text-dark-text dark:bg-dark-element"
        >
          Load More
        </button>
      </div>
    </section>
  );
};
