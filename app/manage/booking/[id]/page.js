"use client";
import { Anchor } from "antd";
import { useEffect, useRef, useState } from "react";
import BookingCancel from "./components/BookingCancel";
import BookingInfo from "./components/BookingInfo";
import BookingRoom from "./components/BookingRoom";
import NotPresent from "./components/NotPresent";
import PaymentInfo from "./components/PaymentInfo";

const BookingDetail = () => {
  const topRef = useRef(null);
  const [targetOffset, setTargetOffset] = useState();
  useEffect(() => {
    setTargetOffset(topRef.current?.clientHeight);
  }, []);
  return (
    <div
      style={{ display: "flex", alignItems: "start", justifyContent: "start" }}
    >
      <Anchor
        className="anchor-custom"
        targetOffset={targetOffset}
        items={[
          {
            key: "step-1",
            href: "#step-1",
            title: "Thông tin đơn",
          },
          {
            key: "step-2",
            href: "#step-2",
            title: "Thông tin phòng",
          },
          {
            key: "step-3",
            href: "#step-3",
            title: "Thanh toán",
          },
          {
            key: "step-4",
            href: "#step-4",
            title: "Huỷ đơn",
          },
          {
            key: "step-5",
            href: "#step-5",
            title: "Vắng mặt",
          },
        ]}
      />
      <div>
        <div id="step-1">
          <BookingInfo />
        </div>
        <div id="step-2">
          <BookingRoom />
        </div>
        <div id="step-3">
          <PaymentInfo />
        </div>
        <div id="step-4">
          <BookingCancel />
        </div>
        <div id="step-5">
          <NotPresent />
        </div>
      </div>
    </div>
  );
};

export default BookingDetail;
