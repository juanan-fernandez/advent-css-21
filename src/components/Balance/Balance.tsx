import styles from './Balance.module.css';
import { formatNumber } from '../../utils/numbers';
import { useBudgetCtx } from '../../store/useBudgetCtx';

export function Balance(): JSX.Element {
	const budgetCtx = useBudgetCtx();
	const budget = budgetCtx!.budgetAndExpenses.budget;

	const getExpensesAmount = (): number => {
		const amount = budgetCtx!.budgetAndExpenses.expenses.reduce(
			(sum, exp) => sum + exp.amount,
			0
		);
		return amount;
	};
	const expensesAmount = getExpensesAmount();
	const balance = budget - expensesAmount;
	return (
		<footer className={styles.balance}>
			<div className={styles.balance__income}>
				<p>Income</p>
				<h1>{formatNumber(budget)}</h1>
			</div>
			<div className={styles.balance__expenses}>
				<p>Expenses</p>
				<h1>{formatNumber(expensesAmount)}</h1>
			</div>
			<div
				className={`${styles.balance__balance} ${
					balance > 0
						? styles['balance__balance--positive']
						: styles['balance__balance--negative']
				}`}
			>
				<p>Balance</p>
				<h1>{formatNumber(balance)}</h1>
			</div>
		</footer>
	);
}
