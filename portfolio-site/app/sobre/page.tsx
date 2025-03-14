import Image from "next/image"

export default function Sobre() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Sobre Mim</h1>

      <div className="flex flex-col md:flex-row gap-8 mb-12">
        <div className="md:w-1/3 flex justify-center">
          <div className="w-48 h-48 rounded-full overflow-hidden bg-yellow-400 flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=192&width=192"
              alt="Foto de perfil"
              width={192}
              height={192}
              className="object-cover"
            />
          </div>
        </div>

        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold mb-4 text-blue-200">Olá, eu sou Seu Nome!</h2>
          <p className="text-gray-300 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl eget ultricies tincidunt, nisl
            nisl aliquam nisl, eget ultricies nisl nisl eget nisl. Nullam auctor, nisl eget ultricies tincidunt, nisl
            nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
          </p>
          <p className="text-gray-300">
            Nullam auctor, nisl eget ultricies tincidunt, nisl nisl aliquam nisl, eget ultricies nisl nisl eget nisl.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="card">
          <h2 className="text-xl font-bold mb-4 text-blue-200">Habilidades</h2>
          <ul className="space-y-2 text-gray-300">
            <li>• Desenvolvimento Frontend (React, Next.js)</li>
            <li>• Desenvolvimento Backend (Node.js, Express)</li>
            <li>• Bancos de Dados (MongoDB, PostgreSQL)</li>
            <li>• UI/UX Design</li>
            <li>• DevOps</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold mb-4 text-blue-200">Experiência</h2>
          <div className="space-y-4 text-gray-300">
            <div>
              <h3 className="font-medium">Desenvolvedor Full Stack</h3>
              <p className="text-sm text-blue-300">Empresa XYZ • 2021 - Presente</p>
            </div>
            <div>
              <h3 className="font-medium">Desenvolvedor Frontend</h3>
              <p className="text-sm text-blue-300">Empresa ABC • 2018 - 2021</p>
            </div>
            <div>
              <h3 className="font-medium">Estagiário de Desenvolvimento</h3>
              <p className="text-sm text-blue-300">Empresa DEF • 2017 - 2018</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="text-xl font-bold mb-4 text-blue-200">Educação</h2>
        <div className="space-y-4 text-gray-300">
          <div>
            <h3 className="font-medium">Bacharelado em Ciência da Computação</h3>
            <p className="text-sm text-blue-300">Universidade XYZ • 2014 - 2018</p>
          </div>
          <div>
            <h3 className="font-medium">Especialização em Desenvolvimento Web</h3>
            <p className="text-sm text-blue-300">Instituto ABC • 2019 - 2020</p>
          </div>
        </div>
      </div>
    </div>
  )
}

