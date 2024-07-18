import { useState} from 'react'
import Child from "./Child"

export default function Parent(){
    const [counter,setCounter] = useState(0);
    const [champion, setChampion] = useState([]);

    return(
        <div style={{display:'grid', alignItems : 'center', justifyContent : 'center'}}>
            <button onClick={()=> setCounter(prev => prev + 1)}> counter parent : {counter}</button>
            <Child 
            counterChild={counter} 
            setCounterParent={setCounter}
            setterChampion={setChampion}
            championChild = {champion}
            />
        </div>
    )
}