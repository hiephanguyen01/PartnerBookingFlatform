"use client";
import {
  Button,
  Checkbox,
  Col,
  Divider,
  Form,
  Image,
  Input,
  Row,
  Select,
  Upload,
} from "antd";
import React, { useState } from "react";
import classes from "./createRoom.module.scss";
import TextArea from "antd/es/input/TextArea";
import ImageDefault from "@/assets/svg/ImageDefault";
const { Option } = Select;
const listInfoImage = [
  {
    title: "Ảnh bìa",
    id: 0,
  },
  {
    title: "Ảnh 1",
    id: 1,
  },
  {
    title: "Ảnh 2",
    id: 2,
  },
  {
    title: "Ảnh 3",
    id: 3,
  },
  {
    title: "Ảnh 4",
    id: 4,
  },
  {
    title: "Ảnh 5",
    id: 5,
  },
  {
    title: "Ảnh 6",
    id: 6,
  },
  {
    title: "Ảnh 7",
    id: 7,
  },
  {
    title: "Ảnh 8",
    id: 8,
  },
  {
    title: "Ảnh 9",
    id: 9,
  },
];
export default function CreateRoom() {
  const [files, setFiles] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  const [form] = Form.useForm();
  const listCheckBox = [
    {
      label: "Quạt",
      //   value: data.HasFan,
    },
    {
      label: "Máy lạnh",
      //   value: data.HasAirConditioner,
    },
    {
      label: "Phòng thay đồ",
      //   value: data.HasDressingRoom,
    },
    {
      label: "Nhà vệ sinh riêng",
      //   value: data.HasWC,
    },
    {
      label: "Camera an ninh",
      //   value: data.HasCamera,
    },
    {
      label: "Wifi",
      //   value: data.HasWifi,
    },
    {
      label: "Chỗ đậu xe máy",
      //   value: data.HasMotorBikeParking,
    },
    {
      label: "Chỗ đậu xe ô tô",
      //   value: data.HasCarParking,
    },
    {
      label: "Nhân viên hỗ trợ",
      //   value: data.HasSupporter,
    },
  ];
  const onChangeFile = ({ file }, b) => {
    const newFiles = [...files];
    file.preview = URL.createObjectURL(file.originFileObj);
    newFiles[b] = file;
    setFiles([...newFiles]);
  };
  return (
    <div className={classes.createRoom}>
      <Row>
        <Col span={4}>
          <div className={classes.tabs}>
            <span className={classes.active}>Thông tin phòng</span>
            <span>Hình ảnh / Video</span>
            <span>Chính sách</span>
          </div>
        </Col>
        <Col span={20}>
          <Form
            layout={"vertical"}
            form={form}
            //   onFinish={onFinish}
            onChange={(value) => console.log(value)}
            autoComplete="off"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              <div className={classes.container}>
                <h3 className={classes.titleBig}>THÔNG TIN PHÒNG</h3>
                <Row gutter={40}>
                  <Col span={24}>
                    <Form.Item label="Tên phòng" name="name">
                      <Input
                        size="large"
                        placeholder="Vd : Wisteria Premium "
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Giá niêm yết (VND/giờ)" name="name">
                      <Input
                        size="large"
                        suffix="VND"
                        placeholder="Vd: 1.000.000"
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Giá niêm yết (VND/ngày)" name="name">
                      <Input
                        size="large"
                        suffix="VND"
                        placeholder="Vd: 1.000.000"
                      />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item label="Diện tích" name="name">
                      <Input size="large" suffix="m2" placeholder="Vd: 50" />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item label="Chiều dài " name="name">
                      <Input size="large" suffix="m" placeholder="Vd: 50" />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item label="Chiều rộng " name="name">
                      <Input size="large" suffix="m" placeholder="Vd: 50" />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item label="Chiều cao trần " name="name">
                      <Input size="large" suffix="m" placeholder="Vd: 50" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Số lượng khách tối đa" name="name">
                      <Input size="large" suffix="Người" placeholder="Vd: 20" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Phụ thu phát sinh" name="name">
                      <Input
                        size="large"
                        suffix="Người"
                        placeholder="Vd: 1.000.000"
                      />
                    </Form.Item>
                  </Col>

                  <Col span={24}>
                    <Form.Item label="Mô tả">
                      <TextArea
                        //   value={valueText}
                        //   onChange={(e) => setValueText(e.target.value)}
                        placeholder="Nhập..."
                        autoSize={{ minRows: 5, maxRows: 7 }}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Divider />
                    <span className={classes.titleSmall}>Thiết bị có sẵn</span>
                  </Col>
                  <Col span={12}>
                    <div>
                      <Form.Item style={{ marginBottom: "8px" }} name="name">
                        <Checkbox className={classes.checkBox}>
                          Phông nền
                        </Checkbox>
                      </Form.Item>
                      <Form.Item name="name">
                        <Input size="large" placeholder="Ghi chú" />
                      </Form.Item>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div>
                      <Form.Item style={{ marginBottom: "8px" }} name="name">
                        <Checkbox className={classes.checkBox}>
                          Hệ thống đèn
                        </Checkbox>
                      </Form.Item>
                      <Form.Item name="name">
                        <Input size="large" placeholder="Ghi chú" />
                      </Form.Item>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div>
                      <Form.Item style={{ marginBottom: "8px" }} name="name">
                        <Checkbox className={classes.checkBox}>Bàn</Checkbox>
                      </Form.Item>
                      <Form.Item name="name">
                        <Input size="large" placeholder="Ghi chú" />
                      </Form.Item>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div>
                      <Form.Item style={{ marginBottom: "8px" }} name="name">
                        <Checkbox className={classes.checkBox}>
                          Ghế, Sofa
                        </Checkbox>
                      </Form.Item>
                      <Form.Item name="name">
                        <Input size="large" placeholder="Ghi chú" />
                      </Form.Item>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div>
                      <Form.Item style={{ marginBottom: "8px" }} name="name">
                        <Checkbox className={classes.checkBox}>
                          Hoa trang trí
                        </Checkbox>
                      </Form.Item>
                      <Form.Item name="name">
                        <Input size="large" placeholder="Ghi chú" />
                      </Form.Item>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div>
                      <Form.Item style={{ marginBottom: "8px" }} name="name">
                        <Checkbox className={classes.checkBox}>Khác</Checkbox>
                      </Form.Item>
                      <Form.Item name="name">
                        <Input size="large" placeholder="Ghi chú" />
                      </Form.Item>
                    </div>
                  </Col>
                  <Col span={24}>
                    <Divider />
                    <span className={classes.titleSmall}>Tiện ích đi kèm</span>
                  </Col>
                  {listCheckBox.map((item, idx) => (
                    <Col key={idx} span={8}>
                      <Form.Item key={idx} name="name">
                        <Checkbox className={classes.checkBox}>
                          {item.label}
                        </Checkbox>
                      </Form.Item>
                    </Col>
                  ))}
                </Row>
              </div>
              <div className={classes.container}>
                <Row gutter={40}>
                  <Col span={24}>
                    <span className={classes.titleBig}>HÌNH ẢNH / VIDEO</span>
                  </Col>
                  <Col span={24}>
                    <span className={classes.titleSub}>Hình ảnh</span>
                    <div className={classes.listImage}>
                      {listInfoImage.map((item, idx) => (
                        <div key={idx} className={classes.itemImage}>
                          <Upload
                            key={idx}
                            listType="picture-card"
                            className={"avatar-uploader1"}
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            onChange={(e) => onChangeFile(e, item.id)}
                          >
                            <div className={classes.imageDefault}>
                              {files[item.id] === null ? (
                                <ImageDefault />
                              ) : (
                                <Image
                                  width={"100%"}
                                  height={"100%"}
                                  style={{ objectFit: "cover" }}
                                  preview={false}
                                  src={
                                    files[item.id] === null
                                      ? ""
                                      : files[item.id]?.preview
                                  }
                                  //   fallback={fallBackImg}
                                />
                              )}
                            </div>
                          </Upload>
                          <p>{item.title}</p>
                        </div>
                      ))}
                    </div>
                  </Col>
                  <Col span={18}>
                    <span className={classes.titleSub}>Video</span>
                    <div className={classes.video}>
                      <div className={classes.imageDefault}>
                        <ImageDefault />
                      </div>
                      <ul>
                        <li>
                          1. Kích thước: Tối đa 30Mb, độ phân giải không vượt
                          quá 1280x1280px
                        </li>
                        <li>2. Độ dài: 10s-60s</li>
                        <li>3. Định dạng: MP4 (không hỗ trợ vp9)</li>
                        <li>
                          4. Lưu ý: sản phẩm có thể hiển thị trong khi video
                          đang được xử lý. Video sẽ tự động hiển thị sau khi đã
                          xử lý thành công.{" "}
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className={classes.container}>
                <h3 className={classes.titleBig}>THÔNG TIN PHÒNG</h3>
                <Row gutter={40}>
                  <Col span={12}>
                    <Form.Item label="Đặt cọc - Thanh toán trước" name="name">
                      <Select defaultValue="" value="">
                        <Option value="">20% giá trị đơn đặt</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Hình thức thanh toán" name="name">
                      <Select defaultValue="" value="">
                        <Option value="">Online</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Hủy miễn phí" name="name">
                      <Select defaultValue="" value="">
                        <Option value="">Trước 1 ngày</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Phí huỷ đơn" name="name">
                      <Select defaultValue="" value="">
                        <Option value="">25% giá trị đặt cọc</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Phí vắng mặt" name="name">
                      <Select defaultValue="" value="">
                        <Option value="">100% giá trị đặt cọc</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Divider />
                    <span className={classes.titleBig}>
                      CHÍNH SÁCH THEO GIỜ
                    </span>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Đặt cọc - Thanh toán trước" name="name">
                      <Select defaultValue="" value="">
                        <Option value="">20% giá trị đơn đặt</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Hình thức thanh toán" name="name">
                      <Select defaultValue="" value="">
                        <Option value="">Online</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Hủy miễn phí" name="name">
                      <Select defaultValue="" value="">
                        <Option value="">Trước 1 ngày</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Phí huỷ đơn" name="name">
                      <Select defaultValue="" value="">
                        <Option value="">25% giá trị đặt cọc</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="Phí vắng mặt" name="name">
                      <Select defaultValue="" value="">
                        <Option value="">100% giá trị đặt cọc</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
              </div>
            </div>
            <div style={{ textAlign: "right", marginTop: "16px" }}>
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
                Tạo phòng
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
