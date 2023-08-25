import { useState } from 'react';
import style from './BudgetInput.module.css';
import { formatNumber } from '../../utils/numbers';

export function BudgetInput(): JSX.Element {
	const [budget, setBudget] = useState<string | number>('');
	const [rawNumber, setRawNumber] = useState(0);

	const getFocus = (): void => {
		if (rawNumber) setBudget(rawNumber);
	};
	const updateBudget = (ev: React.ChangeEvent<HTMLInputElement>): void => {
		if (isNaN(Number(ev.target.value))) return;
		setBudget(ev.target.value);
		return;
	};

	const updateRawNumber = (): void => {
		setRawNumber(Number(budget));
		setBudget(prev => formatNumber(Number(prev)));
	};
	return (
		<div className={style.budget__container}>
			<label htmlFor='budget'>Budget Amount</label>
			<input
				type='text'
				id='budget'
				name='budget'
				placeholder='Enter your budget'
				min={0}
				onChange={updateBudget}
				onFocus={getFocus}
				onBlur={updateRawNumber}
				value={budget}
			/>
		</div>
	);
}
