import React from 'react';
import NavToggle from 'components/NavToggle';
import NavBarCollapsed from './NavBarCollapsed';


class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isExpanded: false,
        };
    }

    toggleNav = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            isExpanded: !prevState.isExpanded,
        }));
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">Navbar</a>
                <NavToggle
                    aria-expanded={this.state.isExpanded}
                    onClick={e => this.toggleNav(e)}
                    {...this.props}
                    {...this.state}
                />

                <NavBarCollapsed
                    id="navbarSupportedContent"
                    isExpanded={this.state.isExpanded}
                    {...this.state}
                    {...this.props}
                />
            </nav>
        );
    }
}

export default Navigation;
