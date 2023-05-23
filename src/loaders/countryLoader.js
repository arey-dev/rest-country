import { getCountryByCode, getCountryByCodes } from "../services/api";

export const countryLoader = async ({ params }) => {
  const country = await getCountryByCode(params.id);
  const borders = await getCountryByCodes(country[0].borders);
  
  return { country, borders };
};
