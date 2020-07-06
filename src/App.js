import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.scss';

import axios from 'axios'
import queryString from 'query-string'

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import PostList from './components/PostList';
import Pagination from './components/Pagination';
import PostFilterForm from './components/PostFilterForm';
import Clock from './components/Clock';
import BetterClock from './components/BetterClock';
import MagicBox from './components/MagicBox';
// import ColorBox from './components/ColorBox';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "AAAAAA" },
    { id: 2, title: "BBBBBB" },
    { id: 3, title: "CCCCCC" }
  ])

  const [posts, setPosts] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1
  })
  const [filters, setFilter] = useState({
    _limit: 10,
    _page: 1,
  })

  function handleFilterChange(filterValue) {
    setFilter({
      ...filters,
      _page: 1,
      title_like: filterValue.searchTerm
    })
  }

  function handlePageChange(newPage) {
    setFilter({
      ...filters,
      _page: newPage
    })
  }

  useEffect(() => {
    async function getPosts() {
      try {
        const paramString = queryString.stringify(filters)
        const url = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
        const respone = await axios.get(url)
        const resData = { ...respone.data };
        const { data, pagination } = { ...resData }
        setPosts(data);
        setPagination(pagination);

      } catch (error) {
        console.log("Fail tp get posts api: ", error)
      }
    }
    getPosts();
  }, [filters])


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
      <TodoList todos={todos} onTodoClick={handleTodoClick} />
      <PostFilterForm onSubmit={handleFilterChange} />
      <PostList posts={posts} />
      <Pagination pagination={pagination} onPageChange={handlePageChange} />
      < Clock />
      <BetterClock /> */}
      <MagicBox />
    </div>
  );
}

export default App;
