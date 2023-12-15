import moment from "moment";

export const converPriceVND = (price = 0) => {
  return Number(price).toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  });
};
export const convertTimeUTC = (datetime = "", date) => {
  if (date) {
    return moment(datetime).subtract(7, "hours").format("DD-MM-YYYY  HH:mm A");
  } else {
    return moment(datetime).subtract(7, "hours").format("DD-MM-YYYY");
  }
};
