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

const BookingCancel = () => {
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
        HUỶ ĐƠN
      </p>
      <Form layout="vertical">
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item label="Ngày hủy" name="cancellationDate">
              <Input placeholder="Null" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Lý do hủy đơn" name="cancellationReason">
              <Input placeholder="Null" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item
              label="Số tài khoản nhận hoàn tiền"
              name="refundAccountNumber"
            >
              <Input placeholder="VPB - 170415643 - Nguyen Thi Hoang Anh" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Số tiền khách được hoàn" name="refundAmount">
              <Input placeholder="Null" addonAfter="VND" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item name="confirmation" valuePropName="checked">
              <Checkbox>Đã hoàn tiền</Checkbox>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={24}>
            <h3 style={{ marginBottom: "16px" }}>Chính sách hủy đơn áp dụng</h3>
          </Col>
        </Row>

        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Form.Item label="Hủy miễn phí" name="freeCancellation">
              <Input placeholder="Trước 1 ngày" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Hủy đơn miễn phí đến"
              name="freeCancellationUntil"
            >
              <Input placeholder="28/05/2023 23:59" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Hoàn tiền" name="refundPercentage">
              <Input placeholder="100" addonAfter="% đặt cọc" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Số tiền hoàn" name="refundTotal">
              <Input placeholder="1,000,000" addonAfter="VND" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Phí hủy đơn" name="cancellationFeePercentage">
              <Input placeholder="50" addonAfter="% đặt cọc" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Phí hủy đơn (thành tiền)" name="cancellationFee">
              <Input placeholder="500,000" addonAfter="VND" />
            </Form.Item>
          </Col>
        </Row>
        {/* Add other rows and columns as needed for additional form fields */}
      </Form>
    </div>
  );
};

export default BookingCancel;
