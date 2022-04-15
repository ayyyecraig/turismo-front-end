import React, { useState, useEffect } from 'react'

const Reviews = () => {

    const [review, setReview] = useState('')
    useEffect(() => {console.log(review)}, [review])

    // const [newReview, setNewReview] = useState()
    // const submitReview = {setNewReview}

    return (
        <div>
            <form className="reviews">
                <textarea type="text" value={review} onChange={e => setReview(e.target.value)} placeholder="Write a review" className="reviewBox"/>
                <button>Submit</button>
            </form>
            {/* Have this appear after hitting submit */}
            <h4>Your Review:</h4>
            <p>Example text</p>
        </div>
    )

}

export default Reviews