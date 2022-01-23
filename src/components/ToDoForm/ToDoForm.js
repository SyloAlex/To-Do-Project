import React from "react";
import { ToDoContext } from "../../ToDoContext/ToDoContext";
import './ToDoForm.css';

function ToDoForm() {
    const { addTodo, setOpenModal } = React.useContext(ToDoContext)
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
                    x
                </button>
                <button 
                    className="add-button"
                    type="submit"
                >
                    +
                </button>
            </div>
        </form>
    );
}

export { ToDoForm }