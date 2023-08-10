import { SUPPORT_SECTION_LIST } from "@/assets/templist";
import SupportCard from "@/components/SupportCard";
import { Breadcrumb, Col, Row } from "antd";
import classes from "./support.module.scss";

const Support = () => {
  return (
    <main style={{ minHeight: "100vh" }} className={classes.support}>
      <div className={classes.head}>
        <h1>Bạn cần hỗ trợ về vấn đề gì?</h1>
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
                title: "Hỗ trợ",
              },
            ]}
          />
        </div>
        <Row gutter={[28, 28]}>
          {SUPPORT_SECTION_LIST.map((item) => (
            <Col lg={8} md={12} sm={24}>
              <SupportCard item={item} key={item.id} />
            </Col>
          ))}
        </Row>
      </div>
    </main>
  );
};

export default Support;
