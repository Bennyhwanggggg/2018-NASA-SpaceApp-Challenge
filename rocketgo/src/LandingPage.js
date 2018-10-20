import React, {Component} from 'react';
import './App.css';
import MapPage from "./Map/MapPage";
import {Grid} from "semantic-ui-react";
import {connect} from "unistore/react";
import LaunchInfo from "./LaunchInfo/LaunchInfo";

class LandingPage extends Component {
    selectCity = () => this.props.zoomLocation !== undefined;
    render() {
        return (
            <div>
                <Grid>
                    {
                        this.selectCity() &&
                        <Grid.Column width={7} style={{paddingTop: '40px'}}>
                            <LaunchInfo/>
                        </Grid.Column>
                    }
                    <Grid.Column width={this.selectCity() ? 9 : undefined}
                                 floated={this.selectCity() ? 'right' : undefined}
                                 style={this.selectCity() ? {paddingTop: '40px'} : undefined}>
                        <MapPage/>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default connect(store => ({zoomLocation: store.zoomLocation}), {})(LandingPage);
