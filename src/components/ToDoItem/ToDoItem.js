import React from 'react';
import './ToDoItem.css';
import greencheck from '../../img/green-check.png';
import graycheck from '../../img/gray-check.png';
import redcross from '../../img/red-x.png';

function ToDoItem(props) {
    return (
        <li>
            <figure>
                {props.completed ? 
                    <img 
                        src={greencheck} 
                        alt='Check' className={`check ${props.completed && 'Icon-Active'}`}
                        onClick={props.onComplete}
                    /> 
                    : <img 
                        src={graycheck} 
                        alt='Check' className={`check ${props.completed && 'Icon-Active'}`}
                        onClick={props.onComplete}
                    />
                }
            </figure>
            <p className={`${props.completed && 'ToDo-Completed'}`}>{props.text}</p>
            <figure id='cross-container'>
                <img 
                    className='close'
                    src={redcross}
                    alt='X'
                    onClick={props.onDelete}
                />
            </figure>
        </li>
    );
};

export { ToDoItem };