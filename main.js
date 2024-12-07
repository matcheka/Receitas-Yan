//Estrutura melhor(no projeto em dupla, ignore a de cima)
function calc(){
    const linhas = document.querySelectorAll("#aqui tr");
    let totalFinal = 0;

    linhas.forEach((linha, index) => {
        if (index > 0 && index < linhas.length - 1) { //Ignora o cabeçalho e a ultima linha(maior que 0(que é a primeira linha) e menos 1(vai tirar a ultima linha, independente de qual seja))

            const preco = linha.querySelector(".preco").value;//obtém o valor do campo preco, lá do html

            const quantidade = linha.querySelector(".quantidade").value;//obtém o valor do campo quantidade, lá do html

            const total = preco * quantidade || 0;//calcula o total(preço vezes quantidade) ou mantém 0 se os campos estiverem vazios

            linha.querySelector(".total").textContent = total.toFixed(2);//isso atualiza a célula "total" com o valor que foi calculado acima

            totalFinal += total;//adiciona o valor ao total final
        }
    });

    document.getElementById("totalFinal").textContent = totalFinal.toFixed(2);
}


let qtd1 = document.getElementById('qtd1');
let pr1 = document.getElementById('pr1');
let tot1 = document.getElementById('tot1');

let qtd2 = document.getElementById('qtd2');
let pr2 = document.getElementById('pr2');
let tot2 = document.getElementById('tot2');

let qtd3 = document.getElementById('qtd3');
let pr3 = document.getElementById('pr3');
let tot3 = document.getElementById('tot3');

let qtd4 = document.getElementById('qtd4');
let pr4 = document.getElementById('pr4');
let tot4 = document.getElementById('tot4');

let qtd5 = document.getElementById('qtd5');
let pr5 = document.getElementById('pr5');
let tot5 = document.getElementById('tot5');

let qtd6 = document.getElementById('qtd6');
let pr6 = document.getElementById('pr6');
let tot6 = document.getElementById('tot6');

let qtd7 = document.getElementById('qtd7');
let pr7 = document.getElementById('pr7');
let tot7 = document.getElementById('tot7');

let qtd8 = document.getElementById('qtd8');
let pr8 = document.getElementById('pr8');
let tot8 = document.getElementById('tot8');


function ct1(){
    let qtd = parseFloat(qtd1.value) || 0;
    tot1.textContent = (qtd * 6.99).toFixed(2);
}

function ct2(){
    let qtd = parseFloat(qtd2.value) || 0;
    tot2.textContent = (qtd * 14.99).toFixed(2);
}

function ct3(){
    let qtd = parseFloat(qtd3.value) || 0;
    tot3.textContent = (qtd * 7.29).toFixed(2);
}

function ct4(){
    let qtd = parseFloat(qtd4.value) || 0;
    tot4.textContent = (qtd * 4.89).toFixed(2);
}

function ct5(){
    let qtd = parseFloat(qtd5.value) || 0;
    tot5.textContent = (qtd * 8.90).toFixed(2);
}

function ct6(){
    let qtd = parseFloat(qtd6.value) || 0;
    tot6.textContent = (qtd * 7.29).toFixed(2);
}

function ct7(){
    let qtd = parseFloat(qtd7.value) || 0;
    tot7.textContent = (qtd * 2.99).toFixed(2);
}

function ct8(){
    let qtd = parseFloat(qtd8.value) || 0;
    tot8.textContent = (qtd * 21.90).toFixed(2);
}

qtd1.addEventListener('input', ct1);
qtd2.addEventListener('input', ct2);
qtd3.addEventListener('input', ct3);
qtd4.addEventListener('input', ct4);
qtd5.addEventListener('input', ct5);
qtd6.addEventListener('input', ct6);
qtd7.addEventListener('input', ct7);
qtd8.addEventListener('input', ct8);

