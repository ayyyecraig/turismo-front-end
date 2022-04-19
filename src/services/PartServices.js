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