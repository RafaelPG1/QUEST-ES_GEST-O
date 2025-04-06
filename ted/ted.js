// Configuração do quiz
const questions = [
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
      "A resposta correta é: O conjunto de técnicas, processos e ferramentas utilizadas para gerenciar informações e dados.",
  },
  {
    question:
      "Qual é a principal característica do modelo de desenvolvimento de software Cascata (Waterfall)?",
    options: [
      "Iterações curtas e entregas contínuas de software.",
      "Desenvolvimento sem a necessidade de documentação formal.",
      "Implementação baseada exclusivamente em metodologias ágeis.",
      "Um processo linear e sequencial, no qual cada fase depende da conclusão da anterior.",
      "Desenvolvimento paralelo de múltiplos módulos de um sistema.",
    ],
    answer: 3,
    feedback:
      "A resposta correta é: Um processo linear e sequencial, no qual cada fase depende da conclusão da anterior.",
  },
  {
    question:
      "Qual das seguintes metodologias de desenvolvimento de software é baseada em ciclos curtos e interações contínuas com o cliente?",
    options: [
      "MPS.BR.",
      "Modelo Cascata (Waterfall).",
      "Modelo em V.",
      "Espiral.",
      "Scrum.",
    ],
    answer: 4,
    feedback: "A resposta correta é: Scrum.",
  },
  {
    question:
      "O que caracteriza a Fase 0 na gestão de projetos de sistemas de informação?",
    options: [
      "Substituição da equipe de TI a cada novo projeto.",
      "Planejamento estratégico, definição de escopo e viabilidade do projeto.",
      "Implementação imediata do software sem planejamento prévio.",
      "Desenvolvimento de código sem necessidade de análise prévia.",
      "Eliminação da necessidade de avaliação de riscos.",
    ],
    answer: 1,
    feedback:
      "A resposta correta é: Planejamento estratégico, definição de escopo e viabilidade do projeto.",
  },
  {
    question:
      "Qual das alternativas abaixo é um dos principais desafios da continuidade de projetos de TI?",
    options: [
      "Falta de documentação adequada e transferência de conhecimento.",
      "Foco exclusivo na segurança da informação.",
      "Uso excessivo de ferramentas open-source.",
      "Excesso de testes antes da implantação.",
      "Dependência exclusiva de metodologias ágeis.",
    ],
    answer: 0,
    feedback:
      "A resposta correta é: Falta de documentação adequada e transferência de conhecimento.",
  },
  {
    question:
      "O que significa a integração de sistemas de informação dentro de uma organização?",
    options: [
      "Utilizar múltiplas bases de dados isoladas para segurança máxima.",
      "Desenvolver softwares apenas para áreas específicas da empresa.",
      "Evitar o compartilhamento de informações entre setores.",
      "Conectar diferentes sistemas e processos para garantir um fluxo de dados contínuo e eficiente.",
      "Criar novos sistemas sem considerar os legados existentes.",
    ],
    answer: 3,
    feedback:
      "A resposta correta é: Conectar diferentes sistemas e processos para garantir um fluxo de dados contínuo e eficiente.",
  },
  {
    question:
      "Qual das alternativas NÃO representa uma vantagem da adoção de TI nas empresas?",
    options: [
      "Maior agilidade e automação dos processos internos.",
      "Melhor tomada de decisão baseada em dados.",
      "Redução da necessidade de segurança da informação.",
      "Melhoria na comunicação interna e externa.",
      "Aumento da competitividade no mercado.",
    ],
    answer: 2,
    feedback:
      "A resposta correta é: Redução da necessidade de segurança da informação.",
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
      "A resposta correta é: Um conjunto de sistemas integrados que ajudam na gestão empresarial.",
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
      "A resposta correta é: A utilização da tecnologia para melhorar a prestação de serviços e a transparência governamental.",
  },
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
      "A resposta correta é: A necessidade de investimentos em infraestrutura tecnológica e conectividade acessível.",
  },
]


// Variáveis do quiz
let userAnswers = new Array(questions.length).fill(null);
let quizSubmitted = false;

// Elementos do DOM
const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementById('results');

// Mostra todas as questões de uma vez
function showAllQuestions() {
    let questionsHTML = '';
    
    questions.forEach((question, index) => {
        questionsHTML += `
            <div class="question-container">
                <div class="question-number">Questão ${index + 1} de ${questions.length}</div>
                <div class="question-text">${question.question}</div>
                <div class="options">
                    ${question.options.map((option, optionIndex) => {
                        let optionClass = 'option';
                        if (userAnswers[index] === optionIndex) {
                            optionClass += ' selected';
                        }
                        if (quizSubmitted) {
                            if (optionIndex === question.answer) {
                                optionClass += ' correct';
                            } else if (userAnswers[index] === optionIndex && userAnswers[index] !== question.answer) {
                                optionClass += ' incorrect';
                            }
                        }
                        return `<div class="${optionClass}" onclick="selectOption(${index}, ${optionIndex})">${option}</div>`;
                    }).join('')}
                </div>
                ${quizSubmitted && userAnswers[index] !== null ? `
                    <div class="feedback ${userAnswers[index] === question.answer ? 'correct-feedback' : 'incorrect-feedback'}">
                        ${question.feedback}
                    </div>
                ` : ''}
            </div>
        `;
    });
    
    quizContainer.innerHTML = questionsHTML;
}

// Seleciona uma opção
window.selectOption = function(questionIndex, optionIndex) {
    if (!quizSubmitted) {
        userAnswers[questionIndex] = optionIndex;
        showAllQuestions();
    }
}

// Mostra os resultados
function showResults() {
    quizSubmitted = true;
    showAllQuestions();
    
    let score = 0;
    questions.forEach((question, index) => {
        if (userAnswers[index] === question.answer) {
            score++;
        }
    });
    
    const percentage = Math.round((score / questions.length) * 100);
    
    resultsContainer.innerHTML = `
        <h2>Resultado do Quiz</h2>
        <div class="score">Você acertou ${score} de ${questions.length} questões</div>
        <div class="percentage">${percentage}%</div>
        <p>${percentage >= 70 ? 'Parabéns! Excelente desempenho.' : 'Revise os conceitos para melhorar seu desempenho.'}</p>
    `;
    resultsContainer.style.display = 'block';
    submitButton.style.display = 'none';
}

// Event listener para o botão de enviar
submitButton.addEventListener('click', showResults);

// Inicializa o quiz
showAllQuestions();