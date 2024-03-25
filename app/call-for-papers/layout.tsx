export default function CallForPapersLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (

			<div className="w-full h-screen bg-white">
				{children}
			</div>
	);
}
