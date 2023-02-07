const somarNumero = (num1, num2) => {
    const soma = num1 + num2 
    console.log('A soma de', num1, 'com', num2, 'é:', soma)
}

somarNumero (5,6)
somarNumero (10,20)
somarNumero (45,15)

// b-)

const eMaior = (num1, num2) => {
    const resultado = num1 >= num2
    console.log('O número', num1, 'é maio ou igual', resultado)
}

eMaior(5,10)
eMaior(50,10)
eMaior(90,10)

// c-)

const verificarParidade = (numero) => {
    const ePar = numero % 2 ===0

    console.log('O número', numero, 'é par?', ePar)
}

verificarParidade(4)
verificarParidade(5)
verificarParidade(2)

// d-)

const calculaSalarioLiq = (salario) => {
    const desconto = salario * 0.1 
    const salarioLiquido = salario - desconto

    return salarioLiquido.toFixed(2)
}

console.log(calcularSalarioLiq(5553.65))
console.log(calcularSalarioLiq(4600.65))