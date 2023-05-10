import { Header } from "../components/Header";
import { ThemeToggle } from "../components/ThemeToggle";
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <>
      <Header>
        <ThemeToggle />
      </Header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
