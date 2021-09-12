/* Recebe uma array + faz um loop por cada um dos itens, mostrando na tela */
const counters = ['counter1', 'counter2']

const mapping = (array) => {
  for(eachItem of array) {
  }
  console.log(array)
  return array
}

/*
//Remover o primeiro e retornar ele.
const drinks = ['Milk', 'Water', 'Tea']
console.log(`Array drinks = ${drinks}`)
removeFirst = drinks.shift()
console.log(`removeFirst = ${removeFirst}`)
console.log(``)


//Remover o último e retornar ele.
const drinks2 = ['Milk', 'Water', 'Tea']
console.log(`Array drinks = ${drinks2}`)
removeLast = drinks2.pop()
console.log(`removeLast = ${removeLast}`)
console.log(``)

//Adiciona um elemento no início do array
const cachorroQuente = ['Pão']
cachorroQuente.push('Salsicha')
console.log(`A receita básica usa: ${cachorroQuente}`)
console.log(``)

//Remove 1 do final + adiciona 2 no final
const cafeComLeite = ['xícara', 'suco de laranja']
ingredienteErrado = cafeComLeite.pop('suco de laranja')
console.log(`O ingrediente que não vai no café com leite é: ${ingredienteErrado}`)
cafeComLeite.push('leite', 'cafe')
qtdeItens = cafeComLeite.length
console.log(`Pra fazer café com leite você precisa de: ${cafeComLeite}`)
console.log(`Quantidade de itens: ${qtdeItens}`)
console.log(``)

// Ordem de melhor sushi
// Remova a pizzaria tchelo + Ordene o melhor restaurante (akami, mizuho, okami)
const restauranteSushi = ['okami', 'akami', 'mizuho', 'pizzaria tchelo']
restauranteSushi.splice(3,1)
console.log(`Restaurantes de sushi: ${restauranteSushi}`)
restauranteSushi.shift('okami')
restauranteSushi.push('okami')
console.log(`Os melhores restaurantes em ordem são: ${restauranteSushi}`)
console.log(``)
*/

// Ordem a array de objetos de acordo com a melhor avaliação
const pizzarias = [
  {
    Nome: 'Ravenna',
    Avaliacao: '4',
    preco: '$$$',
    distancia: 5
  },
  {
    Nome: 'Tchelo',
    Avaliacao: '4,6',
    preco: '$',
    distancia: 2
  },
  {
    Nome: 'Pizza Hut',
    Avaliacao: '5',
    preco: '$$',
    distancia: 7
  }
]
console.log(`Antes de ordenar pela melhor avaliação, estava assim:`)
console.log(pizzarias)
console.log(``)

//

pizzarias.sort((a,b) => {
  if(a.Avaliacao < b.Avaliacao) return 1;
  if(a.Avaliacao > b.Avaliacao) return -1;
  return 0
})

console.log(`Ordenando da melhor avaliada para a pior avaliada:`)
console.log(pizzarias)
console.log(``)

//

pizzarias.sort((a,b) => {
  if(a.preco.length > b.preco.length) return 1;
  if(a.preco.length < b.preco.length) return -1;
  return 0
})

console.log(`Ordenando da mais barata para a mais cara:`)
console.log(pizzarias)
console.log(``)

//

pizzarias.sort((a,b) => {
  if(a.preco.length < b.preco.length) return 1;
  if(a.preco.length > b.preco.length) return -1;
  return 0
})

console.log(`Ordenando da mais cara para a mais barata:`)
console.log(pizzarias)
console.log(``)

//

pizzarias.sort((a,b) => {
  if(a.distancia > b.distancia) return 1;
  if(a.distancia < b.distancia) return -1;
  return 0
})

console.log(`Ordenando da mais próxima para a mais distante:`)
console.log(pizzarias)
console.log(``)


module.exports = mapping