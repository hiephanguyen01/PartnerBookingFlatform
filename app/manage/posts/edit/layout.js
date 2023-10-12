import AdminLayout from "@/components/layout/AdminLayout";
import React from "react";
import classes from "./edit.module.scss";

export default function LayoutMainAdmin({ children }) {
  return (
    <>
      <div className={classes.box}>
        <div>
          <ul className={classes.menuEdit}>
            <li className={classes.active}>Thông tin chung</li>
            <li>Loại phòng</li>
            <li>Lịch và Giá</li>
          </ul>
        </div>
      </div>
      {children}
    </>
  );
}
