import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import './PokemonCard.css'
import Loading from './animations/Loading';

const PokemonCard = ({item}) => {
    
    const [pokemonData, setPokemonData] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        console.log();
        const fetchPokemonData = async () => {
            
          const result = await axios(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
    
          setPokemonData(result.data)
          setIsLoading(false)
        }
    
        fetchPokemonData()
    
    }, [item])

    return isLoading 
    ? (<div className="item">
         <Loading />   
        </div>) 
    : (
        <Link to={`/pokemon/${pokemonData.id}`} style={{ textDecoration: 'none', color: 'rgb(46, 46, 46)' }}>
            <div className="item">
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`} alt={pokemonData.name} />    
                <h5>{item.name}</h5>    
            </div>
        </Link>
    )
}

export default PokemonCard
