import React, {Component} from 'react';
import './App.css';
import MenuHeader from './layout/Header';
import LandingPage from "./LandingPage";
import Background from './image/background.jpg';

class App extends Component {
    render() {
        return (
            <div className="App" style={{backgroundImage: `url(${Background})`, height:'100%'}}>
                <MenuHeader/>
                <div className="AppContent">
                    <LandingPage/>
                </div>
            </div>
        );
    }
}

export default App;
