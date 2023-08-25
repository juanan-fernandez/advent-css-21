import { ReactNode, createContext, useState } from 'react';
import { Expense } from '../types/expenses.type';

type BudgetAndExpenseType = {
	budget: number;
	expenses: Expense[];
};

type BudgetContextType = {
	budgetAndExpenses: BudgetAndExpenseType;
	addExpense: (expense: Expense) => void;
	deleteExpense: (expenseId: string) => void;
};

const initialBudget: BudgetContextType = {
	budgetAndExpenses: { budget: 0, expenses: [] },
	addExpense: () => void {},
	deleteExpense: () => void {},
};

export const BudgetContext = createContext<BudgetContextType>(initialBudget);

export function BudgetContextProvider({ children }: { children: ReactNode }): ReactNode {
	const [budgetAndExpenses, setBuggetAndExpenses] = useState<BudgetAndExpenseType>(
		initialBudget.budgetAndExpenses
	);

	const addExpense = (expense: Expense): void => {
		const newExpense: Expense = {
			id: crypto.randomUUID(),
			title: expense.title,
			amount: expense.amount,
		};
		setBuggetAndExpenses(prev => {
			return { ...prev, expenses: [...prev.expenses, newExpense] };
		});
	};

	const deleteExpense = (expenseId: string): void => {
		console.log(expenseId);
	};

	// const deleteExpense = (expenseId: string): void => {
	// 	setExpensesList(currentList => {
	// 		return currentList.filter(item => item.id !== expenseId);
	// 	});
	// };

	return (
		<BudgetContext.Provider value={{ budgetAndExpenses, addExpense, deleteExpense }}>
			{children}
		</BudgetContext.Provider>
	);
}
