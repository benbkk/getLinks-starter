import React, { Component } from 'react';
import NavItem from './NavItem';
import SearchForm from './SearchForm';
import menuItems from './menuItems';

class NavBarCollapsed extends Component {
    
    render() {
        return (
            <div
                className="collapse navbar-collapse"
                id={this.props.id}
            >
                <ul className="navbar-nav mr-auto">
                    {menuItems.map(menuItem => (
                        <NavItem
                            key={menuItem.id}
                            menuItem={menuItem}
                        />

                    ))}
                </ul>
                <SearchForm
                    placeholder="Search"
                    label="Search"
                />
            </div>
        );
    }
}

export default NavBarCollapsed;
