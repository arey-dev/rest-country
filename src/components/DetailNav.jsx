// eslint-disable-next-line react/prop-types
export const DetailNav = ({ children }) => {
  return (
    <>
      <nav>
        <div className="max-w-[22rem] xs:container   mx-auto px-3">
          {children}
        </div>
      </nav>
    </>
  );
};
