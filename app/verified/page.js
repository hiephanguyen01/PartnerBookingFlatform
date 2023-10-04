"use client";

import LogoHeaderIcon from "@/assets/svg/LogoHeaderIcon";
import Success from "@/assets/svg/Success";
import { authService } from "@/services/AuthService";
import { getCurrentUser2 } from "@/store/action/userAction";
import { Button, Col, Input, Row, message } from "antd";
import { useEffect, useState } from "react";
import ReactInputVerificationCode from "react-input-verification-code";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import LeftSide from "../login-register/components/LeftSide";
import LockIcon from "../login-register/components/LockIcon";
import styles from "./veried.module.scss";
import { useRouter } from "next/navigation";
import { SET_USER } from "@/store/types/userTypes";

const StyledReactInputVerificationCode = styled.div`
  display: flex;
  padding-top: 50px;
  justify-content: center;

  --ReactInputVerificationCode-itemWidth: 58px;
  --ReactInputVerificationCode-itemHeight: 58px;
  --ReactInputVerificationCode-itemSpacing: 27px;

  .ReactInputVerificationCode__item {
    font-size: 16px;
    font-weight: 500;
    color: ${({ isInvalid }) => (isInvalid ? "#e22828" : "#000")};
    background: #fff;
    border: 1px solid
      ${({ isInvalid }) => (isInvalid ? "#EF6C65" : "rgba(28, 30, 60, 0.4)")};
    border-radius: 4px;
    margin-top: 20px;
  }
`;
const Verified = () => {
  const router = useRouter();
  const [value, setValue] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [countDown, setCountDown] = useState(60);
  const dispatch = useDispatch();
  const [normal, setNormal] = useState(false);
  const [capital, setCapital] = useState(false);
  const [length, setLength] = useState(false);
  const [password, setPassword] = useState(null);
  const [step, setStep] = useState(1);
  const user = useSelector((state) => state.userReducer.user);
  useEffect(() => {
    dispatch(getCurrentUser2());
  }, []);

  const onCompleted = async (code) => {
    try {
      await authService.checkCode(code);
      setStep(2);
    } catch (error) {
      setIsInvalid(true);
      setValue("");
      console.log("error:", error);
    }
  };

  const genCode = async () => {
    await authService.genCode();
  };
  const onChangePassword = (e) => {
    const raw = e.target.value;
    /(?=.*[a-z])/.test(raw) ? setNormal(true) : setNormal(false);
    /(?=.*[A-Z])/.test(raw) ? setCapital(true) : setCapital(false);
    raw.length >= 8 ? setLength(true) : setLength(false);
    if (/(?=.*[a-z])/.test(raw) === true) {
      if (/(?=.*[A-Z])/.test(raw) === true) {
        if (raw.length >= 8) {
          setPassword(raw);
        }
      }
    }
  };
  const onFinish = async () => {
    try {
      await authService.updateP({
        password,
      });
      localStorage.removeItem("token");
      dispatch({ type: SET_USER, payload: null });
      message.success("Thành công");
      setStep(3);
    } catch (error) {
      message.error(error?.response?.data?.message || "Hãy thử lại sau");
    }
  };

  useEffect(() => {
    let i = countDown;
    let timerId = setInterval(() => {
      setCountDown((countDown) => countDown - 1);
      --i;
      if (i <= 0) clearInterval(timerId);
    }, 1000);
    return () => clearInterval(timerId);
  }, [countDown]);

  useEffect(() => {
    if (!user) {
      router.push("/login-register");
    }
  }, [user]);
  return (
    <div className={styles.verified}>
      <div className={styles.container}>
        <LogoHeaderIcon />
        <div
          className={styles.login}
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Row
            className={styles.main}
            style={{ width: "100%", marginTop: "40px" }}
          >
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
                {step === 1 ? (
                  <div>
                    <div
                      style={{
                        color: "#161616",
                        fontSize: 24,
                        fontWeight: "700",
                      }}
                    >
                      Xác minh email
                    </div>
                    <div style={{ marginTop: "24px" }}>
                      <span
                        style={{
                          color: "#3F3F3F",
                          fontSize: 18,
                          fontFamily: "Nunito",
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}
                      >
                        Vui lòng nhập mã xác minh được gửi đến email <br />
                      </span>
                      <span
                        style={{
                          color: "#3F3F3F",
                          fontSize: 18,
                          fontFamily: "Nunito",
                          fontWeight: "700",
                          wordWrap: "break-word",
                        }}
                      >
                        {user?.Email}
                      </span>
                      <span
                        style={{
                          color: "#3F3F3F",
                          fontSize: 18,
                          fontFamily: "Nunito",
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}
                      >
                        :
                      </span>

                      <StyledReactInputVerificationCode isInvalid={isInvalid}>
                        <ReactInputVerificationCode
                          length={6}
                          autoFocus
                          placeholder=""
                          disabled
                          onCompleted={onCompleted}
                          value={value}
                          type="number"
                        />
                      </StyledReactInputVerificationCode>
                      <div style={{ textAlign: "center", marginTop: "64px" }}>
                        {countDown > 0 ? (
                          <div>Vui lòng chờ {countDown} giây để gửi lại mã</div>
                        ) : (
                          <div>
                            Bạn không nhận được mã?{" "}
                            <span
                              style={{
                                color: "#E22828",
                                fontSize: 16,
                                fontWeight: "600",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                genCode();
                                setCountDown(60);
                                let i = 60;
                                let timerId = setInterval(() => {
                                  setCountDown((countDown) => countDown - 1);
                                  --i;
                                  if (i <= 0) clearInterval(timerId);
                                }, 1000);

                                return () => clearInterval(timerId);
                              }}
                            >
                              Gửi lại
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : step === 2 ? (
                  <div>
                    <div
                      style={{
                        color: "#161616",
                        fontSize: 24,
                        fontFamily: "Nunito",
                        fontWeight: "700",
                        wordWrap: "break-word",
                        marginBottom: "64px",
                      }}
                    >
                      Thiếp lập mật khẩu
                    </div>
                    <div
                      style={{
                        color: "#3F3F3F",
                        fontSize: 16,
                        fontWeight: "600",
                      }}
                    >
                      Mật khẩu
                    </div>
                    <Input.Password
                      className="login"
                      prefix={<LockIcon />}
                      size="large"
                      placeholder="Mật khẩu"
                      onChange={(e) => onChangePassword(e)}
                      style={{ marginBottom: "24px" }}
                    />

                    <div
                      style={{ marginBottom: "8px" }}
                      className={normal ? styles.bluetext : styles.greytext}
                    >
                      Ít nhất một kí tự viết thường
                    </div>
                    <div
                      style={{ marginBottom: "8px" }}
                      className={capital ? styles.bluetext : styles.greytext}
                    >
                      Ít nhất một kí tự viết hoa
                    </div>
                    <div
                      style={{ marginBottom: "8px" }}
                      className={length ? styles.bluetext : styles.greytext}
                    >
                      Chứa 8-16 kí tự
                    </div>
                    <Button
                      disabled={!(normal || capital || length)}
                      onClick={onFinish}
                      style={{ marginTop: "40px" }}
                      type="primary"
                      block
                      size="large"
                    >
                      <span style={{ color: "#ffffff" }}>Đăng ký</span>
                    </Button>
                  </div>
                ) : (
                  <div>
                    <div
                      style={{
                        width: "100%",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: 40,
                        display: "inline-flex",
                      }}
                    >
                      <div
                        style={{
                          width: 104,
                          height: 104,
                          position: "relative",
                        }}
                      >
                        <Success />
                      </div>
                      <div
                        style={{
                          alignSelf: "stretch",
                          height: 102,
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          gap: 16,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            textAlign: "center",
                            color: "#161616",
                            fontSize: 24,
                            fontWeight: "700",
                          }}
                        >
                          HOÀN TẤT ĐĂNG KÝ TÀI KHOẢN
                        </div>
                        <div
                          style={{ alignSelf: "stretch", textAlign: "center" }}
                        >
                          <span
                            style={{
                              color: "#616161",
                              fontSize: 18,
                              fontWeight: "400",
                            }}
                          >
                            Hợp đồng đối tác và Thông tin tài khoản của bạn đã{" "}
                            <br />
                            được gửi tới địa chỉ email:
                          </span>
                          <span
                            style={{
                              color: "#3F3F3F",
                              fontSize: 18,
                              fontWeight: "700",
                            }}
                          >
                            {" "}
                            {user?.Email}
                          </span>
                        </div>
                      </div>
                      <Button
                        type="primary"
                        size="large"
                        style={{ width: "240px" }}
                        onClick={() => router.push("/login-register")}
                      >
                        <span style={{ color: "#fff" }}>Đăng nhập</span>
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Verified;
