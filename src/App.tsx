import './App.css';
import { Budget } from './components/Budget/Budget';
import { AddExpense } from './components/Budget/AddExpense/AddExpense';
import { BudgetInput } from './components/Budget/BudgetInput';
import { ExpensesList } from './components/Expenses/ExpensesList';
import { Balance } from './components/Balance/Balance';
import { useBudgetCtx } from './store/useBudgetCtx';
// const dummy: Expense[] = [
// 	{
// 		id: 'a1',
// 		title: 'Expenses a1',
// 		amount: 123,
// 	},
// 	{ id: 'a2', title: 'Expenses a1', amount: 234 },
// 	{ id: 'a3', title: 'Expenses a1', amount: 345 },
// 	{ id: 'a4', title: 'Expenses a1', amount: 2345.78 },
// 	{ id: 'a5', title: 'Expenses a1', amount: 2332.56 },
// 	{ id: 'a6', title: 'Expenses a1', amount: 12.78 },
// 	{ id: 'a7', title: 'Expenses a1', amount: 2344.76 },
// ];

function App(): JSX.Element {
	const budgetCtx = useBudgetCtx();

	const getExpensesAmount = (): number => {
		const amount = budgetCtx!.budgetAndExpenses.expenses.reduce(
			(sum, exp) => sum + exp.amount,
			0
		);
		return amount;
	};

	return (
		<>
			<Budget>
				<BudgetInput />
				<AddExpense />
			</Budget>
			<ExpensesList expensesList={budgetCtx!.budgetAndExpenses.expenses} />
			<Balance
				budget={budgetCtx!.budgetAndExpenses.budget}
				expensesAmount={getExpensesAmount()}
			/>
		</>
	);
}

export default App;
