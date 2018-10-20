import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';

class Footer extends Component {

    render() {
        return (
            <Menu
                style={{background: '#181c1f'}}
                size="huge">
                <Menu.Item header style={{color: '#8b939b'}}>Contact us</Menu.Item>
            </Menu>
        )
    }
};

export default Footer;