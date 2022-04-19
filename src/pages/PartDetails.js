import Reviews from '../components/Reviews'
import WriteReview from "../components/WriteReview";
import { GetPartById } from '../services/PartServices';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const PartDetails = () => {

    let { id } = useParams()

    const [part, setPart] = useState({})

    useEffect(() =>{
        const handleParts = async () => {
            const data = await GetPartById(id)
            console.log(data)
            setPart(data)

        }
        handleParts()
    }, [])

    return (
        <div className="part-details-container">
            <p className="part-details-name">{part.name}</p>
            <img className="part-details-image" src={part.image} alt={`Image of ${part.name}`}/>
            <p className=""></p>
            <p className=""></p>
            <p className=""></p>
            <p className=""></p>
            <p className=""></p>
        </div>
    )

}

export default PartDetails