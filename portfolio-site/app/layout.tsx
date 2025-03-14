import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Meu Portfólio",
  description: "Portfólio pessoal com projetos e informações",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} min-h-screen bg-gradient text-white`}>
        <div className="flex flex-col min-h-screen">
          <header className="border-b border-blue-900/20 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <Link href="/" className="text-xl font-semibold hover:text-blue-300 transition">
                &gt; seuNome
              </Link>
              <nav className="flex gap-6">
                <Link href="/projetos" className="hover:text-blue-300 transition">
                  Projetos
                </Link>
                <Link href="/sobre" className="hover:text-blue-300 transition">
                  Sobre
                </Link>
              </nav>
            </div>
          </header>

          <main className="flex-grow container mx-auto px-4 py-8">{children}</main>

          <footer className="border-t border-blue-900/20 py-6 text-center text-sm text-blue-300/60">
            <div className="container mx-auto px-4">
              <p>
                © {new Date().getFullYear()} •{" "}
                <Link href="/termos" className="hover:text-blue-300 transition">
                  Termos
                </Link>{" "}
                •{" "}
                <Link href="/status" className="hover:text-blue-300 transition">
                  Status
                </Link>
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}



import './globals.css'