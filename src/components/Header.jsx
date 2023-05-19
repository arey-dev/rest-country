// eslint-disable-next-line react/prop-types
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const Header = ({ children }) => {
  return (
    <header className="bg-light-element shadow-sm dark:bg-dark-element mb-6 md:mb-12 transition duration-200 ease-in-out">
      <div className="container mx-auto flex justify-between py-6 px-3">
        <Link to="/rest-country">
          <h1 className="text-light-text sm:text-lg md:text-xl lg:text-2xl font-extrabold dark:text-dark-text">
            Where in the world?
          </h1>
        </Link>
        {children}
      </div>
    </header>
  );
};
