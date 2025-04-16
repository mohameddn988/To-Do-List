import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/ui/theme-provider";


const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribut="class" defaultTheme="system" enableSystem disableTransitionOnChange> 
        {children}
        <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
