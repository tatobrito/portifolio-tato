import Link from "next/link"

// Dados de exemplo para os projetos
const projetos = [
  {
    id: 1,
    titulo: "Sistema de Gestão",
    descricao: "Um sistema completo para gerenciamento de empresas com dashboard, relatórios e controle de usuários.",
    tecnologias: ["React", "Node.js", "MongoDB"],
    link: "/projetos/sistema-gestao",
  },
  {
    id: 2,
    titulo: "App de Finanças",
    descricao: "Aplicativo mobile para controle financeiro pessoal com gráficos e categorização de despesas.",
    tecnologias: ["React Native", "Firebase", "Chart.js"],
    link: "/projetos/app-financas",
  },
  {
    id: 3,
    titulo: "E-commerce",
    descricao: "Loja virtual completa com catálogo de produtos, carrinho de compras e sistema de pagamento.",
    tecnologias: ["Next.js", "Stripe", "Tailwind CSS"],
    link: "/projetos/ecommerce",
  },
  {
    id: 4,
    titulo: "Blog Pessoal",
    descricao: "Blog com sistema de postagens, comentários e painel administrativo.",
    tecnologias: ["Astro", "Markdown", "SQLite"],
    link: "/projetos/blog",
  },
  {
    id: 5,
    titulo: "API RESTful",
    descricao: "API completa para integração com diversos serviços e aplicações.",
    tecnologias: ["Express", "PostgreSQL", "JWT"],
    link: "/projetos/api",
  },
  {
    id: 6,
    titulo: "Dashboard Analytics",
    descricao: "Painel de visualização de dados com gráficos interativos e relatórios personalizados.",
    tecnologias: ["Vue.js", "D3.js", "Python"],
    link: "/projetos/dashboard",
  },
]

export default function Projetos() {
  return (
    <div className="py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center">Meus Projetos</h1>
      <p className="text-blue-200 text-center mb-12">Uma seleção dos meus trabalhos recentes</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projetos.map((projeto) => (
          <Link href={projeto.link} key={projeto.id}>
            <div className="card h-full">
              <h2 className="text-xl font-bold mb-2 text-blue-200">{projeto.titulo}</h2>
              <p className="text-gray-300 mb-4">{projeto.descricao}</p>
              <div className="flex flex-wrap gap-2">
                {projeto.tecnologias.map((tech, index) => (
                  <span key={index} className="text-xs px-2 py-1 bg-blue-900/40 rounded-full text-blue-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

