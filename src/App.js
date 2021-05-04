import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css'


import Header from './components/Header.js'
import FiltreBar from './components/FiltreBar.js'
import Cards from './components/Cards.js'

export default function App() {
  const [characters, setCharacters] = useState([]); //Lista dos Personagens

  //Autenticação Server-Side requirida da API
  const apiKey = '6ef13a32c23a9b6bed4eed717f56716a' //publicKey
  const timestamp = '1620142535429' // TimeStamp
  const md5 = '4c702042ca294d6f6e8272152e199051' //md5 (ts + privateKey + publicKey)


  useEffect(() => {
    //Chamada da API Marvel
    async function loadCharacters() {
      const response = await axios.get(`http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${md5}&limit=25`);//Link da API
      var result = response.data.data.results; //Variavel para buscar a ID do personagem
      setCharacters(result)
    }
    loadCharacters();
  }, [])

  console.log(characters)

  return (
    <div className="App">
      <Header />
      <FiltreBar />
      <div className="conteinerList">
        {characters.map(character => (
          <Cards
            key={character.id}
            name={character.name}
            avatarImg={character.thumbnail.path + '.' + character.thumbnail.extension}
            comics={character.comics.available}
            events={character.events.available}
            series={character.series.available}
          />
        ))}
      </div>

    </div>
  );
}