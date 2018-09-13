import React, { Component } from 'react';
import NavItem from './NavItem';
import SearchForm from './SearchForm';
import menuItems from './menuItems';

class NavBarCollapsed extends Component {

    render() {
        const { id } = this.props;
        return (
            <div
                className="collapse navbar-collapse"
                id={id}
            >
                <ul className="navbar-nav mr-auto">
                    {menuItems.map(menuItem => (
                        <NavItem
                            key={menuItem.id}
                            menuItem={menuItem}
                        />

                    ))}
                </ul>
            </div>
        );
    }
}

export default NavBarCollapsed;
