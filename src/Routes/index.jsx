import { createBrowserRouter } from "react-router-dom";
import { countriesLoader, countryLoader } from "../loaders";
import { ErrorPage, SimpleSpinner } from "../components";
import { lazy, Suspense } from "react";
import Root from "./Root";

const Home = lazy(() => import("./Home"));
const CountryDetail = lazy(() => import("./CountryDetail"));

export const router = createBrowserRouter([
  {
    path: "/rest-country/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<SimpleSpinner />}>
                <Home />
              </Suspense>
            ),
            loader: countriesLoader,
          },
          {
            path: "/rest-country/detail/:id",
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
]);
