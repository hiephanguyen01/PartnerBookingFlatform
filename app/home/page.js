"use client";
import BannerImg from "@/assets/image/Banner.png";
import ContactImg from "@/assets/image/ContactImg.png";
import AlignArrowHorizontal from "@/assets/svg/AlignArrowHorizontal";
import ArrowToTop from "@/assets/svg/ArrowToTop";
import HeartOnHand from "@/assets/svg/HeartOnHand";
import Phone from "@/assets/svg/Phone";
import Promotion from "@/assets/svg/Promotion";
import HomeSection from "@/components/HomeSection/HomeSection";
import MailForm from "@/components/MailForm";
import SlideShow from "@/components/SlideShow";
import SupportCard from "@/components/SupportCard";
import { partnerHubSolutionService } from "@/services/PartnerHubSolutionService";
import { RightOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Row, Tabs, Image } from "antd";
import { FloatButton } from "antd/es";
import { useEffect, useState } from "react";
import classes from "./home.module.scss";
import { useRouter } from "next/navigation";
const SEARCH_SECTION_LIST = [
  {
    id: 0,
    title: "Hỗ trợ",
    icon: <Phone height={36} width={36} />,
    description: "Hỗ trợ đối tác sử dụng Booking Studio một cách hiệu quả nhất",
  },
  {
    id: 1,
    title: "Giải pháp",
    description:
      "Giúp đối tác dễ dàng tiếp cận khách hàng và đạt doanh thu cao",
    icon: <HeartOnHand />,
  },
  {
    id: 2,
    title: "Xu hướng, tin tức",
    description: "Cập nhật xu hướng và tin tức về kinh doanh mới nhất",
    icon: <Promotion width={30} height={27} />,
  },
];

const TABS_LIST = [
  { id: 0, title: "Tất cả" },
  { id: 1, title: "Studio" },
  { id: 2, title: "Makeup" },
  { id: 3, title: "Chụp ảnh" },
  { id: 4, title: "Người mẫu" },
  { id: 5, title: "Trang phục" },
  { id: 6, title: "Thiết bị" },
];

export default function Home() {
  const router = useRouter();
  const [data, setDate] = useState({});
  const onChange = (key) => {
    console.log(key);
  };

  const items = TABS_LIST.map((item) => ({
    key: item.id,
    title: item.title,
    children: <SlideShow type="TrendCard" data={data?.trends} />,
  }));

  useEffect(() => {
    (async () => {
      try {
        const { data: res } =
          await partnerHubSolutionService.getPartnerHubHome();
        setDate(res);
      } catch (error) {
        console.log("🚀 ~ file: page.js:72 ~ error:", error);
      }
    })();
  }, []);

  return (
    <div className={classes.home}>
      <div className={classes.banner}>
        <div
          className={"container " + classes.wrapContent}
          style={{ textAlign: "center" }}
        >
          <h1>Chúng tôi sẽ giúp bạn đạt doanh thu cao nhất có thể</h1>
          <p className={classes.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Row
            style={{ marginBottom: "80px" }}
            gutter={[20, 20]}
            justify={{ xs: "center" }}
          >
            <Col>
              <Button className="header_btn_join" type="primary">
                Tham gia Booking Studio
              </Button>
            </Col>
            <Col>
              <Button danger className="header_btn_direction">
                Đến trang quản lý <AlignArrowHorizontal />
              </Button>
            </Col>
          </Row>
          <Image
            preview={false}
            src={BannerImg.src}
            alt=""
            style={{ objectFit: "cover", width: "100%" }}
          />
        </div>
      </div>

      <HomeSection>
        <h3 className={[classes.searchTitle, classes.sectionTitle].join(" ")}>
          BẠN CẦN TÌM GÌ?
        </h3>
        <Row style={{ width: "100%" }} gutter={[20, 20]} justify={"center"}>
          {SEARCH_SECTION_LIST.map((item) => (
            <Col xl={8} lg={12} md={12} sm={24} xs={24} key={item.id}>
              <div className={classes.searchSectionItem}>
                <div
                  className={[classes.icon, classes[`icon_${item.id}`]].join(
                    " "
                  )}
                >
                  {item.icon}
                </div>
                <div className={classes.content}>
                  <title>{item.title}</title>
                  <p>{item.description}</p>
                </div>
                <RightOutlined />
              </div>
            </Col>
          ))}
        </Row>
      </HomeSection>
      <HomeSection className={classes.sectionSupport}>
        <p className={classes.titleSmall}>Hỗ trợ</p>
        <Divider className={classes.divider} />
        <h3 className={[classes.supportTitle, classes.sectionTitle].join(" ")}>
          BẠN CẦN HỖ TRỢ VỀ VẤN ĐỀ GÌ?
        </h3>
        <Row gutter={[28, 28]} style={{ width: "100%", marginBottom: "56px" }}>
          {data?.supports?.map((item) => (
            <Col xl={8} lg={8} md={12} sm={24} xs={24} key={item.id}>
              <SupportCard item={item} />
            </Col>
          ))}
        </Row>
        <Button
          className="btnPrimary btnSeeMore"
          onClick={() => router.push("/home/support")}
        >
          Xem thêm
        </Button>
      </HomeSection>
      <HomeSection className={classes.sectionSolution}>
        <p className={classes.titleSmall}>Giải pháp</p>
        <Divider className={classes.divider} />
        <h3 className={[classes.solutionTitle, classes.sectionTitle].join(" ")}>
          MỘT SỐ GIẢI PHÁP CÓ ÍCH CHO BẠN
        </h3>
        <Row gutter={[28, 28]} style={{ width: "100%", marginBottom: "40px" }}>
          <SlideShow type="SolutionCard" data={data?.solutions} />
        </Row>
        <Button
          className="btnPrimary btnSeeMore"
          onClick={() => router.push("/home/solution")}
        >
          Xem thêm
        </Button>
      </HomeSection>
      <HomeSection className={classes.sectionTrend}>
        <p className={classes.titleSmall}>Xu hướng, tin tức</p>
        <Divider className={classes.divider} />
        <h3 className={[classes.trendTitle, classes.sectionTitle].join(" ")}>
          KHÁM PHÁ XU HƯỚNG VÀ TIN TỨC MỚI NHẤT
        </h3>
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          className="trendTab"
        />
        <Button
          className="btnPrimary btnSeeMore"
          onClick={() => router.push("/home/trend")}
        >
          Xem thêm
        </Button>
      </HomeSection>

      <HomeSection classContent={classes.contactSection}>
        <Row
          style={{ width: "100%" }}
          gutter={{ xs: 0, sm: 0, md: 24, lg: 40, xl: 78 }}
        >
          <Col xl={11} lg={11} md={14} sm={24} xs={24}>
            <p className={classes.titleSmall}>Liên hệ</p>
            <Divider className={classes.divider} style={{ marginLeft: 16 }} />
            <h3
              className={[classes.contactTitle, classes.sectionTitle].join(" ")}
            >
              CHÚNG TÔI CÓ THỂ GIÚP GÌ CHO BẠN?
            </h3>
            <MailForm />
          </Col>
          <Col xl={13} lg={13} md={10} sm={0} xs={0}>
            <Image
              src={ContactImg}
              alt=""
              style={{ width: "100%", objectFit: "contain" }}
            ></Image>
          </Col>
        </Row>
      </HomeSection>
      <FloatButton.BackTop icon={<ArrowToTop />} className="btnBackToTop" />
    </div>
  );
}
