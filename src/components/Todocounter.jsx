import {React, useContext} from "react";
import { TodoContext } from "./TodoContext";

function TodoCounter(){

    const {
        completedTodos,
        totalTodos,
    } = useContext(TodoContext);

    return (
        <>
        {totalTodos === completedTodos && (
        <h2 className=" block w-full lg:w-[600px] text-center lg:text-3xl text-2xl text-slate-900 font-Figtree font-extrabold">
            Bien hecho, no tienes pendientes. 🚀
        </h2> )}
        {totalTodos !== completedTodos && (
            <h2 className=" block w-full text-center lg:text-3xl text-2xl text-slate-900 font-Figtree font-extrabold">
            Has completado <span className="text-4xl text-amber-500">{completedTodos}</span> de <span className="text-4xl text-amber-500">{totalTodos}</span> Tareas
        </h2>
        )}
        </>
    );
}

export {TodoCounter};