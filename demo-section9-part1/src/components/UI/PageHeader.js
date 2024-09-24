import { React } from "react";
import classes from "./PageHeader.module.css";
import logo from "../../assets/investment-calculator-logo.png";

const PageHeader = (props) => {
  return (
    <header className={classes.header}>
      <img src={logo} alt="logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default PageHeader;
