import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import TodoList from './components/TodoList';
// import ColorBox from './components/ColorBox';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "AAAAAA" },
    { id: 2, title: "BBBBBB" },
    { id: 3, title: "CCCCCC" }
  ])
  function handleTodoClick(todo) {
    const index = todos.findIndex(x => x.id === todo.id);
    if (index < 0) return;
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  return (
    <div className="App">
      <TodoList todos={todos} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;
