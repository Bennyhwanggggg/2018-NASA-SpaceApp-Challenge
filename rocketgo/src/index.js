import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';
import createStore from 'unistore';
import {Provider} from 'unistore/react'
import store from "./store/store";
import Header from "./layout/Header";
import { BrowserRouter } from 'react-router-dom'
import {Route, Switch} from "react-router";
import LandingPage from "./LandingPage";
import PersonalPage from "./PersonalPage/PersonalPage";
import Footer from "./layout/Footer";

ReactDOM.render(<Provider store={createStore(store)}>
    <BrowserRouter>
        <div className="App" style={{backgroundColor: "#031529", margin: 0, padding: 0}}>
            <Header/>
            <div className="AppContent">
                <Switch>
                    <Route exact path="/" component={LandingPage}/>
                    <Route exact path="/personal/" component={PersonalPage}/>
                </Switch>
            </div>
            <Footer/>
        </div>
    </BrowserRouter>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
