import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

import { Expense, ExpenseType } from "../../types/Expense";
import { getExpenses } from "../../utils/storage";
import { saveExpenses } from "../../utils/storage";

import '../../styles/ExpenseForm/expenseForm.css'

const ExpenseForm = () => {
  const expenses = getExpenses()

  const [expense, setExpense] = useState<Expense[]>();
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState<ExpenseType>("Food");

  useEffect(() => {
    setExpense(expenses)
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const newExpense: Expense = {
      id: Date.now(),
      name: name,
      amount: amount,
      date: new Date().toISOString(),
      type: category,
    };

    if (expense) {
      saveExpenses([...expense, newExpense]);
    }
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value as ExpenseType);
  };

  return (
    <Form onSubmit={handleSubmit} className="expense-form">
      <Form.Group controlId="name">
        <Form.Label>Expense Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="amount">
        <Form.Label>Expense Amount</Form.Label>
        <Form.Control
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </Form.Group>

      <Form.Group controlId="category">
        <Form.Label>Expense Category</Form.Label>
        <Form.Select value={category} onChange={handleCategoryChange}>
          <option value="Food">Food</option>
          <option value="Transportation">Transportation</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Other">Other</option>
        </Form.Select>
      </Form.Group>

      <Button variant="dark" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ExpenseForm;