import { useNavigate } from "react-router-dom"
import React,{ useEffect, useState } from 'react'
import { GetAllCars } from '../services/CarServices'


const Car = () => {
 
    let navigate = useNavigate()

    const showCar = (car) => {
        navigate(`view/${car.id}`)
    }

    const [cars, setCars] = useState([])

    useEffect(() =>{
        const handleCars = async () => {
            const data = await GetAllCars()
            console.log(data)
            setCars(data)
        }
        handleCars()
    }, [])
 

    return(
        <div>
        {
            cars.map((car) => (
                <div className="car-item"  onClick={() => showCar(car)} >
                    <img className="car-image" src={car.image} alt="car"  style={{display: 'block', maxWidth:'50%'}}/>
                    <div className="dets">
                        <h1>{car.make}</h1>
                        <h2>{car.model}</h2>
                        {car.User ?
                            <h3>Owner: {car.User.username}</h3>
                            : <h3>Buy From Dealer</h3>
                        }
                        {
                        car.status ?
                            <h3>Price: ${car.price}</h3>
                            : <h3>Not For Sale</h3>
                        }
                    </div>
                </div>
            ))
        }
        </div>
    )

}

export default Car