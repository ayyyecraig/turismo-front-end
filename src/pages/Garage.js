import React,{ useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GetAllCars, SellCar } from '../services/CarServices'
import { GetAllParts } from '../services/PartServices'


const Garage = ({user}) => {

    let navigate = useNavigate()

    const showCar = (car) => {
        navigate(`view/${car.id}`)
    }

    const [cars, setCars] = useState([])
    const [parts, setParts] = useState([])

    const handleCars = async () => {
        const data = await GetAllCars()
        let selectedCar = []
        data.forEach((car) => {
            if(car.ownerId === user.id && car.status === false) {
                selectedCar.push(car)
            }
        }) 
        console.log(data)
        setCars(selectedCar)
    }

    const handleParts = async () => {
        const data = await GetAllParts()
        let selectedParts = []
        data.forEach((part) => {
            if(part.ownerId === user.id) {
                selectedParts.push(part)
            }
        }) 
        console.log(data)
        setParts(selectedParts)
    }

    useEffect(() =>{
        handleCars()
        handleParts()
    }, [cars.id])

    const sellCarBtn = (carId) => {
        SellCar(carId)
        console.log(cars)
        navigate('/')
    }

    const addPartBtn = (partId) => {
        
    }
    
    
 

    return(
        <div>
            <p className="garage-header">Your Garage</p>
            <div className="garage-cars">
                <p className='cars-header'>Cars</p>
            {
                cars.map((car) => (

                    <div className="car-item"   >
                        <img onClick={() => showCar(car)} className="car-image" src={car.image} alt="car"  style={{display: 'block', maxWidth:'50%'}}/>
                        <div onClick={() => showCar(car)} className="dets">
                            <h1>{car.make}</h1>
                            <h2>{car.model}</h2>
                            <h3>Price: ${car.price}</h3>
                        </div>
                        <button onClick={() => sellCarBtn(car.id)}>SELL</button>

                    </div>
                ))
            }
            </div>
            <div className="garage-parts">
                <p className="parts-header">Mods And Parts</p>
                {
                    parts.map((part) => (
                        <div className="part-card">
                            <h1>{part.name}</h1>
                            <img className="part-item" src={part.image} alt={`image of ${part.name}`} />
                            {
                                part.performance ?
                                <p>Performance Mod</p>
                                : <p>Cosmetic Mod</p>
                            }
                            <button onClick={() => addPartBtn(part.id)}>Add Mod</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )

}

export default Garage