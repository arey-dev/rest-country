// eslint-disable-next-line react/prop-types
export const BorderCountry = ({ value }) => {
  return (
    <span className="inline-block min-w-[8rem] px-4 rounded-sm bg-light-element text-light-text shadow-custom-2 mr-3 mb-3 text-center py-1 dark:bg-dark-element dark:text-dark-text">
      {value}
    </span>
  );
};
