import React, {Component} from 'react';
import {Card, Image, Icon} from "semantic-ui-react";
import {connect} from 'unistore/react';
import p1 from '../image/1.jpg';
import p2 from '../image/2.jpg';
import p3 from '../image/3.jpg';
import p4 from '../image/4.jpg';
import p5 from '../image/5.jpg';
import p6 from '../image/6.jpg';
import p7 from '../image/7.jpg';
import p8 from '../image/8.jpg';

const rocketImage = [p1,p2,p3,p4,p5,p6,p7,p8];

class LaunchInfo extends Component {
    state = {};

    render() {
        return (
            <Card image={rocketImage[this.props.zoomLocation.rock]} centered fluid color='yellow'
                  style={{justifyContent: 'center',alignItems: 'center', backgroundColor: '#edf4ff'}}>
            <Image src={rocketImage[this.props.zoomLocation.rock]} size='medium' width="100%"
                   style={{justifyContent: 'center',alignItems: 'center'}}/>
                <Card.Content>
                    <Card.Header>
                        First Rocket from {this.props.zoomLocation.launchCenter}
                    </Card.Header>
                    <Card.Meta>
                        {this.props.zoomLocation.launchCenter} located at {this.props.zoomLocation.launchDetail[0].location}
                    </Card.Meta>
                    <Card.Description>
                    <ul>
                        <li>Rocket name: {this.props.zoomLocation.launchDetail[0].rocket}</li>
                        <li>Rocket agency: {this.props.zoomLocation.launchDetail[0].agency}</li>
                        <li>Mission: {this.props.zoomLocation.launchDetail[0].missionDetails}</li>
                    </ul>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user' />
                        86 watches
                    </a>
                </Card.Content>
            </Card>
        )
    }
}

export default connect(store => ({
    zoomLocation: store.zoomLocation,
}))(LaunchInfo)