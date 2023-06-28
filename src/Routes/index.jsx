import { createBrowserRouter } from "react-router-dom";

import { countriesLoader, countryLoader } from "../loaders";
import { ErrorPage } from "../components";

import Root from "./Root";
import Home from "./Home";
import CountryDetail from "./CountryDetail";

import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10,
    },
  },
});

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          errorElement: <ErrorPage />,
          children: [
            {
              index: true,
              element: <Home />,
              loader: countriesLoader(queryClient),
            },
            {
              path: "/detail/:id",
              element: <CountryDetail />,
              loader: countryLoader(queryClient),
            },
          ],
        },
      ],
    },
  ],
  { basename: "/rest-country/" }
);
