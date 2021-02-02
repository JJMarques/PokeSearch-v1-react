import React, { useEffect, useState } from 'react'
import axios from 'axios' 
import './ListContainer.css'
import Loading from './animations/Loading'
import PokemonCard from './PokemonCard';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

const ListContainer = ({ pokemonList, fetchUrl, setPokemonList, isLoading, handleFetchUrl }) => {
    const pageList = pokemonList.results
    const [currentPageUrl, setCurrentPageUrl] = useState(fetchUrl)

    const changePage = (url) => {
        setCurrentPageUrl(url)
        handleFetchUrl(url)
    }

    useEffect(() => {
        const fetchNewPagePokemons = async () => {
            const result = await axios(currentPageUrl)
            setPokemonList(result.data)
            document.title = 'Home - PokeSearch'
        }
        fetchNewPagePokemons()
    }, [currentPageUrl, fetchUrl, setPokemonList])
    

    return ( 
        <div className="list-container">
            <div className="list-bg">
                <div className="buttons">
                    
                    <button 
                        className={pokemonList.previous ? 'button-change-page' : 'button-change-page disabled' }
                        disabled={!pokemonList.previous}
                        onClick={pokemonList.previous ? () => changePage(pokemonList.previous) : () => {} }
                    >
                        <AiOutlineArrowLeft style={{ marginRight: '5px' }}/>
                        Previous page
                    </button>

                    <button 
                        className={pokemonList.next ? 'button-change-page' : 'button-change-page disabled' }
                        disabled={!pokemonList.next}
                        onClick={pokemonList.next ? () => changePage(pokemonList.next) : () => {}}
                    >
                        Next page<AiOutlineArrowRight style={{ marginLeft: '5px' }}/>
                    </button>

                </div>
                <div className={isLoading ? "loading" : "list"}>
                {
                    isLoading ? (<Loading />) : (
                        pageList.map(item => (
                            <PokemonCard key={item.url} item={item}/>
                        ))
                    )
                }
                </div>
                <div className="buttons bottom">
                    
                    <button 
                        className={pokemonList.previous ? 'button-change-page' : 'button-change-page disabled' }
                        disabled={!pokemonList.previous}
                        onClick={pokemonList.previous ? () => { changePage(pokemonList.previous); window.scrollTo(0,290) } : () => {} }
                    >
                        <AiOutlineArrowLeft style={{ marginRight: '5px' }}/>
                        Previous page
                    </button>

                    <button 
                        className={pokemonList.next ? 'button-change-page' : 'button-change-page disabled' }
                        disabled={!pokemonList.next}
                        onClick={pokemonList.next ? () => { changePage(pokemonList.next); window.scrollTo(0,290) } : () => {}}
                    >
                        Next page<AiOutlineArrowRight style={{ marginLeft: '5px' }}/>
                    </button>

                </div>
            </div>
        </div>
    )
    
    
}

export default ListContainer
