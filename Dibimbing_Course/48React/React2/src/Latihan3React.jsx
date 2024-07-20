import {useState} from 'react'

export default function ListGame (){
    const [listGame, setListGame] = useState([]);
    const [input, setInput] = useState("")

    const textGame = (e) => {
        setInput(e.target.value);
    }

    const addGame = () => {
        let game = [...listGame, input];
        setListGame(game);
        setInput("");
    }

    const deleteGame = () => {
        let tempListgame = listGame.slice(0,-1);
        setListGame(tempListgame);
    }

    return(
        <div style={{display : 'grid', justifyContent : 'center', alignItems : 'center'}}>
           <div className="inputData">
             <input type="text" value={input} placeholder="input" onChange={textGame}/>
            <button onClick={addGame}>Save</button>
           </div>

           <div className="listItems">
            <ol type="1">
                {listGame.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ol>
           </div>
           <button onClick={deleteGame}> Delete</button>
        </div>
    )
}