import {
  FilterableSearch,
  Filter,
  SearchBar,
  CountryList,
} from "../components";
import { useLoaderData, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const { countries, q } = useLoaderData();
  const [searchParams] = useSearchParams();
  const regionFilter = searchParams.get("region");

  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);

  const filteredCountries = regionFilter
    ? Array.from(countries).filter((country) => country.region === regionFilter)
    : countries;

  return (
    <>
      <FilterableSearch>
        <SearchBar defaultVal={q} />
        <Filter />
      </FilterableSearch>
      <CountryList countries={filteredCountries} />
    </>
  );
};

export default Home;
