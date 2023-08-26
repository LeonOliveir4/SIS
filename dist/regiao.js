"use strict";
async function AtualizaURL() {
    const regiaoS = document.querySelector('.regioes');
    const estacaoS = document.querySelector('.estacoes');
    const regiao = regiaoS.value;
    const estacao = estacaoS.value;
    window.location.href = `/regiao?regiao=${regiao}&estacao=${estacao}`;
}