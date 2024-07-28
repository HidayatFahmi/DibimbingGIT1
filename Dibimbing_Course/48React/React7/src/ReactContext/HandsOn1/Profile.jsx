import {useContext} from 'react'
import { UserContext } from './UserContext'

export default function Profile(){
    const {user, successLogin, nilai} = useContext(UserContext)

    return(
        <div>
            <h1>Selamat Datang {user} </h1>
            {successLogin ?
            <div>
                <h3>{user} success Login nilai anda {nilai}</h3>
            </div> :
            <div>
                <h3>Wrong username !</h3>
            </div>
            }
        </div>
    )
}