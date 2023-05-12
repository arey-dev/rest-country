import { Header, ThemeToggle } from "../components";
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
