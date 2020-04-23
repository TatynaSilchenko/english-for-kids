import React from "react";
import s from "./Main.module.css"
import animals from "./assets/cat.jpg"
import fruits from "./assets/fruits.jpg"
import vegetables from "./assets/vegetables.jpg"
import clothes from "./assets/clothes.jpg"
import action from "./assets/action.jpg"
import colors from "./assets/colors.jpg"
import emotions from "./assets/Emotions.jpg"
import transport from "./assets/transport.jpg"
import {NavLink, Route} from "react-router-dom";
import Animals from "./components/Animals";
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




const Main=()=>{
    return <div className={s.mainWrapper}>

        <Categories title="Animals" image={animals} path={PATH_ANIMALS}/>
        <Categories title="Fruits" image={fruits} path={PATH_FRUITS}/>
        <Categories title="Vegetables" image={vegetables} path={PATH_VEGETABLES}/>
        <Categories title="Clothes" image={clothes} path={PATH_CLOTHES}/>
        <Categories title="Action" image={action} path={PATH_ACTION}/>
        <Categories title="Colors" image={colors} path={PATH_COLORS}/>
        <Categories title="Emotions" image={emotions} path={PATH_EMOTIONS}/>
        <Categories title="Transport" image={transport} path={PATH_TRANSPORT}/>


    </div>
}
export  const Categories=(props)=>{
    return <div className={s.categoriesWrapper}>
        <NavLink to={props.path} className={s.mainCards}>
            <img src={props.image} alt="animals"/>
            {props.title}
        </NavLink>
    </div>
}


export default  Main