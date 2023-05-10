import { DetailNav } from "../components/DetailNav";
import { Button } from "../components/Button";
import { DetailSection } from "../components/DetailSection";
import { useLoaderData } from "react-router-dom";

export const CountryDetail = () => {
  const { country } = useLoaderData();

  return (
    <>
      <DetailNav>
        <Button />
      </DetailNav>
      <DetailSection countryData={country} />
    </>
  );
};
