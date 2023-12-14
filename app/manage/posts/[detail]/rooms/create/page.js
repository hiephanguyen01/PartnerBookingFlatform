"use client";
import {
  Anchor,
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
  message,
} from "antd";
import React, { useEffect, useState } from "react";
import classes from "./createRoom.module.scss";
import TextArea from "antd/es/input/TextArea";
import ImageDefault from "@/assets/svg/ImageDefault";
import { studioRoomService } from "@/services/studioRoomServices";
import { useRouter, useSearchParams } from "next/navigation";
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
export default function CreateRoom({ params }) {
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
  const topRef = React.useRef(null);
  const [targetOffset, setTargetOffset] = useState();
  const [messageApi, contextHolder] = message.useMessage();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const router = useRouter();
  useEffect(() => {
    setTargetOffset(topRef.current?.clientHeight);
  }, []);
  const listCheckBox = [
    {
      label: "Quạt",
      name: "HasFan",
      //   value: data.HasFan,
    },
    {
      label: "Máy lạnh",
      name: "HasAirConditioner",
      //   value: data.HasAirConditioner,
    },
    {
      label: "Phòng thay đồ",
      name: "HasDressingRoom",
      //   value: data.HasDressingRoom,
    },
    {
      label: "Nhà vệ sinh riêng",
      name: "HasWC",
      //   value: data.HasWC,
    },
    {
      label: "Camera an ninh",
      name: "HasCamera",
      //   value: data.HasCamera,
    },
    {
      label: "Wifi",
      name: "HasWifi",
      //   value: data.HasWifi,
    },
    {
      label: "Chỗ đậu xe máy",
      name: "HasMotorBikeParking",
      //   value: data.HasMotorBikeParking,
    },
    {
      label: "Chỗ đậu xe ô tô",
      name: "HasCarParking",
      //   value: data.HasCarParking,
    },
    {
      label: "Nhân viên hỗ trợ",
      name: "HasSupporter",
      //   value: data.HasSupporter,
    },
  ];
  const onChangeFile = ({ file }, b) => {
    const newFiles = [...files];
    file.preview = URL.createObjectURL(file.originFileObj);
    newFiles[b] = file;
    setFiles([...newFiles]);
  };
  const onFinish = async (values) => {
    console.log(values);
    let formData = new FormData();

    for (let [idex, file] of files.entries()) {
      formData.append(
        `Image${idex + 1}`,
        file !== null ? file.originFileObj : null
      );
      // dispatch(
      //   updateFormDataStudioPost(
      //     `Image${idex + 1}`,
      //     file !== null ? file.originFileObj : null
      //   )
      // );
    }
    for (let key in values) {
      formData.append(key, values[key]);
      // if (key == "addressDetail") {
      //   // formData.append("Address", values[key]);
      //   dispatch(
      //     updateFormDataStudioPost("Address", address.reverse().join(","))
      //   );
      // } else {
      //   // formData.append(key, values[key]);
      //   dispatch(updateFormDataStudioPost(key, values[key]));
      // }
    }
    try {
      const { data } = await studioRoomService.createRoom(category, formData);
      console.log("create", data);
      if (data.success) {
        form.resetFields();
        messageApi.open({
          type: "success",
          content: "Tạo thành công!",
        });
        router.push(
          `/manage/posts/${params.detail}/rooms?category=${category}`
        );
        // setLoadingBtn(false);
      }
    } catch (error) {
      console.log("error", error);
      messageApi.open({
        type: "error",
        content: error.response.data.message,
      });
      // setLoadingBtn(false);
    }
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    console.log("formDataObject", formDataObject);
  };
  return (
    <div className={classes.createRoom}>
      {contextHolder}
      <Row>
        <Col span={4}>
          {/* <div className={classes.tabs}>
            <span className={classes.active}>Thông tin phòng</span>
            <span>Hình ảnh / Video</span>
            <span>Chính sách</span>
          </div> */}
          <Anchor
            className="anchor-custom"
            targetOffset={targetOffset}
            items={[
              {
                key: "part-1",
                href: "#part-1",
                title: "Thông tin phòng",
              },
              {
                key: "part-2",
                href: "#part-2",
                title: "Hình ảnh / Video",
              },
              {
                key: "part-3",
                href: "#part-3",
                title: "Chính sách",
              },
            ]}
          />
        </Col>
        <Col span={20}>
          <Form
            layout={"vertical"}
            form={form}
            onFinish={onFinish}
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
              <div className={classes.container} id="part-1">
                <h3 className={classes.titleBig}>THÔNG TIN PHÒNG</h3>
                <Row gutter={40}>
                  <Col span={24}>
                    <Form.Item
                      label="Tên phòng"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                      name="Name"
                    >
                      <Input
                        size="large"
                        placeholder="Vd : Wisteria Premium "
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="Giá niêm yết (VND/giờ)"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                      name="PriceByHour"
                    >
                      <Input
                        size="large"
                        suffix="VND"
                        placeholder="Vd: 1.000.000"
                      />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="Giá niêm yết (VND/ngày)"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                      name="PriceByDate"
                    >
                      <Input
                        size="large"
                        suffix="VND"
                        placeholder="Vd: 1.000.000"
                      />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item
                      label="Diện tích"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                      name="Area"
                    >
                      <Input size="large" suffix="m2" placeholder="Vd: 50" />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item
                      label="Chiều dài "
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                      name="Length"
                    >
                      <Input size="large" suffix="m" placeholder="Vd: 50" />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item
                      label="Chiều rộng "
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                      name="Width"
                    >
                      <Input size="large" suffix="m" placeholder="Vd: 50" />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item
                      label="Chiều cao trần "
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                      name="Height"
                    >
                      <Input size="large" suffix="m" placeholder="Vd: 50" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="Số lượng khách tối đa"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                      name="MaximumCustomer"
                    >
                      <Input size="large" suffix="Người" placeholder="Vd: 20" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      label="Phụ thu phát sinh"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                      name="Surcharge"
                    >
                      <Input
                        size="large"
                        suffix="Người"
                        placeholder="Vd: 1.000.000"
                      />
                    </Form.Item>
                  </Col>

                  <Col span={24}>
                    <Form.Item
                      label="Mô tả"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                      name="Description"
                    >
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
                      <Form.Item
                        style={{ marginBottom: "8px" }}
                        name="HasBackground"
                        valuePropName="checked"
                        initialValue={null}
                        initialValue={null}
                      >
                        <Checkbox className={classes.checkBox}>
                          Phông nền
                        </Checkbox>
                      </Form.Item>
                      <Form.Item name="BackgroundDescription">
                        <Input size="large" placeholder="Ghi chú" />
                      </Form.Item>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div>
                      <Form.Item
                        style={{ marginBottom: "8px" }}
                        name="HasLamp"
                        valuePropName="checked"
                        initialValue={null}
                        initialValue={null}
                      >
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
                      <Form.Item
                        style={{ marginBottom: "8px" }}
                        name="HasTable"
                        valuePropName="checked"
                        initialValue={null}
                        initialValue={null}
                      >
                        <Checkbox className={classes.checkBox}>Bàn</Checkbox>
                      </Form.Item>
                      <Form.Item name="name">
                        <Input size="large" placeholder="Ghi chú" />
                      </Form.Item>
                    </div>
                  </Col>
                  <Col span={12}>
                    <div>
                      <Form.Item
                        style={{ marginBottom: "8px" }}
                        name="HasChair"
                        valuePropName="checked"
                        initialValue={null}
                      >
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
                      <Form.Item
                        style={{ marginBottom: "8px" }}
                        name="HasFlower"
                        valuePropName="checked"
                        initialValue={null}
                      >
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
                      <Form.Item
                        style={{ marginBottom: "8px" }}
                        name="HasOtherDevice"
                        valuePropName="checked"
                        initialValue={null}
                      >
                        <Checkbox className={classes.checkBox}>Khác</Checkbox>
                      </Form.Item>
                      <Form.Item name="OtherDeviceDescription">
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
                      <Form.Item
                        key={idx}
                        name={item.name}
                        valuePropName="checked"
                        initialValue={null}
                      >
                        <Checkbox className={classes.checkBox}>
                          {item.label}
                        </Checkbox>
                      </Form.Item>
                    </Col>
                  ))}
                </Row>
              </div>
              <div className={classes.container} id="part-2">
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
              <div
                className={classes.container}
                id="part-3"
                style={{
                  height: "90vh",
                }}
              >
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
                htmlType="submit"
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
