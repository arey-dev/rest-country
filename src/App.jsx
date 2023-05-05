import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";
import { Header } from "./components/Header";
import { ThemeToggle } from "./components/ThemeToggle";

export default function App() {
  return (
    <>
      <Header>
        <ThemeToggle />
      </Header>
      <RouterProvider router={router} />
    </>
  );
}
