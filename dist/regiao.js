"use strict";
const regiaoS = document.querySelector('.regioes');
const estacaoS = document.querySelector('.estacoes');
const doencas = document.querySelector('.d-list');
regiaoS.addEventListener('change', AtualizaLista);
estacaoS.addEventListener('change', AtualizaLista);
console.log("Chamou o script regiao.js");

async function AtualizaLista() {
    const regiao = regiaoS.value;
    const estacao = estacaoS.value;
    try {
            await fetch(`/regiao?regiao=${regiao}&estacao=${estacao}`);
    } catch (error) {
        console.error(error);
    }
}