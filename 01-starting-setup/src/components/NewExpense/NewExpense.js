import { React, useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  // For showing 'Add Expense Button'
  const [showAddExpense, setShowAddExpense] = useState(false);

  const startEditingHandler = () => {
    setShowAddExpense(true);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowAddExpense(false);
  };

  const stopEditingExpenseHandler = () => {
    setShowAddExpense(false);
  };

  return (
    <div className="new-expense">
      {!showAddExpense && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {showAddExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelHandler={stopEditingExpenseHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
