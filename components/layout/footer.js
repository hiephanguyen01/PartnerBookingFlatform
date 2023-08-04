import LogoHeaderIcon from "@/assets/svg/LogoHeaderIcon";
import { CopyrightOutlined } from "@ant-design/icons";
import { Col, Grid, QRCode, Row } from "antd";
import Link from "next/link";
import classes from "./footer.module.scss";
import AppStore from "@/assets/svg/AppStore";
import GooglePlay from "@/assets/image/google-play.png";
import Image from "next/image";
import Facebook from "@/assets/svg/Facebook";
import Instagram from "@/assets/svg/Instagram";
import LinkedIn from "@/assets/svg/LinkedIn";
import BCTVN from "@/assets/image/BoCongThuong.png";

const { useBreakpoint } = Grid;

export default function Footer() {
  const screens = useBreakpoint();

  return (
    <div className="container">
      <div className={classes.Footer}>
        <Row gutter={[40, 20]} justify={"space-between"}>
          <Col sm={12} md={6} lg={6} xs={24}>
            <p className={classes.title}>TẢI ỨNG DỤNG BOOKING STUDIO</p>
            <Row
              className={`${classes.logo} ${""}`}
              align="top"
              justify={`${screens?.xs && "center"}`}
              gutter={screens?.xs ? [15, 0] : [12, 0]}
            >
              <Col span={12}>
                <Link
                  href="https://play.google.com/store/apps/details?id=com.vnplus.bookingstudio"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={GooglePlay}
                    alt=""
                    className={classes.badgeAndroid}
                  />
                </Link>
              </Col>
              <Col span={12}>
                <Link
                  href="https://apps.apple.com/vn/app/booking-studio/id1563362722"
                  target="_blank"
                  className={classes.badgeIos}
                  rel="noreferrer"
                >
                  <AppStore height={"43px"} />
                </Link>
              </Col>
            </Row>
            <Col
              align={screens?.xs ? "middle" : "start"}
              style={screens.xs ? { margin: "30px 0" } : { padding: 0 }}
            >
              <span className={classes.item}>Theo dõi chúng tôi trên</span>
              <div className={classes.icons}>
                <Facebook />
                <Instagram />
                <LinkedIn />
              </div>
            </Col>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={4}
            xs={24}
            align={`${screens.xs ? "middle" : "start"}`}
          >
            <span className={classes.title}>VỀ CHÚNG TÔI</span>
            <ul>
              <li
                className={classes.item}
                style={screens.xs ? { textAlign: "center" } : {}}
              >
                <Link
                  href="https://vnplus.vn"
                  alt=""
                  target="_blank"
                  rel="noreferrer"
                >
                  Giới thiệu VNPLUS
                </Link>
              </li>
              <li className={classes.item}>
                <Link className={classes.item} href="/home/privacy-policy">
                  Chính sách bảo mật
                </Link>
              </li>
              <li className={classes.item}>
                <Link className={classes.item} href="/home/terms-use">
                  Điều khoản sử dụng
                </Link>
              </li>
            </ul>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={5}
            xs={24}
            align={`${screens.xs ? "middle" : "start"}`}
          >
            <span className={classes.title}>HỖ TRỢ KHÁCH HÀNG</span>
            <ul className="">
              <Link href={"helpCenter"}>
                <li
                  className={classes.item}
                  style={screens.xs ? { textAlign: "center" } : {}}
                >
                  Trung tâm trợ giúp
                </li>
              </Link>
              <li
                className={classes.item}
                style={screens.xs ? { textAlign: "center" } : {}}
              >
                Quy định chung
              </li>
            </ul>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={6}
            xs={24}
            align={`${screens.xs ? "middle" : "start"}`}
          >
            <LogoHeaderIcon />
            {/* <Enter /> */}
            <p
              className={[classes.title, classes.exten].join(" ")}
              style={screens.xs ? { textAlign: "center" } : {}}
            >
              Công ty Cổ phần Công nghệ và Đầu tư VNPLUS
            </p>
            <Image src={BCTVN} />
          </Col>
        </Row>
      </div>
      <p className={classes.copywrite}>
        <CopyrightOutlined /> 2021 - Bản quyền thuộc công ty Cổ phần Công nghệ
        và Đầu tư VNPLUS V2007
      </p>
    </div>
  );
}
