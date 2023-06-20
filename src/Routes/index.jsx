import { createBrowserRouter } from "react-router-dom";
import { countriesLoader, countryLoader } from "../loaders";
import { ErrorPage, SimpleSpinner } from "../components";
import { lazy, Suspense } from "react";
import Root from "./Root";
import Home from "./Home";

const CountryDetail = lazy(() => import("./CountryDetail"));

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
              loader: countriesLoader,
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
