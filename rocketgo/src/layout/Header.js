import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
import {connect} from 'unistore/react'
import action from '../store/storeAction'

class Header extends Component {
    state = {};

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    nextLaunchClick = () => this.props.zoomToNextLaunch();

    locationClick = () => this.props.cleanZoom();

    render() {
        const {activeItem} = this.state;
        return (
            <Menu
                style={{background: '#181c1f'}}
                size="huge">

                <Menu.Item header style={{color: '#8b939b'}}>Find Next Rocket Launch</Menu.Item>

                <Menu.Item
                    style={{color: '#8b939b'}}
                    name='HomePage'
                    active={activeItem === 'locations'}
                    onClick={() => {
                        this.locationClick();
                        this.props.history.push('/');
                    }}
                />

                <Menu.Item style={{color: '#8b939b'}} name='nextLaunch' active={activeItem === 'nextLaunch'}
                           onClick={this.nextLaunchClick}/>

                <Menu.Item
                    style={{color: '#8b939b'}}
                    name='Personal Info'
                    active={activeItem === 'locations'}
                    onClick={() => {this.props.history.push('/personal')}}
                />
            </Menu>
        )
    }
}

export default connect('', action)(Header)