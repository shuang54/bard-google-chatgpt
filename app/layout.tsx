'use client';
import { useEffect, useRef } from 'react';
import ClientOnly from './components/ClientOnly'
import Navbar from './components/Navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let theme = window.localStorage.getItem("theme");
  if (theme == null) { theme = "white" }
  return (
    <html lang="en">
      <body className={`${inter.className} ${theme} dark:bg-black` }>
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
