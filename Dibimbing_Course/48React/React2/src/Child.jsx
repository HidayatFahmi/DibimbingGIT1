import PropTypes from 'prop-types';
import {useState} from 'react'

function CounterChild({ counterChild, setCounterParent, championChild, setterChampion }) {
    const [input, setInput] = useState("");

    const textClub = (e) => {
        setInput(e.target.value);
    }

    const addClub = () => {
        const arrayTemp = [...championChild, input];
        setterChampion(arrayTemp);
    }
    
    return (
        <div>
            Counter Child: {counterChild}
            <br />
            <button onClick={() => setCounterParent(counterChild - 1)}>Substract Parent</button>


             <div className="chamionsLeague">
                <h2>List of Champions</h2>
                <input type="text" onChange={textClub} placeholder="input clubs name"/>
                <button onClick={addClub}>Add Club</button>
                <ol type='1'>
                    {championChild.map((club, index) => (
                        <li key={index}> {club} </li>
                    )) 
                    }
                </ol>
            </div>
        </div>
    );
}


CounterChild.propTypes = {
    counterChild: PropTypes.number.isRequired, // Mengatur tipe props dan apakah prop ini diperlukan atau tidak
    setCounterParent: PropTypes.func.isRequired, // Mengatur tipe props dan apakah prop ini diperlukan atau tidak
    championChild: PropTypes.arrayOf(PropTypes.string).isRequired, // Mengatur tipe array of string dan apakah prop ini diperlukan atau tidak
    setterChampion: PropTypes.func.isRequired // Mengatur tipe fungsi dan apakah prop ini diperlukan atau tidak
};

export default CounterChild;
