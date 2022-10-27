import React, { useState } from "react";


const Tours = ({tour,removeItem}) => {
    const[readMore,setReadMore] = useState(true);
    return(
         <div>
           {tour.map(tourItem => {
            const {id,name,info,image,price} = tourItem;
           
            return(
                <div className="tour-item" key={id}>
                    <img src={image}/>
                    <h2>{name}</h2>
                    <p>{readMore ? info : info.substring(0,200)}
                    <button className="read-more" onClick={() => setReadMore(!readMore)}>
                        {readMore ? "Show Less" : "Read More"}
                    </button>
                    </p>
                    
                    <span className="price">{price}</span>
                    <button className="btn-clearOne" onClick={() => removeItem(id)}>Not Intersted</button>
                </div>
            )
           })}
         </div>
    )
}
export default Tours;