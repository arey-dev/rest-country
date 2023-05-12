
// eslint-disable-next-line react/prop-types
export const FilterableSearch = ({children}) => {
  return (
    <section>
      <h2 className="sr-only">Search and filter a countries</h2>
      <div className="container md:flex justify-between mx-auto max-md:mb-6 px-3">
        {children}
      </div>
    </section>
  );
};
