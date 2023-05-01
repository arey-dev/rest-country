import { SearchBar } from "./SearchBar";
import { Filter } from "./Filter";

export const FilterableSearch = () => {
  return (
    <section>
      <h2 className="sr-only">Search and filter a countries</h2>
      <div className="container mx-auto px-3">
        <SearchBar />
        <Filter />
      </div>
    </section>
  );
};
