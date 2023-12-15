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

const NotPresent = () => {
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
        VẮNG MẶT
      </p>
      <Form layout="vertical">
        <Row gutter={16}>
          <Col span={24}>
            <p style={{ margin: "16px 0" }}>Chính sách vắng mặt áp dụng</p>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item label="Phí vắng mặt" name="absenceFeePercentage">
              <Input addonAfter="% đặt cọc" defaultValue="100" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Phí vắng mặt (thành tiền)" name="absenceFee">
              <Input addonAfter="VND" defaultValue="1.000.000" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default NotPresent;
