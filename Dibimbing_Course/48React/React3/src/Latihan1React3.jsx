import { useState } from 'react';

export default function OjekGendong() {
    const [ratings, setRatings] = useState([3, 5, 4]);

    const listDriver = [
        {name: "Budi", verified: false, rating: ratings[0]},
        {name: "Aldi", verified: true, rating: ratings[1]},
        {name: "Gilang", verified: true, rating: ratings[2]}
    ];

    const star = (many) => {
        return '⭐'.repeat(many);
    }

    const addStar = (index) => {
        const newRatings = [...ratings];
        newRatings[index] = Math.min(newRatings[index] + 1, 5);
        setRatings(newRatings);
    }

    return (
        <div>
            <h2>Ojek Gendong</h2>
            {listDriver.map((item, index) => {
                return (
                    <div key={index} style={{border: '2px solid black', padding: '5px'}}>
                        <h4>Name: {item.name}</h4>
                        <h4>Verified: {(item.verified ? "✔" : "❌")}</h4>
                        <h4>Rating: {star(item.rating)}</h4>
                        <button onClick={() => addStar(index)}>Add star</button>
                    </div>
                );
            })}
        </div>
    );
}
