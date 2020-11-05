import React from "react";
import s from "../Categories.module.css"

const Card = (props) => {
    const imageStyle = {
        backgroundImage: `url(${props.image})`
    }
    return <div className={s.cardWrapper}>
        <div className={s.card}>
            <div className={s.front} style={imageStyle}>
            </div>
            <div className={s.cardTitle}>{props.title}</div>
            <div className={s.rotate}></div>
        </div>

    </div>
}
export default Card
