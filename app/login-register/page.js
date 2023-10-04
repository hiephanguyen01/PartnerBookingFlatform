"use client";
import { Login } from "@/store/action/userAction";
import { Button, Col, Form, Input, Row } from "antd";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import LeftSide from "./components/LeftSide";
import LockIcon from "./components/LockIcon";
import UserIcon from "./components/UserIcon";
import styles from "./login.module.scss";
import { useEffect } from "react";

const LoginRegister = () => {
  const user = useSelector((state) => state.userReducer.user);
  const router = useRouter();
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(Login(values));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (user) {
      console.log("🚀 ~ file: page.js:25 ~ useEffect ~ user:", user);
      router.push("/manage");
    }
  }, [user]);
  return (
    <div
      className={styles.login}
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <Row className={styles.main} style={{ width: "100%" }}>
        <Col lg={12} md={0} sm={0} xs={0}>
          <LeftSide />
        </Col>
        <Col lg={12} md={24} sm={24} xs={24}>
          <div
            className={styles.sub}
            style={{
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
                Đăng nhập để quản lý
              </h3>
              <Form.Item
                label="Tên đăng nhập"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập tên đăng nhập!",
                  },
                ]}
              >
                <Input className="login" prefix={<UserIcon />} size="large" />
              </Form.Item>

              <Form.Item
                label="Mật khẩu"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập mật khẩu!",
                  },
                ]}
              >
                <Input.Password
                  className="login"
                  prefix={<LockIcon />}
                  size="large"
                />
              </Form.Item>
              <div
                style={{
                  color: "var(--primary-700, #E22828)",
                  textAlign: "right",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px",
                  marginBottom: "24px",
                }}
              >
                <a>Quên mật khẩu?</a>
              </div>

              <Form.Item>
                <Button type="primary" htmlType="submit" block size="large">
                  Đăng nhập
                </Button>
              </Form.Item>

              <div
                style={{
                  color: "var(--neutral-600, #3F3F3F)",
                  textAlign: "center",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "24px",
                }}
              >
                <p>
                  Bạn chưa có tài khoản?{" "}
                  <a style={{ color: "var(--primary-700, #E22828)" }}>
                    Đăng ký
                  </a>
                </p>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LoginRegister;
