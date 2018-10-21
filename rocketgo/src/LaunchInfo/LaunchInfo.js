import React, {Component} from 'react';
import {Card, Image, Tab, Icon} from "semantic-ui-react";
import {connect} from 'unistore/react';
import Vega from '../image/vega.jpg';

// const LaunchDetail = [

    // this.props.zoomLocation.LaunchDetail.map(
    //     () => (
    //             <Tab.Pane attached={false}>
    //                 The great general Kim Jong-un
    //                 <Img src={Dc}/>
                
    //             </Tab.Pane>

    //     )
    // )


    // {menuItem: 'Rocket type', render: () => <Tab.Pane attached={false}>The great general Kim Jong-un</Tab.Pane>},
    // {menuItem: 'Launch Location', render: () => <Tab.Pane attached={false}>
    //         Washington DC
    //         <Image src={Dc}/>
    //     </Tab.Pane>},
    // {menuItem: 'Schedule', render: () => <Tab.Pane attached={false}>
    //         <ul>
    //             <li>abcd fe as das csaz ev asdasd</li>
    //             <li>abcd fe as das csaz ev asdasd</li>
            
    //         </ul>
    //     </Tab.Pane>},
    // {menuItem: 'Nuclear warhead equivalent', render: () => <Tab.Pane attached={false}>
    //         The Soviet RDS-220 hydrogen bomb (code name Ivan[3] or Vanya), known by Western nations as Tsar Bomba
    //     </Tab.Pane>
    // },
// ];

const extra = (
    <a>
        <Icon name='user' />
        86 watches
    </a>
)

class LaunchInfo extends Component {
    state = {};

    render() {
        return (
            <Card image={Vega} centered fluid color='yellow' style={{justifyContent: 'center',alignItems: 'center'}} background-color='black'>
            <Image src={Vega} size='medium' width="100%" style={{justifyContent: 'center',alignItems: 'center'}}/>
                <Card.Content>
                    {/* <Image src={RocketImage} floated='left' size='mini'/> */}
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

                    {/* <Tab menu={{secondary: true, pointing: true}} panes={LaunchDetail} style={{minHeight: '500px'}}/> */}
                </Card.Content>
            </Card>

        //     <Card
        //         image={Vega}
        //         header={this.props.zoomLocation.launchDetail[0].rocket}
        //         meta={this.props.zoomLocation.launchDetail[0].agency}
        //         description={this.props.zoomLocation.launchDetail[0].missionCode}
        //         extra={extra}
        //   />
        )
    }
}

export default connect(store => ({
    zoomLocation: store.zoomLocation,
}))(LaunchInfo)