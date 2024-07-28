import {useContext} from 'react'
import { UserContext } from './UserContext';

export default function LoginCard(){
    const {user, setUser, setSuccessLogin} = useContext(UserContext);
    // const [userName, setUsername] = useState('');

    const handleInput = (e) => {
        setUser(e.target.value)
    }

    const handleLogin = (user) => {
        if(user == "fahmi hidayat") return setSuccessLogin(true);
        return setSuccessLogin(false);
    }

    return(
        <div>
            <input type="text" onChange={handleInput}/>
            <button onClick={()=>handleLogin(user)}>Login</button>
        </div>
    )
}