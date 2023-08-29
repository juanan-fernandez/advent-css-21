import styles from './AddExpense.module.css';
import { useRef } from 'react';
import { useInputFormat } from '../hooks/useInputFormat';
import { useBudgetCtx } from '../../../store/useBudgetCtx';
import { Expense } from '../../../types/expenses.type';
export function AddExpense(): JSX.Element {
	const budgetCtx = useBudgetCtx();
	const expenseTitleRef = useRef<HTMLInputElement>(null);
	const expenseAmountRef = useRef<HTMLInputElement>(null);

	const { getFocus, blurFocus, changeInputValue, clearInput, inputVal, rawNumber } =
		useInputFormat();

	const handleSubmit = (ev: React.FormEvent) => {
		ev.preventDefault();

		const newExpense: Expense = {
			id: crypto.randomUUID(),
			title: expenseTitleRef.current!.value,
			amount: rawNumber,
		};
		budgetCtx?.addExpense(newExpense);
		clearInput();
		expenseTitleRef.current!.value = '';
		expenseTitleRef.current?.focus();
	};
	return (
		<>
			<form className={styles.form} onSubmit={handleSubmit}>
				<div className={styles.form__expense}>
					<label htmlFor='expenseDescription'>Expense</label>
					<input
						type='text'
						name='expenseTitle'
						id='expenseTitle'
						placeholder='Expense'
						ref={expenseTitleRef}
					/>
				</div>
				<div className={styles.form__amount}>
					<label htmlFor='expenseAmount'>Amount</label>
					<input
						type='string'
						name='expenseAmount'
						id='expenseAmount'
						placeholder='0'
						onFocus={getFocus}
						onBlur={blurFocus}
						onChange={changeInputValue}
						value={inputVal}
						ref={expenseAmountRef}
					/>
					<button type='submit'>+</button>
				</div>
			</form>
		</>
	);
}
