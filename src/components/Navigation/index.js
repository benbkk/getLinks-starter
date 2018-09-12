import React from 'react';
import NavToggle from './NavToggle';
import bsn from 'bootstrap.native/dist/bootstrap-native-v4';
import NavBarCollapsed from './NavBarCollapsed';

class Navigation extends React.Component {
    componentDidMount() {
        const navbarToggler = new bsn.Collapse('#navbarToggler', {});
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light">
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
                </div>
            </nav>
        );
    }
}

export default Navigation;
