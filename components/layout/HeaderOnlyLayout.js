import { Fragment } from "react";
import Header from "./header";
import classes from "./layout.module.scss";

function HeaderOnlyLayout(props) {
  return (
    <Fragment>
      <Header />
      <div className={classes.content}>
        <main>{props.children}</main>
      </div>
    </Fragment>
  );
}

export default HeaderOnlyLayout;
