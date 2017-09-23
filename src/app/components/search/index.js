import React from 'react';
import './style.scss'

export const Search = (props) => {
    return (
        <div>
            <label>{props.searchKey}</label>
            <input
                type='text'
                placeholder={props.placeholder}
                defaultValue={props.searchTerm}
                onChange={(e) => {
                props.searchHandle(props.searchKey, e.target.value);
            }}/> {props.showResults
                ? <div className='search-results'>
                        {props
                            .searchResults
                            .map((result, idx) => {
                                return <div
                                    className='search-item' key={idx}
                                    onClick={() => {
                                        props.selectResult(props.searchKey, result)
                                    }}>{result.formatted_address}</div>
                            })}
                    </div>
                : null}
        </div>
    )
}

export default Search;