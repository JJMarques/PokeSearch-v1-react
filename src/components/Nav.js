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

                <h3 className="logo">PokeSearch</h3>

                <h5>powered by</h5>

                <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">
                    <img className="pokeapi-logo" src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="logo"/>
                </a>

                {props.pokemonDisplay === true ? <></> : <h1>Welcome! Search for a Pokemon below. 🔍</h1>}
                
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
                <Link to={search !== "" ? `/pokemon/${search}` : ''} style={{ transform: 'translateY(-33px)' }}>
                    <button 
                        className={navFocus ? "search-btn active" : "search-btn"}
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
