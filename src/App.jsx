import { Header } from "./components/Header";
import { FilterableSearch } from "./components/FilterableSearch";
import { ThemeToggle } from "./components/ThemeToggle";
import { SearchBar } from "./components/SearchBar";
import { Filter } from "./components/Filter";
import { CountryList } from "./components/CountryList";

const App = () => {
  return (
    <>
      <Header>
        <ThemeToggle />
      </Header>
      <FilterableSearch>
        <SearchBar />
        <Filter />
      </FilterableSearch>
      <CountryList />
    </>
  );
};

export default App;
