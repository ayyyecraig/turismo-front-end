import React, { useState } from 'react'
import Reviews from './Reviews'

const ViewParts = () => {

    const [displayReview, setDisplayReview] = useState(false)

    const toggleReviews = () => {
        setDisplayReview(!displayReview)
    }

    return (
        <div>
            <h1>Buy New Parts</h1>
            <h2>Muffler:</h2>
            <img src="https://cartreatments.com/wp-content/uploads/rust-hole-exhaust.jpg"/>
            <ul>
                <li>Type:</li>
                <li>Weight:</li>
                <li>Effect on Speed:</li>
                <li>Effect on Acceleration:</li>
                <li>Effect on Horsepower:</li>
                <li>Price:</li>
            </ul>
            <button onClick={toggleReviews}>{displayReview === false ? "Leave A Review" : "Hide Review" }</button>
            {/* Maybe have this appear at button click maybe not? */}
            <div>
                {displayReview ? <Reviews /> : null}
            </div>
        </div>
    )


}

export default ViewParts