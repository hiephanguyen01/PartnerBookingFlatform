import { LoadingOutlined } from "@ant-design/icons";
import React from "react";

const LoadingCPN = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "#fff",
          width: "fit-content",
          borderRadius: "50%",
          padding: "10px",
          margin: "10px",
        }}
      >
        <LoadingOutlined style={{ fontSize: "40px", color: "#e22828" }} />
      </div>
    </div>
  );
};

export default LoadingCPN;
