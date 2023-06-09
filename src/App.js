import React, { useState } from 'react';
import TodoList from './TodoList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: Date.now(),
        title: inputValue,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleCompleteTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const pendingTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div className="App">
      <h1>TODO Application</h1>
      <div className="todo-form">
        <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Enter a new todo" />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
      <div className="todo-lists">
        <TodoList todos={pendingTodos} title="Pending" onDeleteTodo={handleDeleteTodo} onCompleteTodo={handleCompleteTodo} />
        <TodoList todos={completedTodos} title="Completed" onDeleteTodo={handleDeleteTodo} onCompleteTodo={handleCompleteTodo} />
      </div>
    </div>
  );
}

export default App;
