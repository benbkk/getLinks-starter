import React from 'react';

export default ({ toggleNav, isExpanded, ...props }) => (
    <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded={isExpanded}
        aria-label="Toggle navigation"
        onClick={toggleNav}
        {...props}
    >
        <span className="navbar-toggler-icon" />
    </button>
);
