// import {useState} from 'react'
import Angka from "./UseEffect1"
// import TimerComponent from "./CleanupFunction"
import Asyncronous from './AsyncFunc';


function App() {
  // const [show, setShow] = useState(true);

  return (
    <>
     <Angka number={3}/>
     {/* <button onClick={()=>setShow(prev => !prev)}>unmount</button>
     {show && 
     <TimerComponent/>
     } */}
     <Asyncronous/>
    </>
  )
}

export default App
