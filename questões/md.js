// Configuração do quiz organizado por assuntos
const quizData = [
  {
    subject: "Sistemas de Informação",
    questions: [
      {
        question:
          "Com relação aos sistemas, assinale a alternativa que apresenta corretamente a sua definição:",
        options: [
          "Os sistemas expressam o percurso da informação dentro das organizações ao longo da sua história.",
          "Sistema é a matéria-prima para a elaboração de relatórios, sendo responsável por levantar todas as informações, sempre com foco no ambiente externo.",
          "Sistema é um aglomerado de partes que interagem apenas para atingir um fim específico.",
          "Podemos considerar sistema um conjunto de dados sem interação, onde cada departamento é responsável pelas informações que lança.",
          "Considera-se sistema um conjunto de partes em constante interação, formando um todo orientado para determinados fins e em permanente relação de interdependência com o ambiente externo.",
        ],
        answer: 4,
        feedback:
          "Resposta correta: E) Considera-se sistema um conjunto de partes em constante interação, formando um todo orientado para determinados fins e em permanente relação de interdependência com o ambiente externo.",
      },

      {
        question:
          "Considerando a abordagem sobre sistemas abertos, assinale a assertiva correta:",
        options: [
          "Os sistemas fechados não possuem interação com o ambiente externo para que suas funções sejam desenvolvidas.",
          "Uma empresa pode ser vista como um sistema fechado, pois não há interação direta com o ambiente externo.",
          "O foco principal dos sistemas abertos é auxiliar os gestores na tomada de decisões dentro da organização.",
          "O foco principal dos sistemas fechados é auxiliar os gestores na tomada de decisões dentro da organização.",
          "Uma empresa pode ser vista como um sistema aberto, já que existe interação direta com o ambiente externo.",
        ],
        answer: 4,
        feedback:
          "Resposta correta: E) Uma empresa pode ser vista como um sistema aberto, já que existe interação direta com o ambiente externo.",
      },
      
      {
        question:
          "Assinale a alternativa que apresenta os elementos básicos que integram um sistema:",
        options: [
          "Sistemas abertos e sistemas fechados.",
          "Entradas, processamento e saída.",
          "Macroambiente e microambiente.",
          "Modelo convencional, modelo dinâmico e modelo de sistema de informação com tecnologia da informação.",
          "Objetivos do sistema, ambiente do sistema ou processamento, recursos ou entradas do sistema, componentes do sistema, saídas do sistema, administração ou controle do sistema e avaliação do sistema.",
        ],
        answer: 4,
        feedback:
          "Resposta correta: E) Objetivos do sistema, ambiente do sistema ou processamento, recursos ou entradas do sistema, componentes do sistema, saídas do sistema, administração ou controle do sistema e avaliação do sistema.",
      },
      {
        question:
          "O modelo dinâmico de Sistema de Informação foi criado com a intenção de:",
        options: [
          "Ser um artifício indispensável, contribuindo de forma efetiva para a melhoria dos lucros da empresa.",
          "Substituir o modelo convencional. Seu objetivo era evitar que o sistema se tornasse engessado, sendo mais prático e atual, proporcionando melhorias para as organizações.",
          "Auxiliar os gestores na tomada de decisões dentro da organização, em níveis operacional, gerencial ou estratégico.",
          "Criar um modelo totalmente diferente, pois o anterior apresentava erros e não trazia lucro suficiente.",
          "Dificultar a propagação de informações, com o objetivo de mantê-las em sigilo.",
        ],
        answer: 1,
        feedback:
          "Resposta correta: B) Substituir o modelo convencional. Seu objetivo era evitar que o sistema se tornasse engessado, sendo mais prático e atual, proporcionando melhorias para as organizações.",
      },
      {
        question:
          "De acordo com os diferentes tipos de modelo de Sistema de Informação, é correto afirmar que o modelo mais completo é o:",
        options: [
          "Modelo dinâmico de Sistemas da Informação.",
          "Modelo convencional de Sistemas da Informação.",
          "Modelo de Sistema de Informação com Tecnologia da Informação.",
          "Modelo abstrato de dados.",
          "Modelos abertos e fechados.",
        ],
        answer: 2,
        feedback:
          "Resposta correta: C) Modelo de Sistema de Informação com Tecnologia da Informação.",
      },
    ],
  },
  {
    subject:
      "Gestão Pública, Governo Eletrônico e Cidade Digital Estratégica (Aula 2 - ATIVIDADE)",
    questions: [
      {
        question:
          "Qual é um dos principais desafios para a implementação de uma Cidade Digital Estratégica?",
        options: [
          "A resistência da população ao uso de tecnologias móveis.",
          "A indisponibilidade total de infraestrutura de internet no país.",
          "A falta de interesse do setor privado na colaboração com o governo.",
          "A impossibilidade de utilizar tecnologias de código aberto para sistemas públicos.",
          "A necessidade de investimentos em infraestrutura tecnológica e conectividade acessível.",
        ],
        answer: 4,
        feedback:
          "Resposta correta: E) A necessidade de investimentos em infraestrutura tecnológica e conectividade acessível.",
      },
      {
        question: "O conceito de Governo Eletrônico (e-Gov) refere-se a:",
        options: [
          "A utilização da tecnologia para melhorar a prestação de serviços e a transparência governamental.",
          "A informatização completa das repartições públicas sem interação com os cidadãos.",
          "A substituição de funcionários públicos por inteligência artificial.",
          "A implementação de redes sociais para propaganda governamental.",
          "A privatização de serviços públicos para otimizar a administração.",
        ],
        answer: 0,
        feedback:
          "Resposta correta: A) A utilização da tecnologia para melhorar a prestação de serviços e a transparência governamental.",
      },
      {
        question:
          "Qual das alternativas melhor descreve o conceito de Tecnologia da Informação (TI)?",
        options: [
          "Apenas o hardware utilizado para armazenar dados em uma organização.",
          "O conjunto de técnicas, processos e ferramentas utilizadas para gerenciar informações e dados.",
          "A aplicação de robótica na produção industrial.",
          "Somente os sistemas operacionais e aplicativos utilizados por empresas.",
          "Apenas as redes de comunicação utilizadas em uma organização.",
        ],
        answer: 1,
        feedback:
          "Resposta correta: B) O conjunto de técnicas, processos e ferramentas utilizadas para gerenciar informações e dados.",
      },
      {
        question:
          "No contexto da Tecnologia da Informação, o que é um ERP (Enterprise Resource Planning)?",
        options: [
          "Um sistema operacional exclusivo para servidores de alto desempenho.",
          "Um software de código aberto para a criação de páginas web.",
          "Um conjunto de sistemas integrados que ajudam na gestão empresarial.",
          "Um modelo de banco de dados para armazenar informações não estruturadas.",
          "Uma ferramenta utilizada exclusivamente para o controle financeiro das empresas.",
        ],
        answer: 2,
        feedback:
          "Resposta correta: C) Um conjunto de sistemas integrados que ajudam na gestão empresarial.",
      },
      {
        question:
          "Qual das alternativas não representa uma vantagem da adoção de TI nas empresas?",
        options: [
          "Maior agilidade e automação dos processos internos.",
          "Melhor tomada de decisão baseada em dados.",
          "Redução da necessidade de segurança da informação.",
          "Melhoria na comunicação interna e externa.",
          "Aumento da competitividade no mercado.",
        ],
        answer: 2,
        feedback:
          "Resposta correta: C) Redução da necessidade de segurança da informação.",
      },
    ],
  },
  {
    subject:
      "Integração, Qualidade e Divulgação da Informação (Aula 5 - ATIVIDADE)",
    questions: [
      {
        question:
          "O que significa a integração de sistemas de informação dentro de uma organização?",
        options: [
          "Evitar o compartilhamento de informações entre setores.",
          "Criar novos sistemas sem considerar os legados existentes.",
          "Conectar diferentes sistemas e processos para garantir um fluxo de dados contínuo e eficiente.",
          "Desenvolver softwares apenas para áreas específicas da empresa.",
          "Utilizar múltiplas bases de dados isoladas para segurança máxima.",
        ],
        answer: 2,
        feedback:
          "Resposta correta: C) Conectar diferentes sistemas e processos para garantir um fluxo de dados contínuo e eficiente.",
      },
      {
        question:
          "Qual das alternativas abaixo é um dos principais desafios da continuidade de projetos de TI?",
        options: [
          "Falta de documentação adequada e transferência de conhecimento.",
          "Excesso de testes antes da implantação.",
          "Foco exclusivo na segurança da informação.",
          "Dependência exclusiva de metodologias ágeis.",
          "Uso excessivo de ferramentas open-source.",
        ],
        answer: 0,
        feedback:
          "Resposta correta: A) Falta de documentação adequada e transferência de conhecimento.",
      },
      {
        question:
          "Qual é a principal característica do modelo de desenvolvimento de software Cascata (Waterfall)?",
        options: [
          "Desenvolvimento paralelo de múltiplos módulos de um sistema.",
          "Iterações curtas e entregas contínuas de software.",
          "Desenvolvimento sem a necessidade de documentação formal.",
          "Implementação baseada exclusivamente em metodologias ágeis.",
          "Um processo linear e sequencial, no qual cada fase depende da conclusão da anterior.",
        ],
        answer: 4,
        feedback:
          "Resposta correta: E) Um processo linear e sequencial, no qual cada fase depende da conclusão da anterior.",
      },
      {
        question:
          "Qual das seguintes metodologias de desenvolvimento de software é baseada em ciclos curtos e interações contínuas com o cliente?",
        options: [
          "Modelo Cascata (Waterfall).",
          "Espiral.",
          "MPS.BR.",
          "Modelo em V.",
          "Scrum.",
        ],
        answer: 4,
        feedback: "Resposta correta: E) Scrum.",
      },
      {
        question:
          "O que caracteriza a Fase 0 na gestão de projetos de sistemas de informação?",
        options: [
          "Substituição da equipe de TI a cada novo projeto.",
          "Desenvolvimento de código sem necessidade de análise prévia.",
          "Planejamento estratégico, definição de escopo e viabilidade do projeto.",
          "Implementação imediata do software sem planejamento prévio.",
          "Eliminação da necessidade de avaliação de riscos.",
        ],
        answer: 2,
        feedback:
          "Resposta correta: C) Planejamento estratégico, definição de escopo e viabilidade do projeto.",
      },
    ],
  },
]

// Variáveis do quiz
let userAnswers = []
let quizSubmitted = false

// Elementos do DOM
const quizContainer = document.getElementById("quiz-container")
const submitButton = document.getElementById("submit")
const resultsContainer = document.getElementById("results")

// Inicializa o quiz
function initializeQuiz() {
  userAnswers = []
  quizSubmitted = false

  // Cria array plano de todas as questões
  const allQuestions = []
  quizData.forEach((subject) => {
    allQuestions.push(...subject.questions)
  })

  // Inicializa array de respostas
  userAnswers = new Array(allQuestions.length).fill(null)

  // Mostra todas as questões
  showAllQuestions()
}

// Mostra todas as questões agrupadas por assunto
function showAllQuestions() {
  let questionsHTML = ""
  let questionIndex = 0

  quizData.forEach((subject) => {
    questionsHTML += `<div class="subject-title">${subject.subject}</div>`

    subject.questions.forEach((question, qIndex) => {
      questionsHTML += `
                <div class="question-container">
                    <div class="question-number">Questão ${
                      questionIndex + 1
                    }</div>
                    <div class="question-text">${question.question}</div>
                    <div class="options">
                        ${question.options
                          .map((option, optionIndex) => {
                            let optionClass = "option"
                            if (userAnswers[questionIndex] === optionIndex) {
                              optionClass += " selected"
                            }
                            if (quizSubmitted) {
                              if (optionIndex === question.answer) {
                                optionClass += " correct"
                              } else if (
                                userAnswers[questionIndex] === optionIndex &&
                                userAnswers[questionIndex] !== question.answer
                              ) {
                                optionClass += " incorrect"
                              }
                            }
                            return `<div class="${optionClass}" onclick="selectOption(${questionIndex}, ${optionIndex})">${String.fromCharCode(
                              65 + optionIndex
                            )}) ${option}</div>`
                          })
                          .join("")}
                    </div>
                    ${
                      quizSubmitted && userAnswers[questionIndex] !== null
                        ? `
                        <div class="feedback ${
                          userAnswers[questionIndex] === question.answer
                            ? "correct-feedback"
                            : "incorrect-feedback"
                        }">
                            ${question.feedback}
                        </div>
                    `
                        : ""
                    }
                </div>
            `
      questionIndex++
    })
  })

  quizContainer.innerHTML = questionsHTML
}

// Seleciona uma opção
window.selectOption = function (questionIndex, optionIndex) {
  if (!quizSubmitted) {
    userAnswers[questionIndex] = optionIndex
    showAllQuestions()
  }
}

// Mostra os resultados
function showResults() {
  quizSubmitted = true
  showAllQuestions()

  let score = 0
  let questionIndex = 0

  quizData.forEach((subject) => {
    subject.questions.forEach((question) => {
      if (userAnswers[questionIndex] === question.answer) {
        score++
      }
      questionIndex++
    })
  })

  const totalQuestions = questionIndex
  const percentage = Math.round((score / totalQuestions) * 100)

  resultsContainer.innerHTML = `
        <h2>Resultado do Quiz</h2>
        <div class="score">Você acertou ${score} de ${totalQuestions} questões</div>
        <div class="percentage">${percentage}%</div>
        <p>${
          percentage >= 70
            ? "Parabéns! Excelente desempenho."
            : "Revise os conceitos para melhorar seu desempenho."
        }</p>
    `
  resultsContainer.style.display = "block"
  submitButton.style.display = "none"
}

// Event listener para o botão de enviar
submitButton.addEventListener("click", showResults)

// Inicializa o quiz quando a página carrega
document.addEventListener("DOMContentLoaded", initializeQuiz)
