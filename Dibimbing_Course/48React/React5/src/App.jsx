import {useState} from 'react'
import Angka from "./UseEffect1"
import TimerComponent from "./CleanupFunction"


function App() {
  const [show, setShow] = useState(true);

  return (
    <>
     <Angka number={3}/>
     <button onClick={()=>setShow(prev => !prev)}>unmount</button>
     {show && 
     <TimerComponent/>
     }
    </>
  )
}

export default App
