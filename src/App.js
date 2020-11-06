import React, {Suspense} from "react";
import "./App.css";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import MainPage from "./components/MainPage/MainPage";
import Categories from "./components/Categories/Categories";
import store from "./redux/store";

const CategoryWrapper=React.lazy(()=>import("./components/Categories/Catigory/CategoryWrapper"));

const renderLoader = () => <p>Loading...</p>;

function App() {
    return (
        <div className="App">
            <Suspense fallback={renderLoader()}>
            <Switch>
            <Route exact path="/" render={() => <MainPage/>}/>
            <Route exact path="/categories" render={() => <Categories/>}/>
            <Route path="/categories/:category" render={() => <CategoryWrapper/>}/>
            </Switch>
            </Suspense>
        </div>
    );
}

const MainApp = () => {
    return <Provider store={store}>
        <BrowserRouter>
            <App store={store}/>,
        </BrowserRouter>
    </Provider>
}
export default MainApp;
