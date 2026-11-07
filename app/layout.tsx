import "./globals.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="m-4 bg-black text-white">
				<main className="max-w-screen-lg mx-auto">{children}</main>
			</body>
		</html>
	);
}
