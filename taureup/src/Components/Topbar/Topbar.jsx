import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Topbar(){

    return (
        <div className='topbar'>
            <div className='topbar__languaje'>
                <FontAwesomeIcon className='topbar__languaje--globe' icon={faGlobe}/>
                <select name="" id="">
                    <option value="esp">Español</option>
                    <option value="eng">Ingles</option>
                </select>
            </div>
            <div className='topbar__mail'>
                <FontAwesomeIcon icon={faEnvelope}/>
                <p>soporte@teureup.com</p> |
                <p>ventas@taureup.com</p>
            </div>
        </div>
    )
}
