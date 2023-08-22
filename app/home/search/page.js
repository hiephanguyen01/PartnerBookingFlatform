"use client";
import TrendCard from "@/components/TrendCard";
import { partnerHubTrendNewsService } from "@/services/PartnerHubTrendNewsService";
import { Col, Pagination, Row } from "antd";
import { useEffect, useState } from "react";
import classes from "./trendsearch.module.scss";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const TrendSearch = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  const [data, setData] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  useEffect(() => {
    (async () => {
      try {
        const { data: res } =
          await partnerHubTrendNewsService.getPartnerHubTrendNews(search);
        setData(res.data);
      } catch (error) {
        console.log("🚀 ~ file: page.js:17 ~ error:", error);
      }
    })();
  }, [search]);

  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    setCurrentItems(data.slice(indexOfFirstItem, indexOfLastItem));
  }, [data, currentPage]);

  return (
    <main style={{ minHeight: "100vh" }} className={classes.trend}>
      <div className={classes.head}>
        <p>
          KẾT QUẢ TÌM KIẾM CHO: <span>{search}</span>
        </p>
      </div>
      <div className="container" style={{ paddingBottom: "40px" }}>
        <div style={{ margin: "40px 0" }}></div>

        {currentItems.length > 0 ? (
          <>
            <Row gutter={[28, 28]}>
              {currentItems.map((item) => (
                <Col lg={12} md={12} sm={24} key={item.id}>
                  <TrendCard item={item} />
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
          </>
        ) : (
          <>Hiện đang trống</>
        )}
      </div>
    </main>
  );
};

export default TrendSearch;
