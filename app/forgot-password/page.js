"use client";
import { Login } from "@/store/action/userAction";
import { Button, Col, Form, Input, Row, message } from "antd";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import LeftSide from "./components/LeftSide";
import LockIcon from "./components/LockIcon";
import UserIcon from "./components/UserIcon";
import styles from "./forgot.module.scss";
import { useEffect } from "react";
import LogoHeaderIcon from "@/assets/svg/LogoHeaderIcon";
import { authService } from "@/services/AuthService";

const LoginRegister = () => {
  const user = useSelector((state) => state.userReducer.user);
  const router = useRouter();
  const onFinish = async (values) => {
    try {
      await authService.genCode(values.email);
      router.push(`/verified?email=${values.email}`);
    } catch (error) {
      message.error("Địa chỉ email không tồn tại");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (user) {
      router.push("/manage");
    }
  }, [user]);
  return (
    <div className={styles.forgot}>
      <div className={styles.container}>
        <div style={{ marginBottom: "50px" }}>
          <LogoHeaderIcon />
        </div>
        <Row className={styles.main} style={{ width: "100%" }}>
          <Col lg={12} md={0} sm={0} xs={0}>
            <LeftSide />
          </Col>
          <Col lg={12} md={24} sm={24} xs={24}>
            <div
              className={styles.sub}
              style={{
                width: "566px",
                padding: "40px 40px 60px 40px",
                gap: "40px",
                borderRadius: "8px",
                background: "var(--neutral-0, #FFF)",
                boxShadow: "0px 0px 30px 4px rgba(0, 0, 0, 0.04)",
              }}
            >
              <Form
                name="basic"
                labelCol={{
                  span: 24,
                }}
                wrapperCol={{
                  span: 24,
                }}
                style={{
                  maxWidth: 600,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <h3
                  style={{
                    color: "var(--neutral-700, #161616)",
                    fontFamily: "Nunito",
                    fontSize: "24px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "normal",
                    marginBottom: "40px",
                  }}
                >
                  Quên mật khẩu
                </h3>
                <Form.Item
                  label="Địa chỉ email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập địa chỉ email!",
                    },
                  ]}
                >
                  <Input className="login" prefix={<UserIcon />} size="large" />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" block size="large">
                    Xác nhận
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LoginRegister;
