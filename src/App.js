import React from 'react';
import './App.css';
import Header from "./Header";
import Main from "./Main";
import {Route} from "react-router-dom";
import Animals from "./components/Animals";
import Colors from "./components/Colors";
import Emotions from "./components/Emotions";
import Fruits from "./components/Fruits";
import Vegetables from "./components/Vegetables";
import Clothes from "./components/Clothes";
import Action from "./components/Action";
import Transport from "./components/Transport";


export const PATH_ANIMALS='/animals'
export const PATH_FRUITS='/fruits'
export const PATH_VEGETABLES='/vegetables'
export const PATH_CLOTHES='/clothes'
export const PATH_ACTION='/action'
export const PATH_COLORS='/colors'
export const PATH_EMOTIONS='/emotions'
export const PATH_TRANSPORT='/transport'

function App() {
    return (
        <div className="App">
            <Header/>
            <Route exact path={'/'} render={() =>
                <Main/>}/>
            <Route exact path={PATH_ANIMALS} render={() => <Animals/>}/>
            <Route exact path={PATH_FRUITS} render={() => <Fruits/>}/>
            <Route exact path={PATH_VEGETABLES} render={() => <Vegetables/>}/>
            <Route exact path={PATH_CLOTHES} render={() => <Clothes/>}/>
            <Route exact path={PATH_ACTION} render={() => <Action/>}/>
            <Route exact path={PATH_COLORS} render={() => <Colors/>}/>
            <Route exact path={PATH_EMOTIONS} render={() => <Emotions/>}/>
            <Route exact path={PATH_TRANSPORT} render={() => <Transport/>}/>


        </div>
    );
}

export default App;
