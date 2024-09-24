import { React } from "react";
import classes from "./InvestmentInputItem.module.css";

/**
 * Styles are not applied properly
 */
const InvestmentInputItem = (props) => {
  return (
    <p>
      <label className={classes.investmentInputLabel} htmlFor={props.id}>
        {props.labelName}
      </label>
      <input
        className={classes.investmentInputInput}
        type={props.fieldType}
        id={props.id}
        onChange={props.onChange}
      />
    </p>
  );
};

export default InvestmentInputItem;
