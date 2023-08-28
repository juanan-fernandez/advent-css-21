import style from './BudgetInput.module.css';
import { useContext, useEffect } from 'react';
import { BudgetContext } from '../../store/budget-context';
import { useInputFormat } from './hooks/useInputFormat';

export function BudgetInput(): JSX.Element {
	const budgetCtx = useContext(BudgetContext);
	const {
		getFocus,
		blurFocus,
		changeInputValue,
		inputVal: budget,
		rawNumber,
	} = useInputFormat();

	useEffect(() => {
		budgetCtx?.updateBudget(rawNumber);
	}, [rawNumber]);

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
