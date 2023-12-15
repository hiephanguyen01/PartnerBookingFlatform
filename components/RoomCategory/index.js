import React from "react";
import classes from "./roomCategory.module.scss";
import StudioIcon from "@/assets/svg/studio";
import { Button, Image, Table } from "antd";
import SuccessIcon from "@/assets/svg/success";
import { converPriceVND } from "@/utils/convert";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useRouter, useSearchParams } from "next/navigation";

const columns = [
  {
    title: "Tên phòng",
    render: (text, _) => {
      return (
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <Image
            width={126}
            height={88}
            style={{ objectFit: "cover" }}
            alt="demo"
            src={"https://picsum.photos/200/300"}
          />
          <h4>{text.name}</h4>
        </div>
      );
    },
    width: "40%",
  },
  {
    title: "Giá niêm yết (VND/giờ)",
    dataIndex: "priceHour",
    key: "priceHour",
    render: (text) => <span>{converPriceVND(text)}</span>,
  },
  {
    title: "Giá niêm yết (VND/ngày)",
    dataIndex: "priceDate",
    key: "priceHour",
    render: (text) => <span>{converPriceVND(text)}</span>,
  },
  {
    title: "Thao tác",
    render: (text) => (
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <EditOutlined
          className={classes.iconAction}
          style={{ color: "#e22828" }}
        />
        <DeleteOutlined className={classes.iconAction} />
      </div>
    ),
  },
];
const dataTable = [
  {
    name: "Phòng Premium phong cách tối giản ",
    image: "",
    priceHour: 200000,
    priceDate: 200000,
  },
];
export default function RoomCategory({ next, postNew }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  // return (
  //   <>
  //     <div className={classes.containerTable}>
  //       <Table
  //         bordered={true}
  //         columns={columns}
  //         pagination={false}
  //         dataSource={dataTable ? dataTable : []}
  //       />
  //     </div>
  //     <div style={{ textAlign: "right", marginTop: "16px" }}>
  //       <Button style={{ width: "150px" }} size="large" type="dashed" danger>
  //         Thêm phòng
  //       </Button>
  //       <Button
  //         style={{ width: "150px", marginLeft: "10px" }}
  //         size="large"
  //         type="primary"
  //       >
  //         Tiếp tục
  //       </Button>
  //     </div>
  //   </>
  // );

  return (
    <section>
      <div className={classes.container}>
        <div className={classes.content}>
          <StudioIcon />
          <h3>Thêm thông tin phòng</h3>
          <p>Hiện tại Studio của bạn chưa có phòng nào.</p>
          <p>
            Bạn có thể thêm phòng bây giờ hoặc sau khi bài đăng này được tạo.
          </p>
        </div>
      </div>
      <div style={{ textAlign: "right", marginTop: "16px" }}>
        <Button
          style={{ width: "150px" }}
          size="large"
          type="dashed"
          danger
          onClick={() =>
            router.push(
              `/manage/posts/${postNew.id}/rooms/create?category=${category}`
            )
          }
        >
          Thêm phòng
        </Button>
        <Button
          onClick={() => next()}
          style={{ width: "150px", marginLeft: "10px" }}
          size="large"
          type="primary"
        >
          Tiếp tục
        </Button>
      </div>
    </section>
  );
}
