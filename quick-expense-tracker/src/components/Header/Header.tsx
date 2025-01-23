import React from "react";
import { Button } from "react-bootstrap";
import { Avatar } from "@mui/material";

import PieChart from "../Expense/ExpenseChart";
import { getExpenses } from "../../utils/storage";

import "../../styles/Header/header.css";

const ExpenseAdd = () => {
  const expenses = getExpenses();

  return (
    <div className="expenseAdd">
      <div className="expenseAdd__header">
        <div className="avatar">
          <Avatar>L</Avatar>
        </div>
        <Button>sign out</Button>
      </div>
      <div>
        <PieChart expenseData={expenses} />
      </div>
    </div>
  );
};

export default ExpenseAdd;
