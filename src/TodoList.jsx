import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, title, onDeleteTodo, onCompleteTodo }) {
  const handleDeleteTodo = (id) => {
    onDeleteTodo(id);
  };

  const handleCompleteTodo = (id) => {
    onCompleteTodo(id);
  };

  return (
    <div className="todo-list">
      <h2>{title}</h2>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDeleteTodo={handleDeleteTodo} onCompleteTodo={handleCompleteTodo} />
      ))}
    </div>
  );
}

export default TodoList;