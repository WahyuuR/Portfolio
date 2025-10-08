import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import PageTransition from "@/components/PageTransition";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "Wahyu | Portfolio",
  description: "Portfolio modern by Wahyu - Built with Next.js & Shadcn UI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <Navbar />
          <PageTransition>
            <main className="pt-20">{children}</main>
            <Toaster richColors position="bottom-right" /> {/* ✅ Tambahkan ini */}
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
