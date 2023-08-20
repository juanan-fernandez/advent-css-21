export function AddExpense(): JSX.Element {
	return (
		<>
			<form>
				<label htmlFor='expenseDescription'>Expense</label>
				<input type='text' name='expenseDescription' placeholder='Expense' />
				<label htmlFor='expenseAmount'>Amount</label>
				<input type='number' name='expenseAmount' placeholder='0' />
				<button type='submit'>+</button>
			</form>
		</>
	);
}
