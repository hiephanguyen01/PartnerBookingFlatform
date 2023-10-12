"use client";
import React, { useState } from "react";
import classes from "./modelPost.module.scss";
import StudioIcon from "@/assets/svg/studio";
import PhotographerIcon from "@/assets/svg/photographer";
import ClothesIcon from "@/assets/svg/clothes";
import DeviceIcon from "@/assets/svg/device";
import ModelIcon from "@/assets/svg/model";
import { Modal } from "antd";
import MakeupIcon from "@/assets/svg/makeup";
import { useRouter } from "next/navigation";

const itemModal = [
  {
    icons: <StudioIcon />,
    title: "Studio",
    category: "studio",
    content: "Cho thuê Studio quay phim,chụp hình, v.v. ",
  },
  {
    icons: <PhotographerIcon />,
    title: "Photographer",
    category: "photographer",
    content: "Chuyên gia về chụp hình,quay phim, dựng phim, v.v.",
  },
  {
    icons: <ClothesIcon />,
    title: "Trang phục",
    category: "clothes",
    content: "Cho thuê trang phục biểu diễn, chụp hình, v.v.",
  },
  {
    icons: <DeviceIcon />,
    title: "Thiết bị",
    category: "device",
    content: "Cho thuê các thiết bị quay phim, chụp ảnh, v.v.",
  },
  {
    icons: <MakeupIcon />,
    title: "Trang điểm ",
    category: "makeup",
    content: "Chuyên gia về trang điểm,làm tóc, v.v. ",
  },
  {
    icons: <ModelIcon />,
    title: "Người mẫu",
    category: "model",
    content: "Chuyên gia về trang điểm,làm tóc, v.v.  ",
  },
];
export default function ModalPost({
  isModalOpen = false,
  handleCancel,
  listCategory,
}) {
  const router = useRouter();
  console.log(listCategory);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  //   const showModal = () => {
  //     setIsModalOpen(true);
  //   };
  //   const handleOk = () => {
  //     setIsModalOpen(false);
  //   };
  //   const handleCancel = () => {
  //     setIsModalOpen(false);
  //   };
  return (
    <div>
      <Modal
        width={800}
        className="modalPost"
        title={
          <div className={`${classes.titleModal} `}>
            <h3>Tạo bài đăng</h3>
            <p>Mỗi vai trò bạn được tạo một bài đăng</p>
          </div>
        }
        open={isModalOpen}
        // onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <div className={classes.modal}>
          <div className={classes.contentModal}>
            {itemModal.map((item, idx) => (
              <div
                className={`${classes.item} ${
                  listCategory.includes(item.category) ? classes.disable : ""
                }`}
                key={idx}
                onClick={() => router.push("/manage/posts/create")}
              >
                {item.icons}
                <div className={classes.content}>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </div>
  );
}
