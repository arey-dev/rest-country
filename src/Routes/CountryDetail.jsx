import { DetailNav, DetailSection, Button } from "../components";
import { useNavigate, useParams } from "react-router-dom";
import { countryDetailQuery, countryBordersQuery } from "../loaders/countryLoader";
import { useQuery } from "@tanstack/react-query";

const CountryDetail = () => {
  const params = useParams();
  const { data: country } = useQuery(countryDetailQuery(params.id));

  
  const borderCountries = country[0]?.borders;

  const {data: borders } = useQuery(countryBordersQuery(borderCountries))

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
