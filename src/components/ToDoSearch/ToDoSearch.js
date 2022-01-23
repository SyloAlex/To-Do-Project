import React from 'react';
import { ToDoContext } from '../../ToDoContext/ToDoContext';
import './ToDoSearch.css';

function ToDoSearch(){
    const { searchValue, setSearchValue } = React.useContext(ToDoContext)
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
            />
        </div>
    );
};

export { ToDoSearch };