"use client";
import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Form,
  Image,
  Input,
  Radio,
  Row,
  Select,
  Upload,
} from "antd";
import classes from "./info.module.scss";
import ImageDefault from "@/assets/svg/ImageDefault";
import { provinceService } from "@/services/ProvinceService";
import { districtService } from "@/services/DistrictService";
import { wardService } from "@/services/WardService";
import { updateFormDataStudioPost } from "@/store/action/studioPostAction";
import { useDispatch, useSelector } from "react-redux";
const { Option } = Select;
const { TextArea } = Input;
const listInfoImage = [
  {
    title: "Ảnh đại diện",
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
export default function InfoGeneral({ next }) {
  const [form] = Form.useForm();

  const values = Form.useWatch([], form);
  const [listProvinces, setListProvinces] = useState([]);
  const [listWards, setListWards] = useState([]);
  const [listDistricts, setListDistricts] = useState([]);
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
  const [submittable, setSubmittable] = React.useState(false);
  const [valueText, setValueText] = useState("");
  const [address, setAddress] = useState([]);
  const { formData } = useSelector((state) => state.studioPostReducer);

  const dispatch = useDispatch();

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
    setAddress((prev) => {
      let arr = prev;
      arr[idx] = e;
      return arr;
    });
    console.log(address);
  };

  const onFinish = (values) => {
    // let formData = new FormData();
    for (let [idex, file] of files.entries()) {
      // formData.append(
      //   `Image${idex}`,
      //   file !== null ? file.originFileObj : null
      // );
      dispatch(
        updateFormDataStudioPost(
          `Image${idex + 1}`,
          file !== null ? file.originFileObj : null
        )
      );
    }
    for (let key in values) {
      if (key == "addressDetail") {
        // formData.append("Address", values[key]);
        dispatch(
          updateFormDataStudioPost("Address", address.reverse().join(","))
        );
      } else {
        // formData.append(key, values[key]);
        dispatch(updateFormDataStudioPost(key, values[key]));
      }
    }
    // console.log("Success:", formData);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    console.log(formDataObject);
    next();
  };
  const onChangeFile = ({ file }, b) => {
    const newFiles = [...files];
    file.preview = URL.createObjectURL(file.originFileObj);
    newFiles[b] = file;
    setFiles([...newFiles]);
  };

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
  useEffect(() => {
    extractAllProvinces();
  }, []);

  useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(
        () => {
          setSubmittable(true);
        },
        () => {
          setSubmittable(false);
        }
      );
  }, [values]);
  const selectValidator = (_, value) => {
    if (!value) {
      return Promise.reject("Please select an option");
    }
    return Promise.resolve();
  };
  return (
    <Form
      layout={"vertical"}
      form={form}
      onFinish={onFinish}
      // onChange={(value) => console.log(value)}
      autoComplete="off"
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div className={classes.container}>
          <Form.Item
            rules={[
              {
                required: true,
              },
            ]}
            label="Tên Studio / Tên bài đăng"
            name="Name"
          >
            <Input size="large" placeholder="Nhập..." />
          </Form.Item>
          <Row gutter={24}>
            <Col xs={24} sm={12}>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please select an option",
                  },
                ]}
                name="ProvinceId"
                label="Tinh / thành phố"
              >
                <Select
                  onChange={(e) => onChangeSelect(e, 0)}
                  size="large"
                  defaultValue={""}
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
            <Col xs={24} sm={12}>
              <Form.Item
                label="Quận / huyện"
                rules={[
                  {
                    required: true,
                    message: "Please select an option",
                  },
                ]}
                name="DistrictId"
              >
                <Select
                  onChange={(e) => onChangeSelect(e, 1)}
                  size="large"
                  defaultValue={""}
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
            <Col xs={24} sm={12}>
              <Form.Item
                label="Phường / xã"
                rules={[
                  {
                    required: true,
                    message: "Please select an option",
                  },
                ]}
                name="WardId"
              >
                <Select
                  onChange={(e) => onChangeSelect(e, 2)}
                  size="large"
                  defaultValue={""}
                >
                  <Option value="">--- Chọn ---</Option>
                  {listWards.map((item) => (
                    <Option key={item.Id} value={item.Name}>
                      {item.Name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12}>
              <Form.Item
                rules={[
                  {
                    required: true,
                  },
                ]}
                label="Địa chỉ cụ thể"
                name="addressDetail"
              >
                <Input
                  onChange={(e) =>
                    setAddress((prev) => {
                      let arr = prev;
                      arr[3] = e.target.value;
                      return arr;
                    })
                  }
                  size="large"
                  placeholder="Vd : 20 Điện Biên Phủ"
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            rules={[
              {
                required: true,
              },
            ]}
            label="Giới thiệu"
            name={"Description"}
          >
            <TextArea
              value={valueText}
              onChange={(e) => setValueText(e.target.value)}
              placeholder="Nhập..."
              autoSize={{ minRows: 5, maxRows: 7 }}
            />
          </Form.Item>
          {/* <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item> */}
          {/* </Form> */}
        </div>
        <div className={classes.container}>
          <span className={classes.titleSmall}>Ảnh đại diện</span>
          <p>Kích thước khuyến nghị: 1200 x 830 px</p>
          <div className={classes.listImage}>
            {listInfoImage.map((item, idx) => (
              <div key={idx} className={classes.itemImage}>
                <Upload
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
                          files[item.id] === null ? "" : files[item.id]?.preview
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
        </div>
        <div style={{ textAlign: "right" }}>
          <Button
            style={{ width: "150px" }}
            size="large"
            htmlType="submit"
            type="primary"
            disabled={!submittable}
          >
            Tiếp tục
          </Button>
        </div>
      </div>
    </Form>
  );
}
