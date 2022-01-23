import React from 'react';
import './CreateToDoButton.css';

function CreateToDoButton(props) {
        const createClick = () => {
        props.setOpenModal(prevState => !prevState)
    }
    
    return(
        <div id='button-container'>
            <button 
                className='create-button'
                onClick={createClick}>
                    +
            </button>
        </div>
    );
};

export { CreateToDoButton };