import { matchSorter } from "match-sorter";
import { getAllCountries } from "../services/api";

export const countriesLoader = async ({ request }) => {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  let countries = await getAllCountries(q);

  if (q) {
    // get all the countries that matches the query
    countries = matchSorter(countries, q, {
      keys: ["name.common"],
      threshold: matchSorter.rankings.WORD_STARTS_WITH,
    });
  }

  return { countries, q };
};
