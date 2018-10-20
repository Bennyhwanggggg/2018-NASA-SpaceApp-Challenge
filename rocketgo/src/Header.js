import React, {Component} from 'react';
import { Menu } from 'semantic-ui-react';

export default class MenuHeader extends Component {
    state = {}
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
        <Menu>
          <Menu.Item header>Our Company</Menu.Item>
          <Menu.Item
            name='aboutUs'
            active={activeItem === 'aboutUs'}
            onClick={this.handleItemClick}
          />
          <Menu.Item name='nextLaunch' active={activeItem === 'nextLaunch'} onClick={this.handleItemClick} />
          <Menu.Item
            name='locations'
            active={activeItem === 'locations'}
            onClick={this.handleItemClick}
          />
        </Menu>
      )
    }
  }