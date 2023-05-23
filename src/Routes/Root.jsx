import { Header, ThemeToggle } from "../components";
import { Outlet, useNavigation } from "react-router-dom";

const Root = () => {
  const navigation = useNavigation();
  return (
    <>
      <Header>
        <ThemeToggle />
      </Header>
      <main className={navigation.state === "loading" ? "loading" : ""}>
        <Outlet />
      </main>
    </>
  );
};

export default Root;
