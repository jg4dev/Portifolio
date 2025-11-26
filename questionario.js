const form = document.getElementById("health-form");
const resultsDiv = document.getElementById("results");
const examList = document.getElementById("exam-list");
const habitsList = document.getElementById("habits-list");
const infoList = document.getElementById("info-list");
const scoreLabel = document.getElementById("score-label");
const scoreBarFill = document.getElementById("score-bar-fill");
const chipsContainer = document.getElementById("chips-container");

function addChip(text) {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = text;
    chipsContainer.appendChild(chip);
}

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const age = form.elements["age"].value;
        const doctor = form.elements["doctor"].value;
        const activity = form.elements["activity"].value;
        const diet = form.elements["diet"].value;
        const smoker = form.elements["smoker"].value;
        const alcohol = form.elements["alcohol"].value;
        const sleep = form.elements["sleep"].value;
        const mental = form.elements["mental"].value;
        const social = form.elements["social"].value;
        const info = form.elements["info"].value;

        const exams = [];
        const habits = [];
        const infoTips = [];
        chipsContainer.innerHTML = "";

        /* EXAMES BASE */
        exams.push("Check-up periódico com clínica médica ou Medicina de Família.");
        exams.push("Aferição de pressão arterial e avaliação do risco cardiovascular.");
        exams.push("Exames de sangue: glicemia, colesterol, triglicerídeos.");
        exams.push("Avaliação de peso, circunferência abdominal e cálculo do IMC.");

        /* EXAMES POR IDADE */
        if (age === "<30") {
            exams.push("Converse com o médico sobre atualização do cartão de vacinas (tétano, hepatites, COVID-19, etc.).");
        }
        if (age === "30-39") {
            exams.push("Avaliar, com o médico, exames de função hepática e renal conforme seu histórico.");
        }
        if (age === "40-49") {
            exams.push("Discutir com o médico o rastreamento de doenças cardiovasculares (como testes de esforço, se indicado).");
            exams.push("Avaliar, com o médico, a necessidade de exames de próstata (como PSA e toque retal).");
        }
        if (age === "50+") {
            exams.push("Reforçar com o médico a avaliação da próstata (PSA e toque retal, se indicado).");
            exams.push("Converse sobre rastreamento de câncer de intestino (por exemplo, pesquisa de sangue oculto nas fezes ou colonoscopia, conforme orientação).");
            exams.push("Avaliar saúde óssea e risco de osteoporose, dependendo do histórico e estilo de vida.");
        }

        /* FREQUÊNCIA AO MÉDICO */
        if (doctor === "nunca") {
            habits.push("Agendar uma consulta de rotina para um check-up geral, mesmo sem estar sentindo nada.");
            habits.push("Levar dúvidas anotadas para a consulta, inclusive sobre exames, vacinas e saúde mental.");
            addChip("Precisa regularizar consultas");
        } else if (doctor === "às vezes") {
            habits.push("Transformar consultas de rotina em hábito: pelo menos 1 vez ao ano, ou conforme orientação do profissional.");
            addChip("Consultas irregulares");
        } else if (doctor === "anual") {
            habits.push("Manter o hábito do check-up anual e aproveitar a consulta para revisar exames e vacinas.");
            addChip("Check-up em dia");
        }

        /* TABAGISMO */
        if (smoker === "sim") {
            exams.push("Converse com o médico sobre avaliação da função pulmonar (ex.: espirometria) e acompanhamento mais próximo do coração e vasos.");
            habits.push("Buscar ajuda para parar de fumar (apoio profissional, grupos, medicação quando indicada).");
            habits.push("Evitar ambientes com muita fumaça e outros fatores que prejudiquem ainda mais o pulmão.");
            addChip("Atenção: tabagismo");
        } else if (smoker === "parei") {
            habits.push("Parabéns por ter parado de fumar! Mantenha acompanhamento com o médico e não retome o cigarro.");
            addChip("Ex-fumante – manter cuidado");
        } else {
            habits.push("Manter-se longe de cigarro, narguilé, cigarro eletrônico e outros produtos de tabaco.");
        }

        /* ÁLCOOL */
        if (alcohol === "frequente") {
            exams.push("Converse com o médico sobre exames de função hepática (fígado) e avaliação de risco associado ao consumo de álcool.");
            habits.push("Rever a quantidade e a frequência do consumo de bebidas alcoólicas, buscando reduzir gradualmente.");
            habits.push("Evitar episódios de “beber até passar do ponto” e nunca dirigir após beber.");
            addChip("Rever consumo de álcool");
        } else if (alcohol === "social") {
            habits.push("Manter o consumo moderado, respeitando limites de segurança e alternando com água.");
            addChip("Consumo social de álcool");
        } else if (alcohol === "raro") {
            habits.push("Manter o baixo consumo ou a abstinência de bebidas alcoólicas.");
            addChip("Bom controle de álcool");
        }

        /* ATIVIDADE FÍSICA */
        if (activity === "sedentario") {
            habits.push("Começar com caminhadas leves de 20–30 minutos, 3 vezes por semana, e aumentar aos poucos.");
            habits.push("Evitar ficar muitas horas seguidas sentado; levantar a cada 1–2 horas e se movimentar.");
            addChip("Sedentarismo – precisa se mover");
        } else if (activity === "algumas") {
            habits.push("Tentar chegar a pelo menos 150 minutos de atividade física moderada por semana (cerca de 30 min, 5x por semana).");
            habits.push("Incluir, se possível, algum exercício de fortalecimento muscular (musculação, funcional, etc.).");
            addChip("Atividade física parcial");
        } else if (activity === "regular") {
            habits.push("Manter a rotina de exercícios, variando entre atividades aeróbicas e de fortalecimento muscular.");
            addChip("Ativo fisicamente");
        }

        /* ALIMENTAÇÃO */
        if (diet === "ruim") {
            habits.push("Reduzir consumo de ultraprocessados (hambúrguer, salsicha, embutidos, refrigerantes, salgadinhos, doces em excesso).");
            habits.push("Aumentar consumo de frutas, verduras, legumes e alimentos preparados em casa.");
            habits.push("Beber água ao longo do dia, diminuindo refrigerantes e sucos industrializados.");
            addChip("Melhorar alimentação");
        } else if (diet === "media") {
            habits.push("Aumentar gradualmente a proporção de alimentos naturais em relação aos ultraprocessados.");
            habits.push("Planejar as refeições da semana para evitar escolhas impulsivas de última hora.");
            addChip("Alimentação intermediária");
        } else if (diet === "boa") {
            habits.push("Manter alimentação equilibrada e variada, cuidando também do tamanho das porções.");
            addChip("Boa alimentação");
        }

        /* SONO / ESTRESSE */
        if (sleep === "ruim") {
            habits.push("Tentar estabelecer horários mais regulares para dormir e acordar, buscando 7–8 horas de sono por noite.");
            habits.push("Evitar telas (celular, TV, computador) até tarde da noite, especialmente na cama.");
            habits.push("Se o estresse estiver muito alto, considerar conversar com profissional de saúde mental.");
            addChip("Sono / estresse em alerta");
        } else if (sleep === "regular") {
            habits.push("Ajustar pequenos hábitos para melhorar o sono (higiene do sono, rotina à noite, evitar cafeína tarde).");
            addChip("Sono regular");
        } else if (sleep === "bom") {
            habits.push("Manter uma rotina que favoreça um sono de qualidade e bom gerenciamento do estresse.");
            addChip("Bom sono e gestão do estresse");
        }

        /* SAÚDE EMOCIONAL / MENTAL */
        if (mental === "ruim") {
            exams.push("Converse com o médico sobre encaminhamento para avaliação com psicólogo(a) ou psiquiatra, se necessário.");
            habits.push("Não enfrentar tudo sozinho: abrir espaço para conversar com alguém de confiança sobre o que está sentindo.");
            habits.push("Praticar atividades que tragam bem-estar (hobbies, descanso, espiritualidade, lazer saudável).");
            addChip("Cuidar da saúde emocional");
        } else if (mental === "oscilando") {
            habits.push("Observar sinais de piora (falta de energia, tristeza constante, pensamentos negativos) e, se necessário, buscar ajuda profissional.");
            habits.push("Incluir na rotina atividades que ajudem a equilibrar o humor (exercícios, momentos de lazer, conexão com pessoas).");
            addChip("Atenção às oscilações emocionais");
        } else if (mental === "bem") {
            habits.push("Manter práticas que ajudam na saúde mental (atividade física, sono, relacionamentos, espiritualidade).");
            addChip("Saúde emocional relativamente estável");
        }

        /* REDE DE APOIO SOCIAL */
        if (social === "isolado") {
            habits.push("Tentar se aproximar de grupos, comunidades, atividades em que possa fazer amizades (esportes, projetos, voluntariado, etc.).");
            habits.push("Considerar procurar apoio profissional se sentir solidão intensa, desânimo ou falta de sentido.");
            addChip("Fortalecer vínculos sociais");
        } else if (social === "alguns") {
            habits.push("Cultivar mais os laços que já existem, criando espaço para diálogos mais profundos e sinceros.");
            addChip("Rede de apoio moderada");
        } else if (social === "forte") {
            habits.push("Manter e valorizar sua rede de apoio; lembrar que pedir ajuda também é um ato de coragem.");
            addChip("Boa rede de apoio");
        }

        /* INFORMAÇÃO CONFIÁVEL */
        if (info === "nao-busco") {
            infoTips.push("Dar o primeiro passo buscando informações em fontes seguras (profissionais de saúde, materiais educativos oficiais).");
            infoTips.push("Na próxima consulta, pedir ao profissional indicações de sites, cartilhas ou aplicativos confiáveis sobre saúde masculina.");
            addChip("Começar a se informar melhor");
        } else if (info === "redes") {
            infoTips.push("Usar redes sociais com senso crítico: verificar se o conteúdo é de profissionais ou instituições reconhecidas.");
            infoTips.push("Sempre que tiver dúvida, confirmar a informação com um profissional de saúde.");
            infoTips.push("Buscar conteúdos que tratem a saúde masculina de forma integral (física, mental, social, emocional e espiritual).");
            addChip("Refinar fontes de informação");
        } else if (info === "confiavel") {
            infoTips.push("Manter o hábito de se informar em fontes oficiais, científicas e com profissionais habilitados.");
            infoTips.push("Compartilhar conteúdos confiáveis com amigos e familiares, ajudando outros homens a cuidarem da saúde.");
            addChip("Boa busca por informação confiável");
        }

        /* PONTUAÇÃO DE CUIDADO (baseado em hábitos, não em idade) */
        let score = 0;
        const maxScore = 27; // 9 perguntas x 3 pontos máx (todas exceto idade)

        // doctor
        if (doctor === "nunca") score += 0;
        if (doctor === "às vezes") score += 2;
        if (doctor === "anual") score += 3;

        // smoker
        if (smoker === "sim") score += 0;
        if (smoker === "parei") score += 2;
        if (smoker === "nao") score += 3;

        // activity
        if (activity === "sedentario") score += 0;
        if (activity === "algumas") score += 2;
        if (activity === "regular") score += 3;

        // diet
        if (diet === "ruim") score += 0;
        if (diet === "media") score += 2;
        if (diet === "boa") score += 3;

        // alcohol
        if (alcohol === "frequente") score += 0;
        if (alcohol === "social") score += 2;
        if (alcohol === "raro") score += 3;

        // sleep
        if (sleep === "ruim") score += 0;
        if (sleep === "regular") score += 2;
        if (sleep === "bom") score += 3;

        // mental
        if (mental === "ruim") score += 0;
        if (mental === "oscilando") score += 2;
        if (mental === "bem") score += 3;

        // social
        if (social === "isolado") score += 0;
        if (social === "alguns") score += 2;
        if (social === "forte") score += 3;

        // info
        if (info === "nao-busco") score += 0;
        if (info === "redes") score += 1;
        if (info === "confiavel") score += 3;

        const percentage = Math.round((score / maxScore) * 100);

        let labelText;
        if (percentage <= 35) {
            labelText = `${percentage}% • Há muito espaço para melhorar seu autocuidado`;
        } else if (percentage <= 70) {
            labelText = `${percentage}% • Você já cuida de alguns aspectos, mas pode evoluir mais`;
        } else {
            labelText = `${percentage}% • Muito bom! Continue assim e ajuste o que ainda faltar`;
        }

        scoreLabel.textContent = labelText;
        scoreBarFill.style.width = percentage + "%";

        /* RENDERIZAÇÃO DAS LISTAS */
        examList.innerHTML = "";
        habitsList.innerHTML = "";
        infoList.innerHTML = "";

        exams.forEach(e => {
            const li = document.createElement("li");
            li.textContent = e;
            examList.appendChild(li);
        });

        habits.forEach(h => {
            const li = document.createElement("li");
            li.textContent = h;
            habitsList.appendChild(li);
        });

        infoTips.forEach(i => {
            const li = document.createElement("li");
            li.textContent = i;
            infoList.appendChild(li);
        });

        resultsDiv.style.display = "block";
        resultsDiv.scrollIntoView({ behavior: "smooth", block: "start" });
    });
}
