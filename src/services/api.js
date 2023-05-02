export const getAllCountries = async () => {
  const URL = "https://restcountries.com/v3.1/all"

  try {
    const response = await fetch(URL);

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

export const getCountryByName = async (countryName) => {
  const url = `https://restcountries.com/v3.1/name/${countryName}`;

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
