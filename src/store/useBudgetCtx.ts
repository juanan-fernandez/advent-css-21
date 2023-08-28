import { useContext } from 'react';
import { BudgetContext } from './budget-context';

export function useBudgetCtx() {
	const budgetCtx = useContext(BudgetContext);
	return budgetCtx;
}
