import React from "react";
import avatar from "../../assets/avatar.jpg"
import s from "./Main.module.css"
import {NavLink} from "react-router-dom";

const MainPage = () => {
    return <div className={s.mainWrapper}>
        <img className={s.avatar} src={avatar}/>
        <button className={s.startBtn}>
        <NavLink to="/categories">Start</NavLink>
        </button>
    </div>
}
export default MainPage;
