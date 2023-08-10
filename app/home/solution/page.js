import { SUPPORT_SECTION_LIST } from "@/assets/templist";
import SolutionCard from "@/components/SolutionCard";
import { Breadcrumb, Col, Row } from "antd";
import classes from "./solution.module.scss";

const Solution = () => {
  return (
    <main style={{ minHeight: "100vh" }} className={classes.solution}>
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
                title: "Giải pháp",
              },
            ]}
          />
        </div>
        <Row gutter={[28, 28]}>
          {SUPPORT_SECTION_LIST.map((item) => (
            <Col lg={6} md={8} sm={12} xs={24}>
              <SolutionCard item={item} key={item.id} />
            </Col>
          ))}
        </Row>
      </div>
    </main>
  );
};

export default Solution;
