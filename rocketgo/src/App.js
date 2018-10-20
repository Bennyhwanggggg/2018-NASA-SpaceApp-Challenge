import React, {Component} from 'react';
import './App.css';
import MenuHeader from './layout/Header';
import LandingPage from "./LandingPage";
// import Background from './image/background.jpg';
import Footer from './layout/footer';

class App extends Component {
    render() {
        return (
            <div className="App" style={{backgroundColor: "#031529", margin: 0, padding: 0}}>
                <MenuHeader/>
                {/* <img src={Background}/> */}
                <div className="AppContent">
                    <LandingPage/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;