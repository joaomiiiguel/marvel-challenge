import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import './styles.css'


import Header from './components/Header.js'
import Cards from './components/Cards.js'

export default function App() {
  const [characters, setCharacters] = useState([]); //Lista dos Personagens
  const [search, setSearch] = useState(''); //Variavel da busca
  const [listFav, setListtFav] = useState([]);
  const [countFav, setCountFav] = useState(0)

  //Autenticação Server-Side requirida da API
  const apiKey = '6ef13a32c23a9b6bed4eed717f56716a' //publicKey
  const timestamp = '1620142535429' // TimeStamp
  const md5 = '4c702042ca294d6f6e8272152e199051' //md5 (ts + privateKey + publicKey)

  useEffect(() => {
    //Chamada da API Marvel
    async function loadCharacters() {
      const response = await axios.get(`http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${md5}&limit=10`);//Link da API
      var result = response.data.data.results; //Variavel para buscar a ID do personagem
      setCharacters(result)
    }
    loadCharacters();
    console.log(listFav)
  }, [])
  
  //Sistema de filtragem na busca 
  const changeFilterByName  = characters.filter( person =>{
    return person.name.includes(search) //Busca realizada pelo título do card
  })

  return (
    <div className="App">
      <Header />

      <div className="containerFilter">
            <TextField id="outlined-basic" label="Procure pelo personagem..." variant="outlined" className="inputPesquisa" onChange={ e => setSearch(e.target.value)}/>
        </div>

      <div className="conteinerList">
        {changeFilterByName.map(character => (
          
          <Cards
            listFav={listFav}
            keyID={character.id}
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