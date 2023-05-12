// eslint-disable-next-line react/prop-types
export const DetailNav = ({ children }) => {
  return (
    <>
      <nav>
        <div className="container max-sm:w-11/12 mx-auto max-md:pt-5 mb-16 lg:mb-[4.5rem] px-3">
          {children}
        </div>
      </nav>
    </>
  );
};
