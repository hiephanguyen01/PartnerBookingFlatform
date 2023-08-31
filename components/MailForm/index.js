"use client";

import { contactService } from "@/services/contactService";
import { Button, Col, Form, Input, Row, message } from "antd";

const MailForm = () => {
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    try {
      await contactService.createMail({
        ...values,
        name: [values.lastName, values.firstName].join(" "),
      });
      message.success("Gửi tin nhắn thành công!");
      form.resetFields();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
      layout="vertical"
      className="contactForm"
    >
      <Row gutter={22} justify={"space-between"}>
        <Col span={12}>
          <Form.Item
            title="Họ"
            name={"lastName"}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Họ" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            title="Tên"
            name={"firstName"}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Tên" />
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        title="Email"
        name={"email"}
        rules={[
          {
            type: "email",
            required: true,
          },
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item label="Vấn đề giúp đỡ" name={"content"}>
        <Input.TextArea showCount maxLength={500} />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          className="btnPrimary"
          style={{ width: 128, height: 48 }}
          htmlType="submit"
        >
          Gửi
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MailForm;
