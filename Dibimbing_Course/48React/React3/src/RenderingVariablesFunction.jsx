

export default function Rendering(){

    const dataMahasiswa = {
        nama : "Fahmi Hidayat",
        umur : 25,
        asal : "Bangka Belitung",
        single : true,
    }

    const {nama, umur} = dataMahasiswa;
    let rocket = '🚀';

    const introduce = () => {
        return `Halo nama saya ${nama} dan umur saya sekarang ${umur}. Asala saya dari ${dataMahasiswa.asal} ${rocket.repeat(5)}`
    }

    return(
        <div>
            {introduce()}
        </div>
    )
}