// eslint-disable-next-line react/prop-types
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const Header = ({ children }) => {
  return (
    <header className="bg-light-element shadow-sm dark:bg-dark-element mb-4">
      <div className="container mx-auto flex justify-between py-5 px-3">
        <Link to="/">
          <h1 className="text-light-text font-extrabold dark:text-dark-text transition durati on-150 ease-in-out">
            Where in the world?
          </h1>
        </Link>
        {children}
      </div>
    </header>
  );
};
