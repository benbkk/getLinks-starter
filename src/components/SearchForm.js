import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { mediaQueries } from 'css/variables';

const SearchForm = (props) => {
    const { placeholder, label } = props;

    const Form = styled('form')`
        margin-bottom: 18px;

        ${mediaQueries.md} {
            margin-bottom: 0;
        }
    `;
    return (
        <Form 
            className="form-inline"
            {...props}
            >
            <input
                className="form-control bd-search mr-sm-2"
                type="search"
                placeholder={placeholder}
                aria-label={label}
            />        
            <button
                className="btn btn-info my-2 my-sm-0"
                type="submit"
            >
                {label}
            </button>
        </Form>
    );
};

SearchForm.propTypes = {
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default SearchForm;