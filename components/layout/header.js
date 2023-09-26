"use client";
import LogoHeaderIcon from "@/assets/svg/LogoHeaderIcon";
import { Col, Drawer, Grid, Input, Menu, Row, Space, message } from "antd";
import classes from "./header.module.scss";
import { usePathname, useRouter } from "next/navigation";
import { MenuOutlined, SearchOutlined } from "@ant-design/icons";
import { useState } from "react";

const { useBreakpoint } = Grid;

const HEADER_NAV = [
  { id: 0, label: "Trang chủ", pathname: "" },
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
    HEADER_NAV.map((item) => getItem(item.label, item.pathname)),
    "group"
  ),
];

export default function Header() {
  const router = useRouter();
  const screens = useBreakpoint();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleClickMenu = (e) => {
    console.log("click ", e);
    router.push(`/home/${e.key}`);
  };

  const onSearch = (e) => {
    if (e.key === "Enter") {
      const searchValue = e.target.value.trim();
      if (searchValue === "") {
        return message.error("Vui lòng nhập từ khoá tìm kiếm!");
      }
      router.push(`/home/search?search=${searchValue}`);
      setShowSearch(false);
    }
  };

  return (
    <div
      className={showSearch && "fixed"}
      style={
        showSearch
          ? {
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: 2,
            }
          : {}
      }
    >
      {showSearch && (
        <div
          style={{
            backgroundColor: "#000",
            opacity: ".3",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          onClick={() => setShowSearch(false)}
        ></div>
      )}
      <div
        style={
          showSearch
            ? {
                backgroundColor: "white",
                position: "absolute",
                zIndex: 2,
                top: 0,
                left: 0,
                width: "100%",
              }
            : {
                background: "#fff",
                boxShadow: "4px 4px 10px 1px rgba(0, 0, 0, 0.02)",
              }
        }
      >
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
                      pathname.split("/")[2] === item.pathname &&
                        item.pathname !== "" &&
                        classes.active,
                      pathname.split("/").length === 2 &&
                        item.pathname === "" &&
                        classes.active,
                    ].join(" ")}
                    onClick={() => {
                      if (item.pathname) {
                        router.push("/home/" + item.pathname);
                      } else {
                        router.push("/home");
                      }
                    }}
                  >
                    {item.label}
                  </nav>
                ))}
              </Space>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12} style={{ textAlign: "end" }}>
              <Space
                size={
                  screens?.lg ? 40 : screens?.md ? 35 : screens?.sm ? 25 : 15
                }
                align="center"
              >
                <label class={classes.switch}>
                  <input type="checkbox" />
                  <span class={classes.slider}></span>
                  <label className={classes.langVie}>Vie</label>
                  <label className={classes.langEng}>Eng</label>
                </label>
                <div
                  className={classes.btnSearch}
                  onClick={() => setShowSearch(!showSearch)}
                >
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
          {showSearch && (
            <Row
              align={"middle"}
              justify={"center"}
              style={{ margin: "20px 0 40px" }}
            >
              <Input
                placeholder="Tìm kiếm?"
                prefix={<SearchOutlined />}
                className={classes.inputSearch}
                bordered={false}
                style={{
                  borderBottom: "1px solid #e7e7e7",
                  borderRadius: 0,
                  width: screens?.xs ? "80%" : "50%",
                }}
                onKeyDown={onSearch}
              />
            </Row>
          )}
        </div>{" "}
      </div>
    </div>
  );
}
