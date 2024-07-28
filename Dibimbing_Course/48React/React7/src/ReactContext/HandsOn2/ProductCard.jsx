import gaya from './ProductCard.module.css'
import PromoDetail from './PromoDetail'
import {useContext} from 'react'
import { TheContext } from './Context'

export default function TheProduct(){
    const {login, userName} = useContext(TheContext);

    const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID',{
        style : 'currency',
        currency : 'IDR',
        minimumFractionDigits:0,
    }).format(number);
}

    return(
        <div className={gaya.bordering}>
            {login && <p>{userName} anda berhasil login</p> }
            <h3>Botol Minum Kantor</h3>
            <h4>{rupiah(230000)}</h4>
            <p>⭐⭐⭐⭐⭐</p>

            {login && <PromoDetail/>}
        </div>
    )
}

