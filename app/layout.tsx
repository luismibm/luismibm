import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<Analytics />
			<SpeedInsights />
			<body className="m-4 bg-black text-white">
				<main className="max-w-screen-lg mx-auto">{children}</main>
			</body>
		</html>
	);
}
