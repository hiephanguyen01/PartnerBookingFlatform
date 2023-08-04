"use client";
import LogoHeaderIcon from "@/assets/svg/LogoHeaderIcon";
import { Col, Drawer, Grid, Menu, Row, Space } from "antd";
import classes from "./header.module.scss";
import { usePathname, useRouter } from "next/navigation";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { useState } from "react";

const { useBreakpoint } = Grid;

const HEADER_NAV = [
  { id: 0, label: "Trang chủ", pathname: "home" },
  { id: 1, label: "Hỗ trợ", pathname: "support" },
  { id: 2, label: "Giải pháp", pathname: "solution" },
  { id: 3, label: "Xu hướng", pathname: "trend" },
];

const getItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
};

const items = [
  getItem(
    "",
    "",
    null,
    HEADER_NAV.map((item) => getItem(item.label, item.id)),
    "group"
  ),
];

export default function Header() {
  const router = useRouter();
  const screens = useBreakpoint();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleClickMenu = (e) => {
    console.log("click ", e);
  };

  return (
    <div className="container">
      <Row
        className={classes.header}
        align={"middle"}
        justify={"space-between"}
      >
        <Col lg={6} md={6} sm={12} xs={12}>
          <div onClick={() => router.push("/")} className={classes.logo}>
            <LogoHeaderIcon />
          </div>
        </Col>
        <Col lg={8} md={12} sm={0} xs={0}>
          <Space
            align="center"
            style={{ justifyContent: "space-between", display: "flex" }}
          >
            {HEADER_NAV.map((item) => (
              <nav
                key={item.id}
                className={[
                  classes.menuItemLabel,
                  pathname.includes(item.pathname) && classes.active,
                ].join(" ")}
                onClick={() => router.push(item.pathname)}
              >
                {item.label}
              </nav>
            ))}
          </Space>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12} style={{ textAlign: "end" }}>
          <Space
            size={screens?.lg ? 40 : screens?.md ? 35 : screens?.sm ? 25 : 15}
            align="center"
          >
            <label class={classes.switch}>
              <input type="checkbox" />
              <span class={classes.slider}></span>
              <label className={classes.langVie}>Vie</label>
              <label className={classes.langEng}>Eng</label>
            </label>
            <div className={classes.btnSearch}>
              <SearchOutlined />
            </div>
            {((screens?.sm && !screens.md) || screens?.xs) && (
              <MenuOutlined size={40} onClick={showDrawer} />
            )}
          </Space>
        </Col>
        <Drawer
          title={
            pathname.split("/")[1] === "" ? "Home" : pathname.split("/")[1]
          }
          placement={"right"}
          closable={false}
          onClose={onClose}
          open={open}
          key={"right"}
          width={300}
          className="drawerHeader"
        >
          <Menu
            onClick={handleClickMenu}
            style={{ width: 256 }}
            defaultSelectedKeys={HEADER_NAV.filter((item) => {
              if (
                pathname.split("/")[1] !== "" &&
                pathname.includes(item.pathname)
              ) {
                return item.id;
              }
            })}
            // defaultOpenKeys={["sub1"]}
            mode="inline"
            items={items}
            className={classes.menuDrawerHeader}
          />
        </Drawer>
      </Row>
    </div>
  );
}
