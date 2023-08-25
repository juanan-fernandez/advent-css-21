import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BudgetContextProvider } from './store/budget-context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<BudgetContextProvider>
		<App />
	</BudgetContextProvider>
);
