import type { Metadata } from "next"
import { Manrope, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/sonner"

const manrope = Manrope({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Aamir Jawadwala — Data & Analytics Engineer | Applied AI",
  description:
    "Data Engineer with three years of experience building production pipelines on PySpark, Airflow, dbt, and Snowflake. Bringing the same rigor to analytics engineering and applied AI systems.",
  metadataBase: new URL("https://aamir-jawadwala.vercel.app"),
  openGraph: {
    title: "Aamir Jawadwala — Data & Analytics Engineer | Applied AI",
    description:
      "Data Engineer with three years of experience building production pipelines on PySpark, Airflow, dbt, and Snowflake. Bringing the same rigor to analytics engineering and applied AI systems.",
    url: "https://aamir-jawadwala.vercel.app",
    siteName: "Aamir Jawadwala",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aamir Jawadwala — Data & Analytics Engineer | Applied AI",
    description:
      "Data Engineer with three years of experience building production pipelines on PySpark, Airflow, dbt, and Snowflake.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${geistMono.variable} antialiased selection:bg-accent-brand/30 selection:text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>{children}</TooltipProvider>
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}