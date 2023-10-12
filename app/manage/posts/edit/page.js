"use client";
import {
  Button,
  Col,
  Form,
  Image,
  Input,
  Row,
  Select,
  Upload,
  message,
} from "antd";
const { Option } = Select;
import classes from "./edit.module.scss";
import TextArea from "antd/es/input/TextArea";
import ImageDefault from "@/assets/svg/ImageDefault";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { studioPostService } from "@/services/studioPostService";
import { wardService } from "@/services/WardService";
import { provinceService } from "@/services/ProvinceService";
import { districtService } from "@/services/DistrictService";

const listInfoImage = [
  {
    title: "Ảnh đại diện",
    id: 0,
    Name: "Image1",
  },
  {
    title: "Ảnh 1",
    id: 1,
    Name: "Image2",
  },
  {
    title: "Ảnh 2",
    id: 2,
    Name: "Image3",
  },
  {
    title: "Ảnh 3",
    id: 3,
    Name: "Image4",
  },
  {
    title: "Ảnh 4",
    id: 4,
    Name: "Image5",
  },
  {
    title: "Ảnh 5",
    id: 5,
    Name: "Image6",
  },
  {
    title: "Ảnh 6",
    id: 6,
    Name: "Image7",
  },
  {
    title: "Ảnh 7",
    id: 7,
    Name: "Image8",
  },
  {
    title: "Ảnh 8",
    id: 8,
    Name: "Image9",
  },
  {
    title: "Ảnh 9",
    id: 9,
    Name: "Image10",
  },
];
export default function EditPost() {
  const [form] = Form.useForm();
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
  const [dataDetail, setDataDetail] = useState({});
  const [listProvinces, setListProvinces] = useState([]);
  const [listWards, setListWards] = useState([]);
  const [listDistricts, setListDistricts] = useState([]);
  const [address, setAddress] = useState([]);
  const [inputAddress, setInputAddress] = useState("");

  const [messageApi, contextHolder] = message.useMessage();

  const searchParams = useSearchParams();
  console.log(dataDetail);
  const category = searchParams.get("category");
  const id = searchParams.get("id");

  const onChangeSelect = async (e, idx) => {
    console.log(e, idx);
    if (idx == 0) {
      const { Code } = listProvinces.find((item) => item.Name == e);
      await extractAllDistricts(Code);
    }
    if (idx == 1) {
      const { Code } = listDistricts.find((item) => item.Name == e);
      await extractAllWards(Code);
    }
    if (idx == 0) {
      setInputAddress("");
      setAddress((prev) => {
        let arr = ["", "", "", ""];
        arr[idx] = e.toString().trim();
        return arr;
      });
    } else {
      setAddress((prev) => {
        let arr = prev;
        arr[idx] = e.toString().trim();
        return arr;
      });
    }

    console.log(address);
  };
  const onFinish = async (values) => {
    let formData = new FormData();
    formData.append("Address", address.reverse().join(","));
    for (let [idex, file] of files.entries()) {
      formData.append(
        `Image${idex + 1}`,
        file !== null ? file.originFileObj : null
      );
    }
    for (let key in values) {
      formData.append(key, values[key]);
    }
    // console.log("Success:", formData);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    console.log(formDataObject);

    try {
      const { data } = await studioPostService.updatePostPartner(
        id,
        category,
        formData
      );
      if (data.success) {
        getPostPartnerByid();
        messageApi.open({
          type: "success",
          content: "Đã cập nhật thông tin",
        });
      } else {
        getPostPartnerByid();
        messageApi.open({
          type: "error",
          content: "Wrong something!",
        });
      }
      console.log(data);
    } catch (error) {
      console.log(error);
      messageApi.open({
        type: "error",
        content: "Wrong something!",
      });
    }
  };
  const onChangeFile = ({ file }, b) => {
    const newFiles = [...files];
    file.preview = URL.createObjectURL(file.originFileObj);
    newFiles[b] = file;
    setFiles([...newFiles]);
  };
  async function getPostPartnerByid() {
    try {
      const { data } = await studioPostService.getDetailPostPartnerById(
        id,
        category
      );
      setDataDetail(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function extractAllDistricts(code) {
    try {
      const { data } = await districtService.getAllDistrict(code);
      setListDistricts(data);
    } catch (error) {
      console.log(error);
    }
  }
  async function extractAllWards(code) {
    try {
      const { data } = await wardService.getAllWards(code);
      setListWards(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function extractAllProvinces() {
    try {
      const { data } = await provinceService.getAllProvince();
      setListProvinces(data);
    } catch (error) {
      console.log(error);
    }
  }

  const initialValues = {
    id: dataDetail.id,
    Name: dataDetail?.Name,
    IsVisible: dataDetail?.IsVisible,
    BookingCount: dataDetail?.BookingCount,
    Description: dataDetail?.Description,
    // WardId: dataDetail?.Address?.split(",")[1],
    // ProvinceId: dataDetail?.Address?.split(",")[3],
    // DistrictId: dataDetail?.Address?.split(",")[2],
    addressDetail: dataDetail?.Address?.split(",")[0],
  };
  useEffect(() => {
    form.setFieldsValue(initialValues);
  }, [form, initialValues]);

  useEffect(() => {
    getPostPartnerByid();
    extractAllProvinces();
  }, [id, category]);

  useEffect(() => {
    extractAllDistricts(dataDetail?.DistrictId);
    extractAllWards(dataDetail?.WardId);
    setAddress([
      dataDetail?.Address?.split(",")[3],
      dataDetail?.Address?.split(",")[2],
      dataDetail?.Address?.split(",")[1],
      dataDetail?.Address?.split(",")[0],
    ]);
    setInputAddress(dataDetail?.Address?.split(",")[0]);
  }, [dataDetail]);
  console.log("address", dataDetail?.Address?.split(","));
  return (
    <div>
      {contextHolder}
      <Form
        layout={"vertical"}
        form={form}
        onFinish={onFinish}
        autoComplete="off"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div className={classes.container}>
            <Row gutter={40}>
              <Col span={12}>
                <Form.Item name="id" label="Mã bài đăng">
                  <Input size="large" disabled />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Trạng thái" name="IsVisible">
                  <Select size="large">
                    <Option value={true}>Mở / Có thể đặt</Option>
                    <Option value={false}>Đóng / Không thể đặt</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}></Col>
            </Row>
          </div>
          <div className={classes.container}>
            <Row gutter={40}>
              <Col span={12}>
                <Form.Item label="Tên Studio / Tên bài đăng" name="Name">
                  <Input size="large" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Số đơn đặt" name="BookingCount">
                  <Input size="large" disabled />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Tinh / thành phố">
                  <Select
                    value={address[0]}
                    onChange={(e) => onChangeSelect(e, 0)}
                    size="large"
                  >
                    <Option value="">--- Chọn ---</Option>
                    {listProvinces.map((item) => (
                      <Option key={item.Id} value={item.Name}>
                        {item.Name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Quận / huyện">
                  <Select
                    value={address[1]}
                    onChange={(e) => onChangeSelect(e, 1)}
                    size="large"
                  >
                    <Option value="">--- Chọn ---</Option>
                    {listDistricts.map((item) => (
                      <Option key={item.Id} value={item.Name}>
                        {item.Name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Phường / xã">
                  <Select
                    onChange={(e) => onChangeSelect(e, 2)}
                    size="large"
                    value={address[2] && address[2]}
                  >
                    <Option value="">--- Chọn ---</Option>
                    {listWards.map((item) => (
                      <Option key={item.id} value={item.Name}>
                        {item.Name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="Địa chỉ cụ thể">
                  <Input
                    value={inputAddress}
                    onChange={(e) => {
                      console.log("change", e.target.value);
                      setAddress((prev) => {
                        let arr = prev;
                        arr[3] = e.target.value;
                        return arr;
                      });
                      setInputAddress(e.target.value);
                      console.log(address);
                    }}
                    size="large"
                  />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item label="Giới thiệu" name="Description">
                  <TextArea
                    //   onChange={(e) => setValueText(e.target.value)}
                    autoSize={{ minRows: 5, maxRows: 7 }}
                  />
                </Form.Item>
              </Col>
            </Row>
          </div>
          <div className={classes.container}>
            <span className={classes.titleSmall}>Ảnh đại diện</span>
            <p>Kích thước khuyến nghị: 1200 x 830 px</p>
            <div className={classes.listImage}>
              {listInfoImage.map((item, idx) => (
                <div className={classes.itemImage}>
                  <Upload
                    listType="picture-card"
                    className={"avatar-uploader1"}
                    showUploadList={false}
                    onRemove={true}
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    onChange={(e) => onChangeFile(e, item.id)}
                  >
                    {
                      <div className={classes.imageDefault}>
                        {files[item.id] === null ? (
                          dataDetail[item.Name] ? (
                            <Image
                              width={"100%"}
                              height={"100%"}
                              style={{ objectFit: "cover" }}
                              preview={false}
                              src={`${process.env.BASE_URL_IMAGE}/${
                                dataDetail[item.Name]
                              }`}
                              //   fallback={fallBackImg}
                            />
                          ) : (
                            <ImageDefault />
                          )
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
                    }
                  </Upload>
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ textAlign: "right", marginTop: "14px" }}>
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
              Lưu thay đổi
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}
