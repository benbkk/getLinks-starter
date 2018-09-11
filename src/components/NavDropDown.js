import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavDropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false,
        };
    }

    showDropdown = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn,
        }));
    }

    render() {
        const { name } = this.props;
        const classDropdownMenu = `dropdown-menu ${this.state.isToggleOn ? ' show' : ''}`;
        return (
            <li className="nav-item dropdown">
                <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onClick={(e) => this.showDropdown(e)}
                >
                    {name}
                </a>
                <div className={classDropdownMenu} aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="/">Action</a>
                    <a className="dropdown-item" href="/">Another action</a>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="/">Something else here</a>
                </div>
            </li>
        );
    }
}

NavDropdown.propTypes = {
    name: PropTypes.string.isRequired,
};

export default NavDropdown;
