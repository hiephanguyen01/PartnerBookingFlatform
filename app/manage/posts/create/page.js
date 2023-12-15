"use client";

import { useState } from "react";
import classes from "./create.module.scss";
import { Button, Steps } from "antd";
import InfoGeneral from "@/components/InfoGeneral";
import RoomCategory from "@/components/RoomCategory";
import WorkTime from "@/components/WorkTime";
import SuccessIcon from "@/assets/svg/success";
import { useRouter } from "next/navigation";

export default function CreatePost() {
  const [current, setCurrent] = useState(0);

  const [postNew, setPostNew] = useState({});

  const router = useRouter();
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: "Thông tin chung ",
      content: <InfoGeneral next={next} />,
    },
    {
      title: "Thời gian làm việc",
      content: <WorkTime setPostNew={setPostNew} next={next} />,
    },
    {
      title: "Loại phòng",
      content: <RoomCategory postNew={postNew} next={next} />,
    },
  ];

  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  if (current == 3) {
    return (
      <div style={{ display: "flex", height: "100vh" }}>
        <div className={classes.notification}>
          <div className={classes.content}>
            <SuccessIcon />
            <h4>ĐÃ TẠO BÀI ĐĂNG</h4>
            <p>Bạn đã tạo bài đăng Studio thành công!</p>
            <Button
              onClick={() => router.push("/manage/posts")}
              type="primary"
              size="large"
            >
              Đến trang quản lý{" "}
            </Button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={classes.createPost}>
      <div className={classes.container}>
        <div className="">
          <div style={{ padding: "0 100px" }}>
            <Steps labelPlacement="vertical" current={current} items={items} />
          </div>

          <div className={classes.content}>{steps[current].content}</div>
          <div
            style={{
              marginTop: 24,
            }}
          >
            {/* {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )} */}
            {/* {current === steps.length - 1 && (
              <Button
                type="primary"
                onClick={() => message.success("Processing complete!")}
              >
                Done
              </Button>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
