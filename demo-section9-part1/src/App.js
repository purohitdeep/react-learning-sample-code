import React, { useState } from "react";

import PageHeader from "./components/UI/PageHeader";
import InvestmentInputForm from "./components/Users/InvestmentInputForm";
import ResultTable from "./components/Users/ResultTable";

function App() {
  const [userInput, setUserInput] = useState(null);

  const inputHandler = (userInput) => {
    setUserInput(userInput);
  };
  const yearlyData = [];

  if (userInput) {
    let currentSavings = userInput["currentSavings"];
    const yearlyContribution = userInput["yearlyContribution"];
    const expectedReturn = userInput["expectedReturn"] / 100;
    const duration = userInput["duration"];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <>
      <PageHeader />
      <InvestmentInputForm onInvestmentInput={inputHandler} />

      {!userInput && <p>No investment calculated</p>}
      {userInput && <ResultTable data={yearlyData} initialInvestment={userInput['currentSavings']}/>}
    </>
  );
}

export default App;
