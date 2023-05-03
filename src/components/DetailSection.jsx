import { DetailRow } from "./DetailRow";
import { BorderCountry } from "./BorderCountry";

export const DetailSection = () => {
  return (
    <section className="mb-14">
      <h2 className="sr-only">Country Details</h2>
      <div className="max-w-[22rem] xs:container mx-auto px-3">
        <img
          className="max-w-full mb-8"
          src={
            "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg"
          }
          alt=""
        />
        <section>
          <h3 className="font-bold text-light-text text-2xl mb-6 dark:text-dark-text transition duration-150 ease-in-out">
            Belgium
          </h3>
          <div className="mb-9">
            <DetailRow name="Native Name" value="Belgie"></DetailRow>
            <DetailRow name="Population" value="11319511"></DetailRow>
            <DetailRow name="Region" value="Europe"></DetailRow>
            <DetailRow name="Sub Region" value="Western Europe"></DetailRow>
            <DetailRow name="Capital" value="Brussels"></DetailRow>
          </div>
          <div className="mb-9">
            <DetailRow name="Top Level" value=".be"></DetailRow>
            <DetailRow name="Currencies" value="Euro"></DetailRow>
            <DetailRow
              name="Languages"
              value="Dutch, French, German"
            ></DetailRow>
          </div>

          <footer>
            <h4 className="font-semibold text-xl mb-4 text-light-text transition duration-150 ease-in-out dark:text-dark-text">
              Border Countries:{" "}
            </h4>
            <p>
              <BorderCountry value="France"></BorderCountry>
              <BorderCountry value="Germany"></BorderCountry>
              <BorderCountry value="Netherlands"></BorderCountry>
            </p>
          </footer>
        </section>
      </div>
    </section>
  );
};
