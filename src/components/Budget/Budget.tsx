import './Budget.css';
type BudgetProps = { children: React.ReactNode };

export function Budget({ children }: BudgetProps): JSX.Element {
	return (
		<section className='budget'>
			<h1>Simplified Budget</h1>
			{children}
		</section>
	);
}
