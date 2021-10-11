import React from 'react'
import Topbar from '../Topbar/Topbar'
import logo from '../../common/Resources/logo.png'
import whatsapp from '../../common/Resources/akar-icons_whatsapp-fill.png'

export default function Navbar() {
    return (
        <div>
            <Topbar/>
            <div className='navbar'>
                <img src={logo} alt="Logo" />
                <ul className='navbar__items'>
                    <li><a href="#">Inicio</a></li>
                    <li className='navbar__items--item'><a href="#">¿Por qué Bots?</a></li>
                    <li className='navbar__items--item'><a href="#">¿Como funcionan?</a></li>
                    <li className='navbar__items--item'><a href="#">FQA's</a></li>
                    <li className='navbar__items--item'><a href="#">Soporte</a></li>
                </ul>
                <button className='navbar__button'>
                    Contáctanos
                    <img src={whatsapp} alt="Icon Whatsapp" />
                </button>
            </div>
        </div>
    )
}
