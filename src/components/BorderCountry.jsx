// eslint-disable-next-line react/prop-types
export const BorderCountry = ({ value }) => {
  return (
    <span className="inline-block w-32 rounded-sm bg-light-element text-light-text shadow-custom-2 mr-2 text-center py-1.5 dark:bg-dark-element dark:text-dark-text">
      {value}
    </span>
  );
};
