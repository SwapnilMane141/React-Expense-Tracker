import Card from "../Ui/Card";
import "./Expenses.css";
import ExpenseFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState("2020");

  const filteredExpense = props.items.filter(
    (element) => String(new Date(element.date).getFullYear()) === enteredYear
  );

  const saveYearHandler = (enteredYear) => {
    console.log("Executed in Expenses file");

    setEnteredYear(enteredYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={enteredYear}
          onSaveYear={saveYearHandler}
        ></ExpenseFilter>
        <ExpensesChart expenses={filteredExpense}></ExpensesChart>
        <ExpensesList items={filteredExpense}></ExpensesList>
      </Card>
    </div>
  );
};

export default Expenses;
