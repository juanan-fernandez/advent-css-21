import { useState } from 'react';
import { formatNumber } from '../../../utils/numbers';

type useInputFormatResponse = {
	getFocus: () => void;
	blurFocus: () => void;
	changeInputValue: (ev: React.ChangeEvent<HTMLInputElement>) => void;
	inputVal: string | number;
	rawNumber: number;
};

export function useInputFormat(): useInputFormatResponse {
	const [inputVal, setInputVal] = useState<string | number>('');
	const [rawNumber, setRawNumber] = useState(0);

	const getFocus = (): void => {
		rawNumber ? setInputVal(rawNumber) : setInputVal('');
	};

	const changeInputValue = (ev: React.ChangeEvent<HTMLInputElement>): void => {
		if (isNaN(Number(ev.target.value))) return;
		setInputVal(ev.target.value);
		return;
	};

	const blurFocus = (): void => {
		inputVal ? setRawNumber(Number(inputVal)) : setRawNumber(0);
		setInputVal(prev => formatNumber(Number(prev)));
	};

	return { getFocus, blurFocus, changeInputValue, inputVal, rawNumber };
}
