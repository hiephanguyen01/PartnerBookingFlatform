import { Fragment } from "react";
import classes from "./layout.module.scss";
import Header from "./header";
import Footer from "./footer";

function MainLayout(props) {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default MainLayout;
