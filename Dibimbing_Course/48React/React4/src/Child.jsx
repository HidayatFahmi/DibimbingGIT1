 /* eslint-disable react/prop-types */

import {useState} from 'react'

export default function Page2({inputParent}){
    // const [number, setNumber] = useState(0);
    const [show, setShow] = useState(true);

    // const multiply2 = () => {
    //     setNumber(counterChild * 2);
    // }


    return(
        <div>
            {/* <button onClick={multiply2}>X2</button>
            <h3>Hasil kali 2 = {number}</h3> */}
            {show &&
            <p>{inputParent}</p>
            }
             <button onClick={()=> setShow(prev => !prev)}>{show ? "Hide" : "Show"}</button>
        </div>
    )
}