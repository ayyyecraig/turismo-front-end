import React,{ useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GetAllCars } from '../services/CarServices'
import { SellCar } from '../services/CarServices'


const Garage = ({user}) => {

    let navigate = useNavigate()

    const showCar = (car) => {
        navigate(`view/${car.id}`)
    }

    const [cars, setCars] = useState([])

    useEffect(() =>{
        const handleCars = async () => {
            const data = await GetAllCars()
            let selectedCar = []
            data.forEach((car) => {
                if(car.ownerId === user.id) {
                    selectedCar.push(car)
                }
            }) 
            console.log(data)
            setCars(selectedCar)
        }
        handleCars()
    }, [cars.id])

    const sellCarBtn = (carId) => {
        SellCar(carId)
        console.log(cars)
    }
    ///
 

    return(
        <div>
        {
            cars.map((car) => (
                <div className="car-item"   >
                    <img onClick={() => showCar(car)} className="car-image" src={car.image} alt="car"  style={{display: 'block', maxWidth:'50%'}}/>
                    <h1 className="dets">{car.make}</h1>
                    <h2 className="dets">{car.model}</h2>
                    <h3 className="dets">Price: ${car.price}</h3>
                    <button onClick={() => {sellCarBtn(car.id)}}>SELL</button>

                </div>
            ))
        }
        </div>
    )

}

export default Garage