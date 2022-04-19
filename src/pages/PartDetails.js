import Reviews from '../components/Reviews'
import WriteReview from "../components/WriteReview";
import { GetPartById } from '../services/PartServices';
import { useState, useEffect } from 'react';


const PartDetails = () => {

    const [part, setPart] = useState({})

    useEffect(() =>{
        const handleParts = async () => {
            const data = await GetPartById()
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