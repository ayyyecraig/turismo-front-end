import Client from './api'

export const GetAllCars = async () => {
  try {
    const res = await Client.get('/api/cars/view')
    return res.data
  } catch (error) {
    throw error
  }
}