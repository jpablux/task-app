import React, { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css"; 


function TodoForm() {
    const {
      addTodo,
      setOpenModal,
    } = useContext(TodoContext);
  
    const [newTodoValue, setNewTodoValue] = useState('');
    const [selectedDate, setSelectedDate] = useState(null); 
  
    const onSubmit = (event) => {
      event.preventDefault();
      if (newTodoValue.trim() === '') return; 
  
      const task = {
        text: newTodoValue,
        date: selectedDate, 
      };
  
      addTodo(task);
      setNewTodoValue('');
      setSelectedDate(null); 
      setOpenModal(false);
    };
  
    const onCancel = () => {
      setOpenModal(false);
    }
  
    const onChange = (event) => {
      setNewTodoValue(event.target.value);
    }
  
    return (
      <form onSubmit={onSubmit} className="absolute flex flex-col items-center justify-center bg-slate-800/50 shadow-lg p-4 w-full h-full gap-4 z-[1] top-0 left-0">
        <div className="flex flex-col items-start justify-center gap-4 bg-white p-4 lg:w-[400px] w-[80%] h-auto rounded-md">
          <p className="font-Figtree font-black text-lg">Agregar Nueva tarea</p>
          <textarea
            required
            value={newTodoValue}
            onChange={onChange}
            className="w-full bg-slate-100 border-2 border-slate-500 p-2 rounded-lg text-slate-800 font-lexend font-regular text-lg"
            placeholder="Ingresar tarea"
          ></textarea>
  
          
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            placeholderText="Seleccionar Fecha"
            className="w-full bg-slate-100 border-2 border-slate-500 p-2 rounded-lg text-slate-800 font-lexend font-regular text-lg"
          />
  
          <div className="w-[100%] flex flex-row items-center justify-center gap-4">
            <button
              type="submit"
              className="w-[100%] bg-blue-500 text-white font-regular px-4 py-2 rounded-md font-Figtree text-md hover:cursor-pointer hover:bg-blue-800"
            >
              Agregar
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="w-[50%] border-2 border-red-200 text-red-500 font-regular px-4 py-2 rounded-md font-Figtree text-md hover:cursor-pointer hover:bg-red-500 hover:text-white"
            >
              Cancelar
            </button>
          </div>
        </div>
      </form>
    );
  }
  
  export { TodoForm };