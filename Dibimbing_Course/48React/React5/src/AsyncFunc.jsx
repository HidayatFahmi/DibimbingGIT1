import {useEffect,useState} from 'react'

export default function Asyncronous () {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const callApi = async () => {
           try{
             const resp = await fetch('https://jsonplaceholder.typicode.com/posts/')
             const respJson = await resp.json();
             setData(respJson);
             setLoading(false);
            // alert('pemanggilan API selesai');
           }catch(error){
            alert('GAGAL memanggil API');
            setLoading(true);
           }
        };

        callApi();
        // alert("eksekusi program dibawah fetching data")
    },[])

    return(
        <div>
            <h2>Async Function</h2>
            {/* <p>{JSON.stringify(data)}</p> */}
            {loading ? 
            <div>
                <h2>Loading....</h2>
            </div> :
            <div>
                {data.map((data,index)=>(
                    <div key={index} style={{border : '1px solid black'}}>
                        <h1>{data.title}</h1>
                        <p>{data.body}</p>
                    </div>
                ))}
            </div> 
            }
                
        </div>
    )
}