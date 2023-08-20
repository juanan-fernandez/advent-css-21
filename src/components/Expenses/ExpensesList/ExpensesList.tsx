import { Expense } from '../../../types/expenses.type';

type Expenses = Expense[];

type ExpensesListProps = {
	expensesList: Expenses;
};

export function ExpensesList({ expensesList }: ExpensesListProps): JSX.Element {
	const list = expensesList.map(expense => {
		return <li key={expense.id}>{expense.amount}</li>;
	});
	return <ul>{list}</ul>;
}
