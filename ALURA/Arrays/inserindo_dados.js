const notas = [10, 8, 9]
console.log(`Antes do push ${notas}`)
const media= ((notas[0] + notas[1] + notas[2]) / notas.length)
console.log(`Media${media}`)

//// existe um comando em js, para adicionar valores para um array, ele adiciona mais uma casa e também o valor
//// estou adicionando mais um valor para notas, e isso interfere em todo o processamento, mais uma casa mas com valor

notas.push(6)
console.log(`Depois do push: ${notas}`)



