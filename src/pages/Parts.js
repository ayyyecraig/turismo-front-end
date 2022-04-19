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
            console.log(data)
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
        <div>
            <ul>
                {
                parts.map((part) => (
                <div className="part-card"  key={part.id} onClick={() => partDetails(part)}>
                    <h2>{part.name}</h2>
                    <img className='part-item' src={part.image} alt="part" style={{display: 'block', maxWidth:'50%'}}/>
                    <h3>Performance: {part.performance}</h3>
                    <h3>Weight: {part.weight}-lbs</h3>
                    <h3>Top Speed Enhancement: {part.topSpeedEffect}</h3>
                    <h3>Acceleration Effect: {part.accelerationEffect}</h3>
                    <h3>Horsepower: {part.horsePowerEffect}</h3>
                    <h3>Cost: ${part.price}</h3>
                    <button>Purchase</button>
                    <div>
                        {displayReview ? <Reviews /> : null}
                    </div>
                </div> 
            </div>
            ))
            }
        </ul>
    </div>
    )

}

export default Parts