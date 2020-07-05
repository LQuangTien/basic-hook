import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';

import axios from 'axios'

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import PostList from './components/PostList';
// import ColorBox from './components/ColorBox';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "AAAAAA" },
    { id: 2, title: "BBBBBB" },
    { id: 3, title: "CCCCCC" }
  ])

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      try {
        const url = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
        const respone = await axios.get(url)
        const resData = { ...respone.data };
        const data = [...resData.data]
        setPosts(data);
      } catch (error) {
        console.log("Fail tp get posts api: ", error)
      }
    }
    getPosts();
  }, [])


  function handleTodoClick(todo) {
    const index = todos.findIndex(x => x.id === todo.id);
    if (index < 0) return;
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  function handleFormSubmit(formValue) {
    const newTodo = {
      id: todos.length + 1,
      ...formValue
    }
    const newTodos = [...todos];
    newTodos.push(newTodo);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      {/* <TodoForm onSubmit={handleFormSubmit} />
      <TodoList todos={todos} onTodoClick={handleTodoClick} /> */}
      <PostList posts={posts} />
    </div>
  );
}

export default App;
