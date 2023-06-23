import { Header, ThemeToggle } from "../components";
import { Outlet } from "react-router-dom";

const Root = () => {
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

export default Root;
