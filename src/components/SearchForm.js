import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';



const SearchForm = (props) => {

    const Form = styled('form')`
        display: table;
    `;

    const InputWrapper = styled('div')`
        display: table-cell;
        vertical-align: middle;
        width: 100%;
    `;

    

    const { placeholder, label } = props;
    return (
        <form className="form-inline my-2 my-lg-0">
            <InputWrapper>
            <input
                className="form-control mr-sm-2"
                type="search"
                placeholder={placeholder}
                aria-label={label}
            />
            
            
            <button
                className="btn btn-outline-info my-2 my-sm-0"
                type="submit"
            >
                {label}
            </button>
            </InputWrapper>
        </form>
    );
};

SearchForm.propTypes = {
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default SearchForm;