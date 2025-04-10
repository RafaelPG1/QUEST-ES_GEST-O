// Configuração do quiz organizado por assuntos
const quizData = [
  {
    subject:
      "AULA 1 - Origem, Definições e Conceitos dos Sistemas de Informação",
    questions: [
      {
        question:
          "Segundo Freitas, a importância da informação aumenta de acordo com:",
        options: [
          "A quantidade de dados gerados diariamente.",
          "A evolução da complexidade da sociedade e das organizações.",
          "O número de funcionários em uma empresa.",
          "O volume de hardware utilizado.",
        ],
        answer: 1,
        feedback:
          "Resposta correta: B) A evolução da complexidade da sociedade e das organizações.",
      },
      {
        question:
          "De acordo com Padoveze, quais são as três funções básicas de um sistema?",
        options: [
          "Planejamento, execução e controle.",
          "Entrada, processamento e saída.",
          "Dados, informação e conhecimento.",
          "Hardware, software e pessoas.",
        ],
        answer: 1,
        feedback: "Resposta correta: B) Entrada, processamento e saída.",
      },
      {
        question:
          "Um sistema fechado, como proposto por Padoveze, é aquele que:",
        options: [
          "Interage constantemente com o ambiente externo.",
          "Não depende do ambiente externo para funcionar.",
          "Coleta dados brutos do ambiente externo.",
          "Transforma informações em bens e serviços.",
        ],
        answer: 1,
        feedback:
          "Resposta correta: B) Não depende do ambiente externo para funcionar.",
      },
      {
        question:
          "Qual dos seguintes elementos é considerado o mais importante em um sistema, segundo o material estudado?",
        options: [
          "Recursos ou entradas do sistema.",
          "Objetivos do sistema.",
          "Componentes do sistema.",
          "Saídas do sistema.",
        ],
        answer: 1,
        feedback: "Resposta correta: B) Objetivos do sistema.",
      },
      {
        question: "O ambiente de um sistema pode ser dividido em:",
        options: [
          "Local e global.",
          "Físico e virtual.",
          "Macroambiente e microambiente.",
          "Interno e externo.",
        ],
        answer: 2,
        feedback: "Resposta correta: C) Macroambiente e microambiente.",
      },
    ],
  },
  {
    subject:
      "AULA 2 - Gestão Pública, Governo Eletrônico e Cidade Digital Estratégica",
    questions: [
      {
        question: "O governo eletrônico (e-Gov) tem como um de seus pilares:",
        options: [
          "Aumentar a burocracia.",
          "Serviços online, como pagamento de impostos.",
          "Reduzir a transparência.",
          "Eliminar a participação cidadã.",
        ],
        answer: 1,
        feedback:
          "Resposta correta: B) Serviços online, como pagamento de impostos.",
      },
      {
        question: "Uma Cidade Digital Estratégica utiliza tecnologias como:",
        options: [
          "Internet das Coisas (IoT) e Big Data.",
          "Apenas redes sociais.",
          "Sistemas fechados sem conexão externa.",
          "Computadores pessoais sem internet.",
        ],
        answer: 0,
        feedback: "Resposta correta: A) Internet das Coisas (IoT) e Big Data.",
      },
      {
        question:
          "Qual é um dos principais desafios da gestão pública na era digital?",
        options: [
          "Exclusão digital.",
          "Aumento do uso de papel.",
          "Redução da necessidade de TI.",
          "Eliminação de serviços online.",
        ],
        answer: 0,
        feedback: "Resposta correta: A) Exclusão digital.",
      },
      {
        question: "O Gov.br é um exemplo de:",
        options: [
          "Sistema fechado de uma empresa privada.",
          "Plataforma de governo eletrônico no Brasil.",
          "Rede social para funcionários públicos.",
          "Sistema de gestão de estoque.",
        ],
        answer: 1,
        feedback:
          "Resposta correta: B) Plataforma de governo eletrônico no Brasil.",
      },
      {
        question: "Qual tecnologia é uma tendência para cidades digitais?",
        options: [
          "Blockchain.",
          "Máquinas de escrever.",
          "Sistemas analógicos.",
          "Fax.",
        ],
        answer: 0,
        feedback: "Resposta correta: A) Blockchain.",
      },
    ],
  },
  {
    subject:
      "AULA 3 - Metodologias de Desenvolvimento e Implantação de S.I - AULA 1",
    questions: [
      {
        question: "Qual é a primeira fase do desenvolvimento de sistemas?",
        options: [
          "Projeto lógico.",
          "Estudo preliminar (anteprojeto).",
          "Análise do sistema atual.",
          "Projeto físico.",
        ],
        answer: 1,
        feedback: "Resposta correta: B) Estudo preliminar (anteprojeto).",
      },
      {
        question: "Na fase de análise do sistema atual, o que é feito?",
        options: [
          "Desenvolve-se o software.",
          'Realiza-se um "raio-X" do sistema existente.',
          "Treinam-se os usuários.",
          "Define-se a base de dados.",
        ],
        answer: 1,
        feedback:
          'Resposta correta: B) Realiza-se um "raio-X" do sistema existente.',
      },
      {
        question: "O projeto lógico é comparado a:",
        options: [
          "Um manual de instruções.",
          "Um plano arquitetônico do sistema.",
          "Um relatório financeiro.",
          "Um treinamento para usuários.",
        ],
        answer: 1,
        feedback: "Resposta correta: B) Um plano arquitetônico do sistema.",
      },
      {
        question: "Qual é o objetivo da documentação em um projeto de SI?",
        options: [
          "Aumentar a dependência de pessoas específicas.",
          "Garantir a continuidade do projeto, mesmo com trocas de equipe.",
          "Eliminar a necessidade de manutenção.",
          "Reduzir a comunicação entre os envolvidos.",
        ],
        answer: 1,
        feedback:
          "Resposta correta: B) Garantir a continuidade do projeto, mesmo com trocas de equipe.",
      },
      {
        question:
          "Quais são as fontes de manutenção de um sistema após sua implantação?",
        options: [
          "Apenas correções de erros.",
          "Implementações, legislação e correções de erros.",
          "Apenas mudanças na equipe.",
          "Apenas atualizações de hardware.",
        ],
        answer: 1,
        feedback:
          "Resposta correta: B) Implementações, legislação e correções de erros.",
      },
    ],
  },
  {
    subject:
      "AULA 3.1 - Metodologias de Desenvolvimento e Implantação de S.I - AULA 2",
    questions: [
      {
        question:
          'Qual é uma vantagem do desenvolvimento próprio ("Faça Você Mesmo")?',
        options: [
          "Total controle sobre o produto.",
          "Menor custo inicial.",
          "Não exige expertise técnica.",
          "Rápida implementação.",
        ],
        answer: 0,
        feedback: "Resposta correta: A) Total controle sobre o produto.",
      },
      {
        question: "Na aquisição de sistemas prontos, uma desvantagem é:",
        options: [
          "Pode não atender 100% das necessidades da organização.",
          "Exige grande conhecimento técnico interno.",
          "Demora mais tempo que o desenvolvimento próprio.",
          "Não há suporte disponível.",
        ],
        answer: 0,
        feedback:
          "Resposta correta: A) Pode não atender 100% das necessidades da organização.",
      },
      {
        question: "A prototipagem é útil porque:",
        options: [
          "Elimina a necessidade de testes.",
          "Permite testar ideias com versões simples e baratas.",
          "Garante que o produto final não terá erros.",
          "Substitui a fase de documentação.",
        ],
        answer: 1,
        feedback:
          "Resposta correta: B) Permite testar ideias com versões simples e baratas.",
      },
      {
        question: "Qual é um desafio do desenvolvimento pelo usuário final?",
        options: [
          "Qualidade pode ficar comprometida sem padrões profissionais.",
          "Exige grandes investimentos em hardware.",
          "Não permite personalização.",
          "É mais lento que outras metodologias.",
        ],
        answer: 0,
        feedback:
          "Resposta correta: A) Qualidade pode ficar comprometida sem padrões profissionais.",
      },
      {
        question: "A manutenção evolutiva em sistemas refere-se a:",
        options: [
          "Adicionar novas funcionalidades.",
          "Corrigir bugs críticos.",
          "Ajustar o sistema a novas leis.",
          "Substituir o sistema por completo.",
        ],
        answer: 0,
        feedback: "Resposta correta: A) Adicionar novas funcionalidades.",
      },
    ],
  },
  {
    subject:
      "AULA 4 - Gestão e Continuidade de Projetos de Sistema de Tecnologia da Informação",
    questions: [
      {
        question: "Qual é o objetivo da Subfase 0.4 na FASE 0?",
        options: [
          "Definir o objetivo do projeto.",
          "Escolher a equipe multidisciplinar.",
          "Conhecer o local do projeto.",
          "Adotar conceitos de SI e TI.",
        ],
        answer: 0,
        feedback: "Resposta correta: A) Definir o objetivo do projeto.",
      },
      {
        question: "O COBIT é um framework focado em:",
        options: [
          "Gestão e controle de TI.",
          "Desenvolvimento de software ágil.",
          "Marketing digital.",
          "Recursos humanos.",
        ],
        answer: 0,
        feedback: "Resposta correta: A) Gestão e controle de TI.",
      },
      {
        question: "Qual é um dos domínios do COBIT?",
        options: [
          "Planejamento e Organização.",
          "Design de interfaces.",
          "Vendas e atendimento.",
          "Produção industrial.",
        ],
        answer: 0,
        feedback: "Resposta correta: A) Planejamento e Organização.",
      },
      {
        question:
          "Segundo o PMBOK, quantos grupos de processos existem no gerenciamento de projetos?",
        options: ["5.", "3.", "7.", "9."],
        answer: 0,
        feedback: "Resposta correta: A) 5.",
      },
      {
        question: "Qual é uma das áreas de conhecimento do PMBOK?",
        options: [
          "Gerenciamento de riscos.",
          "Design gráfico.",
          "Publicidade.",
          "Logística reversa.",
        ],
        answer: 0,
        feedback: "Resposta correta: A) Gerenciamento de riscos.",
      },
    ],
  },
  {
    subject: "AULA 5 - Integração, Qualidade e Divulgação da Informação",
    questions: [
      {
        question: "O paradoxo da produtividade em TI questiona:",
        options: [
          "Os reais benefícios dos investimentos em TI para a economia.",
          "A necessidade de hardware moderno.",
          "A velocidade da internet.",
          "O custo de treinamento de usuários.",
        ],
        answer: 0,
        feedback:
          "Resposta correta: A) Os reais benefícios dos investimentos em TI para a economia.",
      },
      {
        question: "Qual é um dos níveis de avaliação dos investimentos em TI?",
        options: [
          "Nível de firma.",
          "Nível de hardware.",
          "Nível de software.",
          "Nível de redes.",
        ],
        answer: 0,
        feedback: "Resposta correta: A) Nível de firma.",
      },
      {
        question: "A integração sistêmica ocorre quando:",
        options: [
          "Os sistemas trocam dados entre si.",
          "Apenas o sistema contábil recebe dados.",
          "Não há comunicação entre sistemas.",
          "Os sistemas são independentes.",
        ],
        answer: 0,
        feedback: "Resposta correta: A) Os sistemas trocam dados entre si.",
      },
      {
        question:
          "Qual símbolo é usado para representar módulos em diagramas de integração?",
        options: [
          "Quadrados ou retângulos.",
          "Círculos.",
          "Triângulos.",
          "Losangos.",
        ],
        answer: 0,
        feedback: "Resposta correta: A) Quadrados ou retângulos.",
      },
      {
        question:
          "Uma abordagem de avaliação de TI com ênfase na eficácia foca em:",
        options: [
          "Como as saídas atendem aos objetivos do sistema.",
          "A velocidade de processamento.",
          "O custo de implementação.",
          "A quantidade de dados armazenados.",
        ],
        answer: 0,
        feedback:
          "Resposta correta: A) Como as saídas atendem aos objetivos do sistema.",
      },
    ],
  },
  {
    subject: "AULA 6 - Conhecimento, Inteligência e Alinhamento Organizacional",
    questions: [
      {
        question: "O conhecimento organizacional também é chamado de:",
        options: [
          "Capital intelectual.",
          "Hardware empresarial.",
          "Sistema operacional.",
          "Rede de computadores.",
        ],
        answer: 0,
        feedback: "Resposta correta: A) Capital intelectual.",
      },
      {
        question: "A gestão do conhecimento visa:",
        options: [
          "Identificar, criar, renovar e aplicar conhecimentos estratégicos.",
          "Aumentar o número de reuniões.",
          "Reduzir o uso de tecnologia.",
          "Eliminar a necessidade de treinamentos.",
        ],
        answer: 0,
        feedback:
          "Resposta correta: A) Identificar, criar, renovar e aplicar conhecimentos estratégicos.",
      },
      {
        question: "A inteligência organizacional é um sistema de:",
        options: [
          "Monitoramento do ambiente interno e externo.",
          "Controle de estoque.",
          "Gestão de redes sociais.",
          "Produção de hardware.",
        ],
        answer: 0,
        feedback:
          "Resposta correta: A) Monitoramento do ambiente interno e externo.",
      },
      {
        question: "O alinhamento estratégico integra:",
        options: [
          "Planejamento Estratégico (PE) e Planejamento de TI (PETI).",
          "Marketing e vendas.",
          "Produção e logística.",
          "RH e finanças.",
        ],
        answer: 0,
        feedback:
          "Resposta correta: A) Planejamento Estratégico (PE) e Planejamento de TI (PETI).",
      },
      {
        question: "Qual é um dos construtos do alinhamento estratégico?",
        options: [
          "Tecnologia da Informação (TI).",
          "Móveis e equipamentos.",
          "Uniformes corporativos.",
          "Espaço físico.",
        ],
        answer: 0,
        feedback: "Resposta correta: A) Tecnologia da Informação (TI).",
      },
    ],
  },
  {
    subject: "AULA 7 - Sistema Empresa",
    questions: [
      {
        question: "A Teoria Geral de Sistemas (TGS) foi desenvolvida por:",
        options: ["Ludwig von Bertalanffy.", "Taylor.", "Fayol.", "Weber."],
        answer: 0,
        feedback: "Resposta correta: A) Ludwig von Bertalanffy.",
      },
      {
        question: "Um sistema aberto é aquele que:",
        options: [
          "Interage com o ambiente externo.",
          "Funciona sem qualquer intercâmbio externo.",
          "Não possui objetivos definidos.",
          "É independente de sua estrutura.",
        ],
        answer: 0,
        feedback: "Resposta correta: A) Interage com o ambiente externo.",
      },
      {
        question: "Qual é um exemplo de sistema real e tangível?",
        options: [
          "Máquinas e TI.",
          "Ideias abstratas.",
          "Conceitos filosóficos.",
          "Teorias administrativas.",
        ],
        answer: 0,
        feedback: "Resposta correta: A) Máquinas e TI.",
      },
      {
        question: "Qual é um dos objetivos principais das empresas?",
        options: [
          "Satisfazer clientes.",
          "Reduzir o número de funcionários.",
          "Eliminar a concorrência.",
          "Diminuir a qualidade dos produtos.",
        ],
        answer: 0,
        feedback: "Resposta correta: A) Satisfazer clientes.",
      },
      {
        question: "A abordagem sociotécnica considera:",
        options: [
          "Partes técnicas (hardware) e sociais (pessoas).",
          "Apenas aspectos financeiros.",
          "Somente tecnologia.",
          "Apenas recursos humanos.",
        ],
        answer: 0,
        feedback:
          "Resposta correta: A) Partes técnicas (hardware) e sociais (pessoas).",
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
