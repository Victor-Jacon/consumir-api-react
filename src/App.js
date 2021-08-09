import './App.css';
import api from './api';
import React, {useState, useEffect} from 'react';

/* Componentes */
import Filmes from './components/Filmes';

function App() {

  /* Abre Exemplo 5 */

  const [movies, setMovies] = useState();

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=star%20wars')
    .then(response => response.json())
    .then(json => setMovies(json))
  }, []);

  /* Fecha Exemplo 5 */

  // Vários exemplos usam este abaixo
  const nomeFilmes = ['Harry Potter', 'Indiana jones', 'Star Wars']

  // Exemplo 3
  const listaFilmes = nomeFilmes.map(nomeFilme => <p>{nomeFilme}</p>)
                      
  return (
    <div className="App container">
      <div className="exemplo-1">
        <h1>1-Map em Array Simples</h1>
        {  nomeFilmes.map(nomeFilme => <p>{nomeFilme}</p>)  }
      </div>
      
      <div className="exemplo-2">
        <h1>2-Acessando cada index da array de forma estática </h1>
        <p>{nomeFilmes[0]}</p>
        <p>{nomeFilmes[1]}</p>
        <p>{nomeFilmes[2]}</p>
      </div>

      <div className="exemplo-3">
      <h1>3-Chamando Objeto ou Componente </h1>
      <p>Salva o resultado do map em um objeto, e depois, chama o objeto dentro de chaves, também poderia ser um componente react, ai faria rafce + importar componente e colocar ele aqui </p>
        {listaFilmes}
      </div>

      <div className="exemplo-4">
      <h1>4-Populando um Componente com Map + Props (Meu Favorito)</h1>
      <p>Cria um componente apenas para a estrutura html + passa os dados do map por props.</p>
        {nomeFilmes.map(nomeFilme => 
        <Filmes nomeFilme={nomeFilme}/>)}
      </div>

      <div className="exemplo-5">
        <h1>5-Consumindo API externa</h1>
        {console.log(movies)}
        <p>Mostra o dado "filme" da api consumida</p>
        
        <h1>Id dos filmes</h1>
        
        
        {  
          movies && 
            movies.map(movie => 
              <div className="movieCardBackground">
                <div className="movieCard">
                  <img src={movie.show.image.original}/>
                  <p>{movie.show.name}</p>
                  <p>{movie.show.genres}</p>
                  <p>Quer saber mais detalhes? <a href={movie.show.url}>Clique aqui.</a></p>
                  <br />
                </div>
              </div>
            )  
        }

        {/* Checa se movies existe, se sim, executa um map nele, mostrando na estrutura html a seguir os dados que vierem da api. */}
      
      </div>
      

    </div>
  );
}

export default App;
