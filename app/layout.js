import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "Wahyu’s Portfolio",
  description: "Website portfolio built with Next.js and shadcn/ui",
  icons: {
    icon: "/logo.svg", // ganti sesuai nama file kamu
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className=" bg-background text-foreground antialiased">
        {/* Theme Provider mengontrol mode gelap/terang */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>

          {/* Toaster Sonner untuk notifikasi */}
          <Toaster richColors position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
