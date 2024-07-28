import {Link, useNavigate} from 'react-router-dom'

export default function Navigation(){

    const navigatedd = useNavigate();

    const handleBack = () => {
        navigatedd(-1);
    }

    return(
        <div>
            <nav>
                <button onClick={handleBack}>Back</button>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
            </nav>
        </div>
    )
}