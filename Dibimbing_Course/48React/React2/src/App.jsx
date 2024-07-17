import {useState} from 'react'


function Calculator(){
  const [counter, setCounter] = useState(0);
  const [randomString, setRandomString] = useState("");
  const [reactiveBoolean, setReactiveBoolean] = useState(false);
  const [input, setInput] = useState("");
  const [arrayInput, setArrayInput] = useState([]);

  const adding = () => {
    setCounter(prevCounter => prevCounter + 1);
    console.log(`counter = ${counter}`)
  }

  const subtracting = () => {
    setCounter(prevCounter => prevCounter - 1);
    console.log(`counter = ${counter}`)
  }

  const randomStringFunc = () => {
    setRandomString("xxx"+ Math.random(10));
  }

  const ubahBoolean = () => {
    setReactiveBoolean(prevBoolean => !prevBoolean)
  }

  const changeInput = (e) => {
    setInput(e.target.value);
    console.log(input);
  }

  const pushInputArray = () => {
    const arrayBaru = [...arrayInput, input];
    setArrayInput(arrayBaru);
  }

  const deleteArray = () => {
    const arrayBaru = [...arrayInput]
    setArrayInput(arrayBaru.pop());
    setArrayInput(arrayBaru);
  }

  return(
    <>
      <div style={{display : 'grid', alignItems:'center', justifyContent : 'center'}}>
        <h1>Counter</h1>
        <h3> Count : {counter}</h3>
        <button onClick={adding}>Add</button>
        <button onClick={subtracting}>Subtracting</button>
        <hr />
        <button onClick={randomStringFunc}>Random string : {randomString}</button>
        <hr />
        <button onClick={ubahBoolean}>Boolean : {reactiveBoolean.toString()}</button>
      </div>

      {/* <div style={{display : 'grid', alignItems : 'center', justifyContent : 'center'}}>
        <h1>Input Controlled</h1>
        <input type="text" value={input} placeholder="input text" onChange={changeInput}/>
        <h4>{input}</h4>
      </div> */}

      <div style={{display : 'grid', alignItems : 'center', justifyContent : 'center'}}>
        <h1>Array Input</h1>
        <input type="text" value={input} placeholder="text something" onChange={changeInput}/>
        <button onClick={pushInputArray}>Push</button>
        <button onClick={deleteArray}>Delete last</button>
        <ol type="1">
        {arrayInput.map((item, index) => (
          <li key={index}>{item}</li>
        ))}    
        </ol>
      </div>
    </>
  )
}

export default Calculator;