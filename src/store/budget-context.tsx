import { ReactNode, createContext, useReducer } from 'react';
import { BudgetAndExpenseType, Expense } from '../types/expenses.type';
import { budgetReducer, budgetInitialState, budgetActionKind } from './budget-reducer';

type BudgetContextType = {
	budgetAndExpenses: BudgetAndExpenseType;
	addExpense: (expense: Expense) => void;
	deleteExpense: (expenseId: string) => void;
	updateBudget: (budgetAmount: number) => void;
};

// const initialBudget: BudgetContextType = {
// 	budgetAndExpenses: { budget: 0, expenses: [] },
// 	addExpense: () => void {},
// 	deleteExpense: () => void {},
// };

export const BudgetContext = createContext<BudgetContextType | null>(null);

function useBudgetReducer() {
	const [state, dispatch] = useReducer(budgetReducer, budgetInitialState);

	const addExpense = (expense: Expense): void => {
		dispatch({ type: budgetActionKind.ADD_EXPENSE, payload: expense });
	};

	const deleteExpense = (expenseId: string): void => {
		dispatch({ type: budgetActionKind.DELETE_EXPENSE, payload: expenseId });
	};

	const updateBudget = (budgetAmount: number): void => {
		dispatch({ type: budgetActionKind.UPDATE_BUDGET, payload: budgetAmount });
	};

	return { state, addExpense, deleteExpense, updateBudget };
}

export function BudgetContextProvider({ children }: { children: ReactNode }): ReactNode {
	const { state, addExpense, deleteExpense, updateBudget } = useBudgetReducer();
	// const [budgetAndExpenses, setBuggetAndExpenses] = useState<BudgetAndExpenseType>({
	// 	budget: 0,
	// 	expenses: [],
	// });

	// const addExpense = (expense: Expense): void => {
	// 	const newExpense: Expense = {
	// 		id: crypto.randomUUID(),
	// 		title: expense.title,
	// 		amount: expense.amount,
	// 	};
	// 	setBuggetAndExpenses(prev => {
	// 		return { ...prev, expenses: [...prev.expenses, newExpense] };
	// 	});
	// };

	// const deleteExpense = (expenseId: string): void => {
	// 	console.log(expenseId);
	// 	setBuggetAndExpenses(prev => {
	// 		return {
	// 			...prev,
	// 			expenses: prev.expenses.filter(exp => exp.id !== expenseId),
	// 		};
	// 	});
	// };

	return (
		<BudgetContext.Provider
			value={{ budgetAndExpenses: state, addExpense, deleteExpense, updateBudget }}
		>
			{children}
		</BudgetContext.Provider>
	);
}
