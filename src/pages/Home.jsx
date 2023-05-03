import { FilterableSearch } from "../components/FilterableSearch";
import { SearchBar } from "../components/SearchBar";
import { Filter } from "../components/Filter";
import { CountryList } from "../components/CountryList";

export const Home = () => {
  return (
    <>
      <FilterableSearch>
        <SearchBar />
        <Filter />
      </FilterableSearch>
      <CountryList />
    </>
  );
};
