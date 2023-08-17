"use client";
import React, { useEffect, useState } from "react";
import { Breadcrumb, Col, Row, Tabs, Pagination } from "antd";
import TrendCard from "@/components/TrendCard";
import { CATEGORIES } from "@/utils/category";
import classes from "./trend.module.scss";
import { partnerHubTrendNewsService } from "@/services/PartnerHubTrendNewsService";

const Trend = () => {
  const [data, setData] = useState([]);
  const [dataFilled, setDataFilled] = useState([]);
  const [totalItemsFilled, setTotalItemsFilled] = useState(0);

  const [currentTab, setCurrentTab] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Handle tab change
  const handleTabChange = (tabKey) => {
    setCurrentTab(tabKey);
    setCurrentPage(1);
  };

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    (async () => {
      try {
        const { data: res } =
          await partnerHubTrendNewsService.getPartnerHubTrendNews();
        const regex = /(<([^>]+)>)/gi;

        setData(
          res.data.map((val) => ({
            ...val,
            content: val.content.replace(regex, "").replaceAll("&nbsp;", " "),
          }))
        );
      } catch (error) {
        console.log("🚀 ~ file: page.js:17 ~ error:", error);
      }
    })();
  }, []);

  useEffect(() => {
    const filteredItems = data.filter((item) => item.category === currentTab);
    const totalItems = filteredItems.length;
    setTotalItemsFilled(totalItems);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToShow = filteredItems.slice(startIndex, endIndex);
    setDataFilled(itemsToShow);
  }, [currentTab, currentPage, data]);

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
        <Tabs
          defaultActiveKey={1}
          style={{ marginBottom: 24 }}
          items={CATEGORIES}
          onChange={handleTabChange} // Handle tab change
        />
        {dataFilled.length > 0 ? (
          <>
            <Row gutter={[28, 28]}>
              {dataFilled.map((item) => (
                <Col lg={12} md={12} sm={24} key={item.id}>
                  <TrendCard item={item} />
                </Col>
              ))}
            </Row>
            <Pagination
              current={currentPage}
              pageSize={itemsPerPage}
              total={totalItemsFilled}
              onChange={handlePageChange} // Handle page change
              style={{ marginTop: 24, textAlign: "center" }}
            />
          </>
        ) : (
          <>Hiện đang trống</>
        )}
      </div>
    </main>
  );
};

export default Trend;
