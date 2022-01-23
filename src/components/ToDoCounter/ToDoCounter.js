import React from 'react';
import { ToDoContext } from '../../ToDoContext/ToDoContext';
import './ToDoCounter.css';

function ToDoCounter() {
    const { totalTodos, completedTodos } = React.useContext(ToDoContext);
    return(
        <h2 className='counter-title'>{completedTodos}  out of  {totalTodos}  To-Do's</h2>
    );
};

export { ToDoCounter };