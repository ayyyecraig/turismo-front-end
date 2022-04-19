import React,{ useEffect, useState } from 'react'

const CarDetails = () => {

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
                <div className="car-item">
                    <h1>{car.make}</h1>
                    <h2>{car.model}</h2>
                    <h2>{car.year}</h2>
                    <h2>{car.bodyType}</h2>
                    <img onClick={() => showCar(car)}  className="car-image" src={car.image} alt="car"  style={{display: 'block', maxWidth:'50%'}}/>
                    <h3>Top Speed: {car.topSpeed}</h3>
                    <h3>Acceleration: {car.acceleration}</h3>
                    <h3>Horsepower: {car.horsePower}</h3>
                    <h3>Curb Weight: {car.weight}</h3>
                    <h3>Price: ${car.price}</h3>
                </div>
            ))
        }
        </div>
    )

}

export default CarDetails