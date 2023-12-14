"use client";
import AdminLayout from "@/components/layout/AdminLayout";
import React from "react";
import classes from "./edit.module.scss";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function LayoutMainAdmin({ children, params }) {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const router = useRouter();
  console.log(searchParams);
  const pathname = usePathname();
  console.log("pathname", pathname);
  const isActive = (href) => {
    return pathname.includes(href) ? classes.active : "";
  };
  return (
    <>
      <div className={classes.box}>
        <div>
          <ul className={classes.menuEdit}>
            <li
              className={` ${
                pathname == `${`/manage/posts/${params.detail}`}`
                  ? classes.active
                  : ""
              } `}
              onClick={() =>
                router.push(
                  `/manage/posts/${params.detail}?category=${category}`
                )
              }
            >
              Thông tin chung
            </li>
            <li
              className={` ${isActive(
                `/manage/posts/${params.detail}/rooms`
              )} `}
              onClick={() =>
                router.push(
                  `/manage/posts/${params.detail}/rooms?category=${category}`
                )
              }
            >
              Loại phòng
            </li>
            <li
              className={` ${isActive(
                `/manage/posts/${params.detail}/schedule-price`
              )} `}
              onClick={() =>
                router.push(
                  `/manage/posts/${params.detail}/schedule-price?category=${category}`
                )
              }
            >
              Lịch và Giá
            </li>
          </ul>
        </div>
      </div>
      {children}
    </>
  );
}
