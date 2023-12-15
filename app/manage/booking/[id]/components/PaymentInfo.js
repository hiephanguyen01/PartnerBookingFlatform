import {
  Checkbox,
  Col,
  Divider,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
} from "antd";
import { useState } from "react";
const { Option } = Select;

const PaymentInfo = () => {
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
        THANH TOÁN
      </p>
      <Form layout="vertical">
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Đặt cọc - Thanh toán trước"
              name="prepaymentPercentage"
            >
              <InputNumber
                min={0}
                max={100}
                formatter={(value) => `${value}%`}
                parser={(value) => value.replace("%", "")}
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Tiền thanh toán trước (đặt cọc)"
              name="prepaymentAmount"
            >
              <Input addonAfter="VND" style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Hình thức thanh toán" name="paymentMethod">
              <Select defaultValue="online">
                <Option value="online">Online</Option>
                <Option value="transfer">Chuyển khoản</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Phương thức thanh toán" name="paymentMethodType">
              <Select defaultValue="bankTransfer">
                <Option value="bankTransfer">Chuyển khoản</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Trạng thái thanh toán" name="paymentStatus">
              <Input placeholder="Đã thanh toán" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default PaymentInfo;
