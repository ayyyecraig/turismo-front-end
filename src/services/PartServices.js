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

export const PurchasePart = async (part_id, part_stock, owner_id) => {
  try {
    const res = await Client.put(`/parts/${part_id}`, {ownerId: owner_id, stock: part_stock})
    return res.data
  } catch (error) {
    throw error
  }
}

export const AssignPart = async (part_id, car_id) => {
  try {
    const res = await Client.put(`/parts/${part_id}`, {carId: car_id})
    return res.data
  } catch (error) {
    throw error
  }
}