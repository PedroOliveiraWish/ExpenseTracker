import React from "react";

import { getExpenses } from "../../utils/storage";
import { MdOutlineAttachMoney } from "react-icons/md";
import { MdFastfood } from "react-icons/md";
import { MdEmojiTransportation } from "react-icons/md";
import { MdOutlineTheaterComedy } from "react-icons/md";
import { GoArchive } from "react-icons/go";

import '../../styles/Expenses/expenses.css'

const Expenses = () => {
  const expenses = getExpenses();

  return (
    <div className="expenses">
      <h3>Expenses</h3>
      <ul>
        {expenses.map((expense) => {
          return (
            <li key={expense.id}>
              <div className="expense">
                <div className="icon">
                  {expense.type === "Food" && <MdFastfood />}
                  {expense.type === 'Transportation' && <MdEmojiTransportation />}
                  {expense.type === "Entertainment" && <MdOutlineTheaterComedy />}
                  {expense.type === "Other" && <GoArchive />}
                </div>
                <div className="content">
                  <div className="name">{expense.name}</div>
                  <div className="type">{expense.type}</div>
                </div>
              </div>
              <div>
                <div className="content">
                  <div className="amount">
                    <MdOutlineAttachMoney /> {expense.amount}
                  </div>
                  <div className="date">{expense.date}</div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Expenses;
