import styles from './ExpensesList.module.css';
import { Expense } from '../../types/expenses.type';

type Expenses = Expense[];

type ExpensesListProps = {
	expensesList: Expenses;
};

export function ExpensesList({ expensesList }: ExpensesListProps): JSX.Element {
	const list = expensesList.map(expense => {
		return (
			<li key={expense.id}>
				<p>{expense.title}</p>
				<p>{expense.amount}</p>
				<span>
					<img src='/images/trash.svg' />
				</span>
			</li>
		);
	});
	return (
		<section className={styles.list}>
			<h2>Expenses</h2>
			<ul>{list}</ul>
		</section>
	);
}
