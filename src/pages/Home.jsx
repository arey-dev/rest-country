import { FilterableSearch } from "../components/FilterableSearch";
import { SearchBar } from "../components/SearchBar";
import { Filter } from "../components/Filter";
import { CountryList } from "../components/CountryList";
import { Header } from "../components/Header";
import { ThemeToggle } from "../components/ThemeToggle";


export const Home = () => {
  return (
    <>
      <Header>
        <ThemeToggle/>
      </Header>
      <FilterableSearch>
        <SearchBar />
        <Filter />
      </FilterableSearch>
      <CountryList />
    </>
  );
};
