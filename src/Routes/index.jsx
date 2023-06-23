import { createBrowserRouter } from "react-router-dom";

import { countriesLoader, countryLoader } from "../loaders";
import { ErrorPage, SimpleSpinner } from "../components";
import { lazy, Suspense } from "react";

import Root from "./Root";
import Home from "./Home";
const CountryDetail = lazy(() => import("./CountryDetail"));

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
              element: (
                <Suspense fallback={<SimpleSpinner />}>
                  <CountryDetail />
                </Suspense>
              ),
              loader: countryLoader,
            },
          ],
        },
      ],
    },
  ],
  { basename: "/rest-country/" }
);
