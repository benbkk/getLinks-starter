import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = (props) => {
    const { placeholder, label } = props;
    return (
        <form className="form-inline">
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
        </form>
    );
};

SearchForm.propTypes = {
    placeholder: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default SearchForm;