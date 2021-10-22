import React from 'react'
import '../css/bookcard.css';

function Bookcard(props) {
    return (
        <div className="card-container" onClick={props.whenclicked}>
            <div className="image-bookcard">
                <div className="bookimage">

                </div>
            </div>

            <div className="details-bookcard">
                <p id="title-card">{props.bookname}</p>
                <p id ="author-card">{props.Author}</p>
                <div className="ratingbox">
                    <span>4.3★</span> 
                </div>
                <span className="count-review">(20)</span>
                <span className="Price-bookcard">Rs.{props.price}</span>
                <span className="original-price">Rs.{props.price+props.discountprice}</span>
            </div>

            
        </div>
    )
}

export default Bookcard
