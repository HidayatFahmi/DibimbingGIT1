import {useParams} from 'react-router-dom'

export default function Product(){
    const {any} = useParams();

    return(
        <div>
            <h2>{any}</h2>
        </div>
    )
}