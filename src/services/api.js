import { matchSorter } from "match-sorter";

export const getAllCountries = async (q) => {
  const URL = "https://restcountries.com/v3.1/all";

  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`HTTP error!`, response.status);
    }

    let countries = await response.json();
    console.log("data loaded");

    // sort country based on query
    if (countries) {
      countries = matchSorter(countries, q, {
        keys: ["name.common"],
        threshold: matchSorter.rankings.WORD_STARTS_WITH,
      });
    }
    return countries;
  } catch (error) {
    return error;
  }
};

export const getCountryByCode = async (code) => {
  const url = `https://restcountries.com/v3.1/alpha/${code}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error!`, response.status);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getCountryByCodes = async (codes) => {
  if (!codes && typeof codes !== "object") {
    return;
  }

  const params = codes.join();

  const url = `https://restcountries.com/v3.1/alpha?codes=${params.toLowerCase()}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error!`, response.status);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
