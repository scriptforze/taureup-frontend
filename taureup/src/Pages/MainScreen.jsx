import React from 'react'
import HeroScreen from '../Components/HeroScreen/HeroScreen'
import Navbar from '../Components/Navbar/Navbar'
import "../common/Styles/styles.scss"
import clock from '../common/Resources/ant-design_field-time-outlined.png'
import money from '../common/Resources/dashicons_money-alt.png'
import check from '../common/Resources/carbon_certificate-check.png'
import phone from '../common/Resources/smarthphone.png'
import horse from '../common/Resources/icon_horse.png'
import face from '../common/Resources/icon_emoji.png'

export default function MainScreen() {
    return (
        <div>
            <Navbar/>
            <HeroScreen/>
            <div className='main__intro'>
                <div className='main__intro__content'>
                    <img className='intro__content--icon' src={clock} alt="clock" />
                    <p>Empieza en <span>un minuto</span></p>
                </div>
                <div className='main__intro__content'>
                    <img className='intro__content--icon' src={money} alt="money" />
                    <p>Invierte desde 500 <span>dolares</span></p>
                </div>
                <div className='main__intro__content'>
                    <img className='intro__content--icon' src={check} alt="check" />
                    <p>Sin costes <span>fijos</span></p>
                </div>
            </div>
            <div className='main__sectionOperate'>
                <div className='main__sectionOperate__text'>
                    <h1>¿Por qué operar con TaureUp?</h1>
                    <p>Los traders profesionales lo saben desde hace años: los robots son mejores para operar que las personas. Por eso se ha desarrollado la aplicación <b>TAUREUP</b> , para que usted también pueda <b>operar de forma automática.</b></p>
                    <br /><br />
                    <p>Puede abrir una cuenta en línea en tan solo un minuto y empezar a invertir desde <b>500 dólares</b>. Puede apagar y encender el robot en cualquier momento para proteger su inversión.</p>
                </div>
                <img className='main__sectionOperate__phone' src={phone} alt="smartphone" />
            </div>
            <div className='howwork'>
                <h1>¿Cómo funcionan?</h1>
                <div className='howwork__cards'>
                    <div className='howwork__cards__content'>
                        <img className='howwork__cards__icons' src={horse} alt="icon_horse" />
                        <h2>Estrategias de <br />negociación <br /> automatizadas</h2>
                    </div>
                    <div className='howwork__cards__content'>
                        <img className='howwork__cards__icons' src={face} alt="icon_face" />
                        <h2>Lograr un retorno de <br />la inversión<br /> profesional</h2>
                    </div>
                </div>
            </div>
            <div>
                <h1>¡TaureUp es para todos!</h1>
            </div>
            <div>
                <h1>cards</h1>
            </div>
            <div>
                <h1>Footer</h1>
            </div>
        </div>
    )
}
