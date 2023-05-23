import { DetailNav, DetailSection, Button } from "../components";
import { useLoaderData, useNavigate } from "react-router-dom";

const CountryDetail = () => {
  const { country, borders } = useLoaderData();
  const navigate = useNavigate();

  const handlePrevButton = () => {
    navigate(-1);
  };

  return (
    <>
      <DetailNav>
        <Button onButtonClick={handlePrevButton} />
      </DetailNav>
      <DetailSection countryData={country} bordersData={borders} />
    </>
  );
};

export default CountryDetail
