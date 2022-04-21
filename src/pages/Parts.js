import React, { useEffect } from 'react'
import Reviews from '../components/Reviews'
import { useState } from 'react'
import { GetAllParts } from '../services/PartServices'
import PartDetails from './PartDetails'
import { useNavigate } from "react-router-dom"

const Parts = () => {
 

    const [parts, setParts] = useState([])
    useEffect(() =>{
        const handleParts = async () => {
            const data = await GetAllParts()
            setParts(data)

        }
        handleParts()
    }, [])

    let navigate = useNavigate();

    const [displayReview, setDisplayReview] = useState(false)

    const toggleReviews = () => {
        setDisplayReview(!displayReview)
    }

    const partDetails = (part) => {
        navigate(`/parts/${part.id}`)
    }

    return (
        <div>
        <div className='parts'>
            
                {
                parts.map((part) => (
                <div className="part-card"  key={part.id} onClick={() => partDetails(part)}>
                    <img className='part-item' src={part.image} alt="part" style={{display: 'block', maxWidth:'40%'}}/>
                     <h2 className="part-text">{part.name}</h2>
                   
                    <h3 className="part-text">Cost: ${part.price}</h3>
                </div>
                ))
                }
         
        </div>
    </div>
    )

}

export default Parts