import Image from "next/image"
import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, Youtube, Codepen, Send } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <div className="mb-6 relative">
        <div className="w-24 h-24 rounded-full overflow-hidden bg-yellow-400 flex items-center justify-center">
          <Image
            src="/placeholder.svg?height=96&width=96"
            alt="Foto de perfil"
            width={96}
            height={96}
            className="object-cover"
          />
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">Seu Nome</h1>
      <p className="text-blue-200 mb-6">Desenvolvedor & Entusiasta de Tecnologia</p>

      <div className="flex space-x-3 mb-8">
        <Link href="https://twitter.com" className="social-icon" aria-label="Twitter">
          <Twitter size={20} />
        </Link>
        <Link href="https://github.com" className="social-icon" aria-label="GitHub">
          <Github size={20} />
        </Link>
        <Link href="https://codepen.io" className="social-icon" aria-label="CodePen">
          <Codepen size={20} />
        </Link>
        <Link href="https://youtube.com" className="social-icon" aria-label="YouTube">
          <Youtube size={20} />
        </Link>
        <Link href="https://linkedin.com" className="social-icon" aria-label="LinkedIn">
          <Linkedin size={20} />
        </Link>
        <Link href="https://t.me" className="social-icon" aria-label="Telegram">
          <Send size={20} />
        </Link>
        <Link href="mailto:email@exemplo.com" className="social-icon" aria-label="Email">
          <Mail size={20} />
        </Link>
      </div>

      <Link
        href="/projetos"
        className="px-6 py-3 bg-blue-700 hover:bg-blue-600 rounded-full font-medium transition-colors duration-200"
      >
        Ver Projetos
      </Link>
    </div>
  )
}

