import {useEffect, useState} from 'react'
import gaya from './CreateStyle.module.css'

export default function CreateCRUD(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetcingApiDibimbing = async () => {
            try{
                const resp = await fetch('https://api-bootcamp.do.dibimbing.id/api/v1/foods', {
                method : 'GET',
                headers : new Headers({
                    apiKey : 'w05KkI9AWhKxzvPFtXotUva-'
                })
                })
                const respJson = await resp.json();
                setData(respJson.data);
                setLoading(false)
                
            }catch(err){
                console.error(err.message)
            }
        }

        fetcingApiDibimbing();
    },[])

    const handleCreateFood = async () => {
        try {
            await fetch('https://api-bootcamp.do.dibimbing.id/api/v1/create-food', {
                method : 'POST',
                headers : new Headers({
                    apiKey : 'w05KkI9AWhKxzvPFtXotUva-',
                    'content-Type' : 'application/json',
                    Authorization : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q'
                }),
                body : JSON.stringify({
                    name : 'Ikan Gangan Belitung, post by fahmi ',
                    description: 'Ikan dengan rempah kunyit',
                    imageUrl: 'https://www.google.com/search?q=ikan+gangan&oq=ikan+gangan&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIICAEQABgWGB4yCAgCEAAYFhgeMggIAxAAGBYYHjIMCAQQABgKGA8YFhgeMggIBRAAGBYYHjIICAYQABgWGB4yCggHEAAYDxgWGB4yCggIEAAYDxgWGB4yCggJEAAYgAQYogTSAQg5MzYxajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#vhid=bLuatMlUzpzwxM&vssid=l',
                    ingredients:[],
                })
            })
            alert('Success fetching API')

        } catch (error) {
            console.error(error);
        }
    };

    return(
        <div>
            {loading ?
            <div>
                <h1>Loading...</h1>
            </div> :
            <div>
                {/* {JSON.stringify(data)} */}
                <button onClick={handleCreateFood}>Add Food</button>
                {data.map((item,index) => (
                    <div key={index} className={gaya.bording}>
                        {/* <h2>{item.id}</h2> */}
                        <h1>{item.name}</h1>
                        <h2>{item.description}</h2>
                        <img src={item.imageUrl} className={gaya.ReadStyle}></img>
                    </div>
                ))}
            </div>
            }
        </div>
    )
}