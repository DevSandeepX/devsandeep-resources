import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { ClerkProvider } from "@/services/clerk/components/ClerkProvider";

export const metadata: Metadata = {
  title: "DevNest | Learn Web Development, Coding Tutorials & Tech Blogs",
  description:
    "DevNest is a modern developer platform to learn web development, explore coding tutorials, tech blogs, and practical projects using React, Next.js & more.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`antialiased`}
        >
          <Toaster position="top-right" />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
