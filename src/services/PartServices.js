import Client from './api'
import { useParams } from 'react-router-dom'


export const GetAllParts = async () => {
  try {
    const res = await Client.get('/parts/view')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetPartById = async () => {
  try {
    let { id } = useParams()
    const res = await Client.get(`/parts/view/${ id }`)
    return res.data
  } catch (error) {
    throw error
  }
}