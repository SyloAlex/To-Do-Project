import React from 'react';
import './ToDoList.css'

function ToDoList(props) {
    const renderFunction = props.children || props.render

    return(
        <section className='list-container'>
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && props.totalTodos === 0) && props.onEmpty()}
            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearch(props.searchText)}
            {(!props.loading && !props.error) && props.searchedTodos.map(renderFunction)}
        </section>
    );
};

export { ToDoList };