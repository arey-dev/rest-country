export const formatNumber = (num) => {
  if (!num) return "";

  const number = +num;

  return number.toLocaleString();
};
