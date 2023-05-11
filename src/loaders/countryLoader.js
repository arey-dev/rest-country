import { getCountryByCode } from "../services/api";

export const countryLoader = async ({ params }) => {
  const country = await getCountryByCode(params.id);
  console.log(country);

  return { country };
};