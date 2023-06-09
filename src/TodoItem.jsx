import React from 'react';

function TodoItem({ todo, onDeleteTodo, onCompleteTodo }) {
  const handleDeleteTodo = () => {
    onDeleteTodo(todo.id);
  };

  const handleCompleteTodo = () => {
    onCompleteTodo(todo.id);
  };

  return (
    <div className={`todo ${todo.completed ? 'completed' : ''}`}>
      <p>{todo.title}</p>
      <div className="actions">
        <button onClick={handleCompleteTodo}>{todo.completed ? 'Mark Incomplete' : 'Mark Complete'}</button>
        <button onClick={handleDeleteTodo}>Delete</button>
      </div>
    </div>
  );
}

export default TodoItem;
