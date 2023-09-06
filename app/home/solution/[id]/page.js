import AskCustomer from "@/components/AskCustomer";
import SolutionCard from "@/components/SolutionCard";
import { partnerHubSolutionService } from "@/services/PartnerHubSolutionService";
import { RightOutlined } from "@ant-design/icons";
import { Breadcrumb, Col, Row } from "antd";
import moment from "moment";
import Link from "next/link";
import classes from "./id.module.scss";

const Detail = async ({ params }) => {
  try {
    const { data } = await partnerHubSolutionService.getPartnerHubSolutionById2(
      params.id
    );
    const regex = /(<([^>]+)>)/gi;
    const list = data.list.map((val) => ({
      ...val,
      content: val.content.replaceAll(regex, ""),
    }));
    return (
      <div style={{ minHeight: "100vh" }} className={classes.id}>
        <div className="po-container">
          <div style={{ margin: "40px 0 23px" }}>
            <Breadcrumb
              separator=">"
              items={[
                {
                  title: "Trang chủ",
                  href: "/home",
                },
                {
                  title: "Giải pháp",
                  href: "/home/solution",
                },
                {
                  title: data.data.title,
                },
              ]}
            />
          </div>
          <h1 className={classes.title}>{data.data.title}</h1>
          <p className={classes.time}>
            {moment(data.data.createdAt).format("DD/MM/YYYY")}
          </p>
          <div dangerouslySetInnerHTML={{ __html: data.data.content }} />
          <AskCustomer id={params.id} variant="solution" />
        </div>
        <div
          className="container"
          style={{ marginTop: "40px", marginBottom: "72px" }}
        >
          <div className={classes.more} style={{ marginBottom: "24px" }}>
            <h2>Các giải pháp khác</h2>

            <Link
              href="/home/solution"
              className={classes.more}
              style={{
                cursor: "pointer",
                color: "#E22828",
                marginLeft: "24px",
              }}
            >
              Xem tất cả
              <RightOutlined style={{ color: "#E22828", fontSize: "12px" }} />
            </Link>
          </div>

          <Row gutter={[28, 28]}>
            {list.map((item) => (
              <Col key={item.id} md={6} sm={12} xs={24}>
                <SolutionCard item={item} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div
        style={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>404 Not found</h1>
      </div>
    );
  }
};

export default Detail;