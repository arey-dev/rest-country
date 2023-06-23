import {
  FilterableSearch,
  Filter,
  SearchBar,
  CountryList,
} from "../components";
import { useLoaderData, useSearchParams, useSubmit } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  const [searchParams] = useSearchParams();
  const regionFilter = searchParams.get("region");
  const { countries, q } = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);

  const filteredCountries = regionFilter
    ? Array.from(countries).filter((country) => country.region === regionFilter)
    : countries;

  return (
    <>
      <FilterableSearch>
        <SearchBar defaultVal={q} submit={submit} />
        <Filter />
      </FilterableSearch>
      <CountryList countries={filteredCountries} />
    </>
  );
};

export default Home;
