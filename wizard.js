const wizardContainer = document.getElementById("wizard-container");
const wizardCta = document.getElementById("wizard-cta");
const goToCheckupBtn = document.getElementById("go-to-checkup");

const wizardData = [
    {
        title: "1. Por que é necessário o homem se cuidar?",
        sub: "Pense de forma ampla: corpo, mente, emoções, relações e espiritualidade.",
        options: [
            {
                value: "nunca",
                label: "Nunca parei pra pensar muito nisso",
                feedback: "Muita gente passa anos sem refletir sobre isso. Mas quando o homem começa a se cuidar, ele não está só evitando doenças: está escolhendo viver com mais energia, qualidade e presença para quem ele ama."
            },
            {
                value: "adiar",
                label: "Sei que é importante, mas sempre deixo pra depois",
                feedback: "Adiar o cuidado é comum, mas é justamente na prevenção que a gente evita problemas físicos, crises emocionais e até situações espirituais de vazio e falta de sentido."
            },
            {
                value: "prioridade",
                label: "É prioridade pra mim",
                feedback: "Que bom! Cuidar da saúde física, mental, emocional e espiritual como prioridade reduz o risco de doenças e aumenta a chance de uma vida mais longa, ativa e com propósito."
            },
            {
                value: "so-quando-dor",
                label: "Só procuro ajuda quando a situação fica ruim",
                feedback: "Isso acontece com muitos homens. O problema é que, quando a dor chega, às vezes a doença já está avançada. A prevenção é justamente para não chegar nesse ponto."
            }
        ]
    },
    {
        title: "2. Quando você ouve falar em saúde do homem, o que vem primeiro na cabeça?",
        sub: "Saúde masculina é muito mais do que um único exame.",
        options: [
            {
                value: "prostata",
                label: "Só penso em exame de próstata",
                feedback: "Esse exame é importante em determinadas idades, mas saúde do homem também inclui coração, alimentação, sono, ansiedade, emoções, relações e espiritualidade."
            },
            {
                value: "fisica",
                label: "Penso mais em saúde física",
                feedback: "Ótimo ponto de partida. Vale lembrar que o corpo sente o impacto da mente, das emoções, do estresse e da forma como lidamos com a vida no geral."
            },
            {
                value: "mental",
                label: "Penso em saúde mental e emocional",
                feedback: "Fundamental. Homens também sofrem com ansiedade, depressão, estresse, sensação de fracasso e solidão – e isso merece tanto cuidado quanto uma dor física."
            },
            {
                value: "integral",
                label: "Penso em tudo junto: corpo, mente, relações e espiritualidade",
                feedback: "Essa visão integral é a base do bem-estar: prevenção de doenças físicas, cuidado com sentimentos, boa convivência social e um sentido maior de vida."
            }
        ]
    },
    {
        title: "3. Você já sentiu que precisava de ajuda e ficou em silêncio?",
        sub: "Pode ser ajuda médica, psicológica, espiritual ou simplesmente um desabafo.",
        options: [
            {
                value: "sim-muito",
                label: "Sim, muitas vezes",
                feedback: "Guardar tudo só pra si pesa demais. Buscar ajuda não é sinal de fraqueza, é um ato de coragem e responsabilidade com a própria vida."
            },
            {
                value: "sim-algumas",
                label: "Sim, algumas vezes",
                feedback: "Isso mostra que às vezes você tenta resolver tudo sozinho. Conversar com pessoas de confiança e com profissionais pode evitar que problemas cresçam."
            },
            {
                value: "poucas",
                label: "Quase nunca, costumo pedir ajuda",
                feedback: "Isso é ótimo. Ter a liberdade de pedir ajuda é um fator protetor importante contra doenças mentais, abuso de álcool, crises de ansiedade e até problemas físicos."
            }
        ]
    },
    {
        title: "4. Hoje, qual dessas áreas você sente que mais precisa de cuidado?",
        sub: "Não existe resposta certa ou errada, existe sinceridade.",
        options: [
            {
                value: "corpo",
                label: "Corpo físico (peso, cansaço, dores, exames)",
                feedback: "Cuidar do corpo com exames em dia, atividade física e alimentação adequada previne infarto, diabetes, pressão alta, câncer e muitas outras doenças."
            },
            {
                value: "mente",
                label: "Mente / emoções (ansiedade, tristeza, estresse)",
                feedback: "Saúde mental em dia diminui o risco de depressão, abuso de substâncias, crises de raiva e até problemas de sono e estômago."
            },
            {
                value: "relacoes",
                label: "Relações / vida social (família, amigos, convivência)",
                feedback: "Ter contatos saudáveis e rede de apoio protege contra solidão, isolamento, vícios e piora de quadros emocionais."
            },
            {
                value: "espiritualidade",
                label: "Espiritualidade / propósito de vida",
                feedback: "Buscar sentido, valores e espiritualidade (independente de religião) ajuda a enfrentar crises, perdas e dificuldades com mais equilíbrio."
            },
            {
                value: "todas",
                label: "Sinto que todas as áreas precisam de atenção",
                feedback: "Reconhecer isso é um passo importante. O bom é que pequenas mudanças em cada área, somadas, geram uma grande transformação na saúde geral."
            }
        ]
    },
    {
        title: "5. Topa dar o próximo passo?",
        sub: "Ver com mais clareza quais exames e atitudes podem te ajudar nesse momento.",
        options: [
            {
                value: "sim",
                label: "Sim, quero ver os exames e orientações",
                feedback: "Perfeito! A seguir, você será levado para um questionário rápido com sugestões de exames e atitudes práticas para cuidar melhor de você."
            },
            {
                value: "talvez",
                label: "Estou em dúvida, mas quero entender melhor",
                feedback: "Sem problema. O próximo passo não te obriga a nada: é só informação clara para você decidir com calma, junto com profissionais de saúde, o que faz sentido pra sua realidade."
            },
            {
                value: "nao",
                label: "Ainda não sei se estou pronto, mas posso dar uma olhada",
                feedback: "Tudo bem. Às vezes o primeiro passo é só olhar as possibilidades. O importante é saber que existe caminho de cuidado disponível pra você."
            }
        ]
    }
];

function renderWizardQuestion(index) {
    if (!wizardContainer) return;
    if (index >= wizardData.length) return;

    const stepData = wizardData[index];

    const stepEl = document.createElement("div");
    stepEl.className = "wizard-step";
    stepEl.dataset.index = index;

    const titleEl = document.createElement("div");
    titleEl.className = "wizard-question-title";
    titleEl.textContent = stepData.title;

    const subEl = document.createElement("div");
    subEl.className = "wizard-question-sub";
    subEl.textContent = stepData.sub;

    const optionsWrap = document.createElement("div");
    optionsWrap.className = "wizard-options";

    stepData.options.forEach(opt => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "wizard-option";
        btn.textContent = opt.label;

        btn.addEventListener("click", () => {
            if (stepEl.dataset.answered === "true") return;
            stepEl.dataset.answered = "true";

            // Desabilita os botões dessa pergunta
            const allBtns = optionsWrap.querySelectorAll("button");
            allBtns.forEach(b => b.disabled = true);

            // Mostra feedback
            const fb = document.createElement("div");
            fb.className = "wizard-feedback";
            fb.textContent = opt.feedback;
            stepEl.appendChild(fb);

            // Renderiza próxima pergunta, se houver
            if (index < wizardData.length - 1) {
                renderWizardQuestion(index + 1);
            } else if (wizardCta) {
                // Última pergunta respondida => mostra CTA
                wizardCta.style.display = "block";
            }
        });

        optionsWrap.appendChild(btn);
    });

    stepEl.appendChild(titleEl);
    stepEl.appendChild(subEl);
    stepEl.appendChild(optionsWrap);
    wizardContainer.appendChild(stepEl);
}

// Renderiza a primeira pergunta ao carregar
if (wizardContainer) {
    renderWizardQuestion(0);
}

// Botão para ir para a página de exames
if (goToCheckupBtn) {
    goToCheckupBtn.addEventListener("click", () => {
        // Marca que o usuário fez a etapa inicial (usado na outra página)
        localStorage.setItem('wizardDone', 'true');
        window.location.href = "exames.html";
    });
}
