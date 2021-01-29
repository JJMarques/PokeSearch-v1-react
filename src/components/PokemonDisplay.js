import React, { useState, useEffect } from 'react'
import './PokemonDisplay.css'
import './ListContainer.js'
import Loading from './animations/Loading'
import axios from 'axios'
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BiLeftArrowCircle, BiRightArrowCircle } from 'react-icons/bi'

const PokemonDisplay = (props) => {

    const [pokemonData, setPokemonData] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(false)
    const pokemonParam = props.match.params.id

    let pokemonId
    if (pokemonParam.length <= 3) {
        //if we get the id of the pokemon on the params
        pokemonId = Number(props.match.params.id)
    } else {
        //if we get the name of the pokemon on the params, instead of the id
        pokemonId = props.match.params.id.toLowerCase()
    }
    

    useEffect(() => {

        const fetchPokemonData = async (pokemonId) => {
            try {
                const result = await axios(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
                setPokemonData(result.data)
                setIsLoading(false)
                setError(false)
            } catch {
                setError(true)
            }
            }
        
            fetchPokemonData(pokemonId)

    }, [pokemonId])

    let pokemonNumberId
    if (typeof pokemonId === 'string') {
        pokemonNumberId = pokemonData.id
    } else {
        pokemonNumberId = pokemonId
    }

    if(error) {
        return(
            <div className="list-container">
                <div className="pokemon-display">
                    <h2 style={{ marginTop: '60px', marginBottom: '50px' }}>Sorry! Couldn't find that Pokemon!</h2>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <button className="return-btn"> <AiOutlineArrowLeft /> Return</button>
                    </Link>
                </div>
            </div>
        )
    }

    return isLoading 
        ? (
            <div className="list-container">
                <div className="pokemon-display">
                    <Loading style={{ marginTop: '40px' }}/>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <button className="return-btn"> <AiOutlineArrowLeft /> Return</button>
                    </Link>
                </div>
            </div>
        ) 
        : (
        <div className="list-container">
            <div className="pokemon-display">
                <h1 className="pokemon-display-name">{pokemonData.name}</h1>
                <div className="change-char">
                    <Link to={`/pokemon/${pokemonNumberId ? (pokemonNumberId-1) : pokemonNumberId}`}>
                        <BiLeftArrowCircle className={pokemonNumberId > 1 ? "image-btn" : "image-btn disabled"}/>
                    </Link>
                    <img 
                        className="pokemon-display-image" 
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`} 
                        alt={pokemonData.name}
                    />
                    <Link to={`/pokemon/${pokemonNumberId < 893 ? (pokemonNumberId+1) : pokemonNumberId}`}>
                        <BiRightArrowCircle className={pokemonNumberId < 893 ? "image-btn" : "image-btn disabled"}/>
                    </Link>
                </div>
                <div className="data-display">
                    <p className="pokemon-display-height">Height: <span>{(pokemonData.height)/10}m </span></p>
                    <p className="pokemon-display-weight">Weight: <span>{(pokemonData.weight)/10} kg </span></p>
                    <p className="pokemon-display-type">Type: <span>{pokemonData.types[0].type.name} </span></p>
                </div>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <button className="return-btn"> <AiOutlineArrowLeft style={{ marginRight: '5px' }}/> Return</button>
                </Link>
            </div>
        </div>
        )
}

export default PokemonDisplay
