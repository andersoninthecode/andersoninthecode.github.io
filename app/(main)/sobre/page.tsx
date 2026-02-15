export default function Sobre() {
  const specialities = [
    { title: "Desenvolvimento Backend", details: "Forte experiência com Java e Kotlin, construindo regras de negócio complexas e APIs escaláveis utilizando Spring Boot e Quarkus." },
    { title: "Observabilidade", details: "Domínio de logs, métricas (Prometheus/Grafana), tracing (Jaeger), dashboards e sistemas de alertas." },
    { title: "Arquitetura & Design", details: "Sólido conhecimento em Clean Architecture, DDD (Domain-Driven Design), Design Patterns e princípios SOLID." },
    { title: "Cloud & DevOps", details: "Infraestrutura AWS, conteinerização com Docker, orquestração Kubernetes e práticas de CI/CD (Jenkins, GitHub Actions, Argo CD)." },
    { title: "Bancos de Dados", details: "Experiência com bancos SQL (MySQL, PostgreSQL, Oracle) e NoSQL (MongoDB, Redis, Elasticsearch)." },
    { title: "Mensageria", details: "Sólida experiência com Kafka e RabbitMQ, incluindo estratégias de reprocessamento e DLQs." },
  ];

  const accomplishments = [
    "Projetou e sustentou plataformas logísticas de alta complexidade que suportam as operações de adquirência do PagBank;",
    "Implementou e evoluiu integrações com gateways de pagamento, parceiros logísticos e sistemas antifraude em ambientes de grande escala;",
    "Aplicou Clean Architecture e DDD para reduzir acoplamento e melhorar a manutenibilidade dos sistemas em múltiplos projetos;",
    "Desenvolveu e manteve APIs para vitrines e backoffice de e-commerce com altos requisitos de disponibilidade;",
    "Fortaleceu a qualidade do código por meio de testes automatizados com JUnit, reduzindo drasticamente regressões em produção.",
    "Contribuiu ativamente com análises de causa raiz e resolução de problemas de ponta a ponta em sistemas críticos."
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-16 py-8">
      {/* Intro Section */}
      <section className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Sobre <span className="text-indigo-500">Mim</span></h1>
        <div className="prose prose-zinc dark:prose-invert max-w-none text-lg leading-relaxed">
          <p>
            Sou Engenheiro de Software com mais de 5 anos de experiência, especializado em desenvolvimento backend e na sustentação de sistemas de alta complexidade.
            Atualmente no <strong>PagBank</strong>, atuo na plataforma de logística que dá suporte ao negócio de adquirência, projetando e sustentando fluxos críticos.
          </p>
          <p>
            Meu trabalho entrega consistentemente soluções escaláveis e de fácil manutenção, com forte foco em impacto no negócio.
            Sou motivado por desafios técnicos, mas sempre com uma compreensão clara do contexto de negócio, colaborando de perto com times de engenharia para transformar requisitos complexos em sistemas bem arquitetados.
          </p>
        </div>
      </section>

      {/* AI First Spotlight Section */}
      <section className="relative overflow-hidden rounded-2xl bg-indigo-50 dark:bg-indigo-950/20 p-8 md:p-12 border border-indigo-100 dark:border-indigo-500/20">

        <div className="relative z-10 space-y-6">
          <div className="flex items-center gap-3">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-600 dark:bg-indigo-400"></span>
            </span>
            <h2 className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-300">Nova Fronteira</h2>
          </div>

          <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Engenharia <span className="text-indigo-600 dark:text-indigo-400">AI-First</span> & Automação
          </h3>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Especialista na construção de aplicações onde a Inteligência Artificial é o <strong>core</strong>, não apenas um detalhe.
            Crio agentes autônomos e automações inteligentes que revolucionam fluxos de trabalho.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <div className="bg-white/60 dark:bg-card/40 backdrop-blur-md rounded-xl p-5 border border-indigo-100 dark:border-indigo-500/30 shadow-sm">
              <div className="font-bold text-indigo-900 dark:text-indigo-100 mb-2">LangChain4j Specialist</div>
              <p className="text-sm text-indigo-700/80 dark:text-indigo-200/70">
                Domínio profundo do framework para orquestração de LLMs em Java, integrando modelos cognitivos a sistemas corporativos robustos.
              </p>
            </div>
            <div className="bg-white/60 dark:bg-card/40 backdrop-blur-md rounded-xl p-5 border border-indigo-100 dark:border-indigo-500/30 shadow-sm">
              <div className="font-bold text-indigo-900 dark:text-indigo-100 mb-2">LangGraph4j & Agentes</div>
              <p className="text-sm text-indigo-700/80 dark:text-indigo-200/70">
                Design de fluxos complexos e cíclicos com <strong>LangGraph4j</strong>, criando sistemas multi-agentes que colaboram e persistem estado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialities Grid */}
      <section className="space-y-8">
        <h2 className="text-2xl font-bold border-l-4 border-indigo-500 pl-4">Outras Especialidades</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specialities.map((item, idx) => (
            <div key={idx} className="p-6 bg-card border border-border rounded-xl space-y-2 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-lg text-primary">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.details}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Accomplishments Section */}
      <section className="space-y-8 bg-indigo-50 dark:bg-indigo-950/20 p-8 rounded-2xl border border-indigo-100 dark:border-indigo-500/20">
        <h2 className="text-2xl font-bold">Conquistas & Impacto</h2>
        <ul className="grid grid-cols-1 gap-4">
          {accomplishments.map((text, idx) => (
            <li key={idx} className="flex items-start gap-3 text-muted-foreground">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-indigo-500 shrink-0" />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Tech Stack Cloud */}
      <section className="space-y-6 text-center">
        <h2 className="text-xl font-bold text-muted-foreground uppercase tracking-widest">Tecnologias em Destaque</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {["LangChain4j", "LangGraph4j", "AI Agents", "RAG", "Java", "Kotlin", "Spring Boot", "Quarkus", "Clean Architecture", "DDD", "Apache Kafka", "RabbitMQ", "Kubernetes", "Docker", "AWS", "PostgreSQL", "Oracle", "Redis", "JUnit"].map((tech) => (
            <span key={tech} className="px-4 py-1.5 bg-card border border-border rounded-full text-sm font-medium hover:border-indigo-500 transition-colors cursor-default">
              {tech}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
