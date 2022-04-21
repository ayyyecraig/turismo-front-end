import Reviews from '../components/Reviews'
import WriteReview from "../components/WriteReview";
import { GetPartById, PurchasePart } from '../services/PartServices';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const PartDetails = ({ authenticated, user }) => {

    let { id } = useParams()
    let navigate = useNavigate()

    const [part, setPart] = useState({})

    useEffect(() =>{
        const handleParts = async () => {
            const data = await GetPartById(id)
            console.log(data)
            setPart(data)
        }
        handleParts()
    }, [])

    const addToGarage = () => {
        if(part.stock > 0 && part.status === true) {
            let partStock = part.stock - 1
            PurchasePart(part.id, partStock, user.id)
            navigate('/garage')
        console.log(part)
        } else {
            alert('Oops! Looks like this item is no longer for sale or out of stock')
        }
    }

    return (
        <div className="part-details-page">
            <div className="part-details-container">
                <p className="part-details-name">{part.name}</p>
                <img className="part-details-image" src={part.image} alt={`Image of ${part.name}`} style={{display: 'block', maxWidth:'50%'}}/>

                <div className="part-details-effects">
                    <div class="svg-item" className='horsepower'>
                        <svg width="100%" height="100%" viewBox="0 0 40 40" class="donut">
                            <circle class="donut-ring" cx="20" cy="10" r={part.horsePowerEffect}fill="transparent" stroke-width={part.horsePowerEffect}></circle>
                            <text y="50%" x="50%" transform="translate(0, 2)" fontSize={"8px"}>
                                <tspan text-anchor="middle" class="donut-percent">Horsepower Effect: {part.horsePowerEffect}</tspan>   
                            </text>
                        </svg>
                    </div>

                    <div class="svg-item" className='speedEffect'>
                      <svg width="100%" height="100%" viewBox="0 0 40 40" class="donut">
                        <circle class="donut-ring" cx="20" cy="10" r={part.topSpeedEffect}fill="transparent" stroke-width={part.topSpeedEffect}></circle>
                        <text y="50%" x="50%" transform="translate(0, 2)" fontSize={"8px"}>
                            <tspan text-anchor="middle" class="donut-percent">TopSpeed Effect: {part.topSpeedEffect}</tspan>   
                        </text>
                      </svg>
                    </div>


                    <div class="svg-item" className='handlingEffect'>
                      <svg width="100%" height="100%" viewBox="0 0 40 40" class="donut">
                        <circle class="donut-ring" cx="20" cy="10" r={part.handlingEffect}fill="transparent" stroke-width={part.handlingEffect}></circle>
                        <text y="50%" x="50%" transform="translate(0, 2)" fontSize={"8px"}>
                            <tspan text-anchor="middle" class="donut-percent">Handling Effect: {part.handlingEffect}</tspan>   
                        </text>
                      </svg>
                    </div>

                    <div class="svg-item" className='brakingEffect'>
                        <svg width="100%" height="100%" viewBox="0 0 40 40" class="donut">
                          <circle class="donut-ring" cx="20" cy="10" r={part.brakingEffect}fill="transparent" stroke-width={part.brakingEffect}></circle>
                          <text y="50%" x="50%" transform="translate(0, 2)" fontSize={"8px"}>
                            <tspan text-anchor="middle" class="donut-percent">Braking Effect: {part.brakingEffect}</tspan>   
                          </text>
                        </svg>
                    </div>

                    <div class="svg-item" className='accelerationEffect'>
                        <svg width="100%" height="100%" viewBox="0 0 40 40" class="donut">
                         <circle class="donut-ring"  cx="20" cy="10" r={part.accelerationEffect} fill="transparent" stroke-width={part.accelerationEffect}></circle>
                         <text y="50%" x="50%" transform="translate(0, 2)" fontSize={"8px"}>
                            <tspan text-anchor="middle" class="donut-percent">Acceleration Effect: {part.accelerationEffect}</tspan>   
                         </text>
                        </svg>
                    </div>
                </div>
                <div className="part-details-purchase-container">
                    <p className="part-details-price">Price: ${part.price}.00</p>
                    <p>Weight: {part.weight} lbs</p>
                    <button className="purchase-btn" onClick={()=>addToGarage()}>Purchase</button>
               
                </div>
            </div>
                {authenticated && user ?
                    <div className="reviews-container">
                        <WriteReview part={part} user={user}/>
                        <Reviews part={part} user={user}/>
                    </div>
                    : <p className="login-message">Please log in to view or leave a review.</p>
                }
        </div>
    )

}

export default PartDetails