const operacaoSoma = (num1, num2) => {
        const soma = num1 + num2 
        return soma

    }

    const operacaoSubtracao = (num1, num2) => {
        const subtracao = num1 - num2
        return subtracao
}

const operacaoMultiplicacao = (num1, num2) => {
        const multiplicacao = num1 * num2
        return multiplicacao
}

const operacaoDivisao = (num1, num2) => {

    const divisao = num1 / num2 
    return divisao
}


const numeroSolicitado1 =  Number(prompt('Informe o primeiro número:'))
const nummeroSolicitado2 = Number (prompt('Informe o segundo número'))

const resultadoSoma = operacaoSoma(numeroSolicitado1,nummeroSolicitado2)
const resultadoSubtracao =operacaoSubtracao(numeroSolicitado1, nummeroSolicitado2)
const resultadoMultiplicacao = operacaoMultiplicacao(numeroSolicitado1, nummeroSolicitado2)
const resultadoDivisao = operacaoDivisao(numeroSolicitado1,nummeroSolicitado2)


console.log(resultadoSoma)
console.log(resultadoSubtracao)
console.log(resultadoMultiplicacao)
console.log(resultadoDivisao.toFixed(2))
