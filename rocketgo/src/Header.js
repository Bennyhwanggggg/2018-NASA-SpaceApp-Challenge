import React, {Component} from 'react';
import { Menu } from 'semantic-ui-react';

export default class MenuHeader extends Component {
    state = {}
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
      return (
        <Menu 
            style={{background: '#181c1f'}}
            size="huge">
          <Menu.Item header style={{color:'#8b939b'}}>Our Company</Menu.Item>
          <Menu.Item
            style={{color:'#8b939b'}}
            name='aboutUs'
            active={activeItem === 'aboutUs'}
            onClick={this.handleItemClick}
          />
          <Menu.Item style={{color:'#8b939b'}} name='nextLaunch' active={activeItem === 'nextLaunch'} onClick={this.handleItemClick} />
          <Menu.Item
            style={{color:'#8b939b'}}
            name='locations'
            active={activeItem === 'locations'}
            onClick={this.handleItemClick}
          />
        </Menu>
      )
    }
  }