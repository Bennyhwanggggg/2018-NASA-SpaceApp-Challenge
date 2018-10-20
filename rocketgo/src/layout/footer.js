import React from 'react';
import {Menu} from 'semantic-ui-react';

const Footer = () => (
    <div style={{position: 'absolute', left: 0, bottom: 0, right: 0}}>
        <Menu
            style={{background: '#181c1f'}}
            size="huge">
            <Menu.Item header style={{color: '#8b939b'}}>Contact us</Menu.Item>
        </Menu>
    </div>
);

export default Footer;