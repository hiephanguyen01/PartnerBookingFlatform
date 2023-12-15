export const CATEGORIES = [
  {
    id: 1,
    value: 1,
    key: 1,
    label: "Studio",
    linkTo: "studio",
  },
  {
    id: 2,
    value: 2,
    key: 2,
    label: "Nhiếp ảnh",
    linkTo: "photographer",
  },
  {
    id: 3,
    value: 3,
    key: 3,
    label: "Trang phục",
    linkTo: "clothes",
  },
  {
    id: 4,
    value: 4,
    key: 4,
    label: "Make up",
    linkTo: "makeup",
  },
  {
    id: 5,
    value: 5,
    key: 5,
    label: "Thiết bị",
    linkTo: "device",
  },
  {
    id: 6,
    value: 6,
    key: 6,
    label: "Người mẫu",
    linkTo: "model",
  },
];

export const FILTEREDCATEGORIES = () => {
  const newCat = CATEGORIES;
  newCat.unshift({
    label: "Tất cả",
    value: 0,
  });

  return newCat;
};
export const getCategoryLabel = (finding) => {
  const matchingKey = CATEGORIES.find((key) => {
    return key.value === finding;
  });
  return matchingKey ? matchingKey.label : "Unknown Label";
};

export const keyF = [
  // {
  //   BookingStatus: 4,
  //   PaymentStatus: [1],
  //   label: "chờ thanh toán",
  //   value: 1,
  // }, //chờ thanh toán
  {
    BookingStatus: 4,
    PaymentStatus: [4, 3, 2],
    label: "sắp tới",
    value: 2,
  }, //sắp tới
  {
    BookingStatus: 1,
    PaymentStatus: [2, 3, 4],
    label: "hoàn tất",
    value: 3,
  }, //hoàn tất
  {
    BookingStatus: 2,
    PaymentStatus: [2, 3, 4],
    label: "đã huỷ",
    value: 4,
  }, //đã huỷ
  {
    BookingStatus: 3,
    PaymentStatus: [2, 3, 4],
    label: "vắng mặt",
    value: 5,
  }, //vắng mặt
];
export const getLabelByStatus = (bookingStatus, paymentStatus) => {
  const matchingKey = keyF.find((key) => {
    return (
      key.BookingStatus === bookingStatus &&
      key.PaymentStatus.includes(paymentStatus)
    );
  });

  return matchingKey ? matchingKey.label : "Unknown Status";
};
export const FILTEREDSTATUS = () => {
  const newCat = keyF;
  newCat.unshift({
    label: "Tất cả",
    value: 0,
  });

  return newCat;
};
export function getCategoryByName(category) {
  switch (category) {
    case "studio": {
      return 1;
      break;
    }
    case "photographer": {
      return 2;
      break;
    }
    case "makeup": {
      return 4;
      break;
    }
    case "model": {
      return 6;
      break;
    }
    default:
      break;
  }
}
