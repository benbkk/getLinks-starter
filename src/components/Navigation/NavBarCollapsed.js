import React, { Component } from 'react';
import NavItem from './NavItem';
import menuItems from './menuItems';

class NavBarCollapsed extends Component {

    render() {
        const { id } = this.props;
        return (
            
                <ul className="navbar-nav mr-auto">
                    {menuItems.map(menuItem => (
                        <NavItem
                            key={menuItem.id}
                            menuItem={menuItem}
                        />

                    ))}
                </ul>
           
        );
    }
}

export default NavBarCollapsed;
