import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";

import ExpenseAdd from "./components/Header/Header";
import Expenses from "./components/Expense/ExpenseAll";
import ExpenseTotal from "./components/Expense/ExpenseTotal";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";

import "./styles/AppStyle/app.css";

function App() {
  return (
    <Container fluid className="app-container">
      <div className="app">
        <Row>
          <Col className="breakdown">
            <h2>Hello, User</h2>
              <ExpenseTotal />
            <div className="expenses">
              <Expenses />
            </div>
          </Col>
          <Col className="form">
            <ExpenseAdd />
            <ExpenseForm />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default App;
