import React,{ useEffect, useState } from 'react'
import { GetCarDetails, AddModToCar } from '../services/CarServices'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { GetAllParts, AssignPart } from '../services/PartServices'


const CarMods = ({user, authenticated}) => {

    let navigate = useNavigate()

    let { id } = useParams()

    const [cars, setCars] = useState([])
    const [parts, setParts] = useState([])


    useEffect(() =>{
        handleCars()
        handleParts()
    }, [])

    const handleCars = async () => {
        const data = await GetCarDetails(id)
        console.log(data)
        setCars(data)
    
    }

    const handleParts = async () => {
        const data = await GetAllParts()
        let selectedParts = []
        data.forEach((part) => {
            if(part.ownerId === user.id && part.carId === 0) {
                selectedParts.push(part)
            }
        }) 
        console.log(data)
        setParts(selectedParts)
    }

    const addPartBtn = (
        partId,
        weight, 
        speed, 
        acceleration, 
        horsepower, 
        braking, 
        handling) => {
        AddModToCar(
            cars.id,
            cars.weight, 
            weight,
            cars.topSpeed, 
            speed,
            cars.acceleration, 
            acceleration,
            cars.horsePower, 
            horsepower,
            cars.braking, 
            braking,
            cars.handling, 
            handling)
        AssignPart(partId, cars.id)
        navigate(`/garage/view/${cars.id}`)
    }

    return(
        <div className="car-mod-page">
            <div className="car-mod-details">
                <img className="car-img-details" src={cars.image} alt="car"  style={{ maxWidth:'30%'}}/>
                <section className='performance'>
                    <h3 className='p5'>Price: $ {cars.price}</h3>
                    <h3 className='p4'>Curb Weight: {cars.weight} lbs</h3>
                    <h3 className='p2'>Acceleration: 0 to 60 MPH in {cars.acceleration} secs </h3>
                    <h3 className='p3'>Horsepower: {cars.horsePower} hp</h3>
                    <h3 className='p1'>Top Speed: {cars.topSpeed} MPH</h3>
                    <h2>{cars.year} {cars.make} {cars.model} {cars.bodyType}</h2>  
                </section>
             </div>
             <div className="mod-parts-list">
             {
                    parts.map((part) => (
                        <div className="part-card" key={part.id}>
                            <h1>{part.name}</h1>
                            <img className="part-item" src={part.image} alt={`image of ${part.name}`} />
                            {
                                part.performance ?
                                <div className="partEffects">
                                    <p>Performance Mod</p>
                                    <p>Weight: {part.weight} lbs</p>
                                    <p>Top Speed Effect: {part.topSpeedEffect}</p>
                                    <p>Acceleration Effect: {part.accelerationEffect}</p>
                                    <p>Horsepower Effect: {part.horsePowerEffect}</p>
                                    <p>Braking Effect: {part.brakingEffect}</p>
                                    <p>Handling Effect: {part.handlingEffect}</p>
                                </div>
                                : <p>Cosmetic Mod</p>
                            }
                            <button onClick={() => addPartBtn(part.id, part.weight, part.topSpeedEffect, part.accelerationEffect, part.horsePowerEffect, part.brakingEffect, part.handlingEffect)}>Add Mod</button>
                        </div>
                    ))
                }
            </div>
        </div>

    )

}

export default CarMods