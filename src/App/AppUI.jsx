import {React, useContext} from "react";
import { TodoCounter } from "../components/Todocounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem"
import {TodosLoading} from "../components/TodosLoading";
import {TodosError} from "../components/TodosError";
import {EmptyTodos} from "../components/EmptyTodos";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { Modal } from "../components/Modal";
import { TodoForm } from "../components/TodoForm";
import { TodoContext } from "../components/TodoContext";

function AppUI(){

  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

    return(
        <>
      <div className="flex flex-col items-center justify-center gap-12 mt-[15%] p-4 w-full">
          <div className="flex flex-col items-center justify-center gap-8 px-4 w-full">
              <TodoCounter />
              <TodoSearch />
          </div>

          <div>
              
                  <TodoList>
                  {loading && <TodosLoading/>}
                  {error && <TodosError/>}
                  {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}

                {searchedTodos.map(todo => (
                  <TodoItem 
                  key = {todo.text} 
                  text = {todo.text} 
                  completed = {todo.completed}
                  date = {todo.date}
                  onComplete = { () => completeTodo(todo.text)}
                  onDelete = { ()=> deleteTodo(todo.text)}
                  />
                ))}
                </TodoList>
          </div>
          
        <CreateTodoButton
        setOpenModal = {setOpenModal}
        />

        {openModal && (
          <Modal>
            <TodoForm />
        </Modal>
        )}

      </div>
    </>
    );
}

export {AppUI};