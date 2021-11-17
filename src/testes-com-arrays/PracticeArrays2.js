// Filtre as pessoas que tem idade igual ou maior que 21 anos.
const ages = [5, 15, 16, 20, 25, 40, 55, 43, 32, 52]
console.log('Antes de filtrar: '); console.log(ages)

const canDrink = ages.filter(age => age >= 21)
console.log(''); console.log('Depois de filtrar: '); console.log(canDrink)

//


const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];



//  1-A filter + função separada
checkRetailCompanies = (company) => {
  if (company.category === 'Retail') {
    return true
  }
}

const retailCompanies = companies.filter(checkRetailCompanies)
console.log('Solução 1: '); console.log(retailCompanies)

//  1-B shorthand
const shortRetailCompanies = companies.filter(company => company.category === 'Retail')
console.log('Solução 2: '); console.log(shortRetailCompanies)


//  2 - Empresas criadas nos anos 80.

const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start <= 1989))
console.log('Solução 3: '); console.log(eightiesCompanies)

//  3 - Empresas que duraram pelo menos 10 anos
const tenYearsCompanies = companies.filter(company => (company.end - company.start >= 10))
console.log('Solução 3: '); console.log(tenYearsCompanies)


// 4 - Criar array de strings com o nome das empresas
const companyNames = companies.map((company) => {
  return company.name
})

console.log(companyNames)

// 5 - Criar array de objetos, com apenas 1 string de name dentro.
const companyNames2 = companies.map((company) => {
  return { name: company.name }
})

console.log(companyNames2)



// 6 - Criar uma array de strings concatenadas. 
// Concatena Empresa, Data de início, e data de fechamento da empresa
const concatStrings = companies.map((company) => {
  return `${company.name} [${company.start}-${company.end}]`
})

console.log(concatStrings)

const concatStrings2 = companies.map(company => `${company.name} [${company.start}-${company.end}]`)
console.log(concatStrings2)



// 7-A Usando Maps aninhados
// Se a empresa for de tecnologia, adicione o campo owner: jeff bezos, caso contrário, adicione owner: ''
// Se a empresa tiver menos de 5 anos, adicione o campo tipo: startup, caso contrário, adicione tipo: 'normal company'
const techStartups = companies
  .map(company =>  {
    if (company.category === 'Technology') {
      return {...company, owner: 'jeff bezos'}
    }
    else {
      return {...company, owner: ''}
    }
  })
  .map(company => {
    if (company.end - company.start <= 5) {
      return {...company, type: 'startup'}
    }
    else {
      return {...company, type: 'normal company'}
    }
  })

console.log(techStartups)


// 7-B Usando Maps aninhados (shorthand)

const techStartups2 = companies
  .map(company => (company.category === 'Technology') && {...company, owner: 'jeff bezos'} || {...company, owner: ''})
  .map(company => (company.end - company.start <= 5) && {...company, type: 'startup'} || {...company, type: 'normal company'})

console.log(techStartups2)



// 8-A Organize as empresas da array companies pela data de criação ela.
// O método sort itera de uma forma diferente, ele pega 2 itens da array, compara, e retorna 1 ou -1
// Se retornar 1, ele sobe na ordenação, fica em primeiro
// Se retornar -1, ele desce, vai pro final

const sortedCompanies = companies.sort((c1, c2) => {
  if (c1.start > c2.start) {
    return 1
  }
  else {
    return -1
  }
})

console.log(sortedCompanies)


// 8-B Sintaxe reduzida
const sortedCompanies2 = companies.sort((c1, c2) => (c1.start > c2.start) && 1 || -1)
console.log(sortedCompanies2)

// 8-C Sintaxe reduzida
const sortedCompanies3 = companies.sort((c1, c2) => (c1.start > c2.start) ? 1 : -1)
console.log(sortedCompanies3)



// 9- Como usar o método sort para organizar de forma rapida uma array de numeros ou letras
companies.sort((a,b) => a - b) // Do menor para o maior
companies.sort((a,b) => b - a) // Do maior para o menor



// 10-A Como funciona o método reduce
const ages2 = [5, 15, 16, 20, 25, 40, 55, 43, 32, 52]

let ageSum = ages2.reduce((total, age) => {
  return total + age
}, 0)

console.log(ageSum)

// 10-B Como funciona o método reduce
const ages3 = [5, 15, 16, 20, 25, 40, 55, 43, 32, 52]

let ageSum2 = ages3.reduce((total, age) => total + age, 0)

console.log(ageSum2)

const index = companies.findIndex((company) => (company.name === 'Company One') && true)

const index = companies.findIndex((company) => {
  if (company.name === 'Company One') {
    return true
  }
  else {
    return false
  }
})

console.log(index)
console.log(companies[index])
