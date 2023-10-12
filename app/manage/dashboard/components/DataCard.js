import React from "react";

const DataCard = ({ data, descript, icon, subColor }) => {
  return (
    <div
      style={{
        width: "100%",
        height: 128,
        paddingLeft: 32,
        paddingRight: 32,
        background: "white",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.04)",
        borderRadius: 16,
        overflow: "hidden",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        display: "inline-flex",
      }}
    >
      <div
        style={{
          alignSelf: "stretch",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: 24,
          display: "inline-flex",
        }}
      >
        <div style={{ width: 64, height: 64, position: "relative" }}>
          <div
            style={{
              width: 64,
              height: 64,
              left: 0,
              top: 0,
              position: "absolute",
              background: subColor,
              borderRadius: 9999,
            }}
          />
          <div
            style={{
              width: 29.87,
              height: 29.87,
              left: 17.07,
              top: 17.07,
              position: "absolute",
            }}
          >
            {icon}
          </div>
        </div>
        <div
          style={{
            flex: "1 1 0",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: 8,
            display: "inline-flex",
          }}
        >
          <div
            style={{
              color: "#161616",
              fontSize: 24,
              fontWeight: "700",
            }}
          >
            {data} đơn
          </div>
          <div
            style={{
              textAlign: "right",
              color: "#616161",
              fontSize: 14,
              fontWeight: "400",
            }}
          >
            {descript}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCard;
