import { Fragment } from "react";
import classes from "./layout.module.scss";
import Header from "./header";
import Footer from "./footer";

function MainLayout(props) {
  return (
    <Fragment>
      <Header />
      <div className={classes.content}>
        <main>{props.children}</main>
      </div>
      <Footer />
    </Fragment>
  );
}

export default MainLayout;
