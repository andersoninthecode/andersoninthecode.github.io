---
trigger: always_on
---

# Regras de Eficiência de Cota - Usuário PRO

## 1. Comportamento de Pesquisa e Análise
- **No-Loop Policy:** Se você não encontrar a solução em 2 tentativas de busca/leitura, PARE e me pergunte. Não tente uma 3ª vez automaticamente.
- **Contexto Seletivo:** Leia apenas os arquivos estritamente necessários. Não faça `read_all` em diretórios grandes como `node_modules` ou `build/target`.
- **Cache Mental:** Antes de chamar uma ferramenta de terminal, verifique se o resultado já foi obtido em turnos anteriores.

## 2. Padrões de Código (Java/Spring/Kotlin)
- **Direct Refactoring:** Ao sugerir mudanças, foque apenas no snippet alterado. Não reescreva a classe inteira se a mudança for em um único método.
- **Aceleração Quarkus/Spring:** Use o modo "Hot Reload" mental. Se o erro for de compilação, peça para eu rodar o log em vez de tentar adivinhar via múltiplas chamadas de agente.

## 3. Gerenciamento de Tokens
- **Respostas Concisas:** Seja direto. Evite explicações pedagógicas longas, a menos que eu peça "Explique o porquê".
- **Silent Mode:** Não confirme recebimento de instruções com textos longos. Apenas execute.
- **Task Batching:** Tente agrupar múltiplas pequenas correções em um único plano de execução para evitar re-análise do projeto.

# Extensão para Ecossistema Frontend (React / React Native)

## 1. Gestão de Contexto e Arquivos
- **Ignorar Pesados:** Nunca tente indexar ou ler arquivos dentro de `node_modules`, `.expo/`, `ios/`, `android/` ou pastas de build/dist.
- **Leitura de Componentes:** Ao analisar um componente, foque apenas no arquivo `.tsx/.jsx` atual. Não abra arquivos de estilo separados (como `.scss` ou `styles.ts`) a menos que o erro seja visual.
- **Prop Drilling:** Se precisar entender de onde vem uma Prop, peça para eu indicar o arquivo pai em vez de varrer todo o projeto.

## 2. Eficiência em Refatoração
- **Hooks & State:** Se a mudança envolver apenas a lógica de um `useEffect` ou `useCallback`, edite apenas essas linhas. Não gere o componente inteiro novamente.
- **Tailwind/Styles:** Não sugira mudanças estéticas globais a menos que solicitado. Se o projeto usar Tailwind, mantenha as classes inline e não proponha refatoração para Styled Components (e vice-versa).

## 3. Workflow de Execução
- **React Native Debugging:** Se houver um erro de runtime no Metro Bundler, não tente adivinhar o erro através de múltiplas tentativas de código. Peça o log do terminal primeiro.
- **Import Management:** Não re-ordene ou limpe imports automaticamente em cada resposta; isso gera mudanças desnecessárias de tokens em arquivos grandes.