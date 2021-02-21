var inputGanhoPorMes = document.querySelector("#ganho-mes")
console.log(inputGanhoPorMes)

var inputHorasPorDia = document.querySelector("#horas-dia")
console.log(inputHorasPorDia )

var spanHora = document.querySelector("#resposta")
console.log(spanHora)


function calcularValorHora() {

//22 são os dias úteis trabalhados no mês
var qtdDeHorasMes = inputHorasPorDia.valueAsNumber * 22

//Aqui eu atribui uma variável para o cálculo de quando ganha por hora
var valorDaHora = (inputGanhoPorMes.valueAsNumber / qtdDeHorasMes).toFixed(2)

//Aqui eu peguei o local onde a resposta foi inserida
spanHora.textContent = "R$" + valorDaHora


}