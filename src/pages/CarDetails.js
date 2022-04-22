import React,{ useEffect, useState } from 'react'
import { GetCarDetails } from '../services/CarServices'
import { useParams } from 'react-router-dom';
import { PurchaseCar } from '../services/CarServices';
import { useNavigate } from 'react-router-dom';


const CarDetails = ({user, authenticated}) => {

    let navigate = useNavigate()

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

    const addToGarage = () => {
        PurchaseCar(cars.id, user.id)
        navigate('/garage')
        console.log(cars)
    }

    return(
        <div>
            <section className='car-details'>
                <h1>{cars.make}</h1>
                <h2>{cars.model}</h2>
                <h2>{cars.year}</h2>
                <h2>{cars.bodyType}</h2>
            </section>
            <img className="car-img-details" src={cars.image} alt="car"  style={{ maxWidth:'30%'}}/>
            <section className='performance'>
                <h3 className='p1'>Top Speed: {cars.topSpeed} MPH</h3>
                <h3 className='p2'>Acceleration: 0 to 60 MPH in {cars.acceleration} secs </h3>
                <h3 className='p3'>Horsepower: {cars.horsePower} hp</h3>
                <h3 className='p4'>Curb Weight: {cars.weight} lbs</h3>
                <h3 className='p5'>Price: $ {cars.price}</h3>
                {
                    cars.status ?
                    <button onClick={() => {addToGarage()}} className='purchase'>Purchase</button>
                    : <h3>Contact owner for direct inquiry</h3>
                }
                {cars.User ?
                    <div className="contact-info">
                        <h3>Owner: {cars.User.username}</h3>
                        <h3>Owner Email: {cars.User.email}</h3>
                    </div>
                    : <h3>Buy From Dealer</h3>
                }   
             </section>
        </div>
    )

}

export default CarDetails