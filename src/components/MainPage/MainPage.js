import React from "react";
import avatar from "../../assets/avatar.jpg"
import s from "./Main.module.css"
import Button from "../../helpers/Button";

const MainPage = () => {
    return <div className={s.mainWrapper}>
        <img className={s.avatar} src={avatar}/>
        <Button path="/categories" title="Start"/>
    </div>
}
export default MainPage;
