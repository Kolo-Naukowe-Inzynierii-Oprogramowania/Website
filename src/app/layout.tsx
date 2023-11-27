import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import DefaultHeader from "@/components/headers/DefaultHeader";
import DefaultFooter from "@/components/footers/DefaultFooter";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Koło Naukowe Inżynierii Oprogramowania',
  description: 'Koło Naukowe Inżynierii Oprogramowania przy Wydziale Informatyki Politechniki Białostockiej',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={"h-full"}>
      <body className={inter.className + " min-h-screen h-full"}>
        <DefaultHeader />
        {children}
        <DefaultFooter />
      </body>
    </html>
  )
}
