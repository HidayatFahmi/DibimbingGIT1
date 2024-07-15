import './Deskripsi.css'
import style from './Deskripsi.module.css'

const Desc = () => {
    return(
        <div className={style.deskripsi}>
            <img src="../public/fahmi.png" alt="" />
            <div className="data-diri" style={{
                backgroundColor : 'salmon',
                color : 'white',
                fontFamily : 'Arial',
                }}>
                <span> Nama   : Fahmi Hidayat</span>
                <span> Umur   : 25 Tahun</span>
                <span> Asal   : Bangka Belitung</span>
                <span> Status : Single </span>
            </div>
        </div>
    )
}

export default Desc;