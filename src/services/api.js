export const getAllCountries = async () => {
  const URL = "https://restcountries.com/v3.1/all";

  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error(`HTTP error!`, response.status);
    }

    let countries = await response.json();

    return countries;
  } catch (error) {
    console.log(error);
    return null;
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
