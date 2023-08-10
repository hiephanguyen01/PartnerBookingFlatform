import { Image } from "antd";
import React from "react";
import classes from "./trendcard.module.scss";
import moment from "moment";
const TrendCard = ({ item }) => {
  return (
    <div className={classes.trendSectionItem}>
      <Image
        preview={false}
        src="https://picsum.photos/seed/picsum/200/300"
        alt=""
        style={{ width: "218px", objectFit: "cover", height: "100%" }}
      />
      <div className={classes.content}>
        <title>{item.title}</title>
        <p>{item.description}</p>
        <div className={classes.textBottom}>
          <span>Studio</span>
          <span className={classes.dot}></span>
          <span>{moment().format("DD/MM/YYYY")}</span>
        </div>
      </div>
    </div>
  );
};

export default TrendCard;
