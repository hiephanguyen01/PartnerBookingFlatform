"use client";
import { Image } from "antd";
import React from "react";
import classes from "./trendcard.module.scss";
import moment from "moment";
import { CATEGORIES } from "@/utils/category";
import { useRouter } from "next/navigation";
const TrendCard = ({ item }) => {
  const router = useRouter();
  return (
    <div
      className={classes.trendSectionItem}
      onClick={() => router.push(`/home/trend/${item.id}`)}
    >
      <Image
        preview={false}
        src={item.image}
        alt=""
        style={{ width: "218px", objectFit: "cover", height: "100%" }}
      />
      <div className={classes.content}>
        <title>{item.title}</title>
        <p>{item.content}</p>
        <div className={classes.textBottom}>
          <span>
            {CATEGORIES.find((val) => val.id === item.category)?.label ||
              "Studio"}
          </span>
          <span className={classes.dot}></span>
          <span>{moment(item.createdAt).format("DD/MM/YYYY")}</span>
        </div>
      </div>
    </div>
  );
};

export default TrendCard;
