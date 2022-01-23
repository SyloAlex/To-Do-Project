import React from 'react';
import './ToDoItem.css';

function ToDoItem(props) {
    return (
        <li>
            <figure>
                {props.completed ? 
                    <img 
                        src='../../img/green-check.png' 
                        alt='Check' className={`check ${props.completed && 'Icon-Active'}`}
                        onClick={props.onComplete}
                    /> 
                    : <img 
                        src='../../img/gray-check.png' 
                        alt='Check' className={`check ${props.completed && 'Icon-Active'}`}
                        onClick={props.onComplete}
                    />
                }
            </figure>
            <p className={`${props.completed && 'ToDo-Completed'}`}>{props.text}</p>
            <figure id='cross-container'>
                <img 
                    src='../../img/red-x.png' 
                    alt='X'
                    onClick={props.onDelete}
                />
            </figure>
        </li>
    );
};

export { ToDoItem };