import styles from './Balance.module.css';

export function Balance(): JSX.Element {
	return (
		<footer className={styles.balance}>
			<div className={styles.balance__income}>
				<p>Income</p>
				<h1>42000</h1>
			</div>
			<div>
				<p>Expenses</p>
				<h1>42000</h1>
			</div>
			<div>
				<p>Balance</p>
				<h1>42000</h1>
			</div>
		</footer>
	);
}
