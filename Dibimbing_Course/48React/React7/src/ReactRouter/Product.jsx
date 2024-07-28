import {useParams} from 'react-router-dom'

export default function ProductGeneral(){
    const {sepatu} = useParams();

    return(
        <div>
            <h2>Nama Product : {sepatu} </h2>
        </div>
    )
}