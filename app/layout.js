import "./globals.css";

export const metadata = {
  title: "CreteXchange | Building Tomorrow. Nothing Wasted.",
  description:
    "CreteXchange connects drivers, facilities, contractors and public-sector partners through verified construction-recycling destinations and material recovery intelligence.",
  metadataBase: new URL("https://www.cretexchange.com"),
  openGraph: {
    title: "CreteXchange",
    description: "The digital ecosystem for construction recycling and material exchange.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
