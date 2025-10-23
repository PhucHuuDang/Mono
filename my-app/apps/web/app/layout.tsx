import { Geist, Geist_Mono } from "next/font/google";

import "@workspace/ui/globals.css";
import { Providers } from "../components/providers";
import { Toaster } from "sonner";
import { Metadata } from "next";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Mono Blog | Home",
    template: "%s | Mono Blog",
  },
  description: "Mono Blog is a blog about the latest trends in technology",

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  openGraph: {
    images: ["/logo.png"],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mono Blog",
    description: "Mono Blog is a blog about the latest trends in technology",
    images: ["/logo.png"],
  },

  authors: [
    { name: "Harry Dang", url: "https://www.facebook.com/HP2K2Official/" },
  ],

  creator: "Harry Dang",
  publisher: "Harry Dang",

  // metadataBase: new URL("https://mono-blog.com"),
  metadataBase: new URL("http://localhost:3000"),

  applicationName: "Mono Blog",
  keywords: [
    "Mono Blog",
    "Blog",
    "Technology",
    "News",
    "NextJS Blog",
    "Liquid Glass",
    "AI Blog",
    "Modern Blog",
    "Less is more",
    "Clean Blog",
    "Typescript",
    "TailwindCSS",
    "Shadcn UI",
    "React",
    "NextJS",
    "Vercel",
    "Lucide Icons",
    "Framer Motion",
    "Tailwind CSS",
    "Shadcn UI",
    "React",
    "NextJS",
    "Vercel",
    "Lucide Icons",
    "Framer Motion",
    "Tailwind CSS",
    "Shadcn UI",
    "React",
    "NextJS",
    "Vercel",
    "Lucide Icons",
    "Framer Motion",
  ],
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body className={`${fontSans.variable}  font-sans antialiased `}>
        <Toaster richColors position="top-right" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
