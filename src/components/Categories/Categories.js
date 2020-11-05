import React from "react";
import s from "./Categories.module.css"
import {NavLink} from "react-router-dom";
import transport from "../../assets/transport.jpg"
import emotions from "../../assets/Emotions.jpg"
import colors from "../../assets/colors.jpg"
import action from "../../assets/action.jpg"
import clothes from "../../assets/clothes.jpg"
import vegetables from "../../assets/vegetables.jpg"
import animals from "../../assets/cat.jpg"
import fruits from "../../assets/fruits.jpg"

export const PATH_ANIMALS = "/animals";
export const PATH_FRUITS = "/fruits";
export const PATH_VEGETABLES = "/vegetables";
export const PATH_CLOTHES = "/clothes";
export const PATH_ACTION = "/action";
export const PATH_COLORS = "/colors";
export const PATH_EMOTIONS = "/emotions";
export const PATH_TRANSPORT = "/transport";
export const PATH_CATIGORIES = "/categories";




const Categories=(props)=>{
    return <div className={s.mainWrapper}>
        <Category title="Animals" image={animals} path={PATH_ANIMALS}/>
        <Category title="Fruits" image={fruits} path={PATH_FRUITS}/>
        <Category title="Vegetables" image={vegetables} path={PATH_VEGETABLES}/>
        <Category title="Clothes" image={clothes} path={PATH_CLOTHES}/>
        <Category title="Action" image={action} path={PATH_ACTION}/>
        <Category title="Colors" image={colors} path={PATH_COLORS}/>
        <Category title="Emotions" image={emotions} path={PATH_EMOTIONS}/>
        <Category title="Transport" image={transport} path={PATH_TRANSPORT}/>
    </div>
}
export  const Category=(props)=>{
    return <div className={s.categoriesWrapper}>
        <NavLink to={"/categories"+ props.path} className={s.mainCards}>
            <img src={props.image} alt="animals"/>
            {props.title}
        </NavLink>
    </div>
}


export default  Categories
