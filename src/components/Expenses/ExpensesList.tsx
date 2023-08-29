import styles from './ExpensesList.module.css';
import { formatNumber } from '../../utils/numbers';
import { useBudgetCtx } from '../../store/useBudgetCtx';

export function ExpensesList(): JSX.Element {
	const budgetCtx = useBudgetCtx();
	const list = budgetCtx?.budgetAndExpenses.expenses.map(expense => {
		return (
			<li key={expense.id}>
				<p>{expense.title}</p>
				<p>{formatNumber(expense.amount)}</p>
				<span onClick={() => budgetCtx.deleteExpense(expense.id)}>
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
