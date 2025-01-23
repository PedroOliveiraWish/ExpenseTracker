export type ExpenseType = 'Food' | 'Transportation' | 'Entertainment' | 'Other';

export interface Expense {
    id: number;
    name: string;
    amount: number;
    date: string;
    type: ExpenseType;
}