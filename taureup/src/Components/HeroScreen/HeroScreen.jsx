import React from 'react'
import taureup from '../../common/Resources/Taureup_text.png'

export default function HeroScreen() {
    return (
        <div className='heroscreen'>
            <div className='heroscreen__content'>
                <img src={taureup} alt="texto" />
                <h1>Opere como un<br/> profesional sin serlo</h1>
            </div>
        </div>
    )
}
