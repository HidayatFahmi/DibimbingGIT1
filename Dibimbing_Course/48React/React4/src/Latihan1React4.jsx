import {useState} from 'react'

export default function TestEvent(){

    const [message, setMessage] = useState("");
    const [showIt, setShowIt] = useState(true);
    const [player, setPlayer] =useState([]);
    const [input, setInput] = useState("");
    const [ojol, setOjol] = useState({
        nama : "fahmi hidayat",
        usia : 25,
        single : true,
        rating : '⭐⭐⭐'
    })

    const textDanger = (e) => {
        setMessage((e.target.value).trim().toLowerCase());
        if(message === 'bahaya') alert("BAHAYA BAHAYA!!!")
    }

    const truthMessage = () => {
        if(message === "bahaya"){
            console.log(`${message} tadi bohongan saja`);
        }
        else{
            console.log(`${message} is wrong text`);
        }
    }

    const textPlayer = (e) => {
        setInput(e.target.value);
    }

    const addPlayer = () => {
        setPlayer([...player, input]);
        setInput("");
    }

    const deletePlayer = (deletedPlayer) => {
        // const updatePlayer = player.filter(item => item != deletedPlayer);
        // setPlayer(updatePlayer);
        setPlayer(player.filter(item => item != deletedPlayer))

    }

    const addRatingOjol = () => {
        const ratingBaru = ojol.rating + "⭐";
        const ojolBaru = {
            ...ojol,
            rating : ratingBaru
        };
        setOjol(ojolBaru);
    }

    return( 
        <div>
            {showIt &&
            <div>
                <input type="text" onChange={textDanger}/>
                <button onClick={truthMessage}>Show the truth</button><br />
                <input type="text" onChange={textPlayer} value={input}/>
                <button onClick={addPlayer}>Add</button>
                <ol type="1">
                    {player.map((player, index) => (
                        <li key={index}>
                            {player}
                            <button onClick={()=>deletePlayer(player)}>X</button>
                        </li> 
                    ))}
                </ol>
            </div>
            }
            <div>
                <button onClick={()=>{setShowIt(prev=> !prev)}}>{showIt ? "Hide":"Show"}</button>
            </div>
            <div>
                {Object.keys(ojol).map((keynya, index) => {
                    return (<div key={index}>{keynya} : {ojol[keynya]}</div>)
                })}
                <button onClick={addRatingOjol}>Add Rating</button>
            </div>
        </div>
    )
}