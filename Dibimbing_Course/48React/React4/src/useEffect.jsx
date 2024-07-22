import {useState, useEffect} from 'react'

export default function TestUseEffect(){
    const [tulisan, setTulisan] = useState("");

    useEffect(()=>{
       const isTulisan =  localStorage.getItem("tulisan").trim();
       if(isTulisan) setTulisan(isTulisan);
    },[])

    return(
        <div>
            <input type="text" value={tulisan} onChange={(event) => {
            setTulisan(event.target.value)
            localStorage.setItem("tulisan", tulisan);
            }}/>
            <div>
                {tulisan}
            </div>
        </div>
    )
}