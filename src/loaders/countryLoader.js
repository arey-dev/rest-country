import { getCountryByCode, getCountryByCodes } from "../services/api";

export const countryDetailQuery = (id) => ({
  queryKey: ["country", "detail", id],
  queryFn: () => getCountryByCode(id),
});

export const countryBordersQuery = (borders) => ({
  queryKey: ["country", "borders", borders],
  queryFn: () => getCountryByCodes(borders),
  enabled: !!borders,
});

export const countryLoader =
  (queryClient) =>
  async ({ params }) => {
    return await queryClient.ensureQueryData(countryDetailQuery(params.id));
  };
