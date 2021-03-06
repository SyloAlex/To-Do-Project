import React from "react";
import { ToDoContext } from "../../App/UseToDo";
import './ToDoForm.css';

function ToDoForm({ addTodo, setOpenModal }) {
    const [inputValue, setInputValue] = React.useState('');

    const onCancel = () => {
        setOpenModal(prevState => !prevState);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(inputValue);
        setOpenModal(prevState => !prevState)
    };

    const onChange = (event) => {
        setInputValue(event.target.value);
    }

    return(
        <form onSubmit={onSubmit}>
            <label>Write your new To-Do here!</label>
            <textarea 
                value={inputValue}
                onChange={onChange}
                placeholder="Play videogames!"
            />
            <div className="buttons">
                <button
                    className="cancel-button"
                    type="button"
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button 
                    className="add-button"
                    type="submit"
                >
                    Add
                </button>
            </div>
        </form>
    );
}

export { ToDoForm }