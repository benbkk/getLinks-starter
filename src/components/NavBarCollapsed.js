import React from 'react';
import NavItem from 'components/NavItem';
import NavDropdown from 'components/NavDropDown';
import SearchForm from 'components/SearchForm';

export default ({isExpanded, ...props}) => {
    const navCollapse = isExpanded ? 'collapse navbar-collapse show' : 'collapse navbar-collapse';
    return (
        <div 
            className={navCollapse} 
            id="navbarSupportedContent"
            isExpanded={isExpanded}
            {...props}
        >
            <ul
                className="navbar-nav mr-auto"
            >
                <NavItem
                    path="/"
                    name="Home"
                    {...props}
                />
                <NavItem
                    path="/page2"
                    name="Page2"
                    {...props}
                />
                <NavItem
                    path="/page3"
                    name="Disabled"
                    disabled
                    {...props}
                />

                <NavDropdown
                    name="Dropdown"
                    {...props}
                />
            </ul>
            <SearchForm />
        </div>
    )
};
