"use client";
import { IMG } from "@/utils/REACT_APP_DB_BASE_URL_IMG";
import { EditOutlined, StarFilled } from "@ant-design/icons";
import { Button, Image, Input, Modal, Select, Table, message } from "antd";
import { useEffect, useState } from "react";
import CustomerComment from "../CustomerComment/CustomerComment";
import style from "./tabrating.module.scss";
import { ratingService } from "@/services/RatingService";
const TabRating = ({ category, data, isModalOpen, setIsModalOpen }) => {
  const [init, setInit] = useState({});
  const [filtered, setFiltered] = useState([]);
  const [services, setServices] = useState([]);

  const [input, setInput] = useState("");
  const [selected, setSelected] = useState(null);

  const showModal = (id) => {
    setSelected(id);
    setIsModalOpen(true);
  };
  const handleOk = async () => {
    if (input.trim() === "") {
      message.error("Vui lòng không bỏ trống !");
    } else {
      await ratingService.replyComment({
        category,
        id: selected,
        ReplyComment: input.trim(),
      });
      message.success("Trả lời thành công");
      setInput("");
      setSelected(null);

      setIsModalOpen(false);
    }
  };
  const handleCancel = () => {
    setIsModalOpen(false);
    setInput("");
    setSelected(null);
  };

  const columns = [
    {
      title: "Tên ",
      dataIndex: "name",
      key: "name",
      width: "30%",
      render: (_, rec) => (
        <div
          style={{
            display: "flex",
            gap: "20px",
            height: "100%",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: "104px", height: "72px", borderRadius: "8px" }}
            src={IMG(
              services?.find(
                (ser) =>
                  ser.id ===
                  (rec?.StudioRoomId || rec?.PhotographerServicePackageId)
              )?.Image1
            )}
          />
          <p className={style.ratingName}>
            {
              services?.find(
                (ser) =>
                  ser.id ===
                  (rec?.StudioRoomId || rec?.PhotographerServicePackageId)
              )?.Name
            }
          </p>
        </div>
      ),
    },
    {
      title: "Đánh giá của Khách hàng",
      dataIndex: "age",
      key: "age",
      width: "40%",
      render: (_, rec) => <CustomerComment data={rec} />,
    },
    {
      title: "Phàn hồi đánh giá",
      dataIndex: "address",
      key: "address",
      render: (data, record) => (
        <div className={style.edit}>
          {record?.ReplyComment ? (
            <p>{record?.ReplyComment}</p>
          ) : (
            <a
              style={{ color: "#1FCBA2" }}
              onClick={() => showModal(record.id)}
            >
              <EditOutlined /> Phản hồi
            </a>
          )}
        </div>
      ),
    },
  ];

  const handleChange = (value) => {
    if (value === "") {
      setFiltered(init?.ratings);
    } else {
      const newList = filtered.filter(
        (val) =>
          (val?.StudioRoomId || val?.PhotographerServicePackageId) === value
      );
      setFiltered(newList);
    }
  };

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const onFillRating = async (rate) => {
    setFiltered([]);
    await delay(10);
    const newList = init?.ratings?.filter((val) => val?.Rate === rate);
    setFiltered(newList);
  };
  const onReply = (isReply = true) => {
    if (isReply === false) {
      const newList = init?.ratings?.filter(
        (val) => val?.ReplyComment === null
      );
      setFiltered(newList);
    } else if (isReply) {
      const newList = init?.ratings?.filter(
        (val) => val?.ReplyComment !== null
      );
      setFiltered(newList);
    } else {
      setFiltered(init?.ratings);
    }
  };

  useEffect(() => {
    setInit(data?.data);
    setFiltered(data?.data?.ratings);
    setServices(
      data?.data?.services.map((val) => ({
        ...val,
        label: val.Name,
        value: val.id,
      }))
    );
  }, [data, isModalOpen]);

  return (
    <div className={style.tabrating}>
      <Modal
        title="Phản hồi đánh giá"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div style={{ margin: "24px 0" }}>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            size="large"
            placeholder="cảm ơn bạn đã đánh giá"
          />
        </div>
      </Modal>
      <div className={style.filter}>
        <Button type="primary" size="large" onClick={() => onReply("")}>
          Tất cả
        </Button>
        <Button size="large" onClick={() => onReply(false)}>
          Chưa phản hồi
        </Button>
        <Button size="large" onClick={() => onReply(true)}>
          Đã phản hồi
        </Button>
      </div>
      <div className={style.filter2}>
        <Select
          style={{ width: "50%" }}
          size="large"
          placeholder="--- Chọn phòng ---"
          onChange={handleChange}
          options={[
            {
              label: "Tất cả",
              value: "",
            },
            ...(services || []),
          ]}
        />
        <div className={style.grpbtn}>
          <Button
            style={{ color: "#E22828" }}
            size="large"
            onClick={() => onFillRating(5)}
          >
            5 <StarFilled style={{ color: "#FC8800" }} />(
            {init?.ratings?.filter((val) => val.Rate === 5).length})
          </Button>
          <Button
            style={{ color: "#E22828" }}
            size="large"
            onClick={() => onFillRating(4)}
          >
            4 <StarFilled style={{ color: "#FC8800" }} /> (
            {init?.ratings?.filter((val) => val.Rate === 4).length})
          </Button>
          <Button
            style={{ color: "#E22828" }}
            size="large"
            onClick={() => onFillRating(3)}
          >
            3 <StarFilled style={{ color: "#FC8800" }} /> (
            {init?.ratings?.filter((val) => val.Rate === 3).length})
          </Button>
          <Button
            style={{ color: "#E22828" }}
            size="large"
            onClick={() => onFillRating(2)}
          >
            2 <StarFilled style={{ color: "#FC8800" }} /> (
            {init?.ratings?.filter((val) => val.Rate === 2).length})
          </Button>
          <Button
            style={{ color: "#E22828" }}
            size="large"
            onClick={() => onFillRating(1)}
          >
            1 <StarFilled style={{ color: "#FC8800" }} /> (
            {init?.ratings?.filter((val) => val.Rate === 1).length})
          </Button>
        </div>
      </div>
      <div className={style.table}>
        <Table
          size="large"
          bordered
          dataSource={filtered}
          columns={columns}
          pagination={{ pageSize: 5 }}
        />
      </div>
    </div>
  );
};

export default TabRating;
