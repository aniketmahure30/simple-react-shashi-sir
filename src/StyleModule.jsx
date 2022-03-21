import React , {useState } from 'react'
import Style from "./style.module.css"

const StyleModule = () => {
     let [rating, setRating] = useState(4)
    return (
    <section className={Style.mainContinerParent}>
        <article className={Style.container}>
            <h2>
                lorem hu sojo  iasiodj mns fs gsvsvsdvsv
            </h2>
            <p> 
                <span className={rating > 10 ? Style.paraGreen : Style.paraRed}>  hehe it's should be colored  </span>
            </p>
        </article>
    </section>

  )
}

export default StyleModule