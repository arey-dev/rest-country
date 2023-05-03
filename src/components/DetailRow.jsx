// eslint-disable-next-line react/prop-types
export const DetailRow = ({ name, value }) => {
  return (
    <p className="mb-1">
      <span className="font-semibold text-light-text dark:text-dark-text">
        {name}:{" "}
      </span>
      <span className="text-light-text dark:text-dark-text">
        {value}
      </span>
    </p>
  );
};
