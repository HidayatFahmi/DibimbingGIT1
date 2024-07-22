import {useState} from 'react'

export default function Counter(){
    const [counter, setCounter] = useState(0);
    const [show, setShow] = useState(true);

    const adding = () => {
        setCounter(counter + 1);
    }

    const subtracting = () => {
        setCounter(counter - 1);
    }

    const showIt = () => {
        setShow(prev => !prev)
    }

    return(
        <div style={{display : 'flex', justifyContent : 'center'}}>
            {show && 
                <div>
                <button onClick={subtracting}>-</button>
                {counter}
                <button onClick={adding}>+</button>
            </div>
            }
            <div>
                <button onClick={showIt}>{show? "Hide" : "Show"}</button>
            </div>
        </div>
    )
}