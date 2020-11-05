import s from "../Categories.module.css";
import React from "react";
import {withRouter} from "react-router-dom";
import Card from "../Catigory/Card";
import {useSelector} from "react-redux";

const CategoryWrapper = (props) => {

    const searchCotegory = (array) => {
        return array.filter(c => c.mainTitle.toLowerCase() === category)[0].cards;
    }

    const category = props.match.params.category;
    const cards = useSelector(state => searchCotegory(state.categories.categories));

    return <div className={s.categoryWrapper}>
        {cards.map(c => <Card image={c["image"]} title={c["title"]}/>)}
    </div>
}


export default withRouter(CategoryWrapper);
