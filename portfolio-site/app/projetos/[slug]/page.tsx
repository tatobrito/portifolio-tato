import Link from "next/link"
import { notFound } from "next/navigation"

// Dados de exemplo para os projetos
const projetos = [
  {
    id: 1,
    slug: "sistema-gestao",
    titulo: "Sistema de Gestão",
    descricao: "Um sistema completo para gerenciamento de empresas com dashboard, relatórios e controle de usuários.",
    tecnologias: ["React", "Node.js", "MongoDB"],
    detalhes:
      "Este sistema foi desenvolvido para atender às necessidades de empresas de médio porte que precisam gerenciar seus recursos, funcionários e finanças de forma eficiente. O dashboard principal oferece uma visão geral do desempenho da empresa, com gráficos e métricas importantes. O sistema inclui módulos para gestão de usuários, controle de estoque, finanças e relatórios personalizados.",
    imagens: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
  },
  {
    id: 2,
    slug: "app-financas",
    titulo: "App de Finanças",
    descricao: "Aplicativo mobile para controle financeiro pessoal com gráficos e categorização de despesas.",
    tecnologias: ["React Native", "Firebase", "Chart.js"],
    detalhes:
      "Este aplicativo foi criado para ajudar pessoas a gerenciarem suas finanças pessoais de forma simples e eficaz. Com uma interface intuitiva, o usuário pode registrar suas receitas e despesas, categorizá-las e visualizar relatórios detalhados sobre seus gastos. O aplicativo também oferece recursos de planejamento financeiro, como metas de economia e alertas de orçamento.",
    imagens: ["/placeholder.svg?height=400&width=600", "/placeholder.svg?height=400&width=600"],
  },
  // Outros projetos...
]

export default function ProjetoDetalhe({ params }: { params: { slug: string } }) {
  const projeto = projetos.find((p) => p.slug === params.slug)

  if (!projeto) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link href="/projetos" className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-6">
        ← Voltar para projetos
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">{projeto.titulo}</h1>

      <div className="flex flex-wrap gap-2 mb-6">
        {projeto.tecnologias.map((tech, index) => (
          <span key={index} className="text-sm px-3 py-1 bg-blue-900/40 rounded-full text-blue-200">
            {tech}
          </span>
        ))}
      </div>

      <p className="text-xl text-blue-100 mb-8">{projeto.descricao}</p>

      <div className="card mb-8">
        <h2 className="text-2xl font-bold mb-4">Sobre o Projeto</h2>
        <p className="text-gray-300">{projeto.detalhes}</p>
      </div>

      <h2 className="text-2xl font-bold mb-4">Imagens do Projeto</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {projeto.imagens.map((img, index) => (
          <div key={index} className="card p-2">
            <img
              src={img || "/placeholder.svg"}
              alt={`Screenshot ${index + 1} do projeto ${projeto.titulo}`}
              className="w-full h-auto rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

