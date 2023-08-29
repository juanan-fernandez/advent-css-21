import './App.css';
import { Budget } from './components/Budget/Budget';
import { AddExpense } from './components/Budget/AddExpense/AddExpense';
import { BudgetInput } from './components/Budget/BudgetInput';
import { ExpensesList } from './components/Expenses/ExpensesList';
import { Balance } from './components/Balance/Balance';

function App(): JSX.Element {
	return (
		<>
			<Budget>
				<BudgetInput />
				<AddExpense />
			</Budget>
			<ExpensesList />
			<Balance />
		</>
	);
}

export default App;
