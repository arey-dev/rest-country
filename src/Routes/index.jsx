import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { Root } from "../pages/root";
import { CountryDetail } from "../pages/CountryDetail";
import { ErrorPage } from "../components/ErrorPage";
import { countriesLoader } from "../loaders/countriesLoader";
import { countryLoader } from "../loaders/countryLoader";

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
