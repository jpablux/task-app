import {React, useContext} from "react";
import { TodoContext } from "./TodoContext";

function TodoSearch(){

    const {
        searchValue,
        setSearchValue,
    } = useContext(TodoContext);

    return(
        <input 
        value={searchValue}
        placeholder="Buscar Tarea" 
        onChange={(event) =>{
            setSearchValue(event.target.value);
        }}
        className="border-2 border-solid rounded-md w-full h-[48px] p-2"></input>
    );
}

export {TodoSearch};