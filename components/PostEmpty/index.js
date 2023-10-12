"use client";
import NotFound from "@/assets/svg/notFound";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import classes from "./posts.module.scss";
import { useState } from "react";
import StudioIcon from "@/assets/svg/studio";
import PhotographerIcon from "@/assets/svg/photographer";
import ClothesIcon from "@/assets/svg/clothes";
import DeviceIcon from "@/assets/svg/device";
import MakeupIcon from "@/assets/svg/makeup";
import ModelIcon from "@/assets/svg/model";
import ModalPost from "../modals/ModalPost";

const itemModal = [
  {
    icons: <StudioIcon />,
    title: "Studio",
    content: "Cho thuê Studio quay phim,chụp hình, v.v. ",
  },
  {
    icons: <PhotographerIcon />,
    title: "Studio",
    content: "Chuyên gia về chụp hình,quay phim, dựng phim, v.v.",
  },
  {
    icons: <ClothesIcon />,
    title: "Trang phục",
    content: "Cho thuê trang phục biểu diễn, chụp hình, v.v.",
  },
  {
    icons: <DeviceIcon />,
    title: "Thiết bị",
    content: "Cho thuê các thiết bị quay phim, chụp ảnh, v.v.",
  },
  {
    icons: <MakeupIcon />,
    title: "Trang điểm ",
    content: "Chuyên gia về trang điểm,làm tóc, v.v. ",
  },
  {
    icons: <ModelIcon />,
    title: "Người mẫu",
    content: "Chuyên gia về trang điểm,làm tóc, v.v.  ",
  },
];
export default function PostEmpty() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={classes.empty}>
        <div className={classes.container}>
          <div className={classes.content}>
            <NotFound />
            <h3>Bạn chưa có bài đăng nào</h3>
            <p>Tạo bài đăng ngay để tiếp cận khách hàng</p>
            <Button
              onClick={showModal}
              type="primary"
              size="large"
              icon={<PlusOutlined />}
            >
              Tạo bài đăng
            </Button>
          </div>
        </div>
      </div>
      <ModalPost
        handleCancel={handleCancel}
        listCategory={[]}
        isModalOpen={isModalOpen}
      />
    </>
  );
}
