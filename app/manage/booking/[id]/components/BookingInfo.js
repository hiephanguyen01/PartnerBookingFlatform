import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  DatePicker,
  Select,
  Row,
  Col,
  Collapse,
} from "antd";

const { Panel } = Collapse;
const { Option } = Select;

const BookingInfo = () => {
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
        THÔNG TIN ĐƠN
      </p>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item name="orderCode" label="Mã đơn đặt">
              <Input placeholder="OSTS-1234567" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="postCode" label="Mã bài đăng">
              <Input placeholder="S123456789" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item name="roomType" label="Phòng đặt">
              <Select placeholder="Phòng Premium phòng cách tân cổ điển">
                <Option value="premium">
                  Phòng Premium phòng cách tân cổ điển
                </Option>
                {/* Add other room types if necessary */}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="appointmentDate" label="Ngày thực hiện">
              <DatePicker
                showTime
                format="DD/MM/YYYY HH:mm"
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item name="appointmentDate" label="Trạng thái">
              <Input placeholder="S123456789" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="totalAmount" label="Tổng tiền">
              <Input addonAfter="VND" />
            </Form.Item>
          </Col>
          <Col span={12}></Col>
          <Col span={12} style={{ paddingBottom: "24px" }}>
            <Collapse bordered={false} onChange={onPromotionToggle}>
              <Panel header="Khuyến Mãi" key="1">
                <Row gutter={24}>
                  <Col span={24}>
                    <Form.Item name="discountAmount" label="Số tiền khuyến mãi">
                      <Input addonAfter="VND" />
                    </Form.Item>
                  </Col>
                  <Col span={24}>
                    <Form.Item name="promoCode" label="Mã khuyến mãi">
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
              </Panel>
            </Collapse>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item name="customerID" label="Số định danh khách hàng">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="customerName" label="Tên khách hàng">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item name="phoneNumber" label="Số điện thoại">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="email" label="Email">
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default BookingInfo;
