export const SearchBar = () => {
  return (
    <form action="search" className="mb-8">
      <div className="relative mb-4 flex w-full flex-wrap items-stretch bg-light-element rounded-md  shadow-md dark:bg-dark-element">
        {/* Search button */}
        <button
          className="relative z-[2] flex items-center rounded-l bg-primary pr-4 py-4 pl-8 text-xs font-semibold leading-tight text-light-input transition duration-150 ease-in-out hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg dark:text-dark-input"
          type="button"
          id="button-addon1"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <input
          type="search"
          className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-r bg-transparent  border-none focus:ring-0 px-3 py-[0.25rem] text-sm font-semibold leading-[1.5] text-light-input outline-none transition duration-200 ease-in-out focus:text-light-input dark:text-dark-input dark:placeholder:text-dark-input dark:focus:text-dark-input"
          placeholder="Search for a country..."
          aria-label="Search"
          aria-describedby="button-addon1"
        />
      </div>
    </form>
  );
};
