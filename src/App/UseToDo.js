import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useToDo() {
    //LocalStorage
    const {item: todos, saveItem: saveTodos, sincNewItems: sincToDos, loading, error} = useLocalStorage('toDos_v1', []);

    //Ctates
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);

    //To-Do's Lists
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
    let searchedTodos = [];

    //To-Do's searcher/filter
    if (!searchValue.length >= 1) {
    searchedTodos = todos;
    } else {
    searchedTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
    })
    };

    //Add new To-Do's
    const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({text, completed: false});
        saveTodos(newTodos);
    }

    //Mark a To-Do as completed or incompleted
    const toggleCompleteTodo = (text) => {
        const index = todos.findIndex(todo => todo.text === text)
        const newTodos = [...todos];
        if (newTodos[index].completed){
            newTodos[index].completed = false;
        } else {
            newTodos[index].completed = true;
        };
        saveTodos(newTodos);
    };

    //Delete a To-Do
    const deleteTodo = (text) => {
    const index = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    saveTodos(newTodos);
    };

    return {
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            toggleCompleteTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            sincToDos
        };
}

export { useToDo }