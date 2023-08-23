import styles from './AddExpense.module.css';
export function AddExpense(): JSX.Element {
	return (
		<>
			<form className={styles.form}>
				<div className={styles.form__expense}>
					<label htmlFor='expenseDescription'>Expense</label>
					<input type='text' name='expenseDescription' placeholder='Expense' />
				</div>
				<div className={styles.form__amount}>
					<label htmlFor='expenseAmount'>Amount</label>
					<input type='number' name='expenseAmount' placeholder='0' />
					<button type='submit'>+</button>
				</div>
			</form>
		</>
	);
}
