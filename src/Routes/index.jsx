import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { CountryDetail } from "../pages/CountryDetail";
import { ErrorPage } from "../pages/ErrorPage";
import { countriesLoader } from "../utils/countriesLoader";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    loader: countriesLoader,
  },
  {
    path: "/detail",
    element: <CountryDetail />,
  },
]);
