import React from "react";
import { calculateTotalAmount } from "../../utils/calculations";
import { getExpenses } from "../../utils/storage";
import { MdOutlineAttachMoney } from "react-icons/md";

import '../../styles/ExpenseTotal/expenseTotal.css'

const ExpenseTotal = () => {
  const expenses = getExpenses();

  return (
    <div className="expense-total">
      <div className="text-muted">Total</div>
      <div className="total">
        <MdOutlineAttachMoney /> {calculateTotalAmount(expenses)}
      </div>
    </div>
  );
};

export default ExpenseTotal;
