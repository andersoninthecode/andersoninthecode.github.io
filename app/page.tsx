import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-8 py-12 md:py-24">
      <div className="space-y-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-primary">
          Consultoria em <span className="text-indigo-500">IA Corporativa</span> & Engenharia de Alto Desempenho
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Especialista na construção de soluções inteligentes, escaláveis e eficientes.
          Ajudo empresas a integrar Inteligência Artificial ao core do negócio com foco em performance e resultados reais.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/posts"
          className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/25 hover:scale-105"
        >
          Minhas Publicações
        </Link>
        <Link
          href="https://linkedin.com/in/andersoninthecode"
          target="_blank"
          className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium border border-border rounded-full hover:bg-card transition-all hover:scale-105"
        >
          Agendar Consultoria
        </Link>
      </div>

      <div className="w-full max-w-5xl pt-12">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative aspect-video w-full bg-card border border-border rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/hero-image.png"
              alt="Visualização abstrata de IA Corporativa e Engenharia de Software"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </div>
        </div>
      </div>

      {/* Expertise Section */}
      <div className="w-full max-w-5xl pt-24 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Especialidades e <span className="text-indigo-500">Tecnologias</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Domínio técnico para resolver desafios complexos de backend e inteligência artificial.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Java & Kotlin", label: "Backend Core" },
            { name: "Spring Boot", label: "Arquitetura Microservices" },
            { name: "Quarkus", label: "High Performance" },
            { name: "Apache Kafka", label: "Event-Driven Systems" },
            { name: "Kubernetes", label: "Cloud Native" },
            { name: "AWS", label: "Infrastructure" },
            { name: "SQL & NoSQL", label: "Data Architecture" },
            { name: "Clean Arch", label: "Maintainability" }
          ].map((tech, i) => (
            <div key={i} className="p-4 bg-card border border-border rounded-xl text-left hover:border-indigo-500/50 transition-colors group">
              <div className="font-bold text-primary group-hover:text-indigo-500 transition-colors">{tech.name}</div>
              <div className="text-xs text-muted-foreground">{tech.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust/Experience Section */}
      <div className="w-full max-w-5xl pt-24 pb-12">
        <div className="bg-indigo-600 rounded-3xl p-8 md:p-12 text-white text-left relative overflow-hidden">
          <div className="relative z-10 space-y-6 max-w-2xl">
            <h2 className="text-3xl font-bold">Experiência em Grandes Escalas</h2>
            <p className="text-indigo-100 text-lg">
              Atualmente no <strong>PagBank</strong>, sustentando plataformas logísticas críticas que suportam milhões de transações.
              Especialista em transformar complexidade técnica em valor de negócio através de código robusto e arquitetura evolutiva.
            </p>
            <Link
              href="/sobre"
              className="inline-flex items-center text-white font-bold hover:underline gap-2"
            >
              Ver perfil completo <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-indigo-500 rounded-full blur-3xl opacity-50"></div>
        </div>
      </div>
    </div>
  );
}
