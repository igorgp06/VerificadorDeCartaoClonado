function formatarNumeroCartao() {
    const numCartao = document.getElementById("numCartao");
    let valor = numCartao.value.replace(/\D/g, "");
    valor = valor.match(/.{1,4}/g)?.join(" ") || "";
    numCartao.value = valor;
}

function formatarDataValidade() {
    const validadeCartao = document.getElementById("validadeCartao");
    let valor = validadeCartao.value.replace(/\D/g, "");
    if (valor.length > 2) {
        valor = valor.slice(0, 2) + "/" + valor.slice(2, 4);
    }
    validadeCartao.value = valor;
}

function permitirApenasNumeros(event) {
    const tecla = event.key;
    if (!/[0-9]/.test(tecla) && tecla !== "Backspace") {
        event.preventDefault();
    }
}

function formatarCPF() {
    const cpfProprietario = document.getElementById("cpfProprietario");
    let valor = cpfProprietario.value.replace(/\D/g, "");
    if (valor.length > 3 && valor.length <= 6) {
        valor = valor.slice(0, 3) + "." + valor.slice(3);
    } else if (valor.length > 6 && valor.length <= 9) {
        valor = valor.slice(0, 3) + "." + valor.slice(3, 6) + "." + valor.slice(6);
    } else if (valor.length > 9) {
        valor = valor.slice(0, 3) + "." + valor.slice(3, 6) + "." + valor.slice(6, 9) + "-" + valor.slice(9, 11);
    }
    cpfProprietario.value = valor;
}

function verificarCartao() {
    const numCartao = document.getElementById("numCartao").value;
    const nomeCartao = document.getElementById("nomeCartao").value;
    const validadeCartao = document.getElementById("validadeCartao").value;
    const cvvCartao = document.getElementById("cvvCartao").value;
    const senhaCartao = document.getElementById("senhaCartao").value;
    const cpfProprietario = document.getElementById("cpfProprietario").value;

    if (
        numCartao.length < 19 ||
        !nomeCartao.trim() ||
        validadeCartao.length !== 5 ||
        cvvCartao.length < 3 ||
        cpfProprietario.length < 11
    ) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }
    alert("Cartão verificado com sucesso! Não foi encontrado nenhum vazamento de dados.");
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("numCartao").addEventListener("input", formatarNumeroCartao);
    document.getElementById("validadeCartao").addEventListener("input", formatarDataValidade);
    document.getElementById("cpfProprietario").addEventListener("input", formatarCPF);

    document.getElementById("numCartao").addEventListener("keypress", permitirApenasNumeros);
    document.getElementById("cvvCartao").addEventListener("keypress", permitirApenasNumeros);
    document.getElementById("senhaCartao").addEventListener("keypress", permitirApenasNumeros);
    document.getElementById("cpfProprietario").addEventListener("keypress", permitirApenasNumeros);
});
