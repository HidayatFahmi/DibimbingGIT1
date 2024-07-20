import { useState} from 'react'
// import Child from "./Child"
import ShowHide from './Latihan2React2';

export default function Parent(){
    // const [counter,setCounter] = useState(0);
    const [showIt, setShowIt] = useState(true);
    const [input, setinput] = useState("");
    // const [champion, setChampion] = useState([]);

    const insertText = (e) => {
        setinput(e.target.value);
    }

    return(
        <div style={{display:'grid', alignItems : 'center', justifyContent : 'center'}}>
            {/* <button onClick={()=> setCounter(prev => prev + 1)}> counter parent : {counter}</button> */}
            {/* <Child 
            counterChild={counter} 
            setCounterParent={setCounter}
            setterChampion={setChampion}
            championChild = {champion}
            /> */}
            <h2>Show Hide Button</h2>
            {showIt && (
                <>
                <input type="password" onChange = {insertText} value={input} placeholder="text something"/>
                <h4>{input}</h4>
                </>
            )}
            <ShowHide childSetShowIt = {setShowIt} childShowIt ={showIt}/>
        </div>
    )
}