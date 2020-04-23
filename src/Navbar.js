import React, {useState} from "react";
import s from "./Main.module.css"
import {NavLink} from "react-router-dom";
import {
    PATH_ACTION,
    PATH_ANIMALS,
    PATH_CLOTHES,
    PATH_COLORS,
    PATH_EMOTIONS,
    PATH_FRUITS,
    PATH_TRANSPORT,
    PATH_VEGETABLES
} from "./App";
import {connect} from "react-redux";
import {setToggleMenu} from "./redux/mainReducer";


const Navbar=(props)=>{
    let viewToggle=()=>{
        props.setToggleMenu()
    }

    return <div className={s.navWrapper}>
        {(props.isToggleMenu)&&
            <>
        < input type="checkbox" onClick={viewToggle}/>
            <span></span>
            <span></span>
            <span></span>
            <ul className={s.menu}>
            <NavLink  className={s.hidderItem} to={'/'}>Main Page</NavLink>
            <NavLink className={s.hidderItem} to={PATH_ANIMALS}>Animals</NavLink>
            <NavLink className={s.hidderItem} to={PATH_FRUITS}>Fruits</NavLink>
            <NavLink className={s.hidderItem} to={PATH_VEGETABLES}>Vegetables</NavLink>
            <NavLink className={s.hidderItem} to={PATH_CLOTHES}>Clothes</NavLink>
            <NavLink className={s.hidderItem} to={PATH_ACTION}>Action</NavLink>
            <NavLink className={s.hidderItem} to={PATH_COLORS}>Colors</NavLink>
            <NavLink className={s.hidderItem} to={PATH_EMOTIONS}>Emotions</NavLink>
            <NavLink className={s.hidderItem} to={PATH_TRANSPORT}>Transport</NavLink>
            </ul>
        </>
        }
    </div>
}
const mapStateToProps = (state) => ({
        isToggleMenu: state.main.isToggleMenu
    }
)
export default connect(mapStateToProps,{setToggleMenu})(Navbar)