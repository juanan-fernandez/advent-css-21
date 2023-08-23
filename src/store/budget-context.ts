import { createContext } from 'react';
import { Expense } from '../types/expenses.type';

type BudgetContextType = {
	budget: number;
	expenses: Expense[];
};

const initialBudget: BudgetContextType = {
	budget: 0,
	expenses: [],
};

export const BudgetContext = createContext<BudgetContextType>(initialBudget);
