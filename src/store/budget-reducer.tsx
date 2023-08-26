import { BudgetAndExpenseType, Expense } from '../types/expenses.type';

export enum budgetActionKind {
	ADD_EXPENSE = 'ADD_EXPENSE',
	DELETE_EXPENSE = 'DELETE_EXPENSE',
	UPDATE_BUDGET = 'UPDATE_BUDGET',
}

type budgetAddExpenseAction = { type: budgetActionKind.ADD_EXPENSE; payload: Expense };
type budgetDeleteExpenseAction = {
	type: budgetActionKind.DELETE_EXPENSE;
	payload: string;
};
type budgetUpdateAction = {
	type: budgetActionKind.UPDATE_BUDGET;
	payload: number;
};

type budgetAction =
	| budgetAddExpenseAction
	| budgetDeleteExpenseAction
	| budgetUpdateAction;

// const UpdateStateByAction = {
// 	[budgetActionKind.ADD_EXPENSE]: function (
// 		state: BudgetAndExpenseType,
// 		payload: Expense
// 	): BudgetAndExpenseType {
// 		return { ...state, expenses: [...state.expenses, payload] };
// 	},

// 	[budgetActionKind.DELETE_EXPENSE]: function (
// 		state: BudgetAndExpenseType,
// 		payload: string
// 	): BudgetAndExpenseType {
// 		return { ...state, expenses: state.expenses.filter(exp => exp.id !== payload) };
// 	},

// 	[budgetActionKind.UPDATE_BUDGET]: function (
// 		state: BudgetAndExpenseType,
// 		payload:  number
// 	): BudgetAndExpenseType {
// 		return { ...state, budget: payload };
// 	},
// };

export const budgetInitialState: BudgetAndExpenseType = { budget: 0, expenses: [] };

export function budgetReducer(
	state: BudgetAndExpenseType,
	action: budgetAction
): BudgetAndExpenseType {
	const { type, payload } = action;

	// const updateAction = UpdateStateByAction[type];
	// return updateAction ? updateAction(state, payload) : budgetInitialState;

	switch (type) {
		case budgetActionKind.ADD_EXPENSE:
			return {
				...state,
				expenses: [...state.expenses, payload],
			};

		case budgetActionKind.DELETE_EXPENSE:
			return {
				...state,
				expenses: state.expenses.filter(exp => exp.id !== payload),
			};

		case budgetActionKind.UPDATE_BUDGET:
			return {
				...state,
				budget: payload,
			};
		default:
			return state;
	}
}
