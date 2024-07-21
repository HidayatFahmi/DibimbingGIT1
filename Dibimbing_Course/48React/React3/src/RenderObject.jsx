

export default function RenderingObj (){

    const arrayOfRocket = [1,2,3,4,5];

    const productDetail = {
        id : "A01",
        nama : "taro",
        harga : 2000,
        rating : '🌟🌟🌟🌟🌟',
    }

    const cekObj = (e) => {
        console.log(e.target)
    }

    const rocket = (howMany) => {
        return '🚀'.repeat(howMany);
    }

    return(
        <div>
            {Object.keys(productDetail).map((kunci, index) => (
                <div key={index}>
                    {kunci} : {productDetail[kunci]} 
                    <button onClick={cekObj}>Object</button>
                </div>
            ))}

            <div>
                {arrayOfRocket.map((item, index) => (
                    <div key={index}>{rocket(item)}</div>
                ))}
            </div>
        </div>
    )
}