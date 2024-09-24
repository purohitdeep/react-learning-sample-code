import React, { useState } from "react";
import classes from "./InvestmentInputForm.module.css";
import InvestmentInputItem from "./InvestmentInputItem";
import Button from "../UI/Button";

const InvestmentInputForm = (props) => {
  // define states
  const intialUserInput = {
    currentSavings: 10000,
    yearlyContribution: 1200,
    expectedReturn: 7,
    duration: 10,
  };

  const [userInput, setUserInput] = useState(intialUserInput);

  const submitHandler = (event) => {
    event.preventDefault();

    // perculate the state UPwards.
    props.onInvestmentInput(userInput);
  };

  const resetHandler = () => {
    setUserInput('');
  };

  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.inputGroup}>
        <InvestmentInputItem
          id="current-savings"
          fieldType="number"
          labelName="Current Savings ($)"
          value={userInput["currentSavings"]}
          onChange={(event) =>
            inputChangeHandler("currentSavings", event.target.value)
          }
        />
        <InvestmentInputItem
          id="yearly-contribution"
          fieldType="number"
          labelName="Yearly Savings ($)"
          value={userInput["yearlyContribution"]}
          onChange={(event) =>
            inputChangeHandler(
              "yearlyContribution",
              event.target.value
            )
          }
        />
      </div>
      <div className={classes.inputGroup}>
        <InvestmentInputItem
          id="expected-return"
          fieldType="number"
          labelName="Expected Interest (%, per year)"
          value={userInput["expectedReturn"]}
          onChange={(event) =>
            inputChangeHandler("expectedReturn", event.target.value)
          }
        />
        <InvestmentInputItem
          id="duration"
          fieldType="number"
          labelName="Investment Duration (years)"
          value={userInput["duration"]}
          onChange={(event) =>
            inputChangeHandler("duration", event.target.value)
          }
        />
      </div>

      <p className={classes.actions}>
        <Button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </Button>
        <Button type="submit" className="button">
          Calculate
        </Button>
      </p>
    </form>
  );
};

export default InvestmentInputForm;
