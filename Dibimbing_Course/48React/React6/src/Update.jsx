import {useState, useEffect} from 'react'
import style from './UpdateStyle.module.css'

export default function UpdateCRUD(){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchingApiDibimbing = async () => {
        try{
            const resp = await fetch('https://api-bootcamp.do.dibimbing.id/api/v1/foods', {
            method : 'GET',
            headers : new Headers({
                apiKey : 'w05KkI9AWhKxzvPFtXotUva-',
            })
            })
            const respJson = await resp.json();
            setData(respJson.data);
            setLoading(false);
        }catch(error){
            console.error(error)
        }
    }

    fetchingApiDibimbing();

    },[])

    const updateFood = async (id, desc, ingr) => {
        try{
            await fetch(`https://api-bootcamp.do.dibimbing.id/api/v1/update-food/${id}`, {
            method : 'POST',
            headers : new Headers({
                apiKey : 'w05KkI9AWhKxzvPFtXotUva-',
                Authorization : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q',
                'Content-Type':"application/json"
            }),
            body : JSON.stringify({
                name : "Uhuhui",
                description : desc,
                imageUrl : 'https://unsplash.com/photos/a-wooden-board-topped-with-fried-food-next-to-a-bowl-of-ketchup-Xih7Zr36TQc',
                ingredients : ingr,
            })
            })
            alert('Update Success')
        }catch(error){
            console.error(error)
        }
    }

    return(
        <div>
            {loading ? 
            <div>
                <h2>Loading...</h2>
            </div>:
            <div>
                {/* {JSON.stringify(data)} */}
                {data.map((data, index) => (
                    <div className={style.bording} key={index}>
                        <h3>{data.name}</h3>
                        <h5>{data.id}</h5>
                        <p>{data.description}</p>
                        <p>{data.ingredients}</p>
                        <img src={data.imageUrl} alt="" /><br />
                         <button onClick={()=>updateFood(data.id, data.description, data.ingredients, data.imageUrl)}>Update</button>
                    </div>
                ))}
            </div>
            }
        </div>
    )
}