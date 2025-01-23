import { Expense } from "../types/Expense";

export const saveExpenses = (expenses: Expense[]) => {
    console.log(expenses)
    localStorage.setItem('expenses', JSON.stringify(expenses));
}

export const getExpenses = (): Expense[] => {
    const storedExpenses = localStorage.getItem('expenses');

    return storedExpenses ? JSON.parse(storedExpenses) : [];
}

export const deleteExpense = (id: number): void => {
    const storedExpenses = getExpenses();

    const updatedExpenses = storedExpenses.filter((expense) => expense.id !== id);

    saveExpenses(updatedExpenses);
}