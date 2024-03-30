export default function CommiteeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="h-fit bg-white">
			{children}
		</div>
	);
}
