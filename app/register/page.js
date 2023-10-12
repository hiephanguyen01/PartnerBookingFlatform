"use client";

import LogoHeaderIcon from "@/assets/svg/LogoHeaderIcon";
import { getCurrentUser2, register } from "@/store/action/userAction";
import { uploadImage } from "@/utils/uploadImage";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  Radio,
  Row,
  Select,
  Upload,
  message,
} from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./register.module.scss";
import { bankService } from "@/services/BankService";

const Register = () => {
  const [form, setForm] = useState(1);
  const [bankList, setBankList] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [imageRes1, setImageRes1] = useState(null);
  const [imageRes2, setImageRes2] = useState(null);
  const [imageRes3, setImageRes3] = useState(null);
  const [imageRes4, setImageRes4] = useState(null);
  const [imageUrl1, setImageUrl1] = useState();
  const [imageUrl2, setImageUrl2] = useState();
  const [imageUrl3, setImageUrl3] = useState();
  const [imageUrl4, setImageUrl4] = useState();
  const router = useRouter();
  const dispatch = useDispatch();
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };
  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };
  const dummyRequest = async ({ onSuccess }) => {
    setTimeout(() => {
      onSuccess("ok");
    }, 2000);
  };
  const handleChange = async (info, id) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }

    if (info.file.status === "error") {
      setLoading(false);
      return;
    }
    if (info.file.status === "done" && id === 1) {
      const res = await uploadImage(info.file.originFileObj);
      setImageRes1(res.cdnUrl);
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl1(url);
      });
    }
    if (info.file.status === "done" && id === 2) {
      const res = await uploadImage(info.file.originFileObj);
      setImageRes2(res.cdnUrl);
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl2(url);
      });
    }
    if (info.file.status === "done" && id === 3) {
      const res = await uploadImage(info.file.originFileObj);
      setImageRes3(res.cdnUrl);
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl3(url);
      });
    }
    if (info.file.status === "done" && id === 4) {
      const res = await uploadImage(info.file.originFileObj);
      setImageRes4(res.cdnUrl);
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl4(url);
      });
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  const onFinish = async (values) => {
    setLoading(true);
    let newData;
    if (form === 1) {
      if (!(imageRes1 && imageRes2)) {
        return message.error("Please choose an image!");
      }
      if (!(imageRes3 && imageRes4)) {
        return message.error("Please choose an image!");
      }
      console.log(
        bankList.find((val) => val.value === values.BankBranchName).label
      );
      newData = {
        ...values,
        BusinessType: "Tổ chức",
        BankBranchName: bankList.find(
          (val) => val.value === values.BankBranchName
        ).label,
        BankId: values.BankBranchName,
        ImageGPKD1: imageRes1,
        ImageGPKD2: imageRes2,
        ImageCCCD1: imageRes3,
        ImageCCCD2: imageRes4,
      };
    } else {
      // if (!(imageRes3 && imageRes4)) {
      //   return message.error("Please choose an image!");
      // }
      newData = {
        ...values,
        BusinessType: "Cá nhân",
        BankBranchName: bankList.find(
          (val) => val.value === values.BankBranchName
        ).label,
        BankId: values.BankBranchName,
        ImageCCCD1: imageRes3,
        ImageCCCD2: imageRes4,
      };
    }
    try {
      dispatch(register(newData, router));
      message.success("Vui lòng kiểm tra mail");
    } catch (error) {
      message.error("Vui lòng thử lại sau");
    }
    setLoading(false);
  };

  useEffect(() => {
    (async () => {
      const { data } = await bankService.getAllBank();
      setBankList(
        data.data.map((val) => ({ value: val.id, label: val.VNName }))
      );
    })();
  }, []);

  return (
    <div className={styles.register}>
      <div className={styles.container}>
        <LogoHeaderIcon />
        <div className={styles.box}>
          <p className={styles.title}>ĐĂNG KÝ TRỞ THÀNH ĐỐI TÁC</p>
          <p className={styles.head}>Đối tượng kinh doanh</p>
          <Radio.Group
            style={{ margin: "16px 0" }}
            onChange={(e) => {
              setForm(e.target.value);
              setConfirm(false);
            }}
            value={form}
          >
            <Radio value={1}>Tổ chức</Radio>
            <Radio value={2}>Cá nhân</Radio>
          </Radio.Group>
          {form === 1 ? (
            <Form
              disabled={loading}
              name="basic"
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 24,
              }}
              onFinish={onFinish}
            >
              <Row gutter={[24, 24]}>
                <Col md={12} sm={24} xs={24}>
                  <Form.Item
                    label="Địa chỉ email"
                    name="Email"
                    rules={[
                      {
                        type: "email",
                        required: true,
                        message: "Vui lòng nhập email!",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                  <Form.Item
                    label="Tên doanh nghiệp"
                    name="CompanyName"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập tên doanh nghiệp!",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                  <Form.Item
                    label="Số GPKD"
                    name="BusinessRegistrationLicenseNumber"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập số GPKD!",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                  <Form.Item
                    label="Tên người đại diện"
                    name="RepresentativeName"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập tên người đại diện!",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                  <Form.Item
                    label="Số CMND/CCCD"
                    name="PersonalIdentity"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập số CMND/CCCD!",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                  <Form.Item
                    label="Địa chỉ liên hệ"
                    name="Address"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập địa chỉ liên hệ!",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                  <Form.Item
                    label="Ngân hàng"
                    name="BankBranchName"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng chọn ngân hàng!",
                      },
                    ]}
                  >
                    <Select
                      size="large"
                      showSearch
                      placeholder="Chọn ngân hàng"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        (option?.label ?? "").includes(input)
                      }
                      filterSort={(optionA, optionB) =>
                        (optionA?.label ?? "")
                          .toLowerCase()
                          .localeCompare((optionB?.label ?? "").toLowerCase())
                      }
                      options={bankList}
                    />
                  </Form.Item>
                  <p className={styles.sub}>
                    Bằng việc nhấn vào nút đăng ký, anh/chị đồng ý rằng Booking
                    Studio có thể thu thập, sử dụng và tiết lộ thông tin do
                    anh/chị cung cấp, thay mặt cho công ty đăng ký. Theo Phụ lục
                    1: NGUYÊN TẮC QUYỀN RIÊNG TƯ DỮ LIỆU VÀ NHẮN TIN trong{" "}
                    <span>Hợp đồng đối tác</span>
                  </p>
                  <Checkbox
                    style={{ marginTop: "16px" }}
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.checked)}
                  >
                    <p className={styles.sub}>
                      Tôi đồng ý với <span>Hợp đồng đối tác</span> của Booking
                      Studio
                    </p>
                  </Checkbox>
                </Col>
                <Col md={12} sm={24} xs={24}>
                  <Form.Item
                    label="Tên đối tác"
                    name="PartnerName"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập email!",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>

                  <Row gutter={[24, 0]}>
                    <Col md={12} sm={24} xs={24}>
                      <Form.Item
                        label="Mặt trước GPKD"
                        name="ImageGPKD1"
                        className="big"
                        required={true}
                      >
                        <Upload
                          className="image-post-uploader"
                          listType="picture-card"
                          showUploadList={false}
                          onChange={(e) => handleChange(e, 1)}
                          customRequest={dummyRequest}
                        >
                          {imageUrl1 ? (
                            <img
                              src={imageUrl1}
                              alt="avatar"
                              style={{
                                width: "100%",
                              }}
                            />
                          ) : (
                            uploadButton
                          )}
                        </Upload>
                      </Form.Item>
                    </Col>
                    <Col md={12} sm={24} xs={24}>
                      <Form.Item
                        label="Mặt sau GPKD"
                        name="ImageGPKD2"
                        className="big"
                        required={true}
                      >
                        <Upload
                          className="image-post-uploader"
                          listType="picture-card"
                          showUploadList={false}
                          onChange={(e) => handleChange(e, 2)}
                          customRequest={dummyRequest}
                        >
                          {imageUrl2 ? (
                            <img
                              src={imageUrl2}
                              alt="avatar"
                              style={{
                                width: "100%",
                              }}
                            />
                          ) : (
                            uploadButton
                          )}
                        </Upload>
                      </Form.Item>
                    </Col>
                    <Col md={12} sm={24} xs={24}>
                      <Form.Item
                        label="Mặt trước CMND/CCCD"
                        name="ImageCCCD1"
                        className="big"
                        required={true}
                      >
                        <Upload
                          className="image-post-uploader"
                          listType="picture-card"
                          showUploadList={false}
                          onChange={(e) => handleChange(e, 3)}
                          customRequest={dummyRequest}
                        >
                          {imageUrl3 ? (
                            <img
                              src={imageUrl3}
                              alt="avatar"
                              style={{
                                width: "100%",
                              }}
                            />
                          ) : (
                            uploadButton
                          )}
                        </Upload>
                      </Form.Item>
                    </Col>
                    <Col md={12} sm={24} xs={24}>
                      <Form.Item
                        label="Mặt sau CMND/CCCD"
                        name="ImageCCCD2"
                        className="big"
                        required={true}
                      >
                        <Upload
                          className="image-post-uploader"
                          listType="picture-card"
                          showUploadList={false}
                          onChange={(e) => handleChange(e, 4)}
                          customRequest={dummyRequest}
                        >
                          {imageUrl4 ? (
                            <img
                              src={imageUrl4}
                              alt="avatar"
                              style={{
                                width: "100%",
                              }}
                            />
                          ) : (
                            uploadButton
                          )}
                        </Upload>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Form.Item
                    label="Số điện thoại"
                    name="Phone"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập số điện thoại!",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                  <Form.Item
                    label="Tài khoản ngân hàng"
                    name="BankAccount"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập tài khoản ngân hàng!",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item style={{ textAlign: "center", marginTop: "40px" }}>
                <Button
                  disabled={!confirm}
                  size="large"
                  style={{ width: "389px" }}
                  type="primary"
                  htmlType="submit"
                >
                  Đăng ký
                </Button>
              </Form.Item>
            </Form>
          ) : (
            <Form
              name="basic"
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 24,
              }}
              onFinish={onFinish}
            >
              <Row gutter={[24, 24]}>
                <Col md={12} sm={24} xs={24}>
                  <Form.Item
                    label="Địa chỉ email"
                    name="Email"
                    rules={[
                      {
                        type: "email",
                        required: true,
                        message: "Vui lòng nhập email!",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                  <Form.Item
                    label="Tên người đại diện"
                    name="RepresentativeName"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập tên người đại diện!",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                  <Form.Item
                    label="Số CMND/CCCD"
                    name="PersonalIdentity"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập số CMND/CCCD!",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                  <Form.Item
                    label="Địa chỉ liên hệ"
                    name="Address"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập địa chỉ liên hệ!",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                  <Form.Item
                    label="Ngân hàng"
                    name="BankBranchName"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng chọn ngân hàng!",
                      },
                    ]}
                  >
                    <Select
                      size="large"
                      showSearch
                      placeholder="Chọn ngân hàng"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        (option?.label ?? "").includes(input)
                      }
                      filterSort={(optionA, optionB) =>
                        (optionA?.label ?? "")
                          .toLowerCase()
                          .localeCompare((optionB?.label ?? "").toLowerCase())
                      }
                      options={bankList}
                    />
                  </Form.Item>
                  <p className={styles.sub}>
                    Bằng việc nhấn vào nút đăng ký, anh/chị đồng ý rằng Booking
                    Studio có thể thu thập, sử dụng và tiết lộ thông tin do
                    anh/chị cung cấp, thay mặt cho công ty đăng ký. Theo Phụ lục
                    1: NGUYÊN TẮC QUYỀN RIÊNG TƯ DỮ LIỆU VÀ NHẮN TIN trong{" "}
                    <span>Hợp đồng đối tác</span>
                  </p>
                  <Checkbox
                    style={{ marginTop: "16px" }}
                    value={confirm}
                    onChange={(e) => setConfirm(e.target.checked)}
                  >
                    <p className={styles.sub}>
                      Tôi đồng ý với <span>Hợp đồng đối tác</span> của Booking
                      Studio
                    </p>
                  </Checkbox>
                </Col>
                <Col md={12} sm={24} xs={24}>
                  <Form.Item
                    label="Tên đối tác"
                    name="PartnerName"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập email!",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>

                  <Row gutter={[24, 0]}>
                    <Col md={12} sm={24} xs={24}>
                      <Form.Item
                        label="Mặt trước CMND/CCCD"
                        name="ImageCCCD1"
                        className="big"
                        required={true}
                      >
                        <Upload
                          className="image-post-uploader"
                          listType="picture-card"
                          showUploadList={false}
                          onChange={(e) => handleChange(e, 3)}
                          customRequest={dummyRequest}
                        >
                          {imageUrl3 ? (
                            <img
                              src={imageUrl3}
                              alt="avatar"
                              style={{
                                width: "100%",
                              }}
                            />
                          ) : (
                            uploadButton
                          )}
                        </Upload>
                      </Form.Item>
                    </Col>
                    <Col md={12} sm={24} xs={24}>
                      <Form.Item
                        label="Mặt sau CMND/CCCD"
                        name="ImageCCCD2"
                        className="big"
                        required={true}
                      >
                        <Upload
                          className="image-post-uploader"
                          listType="picture-card"
                          showUploadList={false}
                          onChange={(e) => handleChange(e, 4)}
                          customRequest={dummyRequest}
                        >
                          {imageUrl4 ? (
                            <img
                              src={imageUrl4}
                              alt="avatar"
                              style={{
                                width: "100%",
                              }}
                            />
                          ) : (
                            uploadButton
                          )}
                        </Upload>
                      </Form.Item>
                    </Col>
                  </Row>
                  <Form.Item
                    label="Số điện thoại"
                    name="Phone"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập số điện thoại!",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                  <Form.Item
                    label="Tài khoản ngân hàng"
                    name="BankAccount"
                    rules={[
                      {
                        required: true,
                        message: "Vui lòng nhập tài khoản ngân hàng!",
                      },
                    ]}
                  >
                    <Input size="large" />
                  </Form.Item>
                </Col>
              </Row>

              <Form.Item style={{ textAlign: "center", marginTop: "40px" }}>
                <Button
                  disabled={!confirm}
                  size="large"
                  style={{ width: "389px" }}
                  type="primary"
                  htmlType="submit"
                >
                  Đăng ký
                </Button>
              </Form.Item>
            </Form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
