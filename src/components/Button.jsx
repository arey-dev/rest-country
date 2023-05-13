// eslint-disable-next-line react/prop-types
export const Button = ({ onButtonClick }) => {
  return (
    <button
      onClick={onButtonClick}
      type="button"
      className="rounded bg-light-element flex justify-center items-center w-28 py-1.5 gap-2 text-base lg:text-lg font-light leading-normal text-light-text shadow-custom hover:bg-light-background hover:shadow-custom focus:bg-light-background focus:outline-none hover:ring-2 ring-inset ring-light-element active:bg-light-background dark:bg-dark-element dark:text-dark-text dark:ring-dark-element dark:hover:bg-dark-background dark:focus:bg-dark-background"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
        />
      </svg>
      <span>Back</span>
    </button>
  );
};
