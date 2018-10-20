import React, {Component} from 'react';
import './App.css';
import MapPage from "./Map/MapPage";
import { Button } from "semantic-ui-react";

class App extends Component {
    render() {
        return (
            <div className="App">
                <MapPage/>
            </div>
        );
    }
}

export default App;
