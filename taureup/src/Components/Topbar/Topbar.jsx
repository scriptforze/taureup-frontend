import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
import global from '../../common/Resources/clarity_world-line.png'
import mail from '../../common/Resources/codicon_mail.png'

export default function Topbar(){
    const [lenguaje, setLenguaje] = useState('');

    const handleChange = (event) => {
        setLenguaje(event.target.value);
    };

    return (
        <div className='topbar'>
            <div className='topbar__languaje'>
                <img src={global} alt="icon_global" />
                {/* <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={lenguaje}
                    onChange={handleChange}
                    label="Lenaguaje"
                >
                    <MenuItem value=''><em>Español</em></MenuItem>
                    <MenuItem value={20}>Ingles</MenuItem>
                </Select> */}
                <select className='topbar__languaje--select' name="" id="">
                    <option value="esp">Español</option>
                    <option value="eng">Ingles</option>
                </select>
            </div>
            <div className='topbar__mail'>
                <img src={mail} alt="icon_mail" />
                <p>soporte@teureup.com</p> |
                <p>ventas@taureup.com</p>
            </div>
        </div>
    )
}
