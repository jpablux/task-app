import { React, useState, useEffect } from "react";
import {AppUI} from './AppUI';
import { TodoProvider } from "../components/TodoContext";
import '../styles/App.css';

function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  )
}

export default App
