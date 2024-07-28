import { useEffect} from 'react'

export default function GetThat(){

    // const [data, setData] = useState([]);

    useEffect(()=>{
        const options = {method: 'GET', headers: {accept: 'application/json'}};
        const fetchingApi = async () => {
            try{
                const resp = await fetch('https://api.themoviedb.org/3/authentication', options);
                console.log(resp);
                // const respJson = resp.json();
                // setData(respJson);
                
            }catch(err){
                console.error(err)
            }
        }

        fetchingApi();
    },[])

    return(
        <div>
            {/* {JSON.stringify(data)} */}
        </div>
    )
}