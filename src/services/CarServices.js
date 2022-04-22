import Client from './api'

export const GetAllCars = async () => {
  try {
    const res = await Client.get('/cars/view')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetCarDetails = async (car_id) => {
  try {
    const res = await Client.get(`/cars/view/${car_id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateCar = async (owner_id) => {
  try {
    const res = await Client.post(`/cars/${owner_id}`)
    return res.data

  } catch (error) {
    throw error
  }
}

export const PurchaseCar = async (car_id, owner_id) => {
  try {
    const res = await Client.put(`/cars/${car_id}`, {ownerId: owner_id, status: false})
    return res.data
  } catch (error) {
    throw error
  }
}

export const AddModToCar = async (
    car_id, 
    weight, 
    weightFX, 
    speed, 
    speedFX, 
    acceleration, 
    accelerationFX, 
    horsepower, 
    horsepowerFX, 
    braking, 
    brakingFX, 
    handling, 
    handlingFX) => {
  try {
    const res = await Client.put(`/cars/${car_id}`, {
      weight: parseInt(weight) + parseInt(weightFX),
      topSpeed: parseInt(speed) + (parseInt(speed) * parseInt(speedFX) / 10),
      acceleration: parseFloat(acceleration) - (parseFloat(acceleration) * parseFloat(accelerationFX) / 10),
      horsePower: parseInt(horsepower) + (parseInt(horsepower) * parseInt(horsepowerFX) / 10),
      braking: parseInt(braking) + (parseInt(braking) * parseInt(brakingFX) / 10),
      handling: parseInt(handling) + (parseInt(handling) * parseInt(handlingFX) / 10)
    })
    return res.data
  } catch (error) {
    throw error
  }
}

export const SellCar = async (car_id) => {
  try {
    const res = await Client.put(`/cars/${car_id}`, {status: true})
    return res.data
  } catch (error) {
    throw error
  }
}