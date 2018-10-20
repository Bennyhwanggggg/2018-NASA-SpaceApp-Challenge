import React, {Component} from 'react';
import './App.css';
import MenuHeader from './layout/Header';
import LandingPage from "./LandingPage";

class App extends Component {
    render() {
        return (
            <div className="App">
                <MenuHeader/>
                <LandingPage/>
            </div>
        );
    }
}

export default App;
