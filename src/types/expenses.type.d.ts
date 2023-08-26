export interface Expense {
	id: string;
	title: string;
	amount: number;
}

export interface BudgetAndExpenseType {
	budget: number;
	expenses: Expense[];
}
