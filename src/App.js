import { useState, useEffect, Fragment } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';

import Nav from './components/Nav'
import ListContainer from './components/ListContainer';
import PokemonDisplay from './components/PokemonDisplay'
import Footer from './components/Footer'

const App = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [pokemonList, setPokemonList] = useState({});
  const [fetchUrl, setFetchUrl] = useState('https://pokeapi.co/api/v2/pokemon')

  const handleFetchUrl = (newFetchUrl) => {
    setFetchUrl(newFetchUrl)
  }

  useEffect(() => {

    const fetchPokemons = async () => {
      const result = await axios(fetchUrl)

      setPokemonList(result.data)
      setIsLoading(false)
    }

    fetchPokemons()

  }, [fetchUrl])

  return (
    
    <Router>
      <Switch>

        <Route exact path="/">
          <Nav />
          <ListContainer 
            pokemonList={pokemonList} 
            setPokemonList={setPokemonList} 
            isLoading={isLoading} 
            fetchUrl={fetchUrl} 
            handleFetchUrl={handleFetchUrl} 
          />
          <Footer />
        </Route>

        <Route 
          exact path="/pokemon/:id" 
          render={props => (
            <Fragment>
              <Nav pokemonDisplay={true}/>
              <PokemonDisplay {...props} />
              <Footer />
            </Fragment>
        )}>
          
        </Route>
      </Switch>

    </Router>

  );
}

export default App;
