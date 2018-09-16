import React, { Component } from 'react';
import NavItem from './NavItem';
import menuItems from './menuItems';

const NavBarCollapsed = (props) => {
    return (
        <ul
            {...props}
        >
            {menuItems.map(menuItem => (
                <NavItem
                    key={menuItem.id}
                    menuItem={menuItem}
                />
            ))}
        </ul>
    );
};

export default NavBarCollapsed;
