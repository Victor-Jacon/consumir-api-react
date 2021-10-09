import React from 'react'

const LearnLocalStorage = () => {
  // handleLocalStorage
  const LSSetter = () => {
    localStorage.setItem('number', '10')
    // check if value was saved
    // console.log(localStorage.getItem('name'))

    let number = localStorage.getItem('number')
    const numberfy = Number(number)
    // check value
    //console.log(numberfy)

    // check type
    //console.log(typeof numberfy)
  }

  const LSGetter = () => localStorage.getItem('name')
  const LSRemover = () => localStorage.removeItem('name')

  return (
    <div>
      <button onClick={() => LSSetter()}> Salvar LOCAL STORAGE </button>
      <button onClick={() => LSGetter()}> GET LOCAL STORAGE </button>
      <button onClick={() => LSRemover()}> REMOVE LOCAL STORAGE </button>
    </div>
  )
}

export default LearnLocalStorage
