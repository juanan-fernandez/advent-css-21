import styles from './Balance.module.css';
import { formatNumber } from '../../utils/numbers';

type BalancePropTypes = {
	budget: number;
	expensesAmount: number;
};

export function Balance({ budget, expensesAmount }: BalancePropTypes): JSX.Element {
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
