import style from './UpdateStyle.module.css'
import {useState, useEffect} from 'react'

export default function DeleteCRUD(){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const getDataApi = async() => {
            try{
                const resp = await fetch('https://api-bootcamp.do.dibimbing.id/api/v1/foods', {
                    method:'GET',
                    headers:new Headers({
                        apiKey : 'w05KkI9AWhKxzvPFtXotUva-',
                    })
                });
                const respJson = await resp.json();
                setData(respJson.data);
                setLoading(false);
                alert('Success fetching API')
            }catch(err){
                console.error(err);
            }
        }

        getDataApi();

    },[])

    const handleDelete = (id) => {
        fetch(`https://api-bootcamp.do.dibimbing.id/api/v1/delete-food/${id}`, {
            method : 'DELETE',
            headers: new Headers({
                apiKey : 'w05KkI9AWhKxzvPFtXotUva-',
                Authorization : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q'
            }),
        });
        alert('Data has deleted')
    };

    return(
        <div>
            {loading ? 
            <div>
                <h2>Loading.....</h2>
            </div>:
            <div>
                {data.map((data,index) => (
                    <div key={index} className={style.bording}>
                        <h3>{data.name}</h3>
                        <p>{data.description}</p>
                        <p>{data.ingredients}</p>
                        <img src={data.imageUrl} alt="" /><br />
                        <button onClick={()=>handleDelete(data.id)}>Delete</button>
                    </div>
                ))}
            </div>}
        </div>
    )
}