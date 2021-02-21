var inputValorHora = document.querySelector("#valor-hora")
console.log(inputValorHora)

var inputHorasGastas = document.querySelector("#horas-projeto")
console.log(inputHorasGastas)

var resposta = document.querySelector("span")

function calcular() {
    //Aqui declarei as variáveis que receberam o valor do usuário
    var ValorHora = inputValorHora.valueAsNumber
    var HorasGastas = inputHorasGastas.valueAsNumber

    //Aqui realizei o calculo atribuindo o resultado a variável valorPorProjeto
    var valorPorProjeto = ValorHora * HorasGastas
    console.log(valorPorProjeto)

    var valorDuasCasas = valorPorProjeto.toFixed(2)
    console.log(valorDuasCasas)

    resposta.textContent = "R$ " + valorDuasCasas


}