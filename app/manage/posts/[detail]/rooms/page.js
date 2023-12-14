"use client";
import { Button, Image, Input, Popconfirm, Table, message } from "antd";
import classes from "./room.module.scss";
import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { converPriceVND } from "@/utils/convert";
import { useRouter, useSearchParams } from "next/navigation";
import { studioRoomService } from "@/services/studioRoomServices";
import { useEffect, useState } from "react";
import { IMG } from "@/utils/REACT_APP_DB_BASE_URL_IMG";
import { getCategoryByName } from "@/utils/category";

export default function Rooms({ params }) {
  const [messageApi, contextHolder] = message.useMessage();
  const [dataTable, setDataTable] = useState([]);
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const router = useRouter();
  const getAllRoomByPartnerId = async (postId, category) => {
    try {
      const { data } = await studioRoomService.getAllRoomByPartnerId(
        postId,
        category
      );
      console.log(data);
      setDataTable(data.post);
    } catch (error) {
      console.log(error);
    }
  };
 

  const confirm = async (e, id) => {
    try {
      console.log(id);
      const { data } = await studioRoomService.deleteRoomById(
        id,
        getCategoryByName(category)
      );
      if (data.status == "success") {
        getAllRoomByPartnerId(params.detail, getCategoryByName(category));
        message.success("Đã xoá thành công!");
      }
    } catch (error) {
      console.log(error);
    }
  };
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
              src={IMG(text.Image1)}
            />
            <h4>{text.Name}</h4>
          </div>
        );
      },
      width: "40%",
    },
    {
      title: "Giá niêm yết (VND/giờ)",
      dataIndex: "PriceByHour",
      key: "PriceByHour",
      render: (text) => <span>{converPriceVND(text)}</span>,
    },
    {
      title: "Giá niêm yết (VND/ngày)",
      dataIndex: "PriceByDate",
      key: "PriceByDate",
      render: (text) => <span>{converPriceVND(text)}</span>,
    },
    {
      title: "Số đơn đặt",
      dataIndex: "numberOrder",
      key: "numberOrder",
      render: (text) => <span>{0}</span>,
    },
    {
      title: "Thao tác",
      render: (text, _) => (
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <EditOutlined
            onClick={() =>
              router.push(
                `/manage/posts/${params.detail}/rooms/${text.id}?category=${category}`
              )
            }
            className={classes.iconAction}
            style={{ color: "#e22828", fontSize: "24px", cursor: "pointer" }}
          />
          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={(e) => confirm(e, text.id)}
            // onCancel={cancel}
            okText="Yes"
            cancelText="No"
          >
            <DeleteOutlined
              className={classes.iconAction}
              style={{ fontSize: "24px", cursor: "pointer" }}
            />
          </Popconfirm>
        </div>
      ),
    },
  ];

  useEffect(() => {
    getAllRoomByPartnerId(params.detail, getCategoryByName(category));
  }, []);
  return (
    <div>
      {contextHolder}
      <div className={classes.container}>
        <div className={classes.top}>
          <div style={{ width: "50%" }}>
            <Input
              size="large"
              placeholder="Tìm phòng"
              prefix={<SearchOutlined />}
            />
          </div>
          <Button
            onClick={() =>
              router.push(
                `/manage/posts/${params.detail}/rooms/create?category=${category}`
              )
            }
            type="primary"
            icon={<PlusOutlined />}
          >
            Thêm phòng
          </Button>
        </div>
        <div style={{ margin: "24px 0" }}>
          <Table
            bordered={true}
            columns={columns}
            // pagination={false}
            dataSource={dataTable ? dataTable : []}
          />
        </div>
      </div>
    </div>
  );
}
