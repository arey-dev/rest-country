import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="container grid place-content-center place-items-center gap-8 w-full h-[60vh] text-light-text dark:text-dark-text">
      <h1 className="font-bold text-2xl lg:text-4xl">Oops!</h1>
      <p className="font-medium text-xl lg:text-2xl">
        Sorry, an unexpected error has occurred.
      </p>
      <p>
        <i className="text-base lg:text-lg">
          {error.statusText || error.message}
        </i>
      </p>
    </div>
  );
};
