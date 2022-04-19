import Client from './api'

export const NewReview = async (rating, content, ownerId, partId) => {
    try {
        const res = await Client.post(`/reviews/${ownerId}/${partId}`, {
          rating: rating,
          content: content,
          ownerId: ownerId,
          partId: partId
      })
      return res.data
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

  export const DeleteReview = async (reviewId) => {
    try {
      const res = await Client.delete(`/reviews/${reviewId}`)
      return res.data
    } catch (error) {
        throw error
    }
}