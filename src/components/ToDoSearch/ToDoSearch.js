import React from 'react';
import './ToDoSearch.css';

function ToDoSearch({searchValue, setSearchValue, loading}){
    const onSearchValue = (event) => {
        setSearchValue(event.target.value);
    }
    return(
        <div id='search-container'>
            <input 
                id="search-bar" 
                placeholder='Search your To-Do here!'
                value={searchValue}
                onChange={onSearchValue}
                disabled={loading}
            />
        </div>
    );
};

export { ToDoSearch };