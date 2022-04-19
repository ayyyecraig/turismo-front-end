import React,{ useEffect, useState } from 'react'
import { GetAllCars, GetCarDetails } from '../services/CarServices'
import { useParams } from 'react-router-dom';


const CarDetails = () => {

    let { id } = useParams()

    const [cars, setCars] = useState([])

    useEffect(() =>{
        const handleCars = async () => {
            const data = await GetCarDetails(id)
            console.log(data)
            setCars(data)
        }
        handleCars()
    }, [])

    return(
        <div>
            <h1>{cars.make}</h1>
            <h2>{cars.model}</h2>
            <h2>{cars.year}</h2>
            <h2>{cars.bodyType}</h2>
            <img className="car-image" src={cars.image} alt="car"  style={{display: 'block', maxWidth:'50%'}}/>
            <h3>Top Speed: {cars.topSpeed}</h3>
            <h3>Acceleration: {cars.acceleration}</h3>
            <h3>Horsepower: {cars.horsePower}</h3>
            <h3>Curb Weight: {cars.weight}</h3>
            <h3>Price: ${cars.price}</h3>
            <button>Purchase</button>
        </div>
    )

}

export default CarDetails