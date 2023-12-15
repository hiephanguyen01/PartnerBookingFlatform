import React from "react";
import style from "./comment.module.scss";
import { Avatar, Image, Rate } from "antd";
import { UserOutlined } from "@ant-design/icons";
import moment from "moment";
import { IMG } from "@/utils/REACT_APP_DB_BASE_URL_IMG";
const CustomerComment = ({ data }) => {
  return (
    <div className={style.comment}>
      <div className={style.headgrp}>
        <div className={style.head}>
          <Avatar size="small" icon={<UserOutlined />} />
          <p className={style.name}>{data.BookingUser.Fullname}</p>
          <Rate
            disabled
            defaultValue={data.Rate}
            style={{ fontSize: "16px", paddingBottom: "5px" }}
          />
        </div>
        <p className={style.name}>
          {moment(data.CreationTime || "2023-08-17T10:42:45.000Z").format(
            "DD/MM/YYYY hh:mm "
          )}
        </p>
      </div>

      <p className={style.content}>{data.Description}</p>
      <div className={style.image}>
        {data?.Image?.map((val) => (
          <Image
            style={{ width: "68px", height: "68px", borderRadius: "8px" }}
            src={IMG(val)}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomerComment;
