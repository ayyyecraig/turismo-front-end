import Client from './api'

export const GetAllCars = async () => {
  try {
    const res = await Client.get('/cars/view')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetCarDetails = async () => {
  try {
    const res = await Client.get('/cars/view/:car_id')
    return res.data
  } catch (error) {
    throw error
  }
}