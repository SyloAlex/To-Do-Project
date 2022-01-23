import React from "react";
import { ToDoCounter } from '../components/ToDoCounter/ToDoCounter';
import { ToDoSearch } from '../components/ToDoSearch/ToDoSearch';
import { ToDoContext } from "../ToDoContext/ToDoContext";
import { ToDoList } from '../components/ToDoList/ToDoList';
import { ToDoItem } from '../components/ToDoItem/ToDoItem';
import { CreateToDoButton } from '../components/CreateToDoButton/CreateToDoButton';
import { ToDoMessage } from "../components/ToDoMessage/ToDoMessage";
import { Modal } from '../Modal/Modal'
import { ToDoForm } from "../components/ToDoForm/ToDoForm";

//User interface
function AppUI() {
    const {
        error, 
        loading, 
        searchedTodos, 
        toggleCompleteTodo, 
        deleteTodo, 
        openModal, 
        setOpenModal
    } = React.useContext(ToDoContext);
    
    return(
        <React.Fragment>
            <ToDoCounter />
            <ToDoSearch />
                <ToDoList>
                {error && <p>Me mori</p>}
                {loading && <ToDoMessage/>}
                {(!loading && searchedTodos.length === 0) && <ToDoMessage/>}
                {searchedTodos.map(todo => (
                    <ToDoItem 
                        text={todo.text} 
                        key={todo.text} 
                        completed={todo.completed}
                        onComplete={() => toggleCompleteTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </ToDoList>
            {!!openModal && (
                <Modal>
                    <ToDoForm/>
                </Modal>
            )}
            <CreateToDoButton setOpenModal={setOpenModal}/>
        </React.Fragment>
    );
};

export { AppUI };