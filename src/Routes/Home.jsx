import {
  FilterableSearch,
  Filter,
  SearchBar,
  CountryList,
} from "../components";
import { useLoaderData, useSearchParams, useSubmit } from "react-router-dom";
import { useEffect } from "react";
import { useDebounce } from "rooks";
import { useQuery } from "@tanstack/react-query";
import { countryListQuery } from "../loaders/countriesLoader";

const Home = () => {
  const [searchParams] = useSearchParams();
  const regionFilter = searchParams.get("region");
  const { q } = useLoaderData();
  const { data: countries } = useQuery(countryListQuery(q));
  const submit = useSubmit();

  const debouncedSubmit = useDebounce(submit, 500);

  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);

  const filteredCountries = regionFilter
    ? Array.from(countries).filter((country) => country.region === regionFilter)
    : countries;

  return (
    <>
      <FilterableSearch>
        <SearchBar defaultVal={q} submit={debouncedSubmit} />
        <Filter />
      </FilterableSearch>
      <CountryList countries={filteredCountries} />
    </>
  );
};

export default Home;
