import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavDropDown from './NavDropDown';

class NavItem extends Component {
    render() {
        const { menuItem } = this.props;
        const pageURI = window.location.pathname + window.location.search;
        return (
            <li
                className={
                    `nav-item ${menuItem.children ? 'dropdown' : ''}`
                }
                key={menuItem.id}
            >
                {menuItem.children
                    ? (
                        <NavDropDown
                            subMenuItems={menuItem.children}
                            label={menuItem.label}
                        />
                    )
                    : (
                        <a
                            href={menuItem.link}
                            className={
                                `nav-link
                                ${menuItem.disabled ? 'disabled' : ''}
                                ${menuItem.link === pageURI ? 'active' : ''}
                            `
                            }
                        >
                            {menuItem.label}
                        </a>
                    )
                }
            </li>
        );
    }
}

/* const NavItem = (props) => {
    const { path, name, disabled } = props;

    const liClassName = (path === pageURI) ? 'nav-item active' : 'nav-item';
    const aClassName = disabled ? 'nav-link disabled' : 'nav-link';
    return (
        <li className={liClassName}>
            <a href={path} className={aClassName}>
                {name}
                {(path === pageURI) ? (<span className="sr-only">(current)</span>) : ''}
            </a>
        </li>
    );
}; */

/* NavItem.propTypes = {
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
};

NavItem.defaultProps = {
    disabled: false,
}; */

export default NavItem;
