export const displayCurrencies = (obj) => {
  // transform obj to array
  const currencies = Object.values(obj);

  return currencies.map((currency) => currency.name).join(", ");
};
