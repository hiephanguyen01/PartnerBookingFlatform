"use client";
import { converPriceVND } from "@/utils/convert";
import classes from "./schedule.module.scss";
import {
  Calendar,
  Col,
  Row,
  Select,
  DatePicker,
  Divider,
  Radio,
  Space,
  Checkbox,
  Slider,
  Form,
  Input,
  Switch,
  Button,
} from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { baseURL } from "@/utils/baseURL";
import StudioIcon from "@/assets/svg/studio";
import { studioRoomService } from "@/services/studioRoomServices";
import { getCategoryByName } from "@/utils/category";
import { useSelector } from "react-redux";
import axios from "axios";
const { RangePicker } = DatePicker;
const { Option } = Select;
export default function ScheduleAndPrice({ params }) {
  const [dates, setDates] = useState([]);
  const [data, setData] = useState();
  const [roomCurrent, setRoomCurrent] = useState(false);
  const [listRooms, setListRooms] = useState([]);
  const [optionSelected, setOptionSelected] = useState("");
  const router = useRouter();
  const [valueRadio, setValueRadio] = useState(1);
  const user = useSelector((state) => state.userReducer.user);

  console.log("dates", dates);
  console.log("optionSelected", optionSelected);
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const onChangeRadio = (e) => {
    console.log("radio checked", e.target.value);
    setValueRadio(e.target.value);
  };
  console.log("listRooms", listRooms);
  const getAllRoomByPartnerId = async (postId, category) => {
    try {
      const { data } = await studioRoomService.getAllRoomByPartnerId(
        postId,
        category
      );
      console.log(data);
      setListRooms(data.post);
    } catch (error) {
      console.log(error);
    }
  };

  const handlerSelectRoom = async (e) => {
    console.log(e);
    setOptionSelected(listRooms.find((item) => item.id == e));
    setRoomCurrent(e);
    // const { data } = await axios.get(
    //   `${baseURL}/api/studio-post/calendar-price?room=${e}&tenantId=${user.TenantId}`
    // );
    const { data } = await studioRoomService.getScheduleAndPriceRoom(
      e,
      category,
      user.TenantId
    );
    setDates(data);
  };
  const getListData = (value) => {
    // console.log(moment("2023-03-16 00:00:00").isSame(moment(value.$d), "day"));
    let listDat = [];
    if (!optionSelected) return listDat;
    if (dates?.scheduleAndPrices?.length < 1) {
      return (listDat = [
        {
          ...optionSelected,
          priceDate: optionSelected.PriceByDate,
          priceHour: optionSelected.PriceByHour,
          Open: optionSelected.Open,
        },
      ]);
    } else {
      const date = dates?.scheduleAndPrices?.find((item) =>
        moment(item.DateTime).isSame(moment(value.$d), "day")
      );

      if (date) {
        return (listDat = [
          {
            ...date,
            priceDate: date.PriceByDate,
            priceHour: date.PriceByHour,
            Open: date.Open,
          },
        ]);
      } else {
        return (listDat = [
          {
            ...roomCurrent,
            priceDate: roomCurrent.PriceByDate,
            priceHour: roomCurrent.PriceByHour,
            Open: roomCurrent.Open,
          },
        ]);
      }
    }
    // let bl = dates?.includes(value.date());
    // if (bl) {
    //   listDat = [{ priceDate: 3000000, priceHour: 300000, isVisible: true }];
    // } else {
    //   listDat = [{ priceDate: 1000000, priceHour: 100000, isVisible: false }];
    // }
    // return listDat;
  };
  const dateCellRender = (value) => {
    const listData = getListData(value);

    return (
      <ul className="events">
        {listData.map((item, idx) => (
          <li key={idx} onClick={() => setData(item)}>
            <div>
              {item.Open ? (
                <Button
                  className="button"
                  style={{
                    background: "#ffff",
                    color: "red",
                    border: "1px solid red",
                  }}
                  size="small"
                >
                  Đóng
                </Button>
              ) : (
                <Button
                  style={{
                    background: "#ffff",
                    color: "green",
                    border: "1px solid green",
                  }}
                  size="small"
                  className="button"
                >
                  Mở
                </Button>
              )}

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  maxWidth: "105px",
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                <p style={{ fontSize: "12px" }}>{`${converPriceVND(
                  item.priceHour
                )}/giờ`}</p>
                <p style={{ fontSize: "12px" }}>{`${converPriceVND(
                  item.priceDate
                )}/ngày`}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  useEffect(() => {
    getAllRoomByPartnerId(params.detail, getCategoryByName(category));
  }, []);
  return (
    <div className={classes.container}>
      <Row gutter={8}>
        <Col span={18}>
          <div className={`${classes.box} calendar-price`}>
            <div>
              <h3>Thiết lập lịch và giá</h3>
            </div>

            <div style={{ position: "relative" }}>
              <Calendar
                className="calendar-cus"
                dateCellRender={dateCellRender}
                mode="month"
                onSelect={(e) => {
                  console.log(e);
                }}
                // monthCellRender={monthCellRender}
              />
              <Select
                onChange={handlerSelectRoom}
                defaultValue={""}
                className="selectRoom"
                size="large"
                style={{ minWidth: "500px" }}
              >
                <Option value={""}>--- Chọn phòng ---</Option>
                {listRooms.map((item) => {
                  return (
                    <Option key={item.id} value={tem.id}>
                      {item.Name}
                    </Option>
                  );
                })}
              </Select>
            </div>
          </div>
        </Col>
        <Col span={6}>
          <div className={`${classes.box}`}>
            {!roomCurrent ? (
              <div className={classes.empty}>
                <StudioIcon />
                <p style={{ marginTop: "24px" }}>
                  Vui lòng <strong> chọn phòng </strong>để thiết lập lịch và
                  giá!
                </p>
              </div>
            ) : (
              <div>
                <div>
                  <label className={classes.label}>Ngày đã chọn</label>
                  <RangePicker size="large" format={"YYYY/MM/DD"} />
                </div>
                <Divider />
                <div>
                  <label className={classes.label}>Trạng thái</label>
                  <Radio.Group onChange={onChangeRadio} value={valueRadio}>
                    <Space direction="vertical">
                      <Radio value={1}>Mở cửa</Radio>
                      <Radio value={2}>Đóng cửa</Radio>
                    </Space>
                  </Radio.Group>
                </div>
                <Divider />
                <div>
                  <label className={classes.label}>Giờ làm việc</label>
                  <div
                    style={{
                      marginTop: "24px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                    }}
                  >
                    <div>
                      <Checkbox
                        checked
                        // onChange={(e) => onChangeCheckBox(e, 1)}
                      >
                        Buổi sáng: 07:00 - 10:00
                      </Checkbox>
                      <Slider
                        style={{ marginTop: "20px" }}
                        range
                        defaultValue={[20, 50]}
                      />
                    </div>
                    <div>
                      <Checkbox
                        checked
                        // onChange={(e) => onChangeCheckBox(e, 1)}
                      >
                        Buổi chiều: 07:00 - 10:00
                      </Checkbox>
                      <Slider
                        style={{ marginTop: "20px" }}
                        range
                        defaultValue={[20, 50]}
                      />
                    </div>
                    <div>
                      <Checkbox
                      // onChange={(e) => onChangeCheckBox(e, 1)}
                      >
                        Buổi tối:: 07:00 - 10:00
                      </Checkbox>
                      <Slider
                        style={{ marginTop: "20px" }}
                        range
                        defaultValue={[20, 50]}
                      />
                    </div>
                  </div>
                  <div style={{ marginTop: "8px" }}>
                    <Space
                      direction="vertical"
                      style={{ width: "100%", marginTop: "8px" }}
                    >
                      <label>Thời gian nghỉ giữa hai đơn đặt </label>
                      <Select
                        size="large"
                        style={{ width: "100%" }}
                        defaultValue={0}
                      >
                        <Option value={0}>30 phút</Option>
                      </Select>
                    </Space>
                  </div>
                </div>
                <Divider />
                <div>
                  <label className={classes.label}>
                    Thiết lập giá và chính sách
                  </label>
                  <Select
                    size="large"
                    style={{
                      width: "100%",
                      marginBottom: "16px",
                      marginTop: "10px",
                    }}
                    defaultValue={0}
                  >
                    <Option value={0}>Theo giờ</Option>
                    <Option value={1}>Theo ngày</Option>
                  </Select>
                  {/* <Switch
                  checkedChildren="Theo giờ "
                  unCheckedChildren="Theo ngày"
                  defaultChecked
                /> */}

                  <Radio.Group
                    style={{ marginBottom: "16px" }}
                    onChange={onChangeRadio}
                    value={valueRadio}
                    size="large"
                  >
                    <Space direction="horizontal">
                      <Radio value={1}>Đóng</Radio>
                      <Radio value={2}>Mở</Radio>
                    </Space>
                  </Radio.Group>

                  <Form name="form_item_path" layout="vertical">
                    <Form.Item label="Giá áp dụng (VND/giờ)">
                      <Input
                        size="large"
                        suffix="VND"
                        placeholder="Vd: 1.000.000"
                      />
                    </Form.Item>
                    <Form.Item label="Đặt cọc - Thanh toán trước">
                      <Input
                        size="large"
                        // value={data?.DepositByHour && `${data?.DepositByDate}%`}
                        disabled
                        value={"20% giá trị đơn đặt"}
                      />
                    </Form.Item>
                    <Form.Item label="Hình thức thanh toán">
                      <Input size="large" disabled value={"Online"} />
                    </Form.Item>
                    <Form.Item label="Huỷ đơn miễm phí">
                      <Input
                        size="large"
                        // value={data?.FreeCancelByHour && data.FreeCancelByHour}
                        disabled
                        value={"Trước 1 ngày"}
                      />
                    </Form.Item>
                    <Form.Item label="Phí huỷ đơn">
                      <Input
                        size="large"
                        // value={
                        //   data?.AbsentPriceByHour && `${data.AbsentPriceByHour}%`
                        // }
                        disabled
                        value={"25% giá trị đặt cọc"}
                      />
                    </Form.Item>
                    <Form.Item label="Phí vắng mặt">
                      <Input
                        size="large"
                        // value={
                        //   data?.AbsentPriceByHour && `${data.AbsentPriceByHour}%`
                        // }
                        disabled
                        value={"100% giá trị đặt cọc"}
                      />
                    </Form.Item>
                  </Form>
                </div>
                <div
                  style={{
                    textAlign: "right",
                    marginTop: "16px",
                    display: "flex",
                  }}
                >
                  <Button
                    style={{ width: "150px" }}
                    size="large"
                    type="dashed"
                    danger
                  >
                    Huỷ
                  </Button>
                  <Button
                    style={{ width: "150px", marginLeft: "20px" }}
                    size="large"
                    type="primary"
                  >
                    Lưu thay đổi
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
}
