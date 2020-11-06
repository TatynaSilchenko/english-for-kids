import s from "./Category.module.css";
import React from "react";
import {NavLink, withRouter} from "react-router-dom";
import Card from "../Catigory/Card";
import {useSelector} from "react-redux";
import Button from "../../../helpers/Button";

const CategoryWrapper = (props) => {

    const searchCotegory = (array) => {
        return array.filter(c => c.mainTitle.toLowerCase() === category)[0].cards;
    }

    const category = props.match.params.category;
    const cards = useSelector(state => searchCotegory(state.categories.categories));

    return <div className={s.categoryWrapper}>
        {cards.map(c => <Card image={c["image"]} title={c["title"]}/>)}
        <Button path="/categories" title="Back"/>
    </div>
}


export default withRouter(CategoryWrapper);
