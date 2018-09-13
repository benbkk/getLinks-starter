import React from 'react';
import bsn from 'bootstrap.native/dist/bootstrap-native-v4';
import NavToggle from './NavToggle';
import NavBarCollapsed from './NavBarCollapsed';
import SearchForm from './SearchForm';

class Navigation extends React.Component {
    componentDidMount() {
        bsn.Collapse('#navbarToggler', {});
    }

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-light">
                <NavToggle
                    id="navbarToggler"
                    className="navbar-toggler"
                    target="navbarCollapse"
                    label="Toggle Navigation"
                />
                <div className="container">
                    <NavBarCollapsed
                        id="navbarCollapse"
                        {...this.props}
                    />
                    <SearchForm
                        placeholder="Search"
                        label="Search"
                    />
                </div>
            </nav>
        );
    }
}

export default Navigation;
