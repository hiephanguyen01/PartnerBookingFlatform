export const converPriceVND = (price = 0) => {
  return Number(price).toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  });
};
