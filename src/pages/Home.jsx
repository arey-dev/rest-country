import { FilterableSearch } from "../components/FilterableSearch";
import { SearchBar } from "../components/SearchBar";
import { Filter } from "../components/Filter";
import { CountryList } from "../components/CountryList";
import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";

export const Home = () => {
  const { countries, q } = useLoaderData();

  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);

  return (
    <>
      <FilterableSearch>
        <SearchBar defaultVal={q} />
        <Filter />
      </FilterableSearch>
      <CountryList countries={countries} />
    </>
  );
};
