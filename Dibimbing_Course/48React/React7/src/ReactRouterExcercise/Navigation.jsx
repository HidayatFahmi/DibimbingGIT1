import {Link} from 'react-router-dom'
import style from "./Navigation.module.css"

export default function Navigation(){

    return(
        <div>
            <nav  className={style.navStyle}>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
            </nav>
        </div>
    )
}