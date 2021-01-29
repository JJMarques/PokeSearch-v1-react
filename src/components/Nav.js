import React, { useState } from 'react'
import './Nav.css'

import { FaSearch } from 'react-icons/fa'
import { Link, useHistory } from 'react-router-dom'

const Nav = (props) => {

    const history = useHistory();
    const [navFocus, setNavFocus] = useState(false)
    const [search, setSearch] = useState('')

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            history.push(`/pokemon/${search}`);
            setNavFocus(false)
        }
    }

    return (
        <>
            <div className={props.pokemonDisplay === true ? "nav smaller" : "nav"}>

                <h1 className="logo">PokeSearch</h1>

                <h2>powered by</h2>

                <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">
                    <img className="pokeapi-logo" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="logo"/>
                </a>

                <label>
                {props.pokemonDisplay === true ? <></> : 'Welcome! Search for a Pokemon below. 🔍'}
                
                <input 
                    type="search" 
                    onFocus={() => {setNavFocus(true)}}
                    onKeyDown={handleKeyDown}
                    onBlur={() => {setNavFocus(false)}} 
                    value={search.value} 
                    onChange={handleChange} 
                    className="input-search-pokemon" 
                    placeholder="Search for a name"
                />
                </label>
                <Link to={search !== "" ? `/pokemon/${search}` : ''} style={{ transform: 'translateY(-33px)' }}>
                    <button 
                        className={navFocus ? "search-btn active" : "search-btn"}
                        aria-label="Click here to search for a pokemon"
                    >
                        <FaSearch 
                            style={{ height: '25px', width: 'auto' }} 
                        />
                        
                    </button>
                </Link>
                
            </div>
        </>
    )
}

export default Nav
