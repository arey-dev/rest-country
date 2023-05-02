import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  return (
    <header className="bg-light-element shadow-sm dark:bg-dark-element mb-4">
      <div className="container mx-auto flex justify-between py-5 px-3">
        <h1 className="text-light-text font-extrabold dark:text-dark-text transition duration-150 ease-in-out">
          Where in the world?
        </h1>
        <ThemeToggle />
      </div>
    </header>
  );
};
