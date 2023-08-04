import {
  DollarOutlined,
  FormatPainterOutlined,
  LineChartOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ReadOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useRouter } from "next/navigation";
import { createElement, useEffect, useState } from "react";
import { useQuery } from "react-query";
import {
  getCurrentQuery,
  getCurrentQueryOption,
} from "../../action/authAction";
import { openNotification } from "../Notification";
import Header from "./header";

const { Footer, Sider, Content } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  {
    label: "Thống kê",
    key: "/manager/statistic",
    icon: <LineChartOutlined />,
  },
  {
    label: "Hoa hồng",
    key: "/manager/commission",
    icon: <DollarOutlined />,
  },
  {
    label: "Công cụ",
    // key: "/statistic",
    icon: <FormatPainterOutlined />,
    children: [
      { label: "Lấy link", key: "/manager/link" },
      { label: "Lấy link hình ảnh", key: "/manager/link-image" },
    ],
  },
  // {
  //   label: "Dạo",
  //   key: "/manager/dao",
  //   icon: <ReadOutlined />,
  // },
  {
    label: "Hướng dẫn",
    // key: "/manager/tutorial",
    icon: <ReadOutlined />,
    children: [
      { label: "Hướng dẫn sử dụng", key: "/manager/guide" },
      { label: "Câu hỏi thường gặp", key: "/manager/question" },
    ],
  },
  {
    label: "Thiết lập tài khoản",
    key: "/manager/my-account",
    icon: <SettingOutlined />,
  },
  {
    label: "Thanh toán",
    key: "/manager/pay",
    icon: <DollarOutlined />,
  },
];
export default function ManageLayout(props) {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [DefaultSelected, setDefaultSelected] = useState(router.pathname);
  const { data: user, isFetching } = useQuery(
    "user",
    getCurrentQuery,
    getCurrentQueryOption
  );

  const onClick = (e) => {
    router.push(e.key);
  };

  useEffect(() => {
    if (!isFetching) {
      if (!user) return router.push("/login-register");
      if (!user?.CCCD1 || !user?.CCCD2) {
        openNotification("error", "Vui lòng bổ sung thông tin đăng kí");
        router.push("/complete-register");
      } else if (!user.isActivate) {
        openNotification(
          "error",
          "Tài khoản của bạn chưa được kích hoạt, vui lòng chờ từ 3-5 ngày làm việc để chúng tôi xác nhận"
        );
        router.push("/complete-register");
      }
    }
  }, [user, isFetching]);

  useEffect(() => {
    setDefaultSelected(router.pathname);
  }, [router.pathname]);

  return (
    <>
      <Header />
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{ overflow: "hidden" }}
        >
          <div
            style={{
              padding: "20px",
              backgroundColor: "#fff",
            }}
          >
            {createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            })}
          </div>
          <Menu
            selectedKeys={DefaultSelected}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            onClick={onClick}
            mode={"inline"}
            items={items}
          />
        </Sider>
        <Layout>
          <Content
            style={{
              padding: ".8rem",
              margin: 0,
              minHeight: "calc(100vh - 82.74px)",
              background: "#F2F2F2",
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
