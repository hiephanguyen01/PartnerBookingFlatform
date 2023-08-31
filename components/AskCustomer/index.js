"use client";
import {
  DislikeOutlined,
  LikeOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { Button, Divider, message } from "antd";
import classes from "./ask.module.scss";
import { partnerHubSolutionService } from "@/services/PartnerHubSolutionService";
import { partnerHubSupportService } from "@/services/PartnerHubSupportService";
import { partnerHubTrendNewsService } from "@/services/PartnerHubTrendNewsService";
import { useState } from "react";

const AskCustomer = ({ id, variant }) => {
  const [loading, setLoading] = useState(false);
  const like = async (type) => {
    setLoading(true);

    try {
      switch (variant) {
        case "solution":
          await partnerHubSolutionService.like(id, { type });
        case "support":
          await partnerHubSupportService.like(id, { type });
        case "trend":
          await partnerHubTrendNewsService.like(id, { type });
        default:
          break;
      }
      message.success("Cảm ơn bạn đã góp ý!");
    } catch (error) {
      message.success("Vui lòng thử lại sau");
    }
    setLoading(false);
  };

  return (
    <div>
      <Divider />
      <div className={classes.ask}>
        <p className={classes.text}>Bài viết có giúp ích cho bạn không</p>
        <div>
          <Button
            disabled={loading}
            icon={loading ? <LoadingOutlined /> : <LikeOutlined />}
            onClick={() => like(1)}
          >
            Có
          </Button>
          <Button
            disabled={loading}
            style={{ marginLeft: "10px" }}
            icon={loading ? <LoadingOutlined /> : <DislikeOutlined />}
            onClick={() => like(2)}
          >
            Không
          </Button>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default AskCustomer;
