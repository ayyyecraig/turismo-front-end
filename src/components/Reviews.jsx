import React from 'react'

const Reviews = () => {

    return (
        <div>
            <form className="reviews">
                <input type="text" className="reviewBox"/>
                <button>Submit</button>
            </form>
            {/* Have this appear after hitting submit */}
            <h4>Your Review:</h4>
            <p>Example text</p>
        </div>
    )

}

export default Reviews