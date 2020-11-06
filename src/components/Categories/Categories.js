import React from "react";
import s from "./Categories.module.css"
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import Button from "../../helpers/Button";

const Categories = (props) => {
    const categories = useSelector(state => state.categories.categories)
    return <div className={s.mainWrapper}>
        <div className={s.categoriesWrapper}>
            {categories.map(c =>
                <Category title={c["mainTitle"]} image={c["mainImage"]} path={`/${c["mainTitle"].toLowerCase()}`}/>)}
        </div>

        {/*<Category title="Vegetables" image={vegetables} path={PATH_VEGETABLES}/>*/}
        {/*<Category title="Clothes" image={clothes} path={PATH_CLOTHES}/>*/}
        {/*<Category title="Action" image={action} path={PATH_ACTION}/>*/}
        {/*<Category title="Colors" image={colors} path={PATH_COLORS}/>*/}
        {/*<Category title="Emotions" image={emotions} path={PATH_EMOTIONS}/>*/}
        {/*<Category title="Transport" image={transport} path={PATH_TRANSPORT}/>*/}
        <Button path="/" title="Finish"/>
    </div>
}
export const Category = (props) => {
    return <div className={s.categoriesWrapper}>
        <NavLink to={"/categories" + props.path} className={s.mainCards}>
            <img src={props.image} alt="animals"/>
            {props.title}
        </NavLink>
    </div>
}


export default Categories
