import React from 'react'
import './Footer.css'
import { SiGithub, SiInstagram } from 'react-icons/si'

const Footer = () => {
    return (
        <div className="footer">
            <p>Open Sourced on GitHub</p>
            <strong><span>©</span> José Marques <span>2020</span></strong>
            <div className="social">
                <a href="https://github.com/JJMarques" rel="noreferrer" target="_blank" aria-label="Github of José Marques">
                    <SiGithub style={{height: '20px', width: 'auto', marginRight: '20px'}} />
                </a>
                <a href="https://www.instagram.com/jmarques_98/" rel="noreferrer" target="_blank" aria-label="Instagram of José Marques"> 
                    <SiInstagram style={{height: '20px', width: 'auto'}} />
                </a>
            </div>
        </div>
    )
}

export default Footer
