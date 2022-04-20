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