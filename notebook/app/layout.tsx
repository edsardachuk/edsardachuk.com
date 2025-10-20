import { DraftAlert } from "@/components/misc/DraftAlert"
import { HeaderNav } from "@/components/navigation/HeaderNav"
import type { Metadata } from "next"
import type { ReactNode } from "react"

import "@/styles/globals.css"

export const metadata: Metadata = {
  title: {
    default: "Drupal Notes by Ed Sardachuk",
    template: "%s | Drupal Notes",
  },
  description: "Drupal Notes by Ed Sardachuk",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-sky-50 text-slate-800 font-sans leading-relaxed antialiased">
        <DraftAlert />
        <div className="">
          <HeaderNav />
          <main className="container py-10 px-5 mx-auto max-w-screen-md">{children}</main>
        </div>
      </body>
    </html>
  )
}
