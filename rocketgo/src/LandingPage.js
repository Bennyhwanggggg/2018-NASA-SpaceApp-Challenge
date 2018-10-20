import React, {Component} from 'react';
import './App.css';
import MapPage from "./Map/MapPage";
import {Grid} from "semantic-ui-react";
import {connect} from "unistore/react";

class LandingPage extends Component {
    selectCity = () => this.props.zoomCity !== undefined;
    render() {
        return (
            <div>
                <Grid>
                    {
                        this.selectCity() &&
                        <Grid.Column width={4}>
                            <p>some launch info</p>
                            <p>some launch info</p>
                            <p>some launch info</p>
                            <p>some launch info</p>
                        </Grid.Column>
                    }
                    <Grid.Column width={this.selectCity() ? 9 : undefined} floated={this.selectCity() ? 'right' : undefined}>
                        <MapPage/>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default connect(store => ({zoomCity: store.zoomCity}), {})(LandingPage);
