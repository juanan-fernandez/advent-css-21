import style from './BudgetInput.module.css';

import { useInputFormat } from './AddExpense/useInputFormat';

export function BudgetInput(): JSX.Element {
	const {
		getFocus,
		blurFocus,
		changeInputValue,
		inputVal: budget,
		rawNumber,
	} = useInputFormat();

	// const getFocus = (): void => {
	// 	rawNumber ? setBudget(rawNumber) : setBudget('');
	// };
	// const updateBudget = (ev: React.ChangeEvent<HTMLInputElement>): void => {
	// 	if (isNaN(Number(ev.target.value))) return;
	// 	setBudget(ev.target.value);
	// 	return;
	// };

	// const updateRawNumber = (): void => {
	// 	budget ? setRawNumber(Number(budget)) : setRawNumber(0);
	// 	setBudget(prev => formatNumber(Number(prev)));
	// };
	return (
		<div className={style.budget__container}>
			<label htmlFor='budget'>Budget Amount</label>
			<input
				type='text'
				id='budget'
				name='budget'
				placeholder='Enter your budget'
				min={0}
				onChange={changeInputValue}
				onFocus={getFocus}
				onBlur={blurFocus}
				value={budget}
			/>
		</div>
	);
}
