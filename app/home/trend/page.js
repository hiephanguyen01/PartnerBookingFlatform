import { SUPPORT_SECTION_LIST } from "@/assets/templist";
import TrendCard from "@/components/TrendCard";
import { Breadcrumb, Col, Row } from "antd";
import classes from "./trend.module.scss";

const Trend = () => {
  return (
    <main style={{ minHeight: "100vh" }} className={classes.trend}>
      <div className={classes.head}>
        <h1>Khám phá xu hướng và tin tức mới nhất</h1>
      </div>
      <div className="container" style={{ paddingBottom: "40px" }}>
        <div style={{ margin: "40px 0" }}>
          <Breadcrumb
            separator=">"
            items={[
              {
                title: "Trang chủ",
                href: "/home",
              },
              {
                title: "Xu hướng, tin tức",
              },
            ]}
          />
        </div>
        <Row gutter={[28, 28]}>
          {SUPPORT_SECTION_LIST.map((item) => (
            <Col lg={12} md={12} sm={24}>
              <TrendCard item={item} key={item.id} />
            </Col>
          ))}
        </Row>
      </div>
    </main>
  );
};

export default Trend;
