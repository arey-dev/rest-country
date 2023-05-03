import { Header } from "./components/Header";
import { ThemeToggle } from "./components/ThemeToggle";
// import { Home } from "./pages/Home";
import { CountryDetail } from "./pages/CountryDetail";

const App = () => {
  return (
    <>
      <Header>
        <ThemeToggle />
      </Header>
      {/* <Home/> */}
      <CountryDetail />
    </>
  );
};

export default App;
