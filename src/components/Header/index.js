import React, { Component } from 'react';
import Navigation from 'components/Navigation';
import Logo from 'static/Logo';
import debounce from 'lodash.debounce';
import styled, { css } from 'react-emotion';
import { transparentize } from 'polished';
import { palette, mediaQueries } from 'css/variables';


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
        this.getScrollPosition = debounce(this.getScrollPosition, 66);
        this.onScrollStop = debounce(this.onScrollStop, 200);
    }

    componentDidMount () {
        this.setHeaderHeight();
        document.addEventListener('scroll', this.onScroll);
        // window.addEventListener('resize', this.setHeaderHeight);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState === this.state || prevState.scrollY === this.state.scrollY) return;
        // this.onScrollStop();
        // this.setHeaderHeight();
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
        this.getScrollPosition();
        if (document.scrollTop >= stickyHeight) {
            return this.setState({
                isSticky: true,
            })
        }
    }

    getScrollPosition = () => {

        const scrollY = window.scrollY;
        this.setState({
            scrollY
        });

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

        if (this.state.stickyHeight !== stickyHeight && !this.state.isSticky) {
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
            transition: opacity 0.1s, visibility 0.1s, transform 1s linear;
            
            background: ${transparentize(0.05, 'white')};
            box-shadow: 0 0 50px  ${transparentize(0.75, palette.secondary)};
            backface-visibility: hidden;
            
            &.hide {
                transform: translateY(-300px);
                opacity: 0;
                visibility: hidden;
            }

            &.show {
                transform: translateY(0);
                visibility: visible;
                opacity: 1;
            }
            
        `;

        
        const stickyCss = isSticky ? stickyHead : '';
        const stickyHide = !isScrolling ? 'show' : 'hide';
        const setHeight = css`
            height: ${stickyHeight}px;
        `;
        return (
            <HeaderWrap className={`flex-column flex-row bd-navbar ${isSticky ? setHeight : ''}`} role="navigation">
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
