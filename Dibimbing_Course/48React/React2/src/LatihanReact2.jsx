import {useState} from 'react'

export default function Counter(){
    const [counting, setCounting] = useState(0);
    const [showing, setShowing] = useState(true);

    const adding = () => {
        setCounting(counting + 1);
    }

    const subtracting = () => {
    setCounting(counting - 1);
    }

    const showingIt = () => {
        setShowing(prevValue => prevValue = !prevValue);
    }

    return(
        <div style={{display : 'grid', alignItems : 'center', justifyContent : 'center'}}>
            {showing &&
            <div className="calculator" style={{display:'flex', justifyContent:'space-around'}}>
                <button onClick={subtracting}> &minus; </button>
                <span style={{margin : '0 10px'}}>{counting}</span>
                <button onClick={adding}> &#43; </button>
            </div>      
            }
            <br />
            <button onClick={showingIt}>{showing ? "Hide":"Show"}</button>
        </div>
    )
}