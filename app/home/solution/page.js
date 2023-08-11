"use client";
import { SUPPORT_SECTION_LIST } from "@/assets/templist";
import SolutionCard from "@/components/SolutionCard";
import { Breadcrumb, Col, Pagination, Row } from "antd";
import classes from "./solution.module.scss";
import { useEffect, useState } from "react";
import { partnerHubSolutionService } from "@/services/PartnerHubSolutionService";

const Solution = () => {
  const [data, setData] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  useEffect(() => {
    (async () => {
      try {
        const { data: res } =
          await partnerHubSolutionService.getPartnerHubSolution();
        setData(res.data);
      } catch (error) {
        console.log("🚀 ~ file: page.js:17 ~ error:", error);
      }
    })();
  }, []);

  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    setCurrentItems(data.slice(indexOfFirstItem, indexOfLastItem));
  }, [data, currentPage]);

  return (
    <main style={{ minHeight: "100vh" }} className={classes.solution}>
      <div className={classes.head}>
        <h1>Một số giải pháp có ích dành cho bạn</h1>
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
          {currentItems.map((item) => (
            <Col lg={6} md={8} sm={12} xs={24}>
              <SolutionCard item={item} key={item.id} />
            </Col>
          ))}
        </Row>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "24px",
          }}
        >
          <Pagination
            defaultCurrent={1}
            current={currentPage}
            total={data.length}
            pageSize={itemsPerPage}
            onChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </main>
  );
};

export default Solution;
