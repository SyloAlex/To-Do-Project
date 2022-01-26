import React from 'react';
import './ToDoHeader.css'

function ToDoHeader({ children, loading }) {
    return (
        <header>
            <h1>To-Do's App</h1>
            {React.Children
                .toArray(children)
                .map(child => React.cloneElement(child, { loading }))}
        </header>
    )
}

export { ToDoHeader };