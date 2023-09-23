import React from "react";
import { useState } from "react";
import { useLocalStorage } from "../App/useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}){

    const {
        item:todos, 
        saveItem:saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = useState(false);
      
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
  
      const searchedTodos = todos.filter((todo) =>{

        if (typeof todo.text === 'string') {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
    }
     return false;
});
  
   const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
   };

   const addTodo = (task) => {
    const newTodos = [...todos];
    newTodos.push({
      text: task.text,
      completed: false,
      date: task.date, 
    });
    saveTodos(newTodos);
  };
  
  
   const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
   };


    return(
    
    <TodoContext.Provider 
    value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      deleteTodo,
      addTodo,
      openModal,
      setOpenModal,
    }}>
      {children}
    </TodoContext.Provider>

    );
}


export {TodoContext, TodoProvider};