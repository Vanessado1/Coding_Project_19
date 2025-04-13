import React, {useState} from "react";

// BookCard renders individual book details 
const TourCard = ({id, name, info, price, image, onRemove}) => {
    // local state to toggle React More / Show Less
    const [readMore, setReadMore] = useState(false);

    return (
        <article className = "tour-card">
            <h3>{name}</h3>
            <h5>{price}</h5>
            <p>
                {/*Show full description if readMore is true, otherwise a slice*/}
                {(readMore ? info : info.slice(0,80) + "...")}
                <button onClick = {() => setReadMore(!readMore)}>
                    {readMore ? "Show Less" : "Read More"}
                </button>
            </p>

            {/*Button to remove the book */}
            <button className = "btn-remove" onClick ={() => {
                onRemove(id)
            }} >Remove Tour</button>
        </article>
    )
}

export default TourCard;