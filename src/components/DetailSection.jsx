/* eslint-disable react/prop-types */
import { DetailRow } from "./DetailRow";
import { BorderCountry } from "./BorderCountry";
import { formatNumber } from "../Utilities/formatNumber";
import { displayCurrencies } from "../Utilities/displayCurrencies";
import { displayLanguages } from "../Utilities/displayLanguages";
import { displayNativeNames } from "../Utilities/displayNativeNames";

export const DetailSection = ({ countryData }) => {
  const [country] = countryData;
  return (
    <section className="mb-14">
      <h2 className="sr-only">Country Details</h2>
      <div className="max-w-[22rem] xs:container mx-auto px-3">
        <img
          className="max-w-full mb-8"
          src={country.flags.svg}
          alt={country.name.common}
        />
        <section>
          <h3 className="font-bold text-light-text text-2xl mb-6 dark:text-dark-text transition duration-150 ease-in-out">
            {country.name.common}
          </h3>
          <div className="mb-9">
            <DetailRow
              name="Native Name"
              value={displayNativeNames(country.name)}
            ></DetailRow>
            <DetailRow
              name="Population"
              value={formatNumber(country.population)}
            ></DetailRow>
            <DetailRow name="Region" value={country.region}></DetailRow>
            <DetailRow name="Sub Region" value={country.subregion}></DetailRow>
            <DetailRow name="Capital" value={country.capital}></DetailRow>
          </div>
          <div className="mb-9">
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

          <footer>
            <h4 className="font-semibold text-xl mb-4 text-light-text transition duration-150 ease-in-out dark:text-dark-text">
              Border Countries:{" "}
            </h4>
            <p>
              {country?.borders?.map((border, index) => (
                <BorderCountry key={index} value={border} />
              ))}
            </p>
          </footer>
        </section>
      </div>
    </section>
  );
};
