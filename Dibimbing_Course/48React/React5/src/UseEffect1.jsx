/* eslint-disable react/prop-types */
import {useEffect, useState} from 'react'

export default function Angka({number}){
    const [data, setData] = useState(null);
    const [counter, setCounter] = useState(0);
    const [dataLocal, setDataLocal] = useState(0);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then((json) => setData(json))
        console.log('useEffect jalan : '+counter);
        setDataLocal(localStorage.getItem("nilaiCounter"));
    },[counter])


    const adding = () => {
        setCounter(counter + 1);
        localStorage.setItem("nilaiCounter",counter);
    }

    const subtracting = () => {
        setCounter(counter - 1);
        localStorage.setItem("nilaiCounter",counter);
    }


    return(
        <div>
            <h1>{number}</h1>
            <div>
               {JSON.stringify(data)}
            </div>

            <div className="Counter">
                <button onClick={subtracting}>-</button>
                {counter}
                <button onClick={adding}>+</button>
                {dataLocal}
            </div>
        </div>
    )
}