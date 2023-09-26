import { Fragment } from "react";
import Header from "./header";
import Footer from "./footer";

function MainLayout(props) {
  return (
    <Fragment>
      <Header />
      <main className="main">{props.children}</main>
      <Footer />
    </Fragment>
  );
}

export default MainLayout;
