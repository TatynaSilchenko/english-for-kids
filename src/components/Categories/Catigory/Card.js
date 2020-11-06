import React from "react";
import s from "../Categories.module.css";
import {faSyncAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";



const Card = (props) => {
    // const imageStyle = {
    //     backgroundImage: `url(${props.image})`
    // }
    return <div className={s.cardWrapper}>
        <div className={s.card}>
            <div className={s.front}>
                <img src={props.image} alt="image"/>
            </div>
            <div className={s.cardTitle}>
                <div >{props.title}</div>
                <div className={s.rotateWrapper}>
                    {/*<FontAwesomeIcon icon="fas fa-sync-alt"/>*/}
                    <FontAwesomeIcon icon={faSyncAlt} className={s.rotate}/>
                </div>
            </div>
            {/*<div className={s.rotate}></div>*/}
        </div>

    </div>
}
export default Card
