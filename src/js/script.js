// =============================================
// Vinharia Agnello – Checkpoint 02
// Sistema de Avaliação de Estoque e Tendência
// =============================================

// --- FUNÇÕES REUTILIZÁVEIS ---

// Valida se uma entrada de texto não está vazia
function validarTexto(valor, campo) {
    if (valor === null || valor.trim() === "") {
        alert("Campo \"" + campo + "\" não pode ficar em branco. Por favor, tente novamente.");
        return false;
    }
    return true;
}

// Valida se um valor numérico é um número positivo
function validarNumero(valor, campo) {
    let num = Number(valor);
    if (valor === null || isNaN(num) || num < 0) {
        alert("Campo \"" + campo + "\" deve ser um número válido e positivo. Tente novamente.");
        return false;
    }
    return true;
}

// Verifica se o estoque está baixo (menos de 5 unidades)
function estoqueEhBaixo(quantidade) {
    return quantidade < 5;
}

// Classifica o vinho com base no ano da safra
function classificarVinho(safra) {
    let anoAtual = 2025;
    let idade = anoAtual - safra;

    if (idade <= 3) {
        return "Jovem";
    } else if (idade <= 10) {
        return "Amadurecido";
    } else {
        return "Antigo";
    }
}

// Exibe os dados do vinho no console e alerta o usuário
function exibirDetalhesVinho(numero, nome, tipo, safra, quantidade) {
    let classificacao = classificarVinho(safra);
    let avisoEstoque = estoqueEhBaixo(quantidade) ? "⚠️ ESTOQUE BAIXO!" : "✅ Estoque OK";

    console.log("=== Vinho #" + numero + " ===");
    console.log("Nome:          " + nome);
    console.log("Tipo:          " + tipo);
    console.log("Safra:         " + safra);
    console.log("Quantidade:    " + quantidade + " unidades  " + avisoEstoque);
    console.log("Classificação: " + classificacao);
    console.log("===================");

    alert(
        "Vinho #" + numero + " cadastrado!\n\n" +
        "Nome: " + nome + "\n" +
        "Tipo: " + tipo + "\n" +
        "Safra: " + safra + " (" + classificacao + ")\n" +
        "Quantidade: " + quantidade + " unidades\n" +
        avisoEstoque + "\n\n" +
        "Confira os detalhes completos no console!"
    );
}

// =============================================
// INÍCIO DO PROGRAMA
// =============================================

alert("Bem-vindo ao sistema de cadastro de vinhos da Vinharia Agnello! 🍷\nCadastre seus vinhos e acompanhe o estoque.");

// Variáveis de controle geral
let totalCadastros = 0;
let totalEstoqueBaixo = 0;
let continuarCadastrando = "sim";

// Variáveis para comparar a safra mais antiga (na "unha", sem arrays)
let safraAntigaValor = 9999;
let safraAntigaNome = "";

// Variáveis de cada vinho (máximo 5 vinhos, conforme limite do grupo)
let nome1 = ""; let tipo1 = ""; let safra1 = 0; let quant1 = 0;
let nome2 = ""; let tipo2 = ""; let safra2 = 0; let quant2 = 0;
let nome3 = ""; let tipo3 = ""; let safra3 = 0; let quant3 = 0;
let nome4 = ""; let tipo4 = ""; let safra4 = 0; let quant4 = 0;
let nome5 = ""; let tipo5 = ""; let safra5 = 0; let quant5 = 0;

// --- LAÇO PRINCIPAL DE CADASTRO ---
while (continuarCadastrando === "sim" && totalCadastros < 5) {

    totalCadastros++;

    // --- Coleta do nome ---
    let nomeInput = "";
    let nomeValido = false;
    while (!nomeValido) {
        nomeInput = prompt("Cadastro #" + totalCadastros + "\nDigite o nome do vinho:");
        nomeValido = validarTexto(nomeInput, "Nome do vinho");
    }

    // --- Coleta do tipo ---
    let tipoInput = "";
    let tipoValido = false;
    while (!tipoValido) {
        tipoInput = prompt("Cadastro #" + totalCadastros + "\nDigite o tipo do vinho (Tinto, Branco ou Rosé):");
        tipoValido = validarTexto(tipoInput, "Tipo do vinho");
    }

    // --- Coleta da safra ---
    let safraInput = "";
    let safraValida = false;
    while (!safraValida) {
        safraInput = prompt("Cadastro #" + totalCadastros + "\nDigite o ano da safra (ex: 2018):");
        safraValida = validarNumero(safraInput, "Safra");
    }
    let safraNum = Number(safraInput);

    // --- Coleta da quantidade ---
    let quantInput = "";
    let quantValida = false;
    while (!quantValida) {
        quantInput = prompt("Cadastro #" + totalCadastros + "\nDigite a quantidade em estoque:");
        quantValida = validarNumero(quantInput, "Quantidade em estoque");
    }
    let quantNum = Number(quantInput);

    // --- Armazena nas variáveis individuais conforme o número do cadastro ---
    if (totalCadastros === 1) {
        nome1 = nomeInput; tipo1 = tipoInput; safra1 = safraNum; quant1 = quantNum;
    } else if (totalCadastros === 2) {
        nome2 = nomeInput; tipo2 = tipoInput; safra2 = safraNum; quant2 = quantNum;
    } else if (totalCadastros === 3) {
        nome3 = nomeInput; tipo3 = tipoInput; safra3 = safraNum; quant3 = quantNum;
    } else if (totalCadastros === 4) {
        nome4 = nomeInput; tipo4 = tipoInput; safra4 = safraNum; quant4 = quantNum;
    } else if (totalCadastros === 5) {
        nome5 = nomeInput; tipo5 = tipoInput; safra5 = safraNum; quant5 = quantNum;
    }

    // --- Verifica estoque baixo ---
    if (estoqueEhBaixo(quantNum)) {
        totalEstoqueBaixo++;
    }

    // --- Verifica safra mais antiga (menor número = mais antigo) ---
    if (safraNum < safraAntigaValor) {
        safraAntigaValor = safraNum;
        safraAntigaNome = nomeInput;
    }

    // --- Exibe os dados do vinho ---
    exibirDetalhesVinho(totalCadastros, nomeInput, tipoInput, safraNum, quantNum);

    // --- Pergunta se deseja cadastrar outro ---
    if (totalCadastros < 5) {
        let resposta = prompt("Deseja cadastrar outro vinho? (sim / não)");
        if (resposta === null || resposta.trim().toLowerCase() !== "sim") {
            continuarCadastrando = "não";
        }
    } else {
        alert("Limite máximo de 5 vinhos atingido.");
    }
}

// =============================================
// RELATÓRIO FINAL
// =============================================

// Monta o relatório exibindo os vinhos com estoque baixo na "unha"
let relatorioEstoqueBaixo = "";

if (totalCadastros >= 1 && estoqueEhBaixo(quant1)) {
    relatorioEstoqueBaixo += "• " + nome1 + " (" + quant1 + " un.)\n";
}
if (totalCadastros >= 2 && estoqueEhBaixo(quant2)) {
    relatorioEstoqueBaixo += "• " + nome2 + " (" + quant2 + " un.)\n";
}
if (totalCadastros >= 3 && estoqueEhBaixo(quant3)) {
    relatorioEstoqueBaixo += "• " + nome3 + " (" + quant3 + " un.)\n";
}
if (totalCadastros >= 4 && estoqueEhBaixo(quant4)) {
    relatorioEstoqueBaixo += "• " + nome4 + " (" + quant4 + " un.)\n";
}
if (totalCadastros >= 5 && estoqueEhBaixo(quant5)) {
    relatorioEstoqueBaixo += "• " + nome5 + " (" + quant5 + " un.)\n";
}

if (relatorioEstoqueBaixo === "") {
    relatorioEstoqueBaixo = "Nenhum vinho com estoque baixo.";
}

// Exibe relatório no console
console.log("========== RELATÓRIO FINAL ==========");
console.log("Total de vinhos cadastrados: " + totalCadastros);
console.log("Vinhos com estoque baixo:    " + totalEstoqueBaixo);
console.log("Vinho com safra mais antiga: " + safraAntigaNome + " (" + safraAntigaValor + ")");
console.log("=====================================");

// Exibe relatório via alert
alert(
    "📊 RELATÓRIO FINAL – Vinharia Agnello\n\n" +
    "✅ Total de vinhos cadastrados: " + totalCadastros + "\n" +
    "⚠️  Vinhos com estoque baixo: " + totalEstoqueBaixo + "\n\n" +
    "Vinhos com estoque baixo:\n" + relatorioEstoqueBaixo + "\n" +
    "🍾 Vinho com safra mais antiga:\n" +
    "   " + safraAntigaNome + " (safra " + safraAntigaValor + ")\n\n" +
    "Confira o console para mais detalhes!"
);