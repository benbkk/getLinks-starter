import React from 'react';
import PropTypes from 'prop-types';

const NavItem = (props) => {
    const { path, name, disabled } = props;
    const pageURI = window.location.pathname + window.location.search;
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
};

NavItem.propTypes = {
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
};

NavItem.defaultProps = {
    disabled: false,
};

export default NavItem;
