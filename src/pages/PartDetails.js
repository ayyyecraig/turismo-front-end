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
        <div></div>
    )

}

export default PartDetails