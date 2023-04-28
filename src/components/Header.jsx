import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  return (
    <header>
      <div className="bg-light-element flex justify-between py-5 px-3 shadow-sm">
        <h1 className="text-light-text font-extrabold">Where in the world?</h1>
        <ThemeToggle />
      </div>
    </header>
  );
};
