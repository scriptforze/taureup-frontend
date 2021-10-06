import React from 'react'
import HeroScreen from '../Components/HeroScreen/HeroScreen'
import Navbar from '../Components/Navbar/Navbar'
import "../common/Styles/styles.scss"

export default function MainScreen() {
    return (
        <div>
            <Navbar/>
            <HeroScreen/>
            <h1>Pagina Principal</h1>
        </div>
    )
}
