import React, {Component} from 'react';
import './App.css';
import MapPage from "./Map/MapPage";
import MenuHeader from './Header';

class App extends Component {
    render() {
        return (
            <div className="App">
                <MenuHeader/>
                <MapPage/>
            </div>
        );
    }
}

export default App;
