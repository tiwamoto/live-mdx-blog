import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from '../lib/utils';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ui/mode-toggle";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const navItems = [
  { label: 'Home', href: '/home' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, 'min-h-dvh flex flex-col')}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <header className="container h-16 flex items-center border-b justify-between">
          <h1 className="font-bold">LOGO</h1>
          
          <ul className="flex gap-4">
            {navItems.map((item) => 
              <li key={item.label}>
                <Button variant="ghost" asChild>
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              </li>
            )}
          </ul>
        </header>

        <main className="container flex-1 grid relative">
          {children}
        </main>
        <footer className="container sticky top-full h-16 flex justify-between items-center border-t">
          <p>&copy; takuya</p>

          <ModeToggle></ModeToggle>
        </footer>
      </ThemeProvider>
      </body>
    </html>
  );
}