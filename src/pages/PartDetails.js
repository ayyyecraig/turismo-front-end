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
                    <p className="part-details-horsepower"> Horsepower Effect: {part.horsePowerEffect}</p>
                    <p className="part-details-speed">Top Speed Effect: {part.topSpeedEffect}</p>
                    <p className="part-details-acceleration">Acceleration Effect: {part.accelerationEffect}</p>
                    <p className="part-details-braking"> Braking Effect: {part.brakingEffect}</p>
                    <p className="part-details-handling">Handling Effect: {part.handlingEffect}</p>
                </div>
                <div className="part-details-purchase-container">
                    <p className="part-details-price">Price: ${part.price}.00</p>
                    <p>Weight: {part.weight} lbs</p>
                    <button className="purchase-btn" onClick={()=>addToGarage()}>Purchase</button>
                {/* //graph */}
                </div>
                <div class="donut"><div class="hole"></div></div>
                <div class="legend">
  <div class="segment1">Horsepower Effect: {part.horsePowerEffect}</div> 
  <div class="segment2">Top Speed Effect: {part.topSpeedEffect}</div> 
  <div class="segment3">Acceleration Effect: {part.accelerationEffect}</div> 
  <div class="segment4">Braking Effect: {part.brakingEffect}</div> 
  <div class="segment5">Handling Effect: {part.handlingEffect}</div> 
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