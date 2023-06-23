import { getAllCountries } from "../services/api";

export const countryListQuery = (q) => ({
  queryKey: ["country", "list", q ?? "all"],
  queryFn: () => getAllCountries(q),
});

export const countriesLoader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    if (!queryClient.getQueryData(countryListQuery(q).queryKey)) {
      await queryClient.fetchQuery(countryListQuery(q));
    }

    return { q };
  };
