import style from './BudgetInput.module.css';

export function BudgetInput(): JSX.Element {
	return (
		<div className={style.budget__container}>
			<label htmlFor='budget'>Budget Amount</label>
			<input type='number' id='budget' name='budget' placeholder='Enter your budget' />
		</div>
	);
}
