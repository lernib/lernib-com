import type { Metadata } from "next";
import { moderat_medium } from "@/utils/font";
import "./globals.css";
import InDev from "@/components/InDev";

export const metadata: Metadata = {
  title: "Tutor with Lernib",
  description: "Learn however and whatever you like",
	icons: "/favicon.jpg",
	twitter: {
		card: "summary_large_image",
		description: "Learn however and whatever you like",
		images: ["https://lernib.com/favicon.jpg"]
	}
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={moderat_medium.className}>
				{children}
				<InDev />
			</body>
    </html>
  );
}
