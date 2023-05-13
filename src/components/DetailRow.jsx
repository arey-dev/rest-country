import { useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const DetailRow = ({ name, value }) => {
  const location = useLocation();

  let textSize = "lg:text-base";

  if(location.pathname.includes("/detail")) {
    textSize = "lg:text-lg"
  }

  return (
    <p className={`mb-1.5 ${textSize}`}>
      <span className="font-semibold text-light-text dark:text-dark-text">
        {name && name + ": "}
      </span>
      <span className="text-light-text dark:text-dark-text">{value}</span>
    </p>
  );
};
