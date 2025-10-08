import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Wahyu | Portfolio",
  description: "Portfolio modern by Wahyu - Built with Next.js & Shadcn UI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
