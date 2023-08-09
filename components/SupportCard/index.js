"use client";
import React from "react";
import classes from "./supportcard.module.scss";

const SupportCard = ({ item }) => {
  return (
    <div className={classes.supportSectionItem}>
      <div className={classes.icon}>{item.icon}</div>
      <label>{item.title}</label>
      <p>{item.description}</p>
    </div>
  );
};

export default SupportCard;
