import { Expense } from "../types/Expense"

export const calculateTotalAmount = (expense: Expense[]) => {
    return expense.reduce((total, expense) => total - expense.amount, 1500)
}

export const calculateTotalAmountByTypeExpense = (expense: Expense[], typeExpense: string) => {
    const filteredTypeExpense = expense.filter((expense) => expense.type === typeExpense)

    if (filteredTypeExpense.length === 0) {
        return 0
    } else {
        return filteredTypeExpense.reduce((total, expense) => total + expense.amount, 0)
    }
}