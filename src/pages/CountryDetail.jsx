import { DetailNav } from "../components/DetailNav";
import { Button } from "../components/Button";
import { DetailSection } from "../components/DetailSection";
import { useLoaderData } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const CountryDetail = () => {
  const { country } = useLoaderData();
  const navigate = useNavigate();

  const handlePrevButton = () => {
    navigate(-1)
  }

  return (
    <>
      <DetailNav>
        <Button onButtonClick={handlePrevButton} />
      </DetailNav>
      <DetailSection countryData={country} />
    </>
  );
};
