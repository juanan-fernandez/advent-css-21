import { ReactNode, createContext, useState } from 'react';
import { BudgetAndExpenseType, Expense } from '../types/expenses.type';
import { budgetReducer, budgetInitialState } from './budget-reducer';

type BudgetContextType = {
	budgetAndExpenses: BudgetAndExpenseType;
	addExpense: (expense: Expense) => void;
	deleteExpense: (expenseId: string) => void;
};

// const initialBudget: BudgetContextType = {
// 	budgetAndExpenses: { budget: 0, expenses: [] },
// 	addExpense: () => void {},
// 	deleteExpense: () => void {},
// };

export const BudgetContext = createContext<BudgetContextType | null>(null);

export function BudgetContextProvider({ children }: { children: ReactNode }): ReactNode {
	const [budgetAndExpenses, setBuggetAndExpenses] = useState<BudgetAndExpenseType>({
		budget: 0,
		expenses: [],
	});

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
		setBuggetAndExpenses(prev => {
			return {
				...prev,
				expenses: prev.expenses.filter(exp => exp.id !== expenseId),
			};
		});
	};

	return (
		<BudgetContext.Provider value={{ budgetAndExpenses, addExpense, deleteExpense }}>
			{children}
		</BudgetContext.Provider>
	);
}
