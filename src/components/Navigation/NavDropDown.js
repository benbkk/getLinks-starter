import React, { Component } from 'react';
import PropTypes from 'prop-types';
import bsn from 'bootstrap.native/dist/bootstrap-native-v4';

class NavDropdown extends Component {
    componentDidMount() {
        bsn.Dropdown('#dropdownMenuToggle', {});
    }

    // Don't know why bootstrap won't prevent default
    handleClick = e => {
        e.preventDefault();
    }

    render() {
        const { subMenuItems, label } = this.props;
        return (
            <React.Fragment>
                <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    id="dropdownMenuToggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onClick={e => this.handleClick(e)}
                >
                    {label}
                </a>
                <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                >
                    {subMenuItems.map(menuItem => {
                        return (
                            <li
                            className="nav-item"
                            key={menuItem.id}
                        >
                            <a
                                className="dropdown-item"
                                href={menuItem.link}
                            >
                                {menuItem.label}
                            </a>
                        </li>
                        );
                    })}
                </ul>
            </React.Fragment>

        );
    }
}

NavDropdown.propTypes = {

};

export default NavDropdown;
