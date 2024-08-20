import "../styles/globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Game Resource Sharing Website",
  description: "Explore and share the best game resources.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body className="bg-black text-white">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
