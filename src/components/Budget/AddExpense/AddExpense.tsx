import styles from './AddExpense.module.css';
import { useInputFormat } from './useInputFormat';
export function AddExpense(): JSX.Element {
	const { getFocus, blurFocus, changeInputValue, inputVal, rawNumber } =
		useInputFormat();

	return (
		<>
			<form className={styles.form}>
				<div className={styles.form__expense}>
					<label htmlFor='expenseDescription'>Expense</label>
					<input type='text' name='expenseDescription' placeholder='Expense' />
				</div>
				<div className={styles.form__amount}>
					<label htmlFor='expenseAmount'>Amount</label>
					<input
						type='string'
						name='expenseAmount'
						placeholder='0'
						onFocus={getFocus}
						onBlur={blurFocus}
						onChange={changeInputValue}
						value={inputVal}
					/>
					<button type='submit'>+</button>
				</div>
			</form>
		</>
	);
}
