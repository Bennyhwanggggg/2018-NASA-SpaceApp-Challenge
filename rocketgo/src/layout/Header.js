import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import {connect} from 'unistore/react'
import action from '../store/zoomCityAction'

class MenuHeader extends Component {
    state = {};

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    nextLaunchClick = () => this.props.zoomToCity({name: "San Francisco", coordinates: [-122.4194, 37.7749]});

    locationClick = () => this.props.cleanZoom();

    render() {
        const {activeItem} = this.state;
        return (
            <Menu
                style={{background: '#181c1f'}}
                size="huge">
                <Menu.Item header style={{color: '#8b939b'}}>Our Company</Menu.Item>
                <Menu.Item
                    style={{color: '#8b939b'}}
                    name='aboutUs'
                    active={activeItem === 'aboutUs'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item style={{color: '#8b939b'}} name='nextLaunch' active={activeItem === 'nextLaunch'}
                           onClick={this.nextLaunchClick}/>
                <Menu.Item
                    style={{color: '#8b939b'}}
                    name='locations'
                    active={activeItem === 'locations'}
                    onClick={this.locationClick}
                />
            </Menu>
        )
    }
}

export default connect('', action)(MenuHeader)