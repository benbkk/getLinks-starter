import React, { Component } from 'react';
import Navigation from 'components/Navigation';
import Logo from 'static/Logo';
import debounce from 'lodash.debounce';
import styled, { css } from 'react-emotion';
import { position, transparentize } from 'polished';
import { palette, mediaQueries } from 'css/variables';
import Measure from 'react-measure';


class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSticky: false,
            scrollY: 0,
            stickyHeight: 0,
            isScrolling: false,
        }
        this.refCallback = React.createRef();
        this.getScrollPosition = debounce(this.getScrollPosition, 120);
        this.onScrollStop = debounce(this.onScrollStop, 120);
    }

    componentDidMount () {
        this.setHeaderHeight();
        window.addEventListener('scroll', this.onScroll);
        this.getScrollPosition();

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState === this.state || prevState.scrollY === this.state.scrollY) return;
        // this.onScrollStop();
        if (this.state.scrollY !== prevState.scrollY) {
            this.onScrollStop();
        }
    }

    setHeaderHeight = () => {
        const stickyWrapper = this.refCallback.current;
        const stickyHeight = stickyWrapper.getBoundingClientRect().height;
        this.setState({
            stickyHeight
        });
        if (window.scroll >= stickyHeight) {
            return this.setState({
                isSticky: true,
            })
        }
    }

    getScrollPosition = () => {
        const scrollY = window.scrollY;
        this.setState({
            scrollY
        })
    }

    onScroll = (e) => {
        this.setState({
            isScrolling: true,
        })
        this.getScrollPosition()
    }

    onScrollStop = (e) => {
        this.setState({
            isScrolling: false,
        });

        const stickyWrapper = this.refCallback.current;
        const stickyHeight = stickyWrapper.getBoundingClientRect().height;

        if (this.state.stickyHeight !== stickyHeight) {
            this.setState({
                stickyHeight,
            })
        }
        
        if (window.scrollY < stickyHeight) {
            return this.setState({
                isSticky: false,
            })
        }
        this.setState({
            isSticky: true,
        });
        
    }

    refCallback = () =>{
        const node = this.myRef.current;
        console.log(node);
    }

    render () {
        const { isSticky, isScrolling, stickyHeight } = this.state;

        const HeaderWrap = styled('header')`
            position: relative;
            padding: 1rem 1rem 0;
            
            ${mediaQueries.md} {
                min-height: ${stickyHeight}px;
            } 
            
        `;
        const stickyHead = css`
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 99;
            min-height: 0;

            transform: translateY(-300px);
            transition: all 0.2s ease-in-out;
            padding: 1rem 1rem 0;
            
            background: ${transparentize(0.05, 'white')};
            box-shadow: 0 0 50px  ${transparentize(0.75, palette.secondary)};
            backface-visibility: hidden;

            &.show {
                transform: translateY(0);
            }
        `;

        
        const stickyCss = isSticky ? stickyHead : '';
        const stickyHide = !isScrolling ? 'show' : '';
        const setHeight = css`
            min-height: ${stickyHeight}px;
        `;
        return (
            <HeaderWrap className={`flex-column flex-row bd-navbar ${setHeight}`} role="navigation">
                <div ref={this.refCallback} className={`${stickyCss} ${stickyHide}`}>
                    <Logo
                        title="getLinks"
                        textLight
                        {...this.state}
                    />
                    <Navigation />
                </div>
                
            </HeaderWrap>
        );
    }
}

export default Header;
