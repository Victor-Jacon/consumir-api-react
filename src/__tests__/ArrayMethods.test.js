/* Tests 1
const checkBeer = require('../testes-com-arrays/PracticeArrays')
const cervejas = ['Baly', 'Brahma', 'Itaipava', 'Ales', 'Jurupinga', 'Cantina do Vale', 'Amstel']

it('checkBeer should be a function', () => {
  expect(typeof checkBeer).toEqual('function')
})

// Caminho Feliz
it('checkBeer(Cantina do vale) should return true', () => {
  expect(checkBeer(cervejas[5])).toBe(false)
})

it('checkBeer(Jurupinga) should return true', () => {
  expect(checkBeer(cervejas[4])).toBe(false)
})

// QA - 1
it('checkBeer(Baly) should return false', () => {
  expect(checkBeer(cervejas[0])).toBe(true)
})
*/



