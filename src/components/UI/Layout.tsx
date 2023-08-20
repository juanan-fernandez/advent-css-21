type LayOutProps = { children: React.ReactNode };

export function LayOut({ children }: LayOutProps): JSX.Element {
	return <main>{children}</main>;
}
