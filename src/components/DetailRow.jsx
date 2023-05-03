// eslint-disable-next-line react/prop-types
export const DetailRow = ({ name, value }) => {
  return (
    <p className="mb-1">
      <span className="font-semibold">{name}: </span>
      <span>{value}</span>
    </p>
  );
};
