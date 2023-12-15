import { Checkbox, Col, Divider, Form, Input, InputNumber, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";

const BookingRoom = () => {
  const [form] = Form.useForm();
  const [isPromotionCollapsed, setIsPromotionCollapsed] = useState(false);

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const onPromotionToggle = () => {
    setIsPromotionCollapsed(!isPromotionCollapsed);
  };

  return (
    <div style={{ padding: "24px", backgroundColor: "#fff" }}>
      <p style={{ fontSize: "18px", fontWeight: "700", marginBottom: "24px" }}>
        THÔNG TIN PHÒNG
      </p>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <img
              src="https://picsum.photos/480/270"
              alt="Room Display"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                marginBottom: "24px",
              }}
            />
          </Col>
          <Col span={16}>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <Form.Item name="roomName" label="Tên phòng">
                  <Input placeholder="Phòng Premium phong cách tân cổ điển" />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name="area" label="Diện tích">
                  <InputNumber
                    min={1}
                    placeholder="50"
                    addonAfter="m²"
                    style={{ width: "100%" }}
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name="length" label="Chiều dài">
                  <InputNumber
                    min={1}
                    placeholder="10"
                    addonAfter="m"
                    style={{ width: "100%" }}
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name="width" label="Chiều rộng">
                  <InputNumber
                    min={1}
                    placeholder="5"
                    addonAfter="m"
                    style={{ width: "100%" }}
                  />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item name="height" label="Chiều cao trần">
                  <InputNumber
                    min={1}
                    placeholder="4.5"
                    addonAfter="m"
                    style={{ width: "100%" }}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item name="maxGuests" label="Số lượng khách tối đa">
              <InputNumber min={1} placeholder="20" style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="additionalCost" label="Phụ thu phát sinh">
              <InputNumber
                min={0}
                placeholder="200.000"
                addonAfter="Người"
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item name="description" label="Mô tả">
              <TextArea rows={4} placeholder="Mô tả thông tin phòng" />
            </Form.Item>
          </Col>
          <Divider dashed />
          <Col span={24}>
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <p style={{ fontWeight: "600", fontSize: "18px" }}>
                  Thiết bị có sẵn
                </p>
              </Col>
              <Col span={12}>
                <Form.Item name="backgroundRoom" valuePropName="checked">
                  <Checkbox>Phòng nền</Checkbox>
                </Form.Item>
                <Form.Item name="lightingDetails">
                  <Input placeholder="Phòng xanh lá" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="lightingSystem" valuePropName="checked">
                  <Checkbox>Hệ thống đèn</Checkbox>
                </Form.Item>
                <Form.Item name="lightingDetails">
                  <Input placeholder="reflector, strobe,..." />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="table" valuePropName="checked">
                  <Checkbox>Bàn</Checkbox>
                </Form.Item>
                <Form.Item name="tables">
                  <Input placeholder="Ghi chú" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="chair" valuePropName="checked">
                  <Checkbox>Ghế, Sofa</Checkbox>
                </Form.Item>
                <Form.Item name="chairs">
                  <Input placeholder="Ghi chú" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="flower" valuePropName="checked">
                  <Checkbox>Hoa trang trí</Checkbox>
                </Form.Item>
                <Form.Item name="flowers">
                  <Input placeholder="Ghi chú" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="other" valuePropName="checked">
                  <Checkbox>Khác</Checkbox>
                </Form.Item>
                <Form.Item name="others">
                  <Input placeholder="Ghi chú" />
                </Form.Item>
              </Col>
            </Row>
            <Divider dashed />
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <p style={{ fontWeight: "600", fontSize: "18px" }}>
                  Tiện ích đi kèm
                </p>
              </Col>
              <Col span={8}>
                <Form.Item name="airConditioning" valuePropName="checked">
                  <Checkbox>Máy lạnh</Checkbox>
                </Form.Item>
                <Form.Item name="fan" valuePropName="checked">
                  <Checkbox>Quạt</Checkbox>
                </Form.Item>
                <Form.Item name="privateClothingRoom" valuePropName="checked">
                  <Checkbox>Phòng thay đồ riêng</Checkbox>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="securityCamera" valuePropName="checked">
                  <Checkbox>Camera an ninh</Checkbox>
                </Form.Item>
                <Form.Item name="restRoom" valuePropName="checked">
                  <Checkbox>Nhà vệ sinh</Checkbox>
                </Form.Item>
                <Form.Item name="supporter" valuePropName="checked">
                  <Checkbox>Nhân viên hỗ trợ</Checkbox>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item name="motoParking" valuePropName="checked">
                  <Checkbox>Chỗ đậu xe máy</Checkbox>
                </Form.Item>
                <Form.Item name="carParking" valuePropName="checked">
                  <Checkbox>Chỗ đậu ô tô</Checkbox>
                </Form.Item>
                <Form.Item name="openTime" valuePropName="checked">
                  <Checkbox>Mở cửa 24/7</Checkbox>
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default BookingRoom;
