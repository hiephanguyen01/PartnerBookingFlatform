import SolutionCard from "@/components/SolutionCard";
import { partnerHubSolutionService } from "@/services/PartnerHubSolutionService";
import {
  DislikeOutlined,
  LikeOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Button, Col, Divider, Row } from "antd";
import moment from "moment";
import Link from "next/link";
import classes from "./id.module.scss";

const Detail = async ({ params }) => {
  const { data } = await partnerHubSolutionService.getPartnerHubSolutionById2(
    params.id
  );

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
        <Divider />
        <div className={classes.ask}>
          <p className={classes.text}>Bài viết có giúp ích cho bạn không</p>
          <div>
            <Button icon={<LikeOutlined />}>Có</Button>
            <Button style={{ marginLeft: "10px" }} icon={<DislikeOutlined />}>
              Không
            </Button>
          </div>
        </div>
        <Divider />
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
            style={{ cursor: "pointer", color: "#E22828", marginLeft: "24px" }}
          >
            Xem tất cả
            <RightOutlined style={{ color: "#E22828", fontSize: "12px" }} />
          </Link>
        </div>

        <Row gutter={[28, 28]}>
          {data.list.map((item) => (
            <Col key={item.id} md={6} sm={12} xs={24}>
              <SolutionCard item={item} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Detail;
