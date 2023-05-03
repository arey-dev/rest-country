import { DetailNav } from "../components/DetailNav";
import { Button } from "../components/Button";
import { DetailSection } from "../components/DetailSection";
import { Header } from "../components/Header";
import { ThemeToggle } from "../components/ThemeToggle";

export const CountryDetail = () => {
  return (
    <>
      <Header>
        <ThemeToggle />
      </Header>
      <DetailNav>
        <Button />
      </DetailNav>
      <DetailSection />
    </>
  );
};
