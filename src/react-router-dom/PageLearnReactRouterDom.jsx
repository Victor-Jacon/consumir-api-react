import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { BrowserRouter, Link, Switch, Route, useHistory, useLocation, NavLink, Redirect } from 'react-router-dom'
import queryString from 'query-string'

const PageLearnReactRouterDom = () => {
  return (
    <>
      <RedirectExample />
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
  const history = useHistory();

  return (
    <>
      <Container>
        <Link to="/home">Home</Link>
        <Link to="/shop">Shop</Link>
        <div>
          <h1>Current Page: {location.pathname}</h1>
          <button onClick={() => console.log(history.replace)}>Show my location</button>
        </div>

        <div>
          <button onClick={() => history.goBack()}>Voltar</button>
          <button onClick={() => history.goForward()}>Ir pra frente</button>
          <button onClick={() => history.go(-2)}>Go Back 2x</button>
          <p>Qtdes de páginas no histórico {history.length}</p>
          <button onClick={() => history.replace('/amazonia')}>Replace</button>
        </div>
      </Container>
    </>
  )
}

// [Google Analytics - Continuar (contagem de pageviews na api do google)]
export const LocationPageViews = () => {
  const location = useLocation();

  useEffect(() => {
    
  }, [location])

  return (
    <Container>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/purchase">Purchase</Link>
      <p></p>
      
      <div>
        <p>Debug area</p>
        <button>Ver Page Views Usando Google Analytics. </button>
      </div>
    </Container>
  )
}

// [Pagina 404 com Route]
export const Page404 = () => {

  const locationObjectPath = ['/home', '/shop']

  return (
    <div>
      <Route path='/home' component={LocationObject} />
      <Route component={Error404} />
    </div>
  )
}

export const Error404 = () => {
  return (
    <p>Página não encontrada</p>
  )
}

// Rotas dinâmicas - 2 rotas usando o mesmo componente
export const DynamicRoutes = () => {
  return (
    <Container>
        <Link to='games'>Games</Link>
        <Link to='sports'>Sports</Link>

        <Switch>
          <Route path='/games' component={DynamicRoutesCatalog}/>
          <Route path='/sports' component={DynamicRoutesCatalog}/>
        </Switch>
    </Container>
  )
}

export const DynamicRoutesCatalog = ({ match }) => {
  return (
    <>
      <p>Página: {match.url}</p>
      <button onClick={() => console.log(match)}>Ver objeto match</button>
    </>
  )
}

// Rotas Dinâmicas - Truque path
export const PathTips = () => {
  return (
    <Container>
      <Link to='petshop'>petshop</Link>
      <Link to='supermarket'>supermarket</Link>
      <Link to='fastfood'>fastfood</Link>
      <Link to='babyclothing'>babyclothing</Link>

      <Route path='/(petshop|supermarket|fastfood|babyclothing)' component={PathTipsExample} />
      <Route component={Error404} />
    </Container>
  )
}

export const PathTipsExample = ({ match }) => {
  return (
    <Container>
      <p>Params</p>
      <p>Path: {match.path}</p>
      <p>Url: {match.url}</p>
    </Container>
  )
}

// Como acessar o valor dos parâmetros passados por URL
export const UsingParams = () => {
  return (
    <Container>
      <Link to='/petshop/view'>petshop view</Link>
      <Link to='/petshop/edit'>petshop edit</Link>
      <Link to='/petshop/delete'>petshop delete</Link>

      <Switch>
        <Route path='/petshop/:action(view|edit)' component={UsingParamsExample} />
        <Route component={Error404} />
      </Switch>
    </Container>
  )
}

export const UsingParamsExample = ({ match }) => {
  return (
    <Container>
      <p>Params: {match.params.id}</p>
      <button onClick={() => console.log(match.params)}>Teste</button>
    </Container>
  )
}

export const RouteWithProps = () => {
  return (
    <Container>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/messages">Messages</NavLink>
      <NavLink to="/messages2">Messages2</NavLink>
      <NavLink to="/messages3">Messages3</NavLink>

      <Switch>
        <Route exact path ='/home' component={RouteWithPropsExampleHome} />
        <Route path='/messages' render={() => <RouteWithPropsExampleMessages numberOfPosts={3} /> } />
        <Route path='/messages2' component={() => <RouteWithPropsExampleMessages numberOfPosts={3} /> } />
        
        <Route path='/messages3' render={() => <p> Escreva aqui sua mensagem </p> } />
        <Route path='/messages3' render={() => <ShortHandComponent /> } />
      </Switch>
    </Container>
  )
}

export const RouteWithPropsExampleHome = () => {
  return (
    <p>Welcome to your profile</p>
  )
}

export const RouteWithPropsExampleMessages = ({numberOfPosts}) => {
  return (
    <p>Selecione um dos {numberOfPosts} posts</p>
  )
}

export const ShortHandComponent = () => {
  return (
    <p>Escreva aqui sua mensagem</p>
  )
}

export const SendingAllProps = () => {
  return (
    <Container>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/profile">profile</NavLink>
      <NavLink to="/bank">bank</NavLink>

      <Switch>
        <Route exact path ='/home' component={RouteWithPropsExampleHome} />
        <Route path='/profile' render={(props) => <AllPropsExample {...props}/>}/>
        <Route path='/bank' />
      </Switch>
    </Container>
  )
}

export const AllPropsExample = ({ name = 'Jacobs', age, city, friends }) => {
  return (
    <>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>City: {city}</p>
      <p>Friends: {friends}</p>
    </>
  )
}

export const PropChildren = () => {
  return (
    <Container>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/profile">profile</NavLink>
      <NavLink to="/bank">bank</NavLink>

      <Switch>
        <Route exact path ='/home' component={RouteWithPropsExampleHome} />
        <Route path='/bank' />

        <Route path='/profile'>
          {({ match }) => (
            <p>
              Estou na pagina profile
            </p>
          )}
        </Route>
      </Switch>
    </Container>
  )
}

export const MatchWithAnchorLink = () => {
  return (
    <Container>
      <ul>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/pictures'>Pictures</Link></li>
        <li>
          <Route path="/videos">
          {({ match }) => (
            <a href="/videos" style={match ? { color: 'red' } : null}>Your Videos</a>
          )}
          </Route>
        </li>
      </ul>
    </Container>
  )
}

export const RouteComponentExample = () => {
  return (
    <Container>
      <RouteComponent url={'Home'}/>
      <RouteComponent url={'Restaurantes'}/>
      <RouteComponent url={'Pedidos'}/>
    </Container>
  )
}

export const RouteComponent = ({ url }) => {
  return (
    <Route path={`/${url}`}>
      <li><Link to={`/${url}`}>{url}</Link></li>
    </Route>
  )
}

export const LinkComponentExample = () => {
  return (
    <Container>
      <LinkComponent url={'Home'}/>
      <LinkComponent url={'Restaurantes'}/>
      <LinkComponent url={'Pedidos'}/>
    </Container>
  )
}

export const LinkComponent = ({ url }) => {
  return (
    <li><Link to={`/${url}`}>{url}</Link></li>
  )
}

export const OptionalMatchParam = () => {
  return (
    <Container>
      <ul>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/pictures'>Pictures</Link></li>
      </ul>

      <Switch>
        <Route path="/home">Home</Route>
        <Route path="/pictures/:pictureId?">
          {({ match }) => (
            <>
              <p>Acessando valor do match.params (console) </p>
              {console.log(match)}
            </>
          )}
        </Route>
      </Switch>
    </Container>
  )
}

export const LocationSearchObjectify = () => {

  return (
    <Container>
      <ul>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/order'>Order</Link></li>
      </ul>

      <Switch>
        <Route path="/home">
          Home
        </Route>
        <Route path="/order">
        {({ location }) => (
          <>
            {console.log('Location', location)}
            {console.log('location treated:',
              location.search
                .replace('?', '')
                .split('&')
                .reduce((acc, item) => {
                  const [key, value] = item.split('=')
                  if (acc[key]) {  
                    acc[key] = [acc[key]].concat(value)
                  } else {
                    acc[key] = value
                  }
                  return acc
                }, {})
            )}
            <p>Food: </p>
            <p>Drink: </p>
            <p>Total: </p>
          </>
        )}
        </Route>     
      </Switch>
    </Container>
  )
}

export const LocationSearchObjectifyAuto = () => {

  const location = useLocation()
  const [query, setQuery] = useState()
  
  useEffect(() => {
    const parsed = queryString.parse(location.search);
    console.log(parsed)
    setQuery(parsed)
    return parsed
  }, [])

  return (
    <Container>
      <ul>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/order'>Order</Link></li>
      </ul>

      <Switch>
        <Route path="/home">
          Home
        </Route>
        <Route path="/order">
        {({ location }) => (
          <>
            {console.log('Location', location)}
            {query &&
              <>
                <p>Food: {query.food}</p>
                <p>Drink: {query.drink}</p>
                <p>Total: {query.total}</p>
              </>
            }
          </>
        )}
        </Route>     
      </Switch>
    </Container>
  )
}

export const LocationStateAndSearch = () => {
  return (
    <Container>
      <ul>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/songs'>Songs</Link></li>
        <li>
          <Link to={{ pathname: '/favoriteSongs', state: { song1: 'skillet - hero' } }}>
              Favorite Songs
          </Link>
        </li>
        <li>
          <Link to={{ pathname: '/favoriteBands', search: 'favorite bands all time' }}>
              Favorite Bands
          </Link>
        </li>
      </ul>

      <Switch>
        <Route path="/home">Home</Route>
        <Route path="/songs">Songs</Route> 
      </Switch>
    </Container>
  )
}

export const HistoryPathAndLocation = () => {

  const [nextEpisode, setNextEpisode] = useState(1)
  const history = useHistory()

  const changeEpisode = (currentEpisode) => {
    history.push(`/episode${nextEpisode+1}`)
    setNextEpisode(nextEpisode+1)
  }

  return (
    <Container>
      <ul>
        <li><Link to='/episode1' onClick={() => setNextEpisode(1)}>episode1</Link></li>
        <button onClick={() => changeEpisode(nextEpisode)}>Next Episode</button>
      </ul>

      <Switch>
        <Route path="/episode1">episode1</Route>
        <Route path="/episode2">episode2</Route> 
        <Route path="/episode3">episode3</Route> 
        <Route path="/episode4">episode4</Route> 
      </Switch>
    </Container>
  )
}

export const HistoryPushParameters = () => {

  const [nextEpisode, setNextEpisode] = useState(1)
  const history = useHistory()

  const changeEpisode = (currentEpisode) => {
    history.push(`/episode${nextEpisode+1}`, { watching: `Episode${nextEpisode}`})
    setNextEpisode(nextEpisode+1)
  }

  return (
    <Container>
      <ul>
        <li><Link to='/episode1' onClick={() => setNextEpisode(1)}>episode1</Link></li>
        <button onClick={() => changeEpisode(nextEpisode)}>Next Episode</button>
      </ul>

      <Switch>
        <Route path="/episode1">episode1</Route>
        <Route path="/episode2">episode2</Route> 
        <Route path="/episode3">episode3</Route> 
        <Route path="/episode4">episode4</Route> 
      </Switch>
    </Container>
  )
}

export const RedirectExample = () => {
  return (
    <Container>
      <ul>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/inicio'>Inicio</Link></li>
        <li><Link to='/episode1'>episode1</Link></li>
      </ul>

      <Switch>
        <Route path="/episode1">episode1</Route>
        <Route path="/episode2">episode2</Route> 
        <Route path="/episode4">episode3</Route> 
        <Route path="/inicio" render={() => <Redirect push to='/home'/>}/>
        <Redirect from='/inicio' to='/home' />
      </Switch>
    </Container>
  )
}

// Styled Components
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
