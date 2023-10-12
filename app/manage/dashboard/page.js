"use client";
import SlideShow from "@/components/SlideShow";
import { Col, DatePicker, Row, Select } from "antd";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import BarChartCus from "./components/BarChartCus";
import CancelIcon from "./components/CancelIcon";
import DataCard from "./components/DataCard";
import LineChartCus from "./components/LineChartCus";
import MissingIcon from "./components/MissingIcon";
import PieChartExample from "./components/PieChartCus";
import SuccessIcon from "./components/SuccessIcon";
import WaitingIcon from "./components/WaitingIcon";
import styles from "./dashboard.module.scss";
import { useSelector } from "react-redux";

dayjs.extend(customParseFormat);

const { RangePicker } = DatePicker;

const Dashboard = () => {
  const user = useSelector((state) => state.userReducer.user);
  const customWeekStartEndFormat = (value) => `${dayjs(value).format("DD/MM")}`;
  return (
    <div className={styles.dashboard}>
      <div
        style={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
          display: "inline-flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            color: "#37353F",
            fontSize: 24,
            fontWeight: "700",
          }}
        >
          Dashboard
        </div>
        <div
          style={{
            color: "#3F3F3F",
            fontSize: 16,
            fontWeight: "400",
            marginTop: "10px",
          }}
        >
          Hi, {user?.PartnerName}, welcome back to Booking Studio Partner web!{" "}
        </div>
      </div>

      <SlideShow type="Banner" />

      <div
        style={{
          marginTop: "18px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          paddingBottom: "24px",
        }}
      >
        <Row gutter={[24, 24]}>
          <Col lg={14}>
            <Row gutter={[24, 24]}>
              <Col lg={12}>
                <DataCard
                  data={56}
                  descript="Đơn chờ thực hiện"
                  subColor="#FFF6DF"
                  icon={<WaitingIcon />}
                />
              </Col>
              <Col lg={12}>
                <DataCard
                  data={56}
                  descript="Đơn đã huỷ"
                  subColor="#FFEDED"
                  icon={<CancelIcon />}
                />
              </Col>
              <Col lg={12}>
                <DataCard
                  data={56}
                  descript="Đơn đã hoàn tất"
                  subColor="#E3FAF4"
                  icon={<SuccessIcon />}
                />
              </Col>
              <Col lg={12}>
                <DataCard
                  data={56}
                  descript="Đơn vắng mặt"
                  subColor="#F4F4F4"
                  icon={<MissingIcon />}
                />
              </Col>
            </Row>
          </Col>
          <Col lg={10}>
            <div className={styles.barChart}>
              <div className={styles.heading}>
                <div className={styles.title}>Tổng doanh thu: 5.999K</div>
                <div className={styles.title}>
                  <RangePicker
                    style={{ width: "150px" }}
                    format={customWeekStartEndFormat}
                  />
                </div>
              </div>
              <BarChartCus />
            </div>
          </Col>
        </Row>
        <Row gutter={[24, 24]}>
          <Col lg={10}>
            <div className={styles.pieChart}>
              <div className={styles.heading}>
                <div className={styles.title}>Đơn đặt: 56 đơn</div>
                <div className={styles.title}>
                  <Select
                    defaultValue="1"
                    style={{ width: 148 }}
                    // onChange={handleChange}
                    options={[
                      { value: "1", label: "Tháng này" },
                      { value: "2", label: "Tháng trước" },
                      { value: "3", label: "Quý này" },
                      { value: "4", label: "Quý trước" },
                    ]}
                  />
                </div>
              </div>
              <PieChartExample />
            </div>
          </Col>
          <Col lg={14}>
            <div className={styles.pieChart}>
              <div className={styles.heading}>
                <div className={styles.title}>Doanh thu</div>
              </div>
              <LineChartCus />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
