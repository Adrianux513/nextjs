import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignIn, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "119205",
  description: "Adrian Owczarek 119205",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <header>
          <h1>Clover Corp</h1>
          <UserButton showName />
        </header>
        <main>
          <SignedOut>
            <SignIn routing="hash" />
          </SignedOut>
          <SignedIn>
           {children}
        </SignedIn>
        </main>
      </body>
    </html>
    </ClerkProvider>
  );
}
