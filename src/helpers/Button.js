import s from "../components/Categories/Categories.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const Button = ({path, title}) => {
    return <>
        <NavLink to={path}>
            <button className={s.btn}>{title}</button>
        </NavLink>
    </>
}
export default Button;
