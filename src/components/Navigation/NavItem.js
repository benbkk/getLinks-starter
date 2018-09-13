import React, { Component } from 'react';
import { css } from 'react-emotion';
import PropTypes from 'prop-types';
import NavDropDown from './NavDropDown';

class NavItem extends Component {
    render() {
        const disabledStyle = css`
            pointer-events: none;
            opacity: 0.5;
        `;
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
                                ${menuItem.disabled ? disabledStyle : ''}
                                ${menuItem.link === pageURI ? 'active' : ''}`
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

NavItem.propTypes = {
    menuItem: PropTypes.object.isRequired,
}

export default NavItem;
