import {useState} from 'react'
import Page2 from './Child'

export default function Page1(){
    // const[counter, setCounter] = useState(0)
    const [input, setInput] = useState("")

    // const subtracting = () => {
    //     setCounter(counter - 1)
    // }

    const updateInput = (e) =>{
    setInput(e.target.value)
    }

    // const adding = () => {
    //     setCounter(counter + 1)
    // }

    return(
        <div>
            {/* <button onClick={subtracting}>-</button>
            {counter}
            <button onClick={adding}>+</button> */}
            <input type="text" onChange={updateInput}/>
            {/* <Page2 counterChild={counter} inputParent={input}/> */}
            <Page2 inputParent={input}/>
        </div>
    )
}