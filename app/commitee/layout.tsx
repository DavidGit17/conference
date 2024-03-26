export default function PublicationLayout
({
	children,
}: {
	children: React.ReactNode;
}) {
	return (

			<div className="w-full max-h-screen bg-white">
				{children}
			</div>
		
	);
}
