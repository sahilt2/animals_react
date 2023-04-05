import React from 'react';

const Search = (props) => {
    return (
        <div>
        <input onChange = {props.searchHandler}/>
        </div>
    );
};

export default Search;