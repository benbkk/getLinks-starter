import React from 'react';
import styled, { keyframes } from 'react-emotion';
import { palette } from 'css/variables';

const bounceDelay = keyframes`
    0%,
    80%,
    100% {
        transform: scale(0);
    }

    40% {
        transform: scale(1.0);
    }
`;

const Bounce = styled('span')`
    background-color: ${palette.green};
    display: block;
    position: relative;
    width: 18Px;
    height: 18Px;
    border-radius: 50%;
    opacity: 0.8;
    margin: auto;
    animation: ${bounceDelay} 1.4s infinite ease-in-out both;

    &:before,
    &:after {
        content: '';
        position: absolute;
        height: 54Px;
        width: 54Px;
        top: -18Px;
        left: -18Px;
        border-radius: 50%;
        display: block;
        opacity: 0.4;
        background-color: inherit;
    }
`;

const Loader = styled('div')`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    height: 18px;
    width: 120px;
    z-index: 1;
`;


const Loading = () => (
    <Loader className="spinner">
        <Bounce />
    </Loader>
);

export default Loading;
