"use client";
import LogoHeaderIcon from "@/assets/svg/LogoHeaderIcon";
import {
  BarcodeOutlined,
  BellOutlined,
  DotChartOutlined,
  FileImageOutlined,
  LikeOutlined,
  LoginOutlined,
  MessageOutlined,
  PoundCircleOutlined,
  ProjectOutlined,
  SnippetsOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Dropdown, Layout, Menu, theme } from "antd";
import moment from "moment";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PrivateRoute from "../ProtectedRoute/ProtectedRoute";
import { logOut } from "@/store/action/userAction";
import HookupProvider from "../HookupProvider";
const { Header, Content, Footer, Sider } = Layout;
const items2 = [
  {
    label: "Dashboard",
    icon: <DotChartOutlined />,
    key: "/dashboard",
  },
  {
    label: "Bài đăng",
    icon: <ProjectOutlined />,
    key: "/post",
    
  },
  {
    label: "Đơn đặt",
    icon: <SnippetsOutlined />,
    key: "/booking",
  },
  {
    label: "Đánh giá",
    icon: <LikeOutlined />,
    key: "/rating",
  },
  {
    label: "Dạo",
    icon: <FileImageOutlined />,
    key: "/dao",
  },
  {
    label: "Tài chính",
    icon: <PoundCircleOutlined />,
    key: "/finance",
  },
  {
    label: "Khuyến mãi",
    icon: <BarcodeOutlined />,
    key: "/bonus",
  },
];

const AdminLayout = ({ children }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  const router = useRouter();

  const [collapsed, setCollapsed] = useState(false);
  const [time, setTime] = useState();

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const items = [
    {
      label: <a onClick={() => dispatch(logOut(router))}>Đăng xuất</a>,
      key: "0",
      icon: <LoginOutlined />,
    },
  ];

  useEffect(() => {
    const timee = setTimeout(() => {
      setTime(moment().format("Do MMMM YYYY, h:mm:ss a"));
    }, 1 * 1000);

    return () => {
      clearTimeout(timee);
    };
  }, [time]);

  return (
    <HookupProvider>
      <PrivateRoute>
        <Layout
          style={{
            minHeight: "100vh",
          }}
        >
          <Sider
            theme="light"
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
          >
            <div
              style={{
                padding: "16px 16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LogoHeaderIcon />
            </div>
            <Menu
              theme="light"
              defaultSelectedKeys={["1"]}
              mode="inline"
              items={items2}
            />
          </Sider>
          <Layout>
            <Header
              style={{
                padding: 0,
                background: colorBgContainer,
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <p>{time}</p>
              <p
                style={{
                  margin: "0 24px",
                  height: "40px",
                  width: "1px",
                  backgroundColor: "#CACACA",
                }}
              ></p>
              <Button
                style={{ marginRight: "24px" }}
                icon={<MessageOutlined />}
              />
              <Button icon={<BellOutlined />} />
              <p
                style={{
                  margin: "0 24px",
                  height: "40px",
                  width: "1px",
                  backgroundColor: "#CACACA",
                }}
              ></p>
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <p>
                    Hello,{" "}
                    <span style={{ fontWeight: "bold" }}>
                      {user?.PartnerName}
                    </span>
                  </p>
                  <Avatar
                    style={{ margin: " 0 24px 0 16px " }}
                    size="large"
                    icon={<UserOutlined />}
                  />
                </div>
              </Dropdown>
            </Header>
            <Content
              style={{
                margin: "24px",
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </PrivateRoute>
    </HookupProvider>
  );
};
export default AdminLayout;
