import Client from './api'

export const NewReview = async (rating, content, ownerId, partId) => {
    try {
        await Client.post(`/reviews/${ownerId}/${partId}`, {
          rating: rating,
          content: content,
          ownerId: ownerId,
          partId: partId
      })
    } catch (error) {
      throw error
    }
  }

  export const GetReviews = async (partId) => {
      try {
        const res = await Client.get(`/reviews/view/${partId}`)
        return res.data
      } catch (error) {
          throw error
      }
  }