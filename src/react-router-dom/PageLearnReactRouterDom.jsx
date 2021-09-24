import React, { useState } from 'react'
import styled from 'styled-components'
import { BrowserRouter, Link, Switch, Route, useHistory, useLocation } from 'react-router-dom'

const PageLearnReactRouterDom = () => {
  return (
    <>
      <LocationObject />
    </>
  )
}

// [Switch] O switch renderiza apenas o primeiro <Route> que bate com a condição de URL do <Link>
export const WhatSwitchRenders = () => {
  return (
    <BrowserRouter>
      <Container>
        <>
          <Link to="/member"> Member </Link>
          <Link to="/member/victorjacon"> Member: Victor Jacon </Link>
          <p>
            Ao clicar em Member Victor Jacon, deveria renderizar "Hello Member Victor Jacon". <br />
            Não renderiza porque o Switch funciona assim: <br />
            -O primeiro Route que tiver o path /member será renderizado. Os demais não. 
          </p>
        </>

        {/* CONDITIONAL RENDERING */}
        <Switch>

          <Route path="/member">
            <h1>Hello Member</h1>
          </Route>

          <Route path="/member/victorjacon">
            <h1>Hello Member Victor Jacon</h1>
          </Route>

        </Switch>

      </Container>
    </BrowserRouter>
  )
}

export const HistoryTip1 = () => {

  let history = useHistory();

  const handleClick = () => {
    history.push('/home')
  }

  return (
    <BrowserRouter>

      {/* [History] O onClick do useHistory não pode receber uma função anônima */}
      <p>Este aqui não funciona: </p>
      <button type="button" onClick={() => handleClick}> Home </button>

      <p>Este FUNCIONA: </p>
      <button type="button" onClick={handleClick}> Home </button>

    </BrowserRouter>
  )
}

export const HistoryVsLink = () => {

  let history = useHistory();

  const [counter, setCounter] = useState(0)

  const navRich = () => history.push('/rich')
  const navMegaRich = () => history.push('/mega-rich')

  return (
    <>
      <div>
        <h1>Money: R${counter}</h1>
        <button onClick={() => setCounter(counter + 10)}>Save R$10</button>
        <button onClick={() => setCounter(counter - 10)}>Spend R$10</button>

        <div>
          <button onClick={() => console.log(counter)}>Show Counter</button>
          <button onClick={() => console.log(history.length)}>Show History Length</button>
        </div>

        {counter > 15 && counter < 29 && navRich()}
        {counter > 30 && counter < 49 && navMegaRich()}
      </div>

    </>
  )
}

export const LocationObject = () => {

  const location = useLocation();

  return (
    <>
      <Container>
        <Link to="/home">Home</Link>
        <Link to="/shop">Shop</Link>
        <button onClick={() => console.log(location)}>Show my location</button>
      </Container>
    </>
  )
}

const Container = styled.div`
  background-color: black;
  color: white;
  font-size: 24px;
  font-weight: bold;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  grid-gap: 16px;
`

export default PageLearnReactRouterDom
