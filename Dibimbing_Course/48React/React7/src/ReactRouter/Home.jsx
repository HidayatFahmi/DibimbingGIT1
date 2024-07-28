import {Link, useNavigate} from 'react-router-dom'

export default function Home(){
    const arahkan = useNavigate();

    const handleAbout = () => {
        alert('success loaded');
        arahkan('/about')
    }

    const handleBack = () => {
        arahkan(-3);
    }

    return(
        <div>
            <h1>Home Page</h1>
            <Link to="/about">About</Link>
            <Link to="/product/Tas" style={{textDecoration : 'none'}}>
                <div style={{border : '2px solid black', width: '300px', textAlign:'center', borderRadius:'20px'}}>
                    <h1>Botol Minum</h1>
                    <h2>Rp 30.000</h2>
                </div>
            </Link>
            <button onClick={handleBack}>Back</button>
            <button onClick={handleAbout}>About</button>
        </div>
    )
}