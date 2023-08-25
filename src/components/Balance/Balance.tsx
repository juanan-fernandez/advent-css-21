import styles from './Balance.module.css';
import { formatNumber } from '../../utils/numbers';
export function Balance(): JSX.Element {
	const test = 3333;
	return (
		<footer className={styles.balance}>
			<div className={styles.balance__income}>
				<p>Income</p>
				<h1>{formatNumber(420333)}</h1>
			</div>
			<div className={styles.balance__expenses}>
				<p>Expenses</p>
				<h1>{formatNumber(3333)}</h1>
			</div>
			<div
				className={`${styles.balance__balance} ${
					test > 0
						? styles['balance__balance--positive']
						: styles['balance__balance--negative']
				}`}
			>
				<p>Balance</p>
				<h1>{formatNumber(test)}</h1>
			</div>
		</footer>
	);
}
