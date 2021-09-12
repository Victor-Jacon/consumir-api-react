const mapping = require('../testes-com-arrays/PracticeArrays')

// Tipo
it('Should be a function', () => {
  expect(typeof mapping).toBe('function')
})

// Recebe 1 array, e retorna ela mesmo.
it('counters = [counter1] should print [counter1]', () => {
  const counters = ['counter1']
  expect(
    mapping(counters)
  )
  .toEqual(
    ['counter1']
  )
})