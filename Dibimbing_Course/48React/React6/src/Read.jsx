// Read Code with headers
import {useEffect, useState} from 'react'
import style from './ReadStyle.module.css'

export default function ReadCRUD(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
       const fetchApiDibimbing = async () => {
        try{
            const resp = await fetch('https://api-bootcamp.do.dibimbing.id/api/v1/foods', {
                method : 'GET',
                headers : new Headers({
                    apiKey : 'w05KkI9AWhKxzvPFtXotUva-'
                })
            })
            const dataJson = await resp.json();
            setData(dataJson.data);
            setLoading(false);
        }catch(err){
            console.error(err.message)
            setLoading(true);
        }
       }

       fetchApiDibimbing();
    },[])

    return(
        <div>
           {loading ? 
           <div>
            <h2>Loading .....</h2>
           </div> :
           <div>
                {/* {JSON.stringify(data)} */}
                {data.map((item,index) => (
                    <div key={index} className={style.bording}>
                        {/* <h2>{item.id}</h2> */}
                        <h1>{item.name}</h1>
                        <h2>{item.description}</h2>
                        <img src={item.imageUrl} className={style.ReadStyle}></img>
                    </div>
                ))}
           </div>}
        </div>
    )
}