import React from 'react';
import { useToDo } from './UseToDo';
import { ToDoCounter } from '../components/ToDoCounter/ToDoCounter';
import { ToDoSearch } from '../components/ToDoSearch/ToDoSearch';
import { ToDoList } from '../components/ToDoList/ToDoList';
import { ToDoItem } from '../components/ToDoItem/ToDoItem';
import { CreateToDoButton } from '../components/CreateToDoButton/CreateToDoButton';
import { ToDoMessage } from "../components/ToDoMessage/ToDoMessage";
import { Modal } from '../Modal/Modal'
import { ToDoForm } from "../components/ToDoForm/ToDoForm";
import { ToDoHeader } from '../components/ToDoHeader/ToDoHeader'
import './App.css';


function App() {

  const {
    error, 
    loading, 
    searchedTodos, 
    toggleCompleteTodo, 
    deleteTodo, 
    addTodo,
    openModal, 
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue, 
    setSearchValue
  } = useToDo();

  return(
    <React.Fragment>
        <ToDoHeader loading={loading}>
            <ToDoCounter 
                totalTodos={totalTodos}
                completedTodos={completedTodos}
            />
            <ToDoSearch 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
        </ToDoHeader>
        <ToDoList
          error={error}
          loading={loading}
          searchedTodos={searchedTodos}
          totalTodos={totalTodos}
          searchText={searchValue}
          onError={() => <p>Me mori por: {error}</p>}
          onLoading={() => <ToDoMessage loading={loading} error={error}/>}
          onEmpty={() => <ToDoMessage loading={loading} error={error}/>}
          onEmptySearch={(searchText) => <div className='new-to-do'>
                                  <p>No results for {searchText}</p>
                                </div>
          }
          // render={todo => (
          //   <ToDoItem 
          //       text={todo.text} 
          //       key={todo.text} 
          //       completed={todo.completed}
          //       onComplete={() => toggleCompleteTodo(todo.text)}
          //       onDelete={() => deleteTodo(todo.text)}
          //   />)}
        >
          {todo => (
            <ToDoItem 
                text={todo.text} 
                key={todo.text} 
                completed={todo.completed}
                onComplete={() => toggleCompleteTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
            />
          )}
        </ToDoList>
        {!!openModal && (
            <Modal>
                <ToDoForm
                  addTodo={addTodo}
                  setOpenModal={setOpenModal}
                />
            </Modal>
        )}
        <CreateToDoButton setOpenModal={setOpenModal}/>
    </React.Fragment>
);
};

export default App;
