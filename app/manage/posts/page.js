"use client";

import PostEmpty from "@/components/PostEmpty";
import classes from "./posts.module.scss";
import { Button, Image, Table } from "antd";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import HeartIcon from "@/assets/svg/heart";
import StarIcon from "@/assets/svg/star";
import { useRouter } from "next/navigation";
import { studioPostService } from "@/services/studioPostService";
import { useEffect, useState } from "react";
import ModalPost from "@/components/modals/ModalPost";
import { IMG } from "@/utils/REACT_APP_DB_BASE_URL_IMG";

export default function Post() {
  const [dataTable, setDataTable] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const columns = [
    {
      title: "Bài đăng",
      render: (text, _) => {
        console.log(_);
        return (
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <Image
              width={126}
              height={88}
              style={{ objectFit: "cover" }}
              alt="demo"
              src={IMG(_.Image1)}
            />
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <p>{_.Name}</p>
              <div style={{ display: "flex", gap: "16px" }}>
                <p className={classes.tagTable}>{_.category}</p>
                <p
                  className={[classes.tagTable, classes.flexRow].join(" ")}
                  style={{ background: "#FFEDED", color: "#616161" }}
                >
                  <HeartIcon /> 1,5K
                </p>
                <p
                  className={[classes.tagTable, classes.flexRow].join(" ")}
                  style={{ background: "#FFF6DF", color: "#616161" }}
                >
                  <StarIcon /> {_.TotalRate || 0}
                </p>
              </div>
            </div>
          </div>
        );
      },
      width: "55%",
    },
    {
      title: "Trạng thái",
      dataIndex: "priceHour",
      key: "priceHour",
      render: (text, _) => (
        <span
          className={classes.tagTable}
          style={{ color: "#009874", background: "#E3FAF4" }}
        >
          {_.IsVisible ? " Mở / Có thể đặt" : "Đóng / Không thể đặt"}
        </span>
      ),
    },

    {
      title: "Thao tác",
      render: (text, _) => (
        <div
          onClick={() =>
            router.push(`/manage/posts/${_.Id}?category=${_.category}&id=${_.Id}`)
          }
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <EditOutlined
            className={classes.iconAction}
            style={{ color: "#e22828" }}
          />
        </div>
      ),
    },
  ];

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  async function extractAllPost() {
    try {
      const { data } = await studioPostService.getAllPostPartner();
      setDataTable(data.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    extractAllPost();
  }, []);
  if (dataTable.length < 1) {
    return <PostEmpty />;
  }

  return (
    <section>
      <div className={classes.container}>
        <div>
          <div className={classes.top}>
            <h3>Bài đăng của bạn</h3>
            <Button
              onClick={() => {
                // router.push("/manage/posts/create");
                setIsModalOpen(true);
              }}
              icon={<PlusOutlined />}
              size="large"
              type="primary"
            >
              Tạo bài đăng
            </Button>
          </div>
          <div style={{ marginTop: "24px" }}>
            <Table
              bordered={true}
              columns={columns}
              pagination={false}
              dataSource={dataTable ? dataTable : []}
            />
          </div>
        </div>
      </div>
      <ModalPost
        handleCancel={handleCancel}
        listCategory={dataTable.map((item) => item.category)}
        isModalOpen={isModalOpen}
      />
    </section>
  );
}
