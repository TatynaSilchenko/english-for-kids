import React from "react";
import s from "./Header.module.css"
import Navbar from "./Navbar";
import {connect} from "react-redux";
import {setToggleMenu} from "./redux/mainReducer";

const Header=(props)=>{

    let viewToggleMenu=()=>{
        props.setToggleMenu()
    }
    return <div className={s.headerWrapper}>
        <nav className={s.menuToggle}>
            <input type="checkbox" onClick={viewToggleMenu}/>
            <span></span>
            <span></span>
            <span></span>
        </nav>
        <Navbar/>
        <div className={s.switchContainer}>
            <label className={s.switch}>
                <input type="checkbox" className={s.switchInput} />
                <span className={s.switchLable} data-on="Train" ></span>
                <span className={s.switchHandle} ></span>
            </label>
        </div>
    </div>
}

const mapStateToProps = (state) => ({
        isToggleMenu: state.main.isToggleMenu
    }
)

export default  connect(mapStateToProps,{setToggleMenu})(Header)