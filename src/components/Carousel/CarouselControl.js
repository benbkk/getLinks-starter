import React from 'react';

const CtrlBtn = ({ label, direction, ...props }) => (
    <a
        className={`carousel-control-${direction}`}
        role="button"
        data-slide={direction}
        {...props}
    >
        <span
            className={`carousel-control-${direction}-icon`}
            aria-hidden="true"
        />
        <span
            className="sr-only"
        >
            {label}
        </span>
    </a>
);

export default CtrlBtn;
