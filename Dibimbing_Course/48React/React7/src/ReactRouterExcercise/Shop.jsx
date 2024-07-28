import {Link} from 'react-router-dom'
import style from './Shop.module.css'

export default function Shop(){
    // const {productName} = useParams();
    return(
        <div>
            <h3>Halaman Shop</h3>
                <Link to="/shop/sepatu">
                   <div className={style.border}>
                        <h3>Sepatu</h3>
                        <h4>Rp 100.000</h4>
                   </div>
                </Link>
                <Link to="/shop/baju">
                   <div className={style.border}>
                        <h3>Baju</h3>
                        <h4>Rp 50.000</h4>
                   </div>
                </Link>
                <Link to="/shop/tas">
                    <div className={style.border}>
                        <h3>Tas</h3>
                        <h4>Rp 80.000</h4>
                   </div>
                </Link>
        </div>
    )
}