import React from 'react';
import PropTypes from 'prop-types';

const NavBarToggle = (props) => {
    const { id, target, label, className } = props;
    return (
        <button
            id={id}
            className={className}
            type="button"
            data-toggle="collapse"

            data-target={`#${target}`}
            aria-controls={target}
            aria-expanded="false"
            aria-label={label}
        >
            <span className="navbar-toggler-icon" />
        </button>
    );
};

NavBarToggle.propTypes = {
    id: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
}

export default NavBarToggle;
