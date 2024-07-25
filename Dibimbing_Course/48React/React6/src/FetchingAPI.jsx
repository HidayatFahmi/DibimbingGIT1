import {useEffect, useState} from 'react'

export default function Fetching1(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchingJsonPlaceHolder = async () => {
            try{
                const resp = await fetch('https://jsonplaceholder.typicode.com/users');
                const respJson = await resp.json();
                setData(respJson);
                setLoading(false);
            }catch(err){
                console.error(err.message)
                setLoading(true);
            }
        }

        fetchingJsonPlaceHolder();
    },[])

    return(
        <div>
            {loading ?
            <div>
                <h1>Loading ....</h1>
            </div> :
            <div>
                {/* <p>{JSON.stringify(data)}</p>  */}
                <table border="2" cellPadding='5px' cellSpacing="0">
                    <thead style={{textAlign : 'center'}}>
                        <tr>
                            <th rowSpan='3' style={{width : '30px'}}>ID</th>
                            <th rowSpan='3'>Name</th>
                            <th rowSpan='3'>Username</th>
                            <th rowSpan='3'>Email</th>
                            <th colSpan='6'>Address</th>
                            <th rowSpan='3'>Phone</th>
                            <th rowSpan='3'>Website</th>
                            <th colSpan='3'>Company</th>
                        </tr>
                         <tr>
                           <td rowSpan='2'>Street</td>
                           <td rowSpan='2'>Suite</td>
                           <td rowSpan='2'>City</td>
                           <td rowSpan='2'>Zip Code</td>
                           <td colSpan='2'>Geo</td>
                           <td rowSpan='2'>Name</td>
                            <td rowSpan='2'>Catch Phrase</td>
                            <td rowSpan='2'>BS</td>
                        </tr>
                        <tr>
                            <td>lat</td>
                            <td>lng</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item,index) => (
                            <tr key={index}> 
                                <td style={{textAlign : 'center'}}>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.address.street}</td>
                                <td>{item.address.suite}</td>
                                <td>{item.address.city}</td>
                                <td>{item.address.zipcode}</td>
                                <td>{item.address.geo.lat}</td>
                                <td>{item.address.geo.lng}</td>
                                <td>{item.phone}</td>
                                <td>{item.website}</td>
                                <td>{item.company.name}</td>
                                <td>{item.company.catchPhrase}</td>
                                <td>{item.company.bs}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            }
        </div>
    )
}

// https://jsomplaceholder.typicode.com/users