import React from 'react';
import './ToDoCounter.css';

function ToDoCounter({totalTodos, completedTodos, loading}) {
    return(
        <h2 className={`counter-title ${!!loading && "counter-title--loading"}`}>
            {completedTodos}  out of  {totalTodos}  To-Do's
        </h2>
    );
};

export { ToDoCounter };