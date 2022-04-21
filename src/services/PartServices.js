import Client from './api'


export const GetAllParts = async () => {
  try {
    const res = await Client.get('/parts/view')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetPartById = async (partId) => {
  try {
    const res = await Client.get(`/parts/view/${partId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const PurchasePart = async (car_id, owner_id) => {
  try {
    const res = await Client.put(`/cars/${car_id}`, {ownerId: owner_id, status: false})
    return res.data
  } catch (error) {
    throw error
  }
}