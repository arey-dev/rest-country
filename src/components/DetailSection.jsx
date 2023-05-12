/* eslint-disable react/prop-types */
import { DetailRow } from "./DetailRow";
import { BorderCountry } from "./BorderCountry";
import {
  formatNumber,
  displayCurrencies,
  displayNativeNames,
  displayLanguages,
} from "../Utilities";

export const DetailSection = ({ countryData }) => {
  const [country] = countryData;
  return (
    <section className="mb-14">
      <h2 className="sr-only">Country Details</h2>
      <div className="max-sm:w-11/12 container mx-auto lg:grid grid-cols-2 gap-12 xl:gap-20 px-3 text-base place-items-center">
        <img
          className="flag mb-12 max-lg:aspect-video"
          src={country.flags.svg}
          alt={country.name.common}
        />
        <section>
          <h3 className="font-bold text-light-text text-2xl mb-8 dark:text-dark-text transition duration-150 ease-in-out">
            {country.name.common}
          </h3>

          <div className="md:flex gap-20 justify-start lg:justify-between  mb-12">
            <div className="max-md:mb-9">
              <DetailRow
                name="Native Name"
                value={displayNativeNames(country.name)}
              ></DetailRow>
              <DetailRow
                name="Population"
                value={formatNumber(country.population)}
              ></DetailRow>
              <DetailRow name="Region" value={country.region}></DetailRow>
              <DetailRow
                name="Sub Region"
                value={country.subregion}
              ></DetailRow>
              <DetailRow name="Capital" value={country.capital}></DetailRow>
            </div>
            <div>
              <DetailRow name="Top Level" value={country.tld}></DetailRow>
              <DetailRow
                name="Currencies"
                value={displayCurrencies(country.currencies)}
              ></DetailRow>
              <DetailRow
                name="Languages"
                value={displayLanguages(country.languages)}
              ></DetailRow>
            </div>
          </div>

          <footer>
            <div className="lg:flex">
              <h4 className="font-semibold text-xl md:text-lg lg:text-base mb-4 mr-4 items-start text-light-text transition duration-150 min-w-fit ease-in-out dark:text-dark-text">
                Border Countries:{" "}
              </h4>
              <p>
                {country?.borders?.map((border, index) => (
                  <BorderCountry key={index} value={border} />
                ))}
              </p>
            </div>
          </footer>
        </section>
      </div>
    </section>
  );
};
