import {useContext} from 'react'
import { TheContext } from './Context';
import style from './Login.module.css'

export default function Login(){

    const {setLogin, userName, setUsername} = useContext(TheContext);

    const handleLogin = () => {
        if(userName == "fahmi") setLogin(true);
    }

    const handleLogout = () => {
        setLogin(false);
    }

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    return(
        <div className={style.buttonAlign}>
            <input type="text" placeholder='insert username' onChange={handleUsername}/>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}