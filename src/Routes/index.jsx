import { createBrowserRouter } from "react-router-dom";
import { Root, Home, CountryDetail } from "../pages";
import { countriesLoader, countryLoader } from "../loaders";
import { ErrorPage } from "../components";

export const router = createBrowserRouter([
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
            element: <CountryDetail />,
            loader: countryLoader,
          },
        ],
      },
    ],
  },
]);
